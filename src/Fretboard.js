import * as THREE from 'three';
import Lane from './Lane.js';
import * as Utils from './utils.js'; // Adjust the path as necessary
import particleFire from 'three-particle-fire';

export default class Fretboard {
    static fretboardZ = -0.01;
    static laneZ = 0.3;
    static pickupZ = 0.00;
    static pressEffectHeight = 0.01;
    static fireEffectParticleCount = 400;
    static fireEffectHeight = 1.00;
    static fireEffectColor = 0xff2200; // 0xaa4203
    static coneRadiusFactor = 1.2;
    static colors = {
        0: 0x00ff00,
        1: 0xff0000,
        2: 0xffff00,
        3: 0x0089ff,
        4: 0xffb300
    }; // Green, Red, Yellow, Blue, Orange

    constructor(fretboardWidth, fretboardHeight, texturePath, numLanes) {
        this.fretboardWidth = fretboardWidth;
        this.fretboardHeight = fretboardHeight;
        this.texturePath = texturePath;
        this.numLanes = numLanes;
        this.notesLaneIndexes = {}; // TODO: What's this?

        this.pickupHeight = 0.8; // Height of pickup
        this.pickupOffset = 0.5; // Offset of pickup

        particleFire.install( { THREE: THREE } );

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
        // this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
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
            opacity: 0.2
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
        // this.mesh.add(this.darkOverlayMesh)
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
        this.holeRadius = this.laneWidth / 4; // Radius of holes for notes
        this.holeDistance = this.laneWidth; // Distance between holes (aligned with lanes)

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < this.numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, Fretboard.laneZ, fretboardWidth, pickupHeight, this.holeRadius*Fretboard.coneRadiusFactor);
            
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

