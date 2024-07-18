import * as THREE from 'three';
import Lane from './Lane.js';
import * as Utils from './utils.js'; // Adjust the path as necessary

export default class Fretboard {
    static fretboardZ = -0.01;
    static laneZ = 0.00;
    static pickupZ = 0.00;
    static pressEffectHeight = 0.25;
    static colors = {
        0: 0x00ff00,
        1: 0xff0000,
        2: 0xffff00,
        3: 0x0000ff,
        4: 0xffa500
    }; // Green, Red, Yellow, Blue, Orange

    constructor(fretboardWidth, fretboardHeight, texturePath, numLanes) {
        this.fretboardWidth = fretboardWidth;
        this.fretboardHeight = fretboardHeight;
        this.texturePath = texturePath;
        this.numLanes = numLanes;
        this.notesLaneIndexes = {}; // TODO: What's this?

        this.pickupHeight = 0.8; // Height of pickup
        this.pickupOffset = 0.5; // Offset of pickup
        
        // Create fretboard
        this.createFretboard(this.fretboardWidth, this.fretboardHeight, this.texturePath);      
        
        // Create lanes
        this.createLanes(this.fretboardWidth, this.fretboardHeight, this.pickupHeight, this.pickupOffset);

        // Create pickup area
        this.createPickup(this.pickupHeight, this.pickupOffset, this.laneWidth, this.laneHeight);
    }