        const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, opacity: 0.8, transparent: true });
        const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const domeInnerMaterial = new THREE.MeshStandardMaterial({ color: 0xe8e8ee, side: THREE.DoubleSide });
        const domeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, opacity: 0.9, transparent: true });
        this.domeMeshName = "top_dome";

        this.holeMeshes = this.createPickupHoles(
            this.pickupWidth,
            this.holeRadius,
            this.holeDistance,
            0.0,     // relative z position
            coneMaterial,
            baseMaterial,
            domeInnerMaterial,
            domeMaterial,
            this.domeMeshName
        );
    
        // Press effects
        this.pressEffects = this.createPressEffects(
            this.holeRadius*1,
            Fretboard.pressEffectHeight,
            32,
            0.5     // opacity
        );

        // Fire effects
        this.fireEffects = this.createFireEffects(
            this.holeRadius/2,
            Fretboard.fireEffectHeight,
            Fretboard.fireEffectParticleCount,
            Fretboard.fireEffectColor 
        )

        // Combine all together
        this.pickupMesh = new THREE.Object3D();
        this.pickupMesh.add(this.pickupAreaMesh);
        this.pickupMesh.add(...this.holeMeshes);
        this.pickupMesh.add(...this.pressEffects);
        this.pickupMesh.add(...this.fireEffects);
        
        // Adjust position at the bottom of the fretboard
        this.pickupY = -(laneHeight / 2) + pickupOffset;
        this.pickupMesh.position.y = this.pickupY;
        this.pickupMesh.position.z = Fretboard.pickupZ;
        
        // Add the pickup area to the fretboard mesh
        this.mesh.add(this.pickupMesh);
    }

    createPickupArea(pickupWidth, pickupHeight, color, opacity, relativeZ) {
        // Create a plane geometry for the pickup area
        const geometry = new THREE.PlaneGeometry(pickupWidth, pickupHeight);

        // Create material for the pickup area (transpaarent)
        const material = new THREE.MeshPhysicalMaterial({ color: color, transparent: true, opacity: opacity });
    
        // Create mesh for the pickup area
        const pickupAreaMesh = new THREE.Mesh(geometry, material);
        pickupAreaMesh.position.z = relativeZ;

        // Don't make it visible
        pickupAreaMesh.visible = true;
        return pickupAreaMesh;
    }

    createPickupCone(coneRadius, coneHeight, offsetZ, coneMaterial) {
        // Create a custom geometry
        const customConeGeometry = new THREE.BufferGeometry();
    
        // Define vertices
        const vertices = [];
        const segments = 32; // Number of segments for the base of the cone
    
        // Base vertices
        const thetaStart = Math.PI;
        const thetaLength = Math.PI;

        for (let i = 0; i <= segments; i++) {
            const theta = thetaStart + (i * thetaLength) / segments;
            vertices.push(coneRadius * Math.cos(theta), 0, coneRadius * Math.sin(theta));
        }
    
        // Top vertex
        const topVertexIndex = vertices.length / 3;
        vertices.push(0, coneHeight+Lane.radius, -offsetZ);
    
        // Define faces (triangles)
        const indices = [];
        for (let i = 0; i < segments; i++) {
            indices.push(i, (i + 1) % segments, topVertexIndex);
        }
    
        // Convert vertices and indices to BufferAttributes and set them to geometry
        customConeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        customConeGeometry.setIndex(indices);
        customConeGeometry.computeVertexNormals();
    
        // Create a mesh
        // coneMaterial.wireframe = true;
        const customConeMesh = new THREE.Mesh(customConeGeometry, coneMaterial);
        customConeMesh.rotation.x = Math.PI;
    
        return customConeMesh;
    }

    createPickupHoles(pickupWidth, holeRadius, holeDistance, relativeZ, coneMaterial, baseMaterial, domeInnerMaterial, domeMaterial, domeMeshName) {
        const buttons = [];
    
        for (let i = 0; i < this.numLanes; i++) {
            const group = new THREE.Group();

            // Change baseMaterial color
            const material = baseMaterial.clone();
            material.color.setHex(Fretboard.colors[i])

            // Link hole-string
            const coneHeight = Fretboard.laneZ;
            const coneMesh = this.createPickupCone(holeRadius*Fretboard.coneRadiusFactor, coneHeight, holeRadius, coneMaterial);
            // const coneGeometry = new THREE.ConeGeometry(, coneHeight, 32, 1, true, Math.PI/2, Math.PI)
            // const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial)
            coneMesh.rotation.x = Math.PI / 2;
            // coneMesh.position.z += coneHeight / 2;
            group.add(coneMesh);

            // Base Ring
            const ringGeometry = new THREE.TorusGeometry(holeRadius, 0.02, 16, 100);
            const ringMesh = new THREE.Mesh(ringGeometry, material);
            // ringMesh.rotation.x = Math.PI / 2;
            group.add(ringMesh);

            // Inner upside down dome
            const domeInnerGeometry = new THREE.SphereGeometry(2.25*holeRadius, 32, 16, 0, Math.PI * 2, Math.PI/16, Math.PI/14);
            const domeInnerMesh = new THREE.Mesh(domeInnerGeometry, domeInnerMaterial);
            domeInnerMesh.rotation.x = -Math.PI / 2;
            domeInnerMesh.position.z = 2.25*holeRadius-holeRadius/8;
            group.add(domeInnerMesh);

            // Inner colored normal dome
            const domeInnerGeometry2 = new THREE.SphereGeometry(1.8*holeRadius, 32, 16, 0, Math.PI * 2, Math.PI/10, Math.PI/14);
            const domeInnerMesh2 = new THREE.Mesh(domeInnerGeometry2, material);
            domeInnerMesh2.rotation.x = +Math.PI / 2;
            domeInnerMesh2.position.z = -1.8*holeRadius+holeRadius/6;
            group.add(domeInnerMesh2);
    
            // Black Dome
            const domeGeometry = new THREE.SphereGeometry(1.8*holeRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI/10);
            const myDomeMaterial = domeMaterial.clone();
            const domeMesh = new THREE.Mesh(domeGeometry, myDomeMaterial);
            domeMesh.rotation.x = Math.PI / 2;
            domeMesh.position.z = -1.8*holeRadius+holeRadius/6;
            domeMesh.name = domeMeshName;
            group.add(domeMesh);
    
            // Adjust the position based on the lane
            group.position.x = -(pickupWidth / 2) + (i + 0.5) * holeDistance;
            group.position.z = relativeZ;
            
            buttons.push(group);
        }
    
        return buttons;
    }
    
    createFireEffects(fireRadius, fireHeight, particleCount, fireColor) {
        const height = window.innerHeight;

        const fireEffects = [];
        for (let i = 0; i < this.numLanes; i++) {
            const geometry = new particleFire.Geometry( fireRadius, fireHeight, particleCount );
            const material = new particleFire.Material( { color: fireColor } );
            material.setPerspective( 75, height );
            const particleFireMesh = new THREE.Points( geometry, material );
            particleFireMesh.rotation.x = Math.PI / 2;
            particleFireMesh.position.copy(this.holeMeshes[i].position);
            // particleFireMesh.position.z += fireHeight/2;

            particleFireMesh.visible = false;
            fireEffects.push(particleFireMesh);
        }
        return fireEffects;
        // scene.add( particleFireMesh0 );
    }

    isFireEffectActive(fireEffect) {
        return fireEffect.visible
    }

    enableFireEffect(laneIndex) {
        this.enableFireEffectOriginal(this.fireEffects[laneIndex]);
        // this.fireTickCounter[laneIndex] = 0
    }

    enableFireEffectOriginal(fireEffect) {
        fireEffect.visible = true;
    }

    disableFireEffect(laneIndex) {
        this.disableFireEffectOriginal(this.fireEffects[laneIndex]);
    }

    disableFireEffectOriginal(fireEffect) {
        fireEffect.visible = false;
    }

    disableActiveFireEffects() {
        // Check active fires
        this.fireEffects.filter(fireEffect => this.isFireEffectActive(fireEffect)).forEach(fireEffect => {
            this.disableFireEffectOriginal(fireEffect);
        });
    }

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
        // Put visibility to true
        this.pressEffects[laneIndex].visible = true;
        // Lower opacity of the top black dome
        this.holeMeshes[laneIndex].getObjectByName(this.domeMeshName).material.color.setHex(Fretboard.colors[laneIndex])
        // this.holeMeshes[laneIndex].getObjectByName(this.domeMeshName).material.opacity = 1.0
    }

    disablePressEffect(laneIndex) {
        // Return visibility to false
        this.pressEffects[laneIndex].visible = false;
        // Return opacity to 1
        this.holeMeshes[laneIndex].getObjectByName(this.domeMeshName).material.color.setHex(0x000000)
        // this.holeMeshes[laneIndex].getObjectByName(this.domeMeshName).material.opacity = 1
    }

    // -------------------------------------------------------------------------------------------------------------------------

    addToScene(scene) {
        scene.add(this.mesh);
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
        this.texture.offset.y += (speed/this.fretboardHeight);
        // or 1/fps
    }

    updateFireEffects(delta) {
        this.fireEffects.forEach(fireMesh => {
            if (this.isFireEffectActive(fireMesh)) {
                // console.log("here")
                fireMesh.material.update(delta)
            }
        });
    }

    update(pressedLanesIndices, delta, speed) {
        this.updatePressAnimations(pressedLanesIndices);
        this.updateTextureScroll(speed);
        this.updateFireEffects(delta)
    }
}