    createFretboard(fretboardWidth, fretboardHeight, texturePath) {
        // Apply texture
        this.textureLoader = new THREE.TextureLoader();
        this.texture = this.textureLoader.load(texturePath);
        this.texture.wrapS = THREE.RepeatWrapping;
        // this.texture.wrapT = THREE.RepeatWrapping;
        // this.texture.repeat.set(1, this.height);

        // Create main plane
        this.geometry = new THREE.PlaneGeometry(fretboardWidth, fretboardHeight);
        this.material = new THREE.MeshPhysicalMaterial(
            {
                map: this.texture,
                // side: THREE.DoubleSide,
            }
        );
        this.fretboardMesh = new THREE.Mesh(this.geometry, this.material);
        
        // Create the darkening overlay
        this.darkOverlayMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            // side: THREE.DoubleSide,
            opacity: 0.4
        });
        this.darkOverlayMesh = new THREE.Mesh(this.geometry, this.darkOverlayMaterial);
        // this.mesh.add(this.darkOverlayMesh); // Add the overlay to the fretboard

        // Create borders
        this.edges = new THREE.EdgesGeometry(this.geometry);
        this.borderMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 5 }); // Adjust linewidth for thickness
        this.borderMesh = new THREE.LineSegments(this.edges, this.borderMaterial);

        // Group
        this.mesh = new THREE.Object3D()
        this.mesh.add(this.fretboardMesh)
        this.mesh.add(this.darkOverlayMesh)
        this.mesh.add(this.borderMesh)

        // Position the border correctly
        this.borderMesh.scale.copy(this.fretboardMesh.scale);

        // Move the fretboard back so the notes can be in front of it
        this.mesh.position.y = 0;
        this.mesh.position.z = Fretboard.fretboardZ;
        // border.position.copy(fretboardMesh.position);
    }

    createLanes(fretboardWidth, fretboardHeight, pickupHeight, pickupOffset) {
        this.laneWidth = fretboardWidth / this.numLanes; // Width of each lane
        this.laneHeight = fretboardHeight;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < this.numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, Fretboard.laneZ, fretboardWidth, pickupHeight, pickupOffset, Fretboard.colors);
            
            // TODO: Think if it is better to attach Lanes to Fretboard or not
            this.mesh.add(lane.mesh);
            this.lanes.push(lane);
        }
    }

    createPickup(pickupHeight, pickupOffset, laneWidth, laneHeight) {
        // Pickup area
        this.pickupWidth = this.numLanes * laneWidth; // Width of pickup area
        this.pickupAreaMesh = this.createPickupArea(
            this.pickupWidth,
            pickupHeight,
            0xffffff, // color
            0.2, // opacity
            0.0 // relative z position
        );

        // Pickup holes
        this.holeRadius = laneWidth / 4; // Radius of holes for notes
        this.holeDistance = laneWidth; // Distance between holes (aligned with lanes)
        this.holeMeshes = this.createPickupHoles(
            this.pickupWidth,
            this.holeRadius,
            this.holeDistance,
            this.numLanes,
            0.2,    // opacity
            0.0     // relative z position
        );
    
        // Press effects
        this.pressEffects = this.createPressEffects(
            this.holeRadius,
            Fretboard.pressEffectHeight,
            8,      
            0.3     // opacity
        );

        // Combine all together
        this.pickupMesh = new THREE.Object3D();
        this.pickupMesh.add(this.pickupAreaMesh);
        this.pickupMesh.add(...this.holeMeshes);
        this.pickupMesh.add(...this.pressEffects);
        
        // Adjust position at the bottom of the fretboard
        this.pickupY = -(laneHeight / 2) + pickupOffset;
        this.pickupMesh.position.y = this.pickupY;
        
        // Add the pickup area to the fretboard mesh
        this.mesh.add(this.pickupMesh);
    }

    // TODO: Recreate it in a better way
    createPickupArea(pickupWidth, pickupHeight, color, opacity, relativeZ) {
        // Create a plane geometry for the pickup area
        const geometry = new THREE.PlaneGeometry(pickupWidth, pickupHeight);

        // Create material for the pickup area (transparent)
        const material = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: opacity });
    
        // Create mesh for the pickup area
        const pickupAreaMesh = new THREE.Mesh(geometry, material);
        pickupAreaMesh.position.z = relativeZ;

        // Don't make it visible
        pickupAreaMesh.visible = false;
        return pickupAreaMesh;
    }

    // TODO: Recreate them in a better way
    createPickupHoles(pickupWidth, holeRadius, holeDistance, opacity, relativeZ) {
        // const holeGeometry = new THREE.SphereGeometry(this.holeRadius, 16, 16, -Math.PI, Math.PI);
        // const holeGeometry = new THREE.RingGeometry(0.1, this.holeRadius, 8);
        const holeGeometry = new THREE.TorusGeometry(holeRadius, 0.05, 8, 8 );

        const holeMeshes = [];
        for (let i = 0; i < this.numLanes; i++) {
            const holeMaterial = new THREE.MeshStandardMaterial({
                color: Fretboard.colors[i],
                transparent: true,
                opacity: opacity,
                side: THREE.DoubleSide,
                wireframe: false
            });
            const holeMesh = new THREE.Mesh(holeGeometry, holeMaterial);
            
            // Adjust hole position based on lane
            holeMesh.position.x = -(pickupWidth / 2) + (i + 0.5) * holeDistance;
            holeMesh.position.z = relativeZ;
            
            // Store hole meshes
            holeMeshes.push(holeMesh);
        }
        return holeMeshes;
    }

    // TODO: Check them
    createPressEffects(holeRadius, pressEffectHeight, radialSegments, opacity) {
        const pressEffects = [];

        for (let i = 0; i < this.numLanes; i++) {
            const geometry = new THREE.CylinderGeometry(holeRadius, holeRadius, pressEffectHeight, radialSegments);
            const material = new THREE.MeshBasicMaterial({ color: Fretboard.colors[i], transparent: true, opacity: opacity });
            const cylinderMesh = new THREE.Mesh(geometry, material);
            cylinderMesh.rotation.x = Math.PI / 2;
            cylinderMesh.position.copy(this.holeMeshes[i].position);
            cylinderMesh.position.z += pressEffectHeight/2;
            
            pressEffects.push(cylinderMesh);

            // Make mesh not visible now
            cylinderMesh.visible = false;
        }

        return pressEffects;
    }

    enablePressEffect(laneIndex) {
        // Right now just put visibility to true
        this.pressEffects[laneIndex].visible = true;
    }

    disablePressEffect(laneIndex) {
        // Return visibility to false
        this.pressEffects[laneIndex].visible = false;
    }

    // -------------------------------------------------------------------------------------------------------------------------

    addToScene(scene) {
        scene.add(this.mesh);
        // TODO: Comment this line if you decide to have Lanes as childrens of Fretboard
        // this.lanes.forEach(lane => lane.addToScene(scene));
    }

    updatePressAnimations(pressedLanesIndices) {
        // Activate press lane effects
        this.lanes.forEach(lane => {
            const laneIndex = lane.laneIndex;

            // True if user now is pressing that laneIndex
            const isPressed = pressedLanesIndices.includes(laneIndex);
            
            if (isPressed && !lane.isCurrentlyPressed) { // User has not started pressing
                this.enablePressEffect(laneIndex);
            } else if (!isPressed && lane.isCurrentlyPressed) { // User has now stopped pressing
                this.disablePressEffect(laneIndex);
            }

            lane.isCurrentlyPressed = isPressed;
        });
    }

    updateTextureScroll(speed) {
        // Update the texture offset
        this.texture.offset.y += (speed);
    }

    update(pressedLanesIndices, speed) {
        this.updatePressAnimations(pressedLanesIndices);
        this.updateTextureScroll(speed);
    }
}
