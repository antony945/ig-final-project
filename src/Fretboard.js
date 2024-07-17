import * as THREE from 'three';
import Lane from './Lane.js';
import * as Utils from './utils.js'; // Adjust the path as necessary

export default class Fretboard {
    static fretboardZ = -0.01;
    static pickupAreaZ = 0.0;
    static pickupHolesZ = 0.0;
    static pressEffectsHeight = 0.25;

    constructor(width, height, numLanes, asLines=true) {
        this.width = width;
        this.height = height;
        this.geometry = new THREE.PlaneGeometry(this.width, this.height);
        this.material = new THREE.MeshPhongMaterial(
            {
                color: 0x000000,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: .6
            }
        );
        this.colors = {
            0: 0x00ff00,
            1: 0xff0000,
            2: 0xffff00,
            3: 0x0000ff,
            4: 0xffa500
        }; // Green, Red, Yellow, Blue, Orange

        this.pickupHeight = 0.8; // Height of pickup area
        this.pickupOffset = 0.5;
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 0;
        this.mesh.position.z = Fretboard.fretboardZ; // Move the fretboard back so the notes can be in front of it
        
        // Create lanes
        this.numLanes = numLanes;
        this.asLines = asLines;
        this.createLanes(this.numLanes, this.asLines);

        // Create pickup area
        this.createPickup(this.numLanes, this.laneWidth, this.laneHeight);

        // TODO: Change name, or move to Lane
        this.isLanePressed = Array(5).fill(false);
        this.notesLaneIndexes = {};
        // TODO: Will store the most recent measure by identifying when the measure line collide with the pickup area
        // For now set to -1
        this.currentMeasure = -1;
        this.currentNotes = []; // updated in the update method while checking for note collision in lane
    }

    rotate(x_angle) {
        this.mesh.rotation.x = x_angle;
        this.lanes.forEach(lane => {
            lane.mesh.rotation.x = x_angle;            
        });
    }

    createLanes(numLanes, asLines) {
        this.laneWidth = this.width / numLanes; // Width of each lane
        this.laneHeight = this.height;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, this.width, this.pickupHeight, this.pickupOffset, this.colors, asLines);
            // TODO: Think if it is better to attach Lanes to Fretboard or not
            // this.mesh.add(lane.mesh);
            this.lanes.push(lane);
        }
    }

    createPickup(numLanes, laneWidth, laneHeight) {
        // Pickup area
        this.pickupWidth = numLanes * laneWidth; // Width of pickup area
        this.pickupAreaMesh = this.createPickupArea(this.pickupWidth, this.pickupHeight)

        // Pickup holes
        this.holeRadius = laneWidth / 4; // Radius of holes for notes
        this.holeDistance = laneWidth; // Distance between holes (aligned with lanes)
        this.holeMeshes = this.createPickupHoles(numLanes, this.holeRadius);
    
        // Press effects
        this.pressEffects = this.createLanePressEffects();

        // Combine all together
        this.pickupMesh = new THREE.Object3D();
        this.pickupMesh.add(this.pickupAreaMesh);
        this.pickupMesh.add(...this.holeMeshes);
        this.pickupMesh.add(...this.pressEffects);
        
        // Adjust position at the bottom of the fretboard
        this.pickupY = -(laneHeight / 2) + this.pickupOffset;
        this.pickupMesh.position.set(
            0,
            this.pickupY,
            0.0
        );
        
        // Add the pickup area to the fretboard mesh
        this.mesh.add(this.pickupMesh);
    }

    createPickupArea(pickupWidth, pickupHeight) {
        // Create a plane geometry for the pickup area
        const geometry = new THREE.PlaneGeometry(pickupWidth, pickupHeight);

        // Create material for the pickup area (transparent)
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
    
        // Create mesh for the pickup area
        const pickupAreaMesh = new THREE.Mesh(geometry, material);
        pickupAreaMesh.visible = false;
        return pickupAreaMesh;
    }

    createPickupHoles(numLanes, holeRadius) {
        // const holeGeometry = new THREE.SphereGeometry(this.holeRadius, 16, 16, -Math.PI, Math.PI);
        // const holeGeometry = new THREE.RingGeometry(0.1, this.holeRadius, 8);
        const holeGeometry = new THREE.TorusGeometry(holeRadius, 0.05, 8, 8 );

        const holeMeshes = [];
        for (let i = 0; i < numLanes; i++) {
            const holeMaterial = new THREE.MeshStandardMaterial({
                color: this.colors[i],
                transparent: true,
                opacity: 0.5,
                side: THREE.DoubleSide,
                wireframe: false
            });
            const holeMesh = new THREE.Mesh(holeGeometry, holeMaterial);
            
            // Adjust hole position based on lane
            holeMesh.position.set(
                -(this.pickupWidth / 2) + (i + 0.5) * this.holeDistance,
                0,
                Fretboard.pickupHolesZ
            );
            
            // Add hole mesh to the pickup area mesh
            // this.pickupMesh.add(holeMesh);
            // Store hole meshes
            holeMeshes.push(holeMesh);
        }
        return holeMeshes;
    }

    createLanePressEffects() {
        const pressEffects = [];

        for (let i = 0; i < this.numLanes; i++) {
            const geometry = new THREE.CylinderGeometry(this.holeRadius, this.holeRadius, Fretboard.pressEffectsHeight, 8);
            
            const material = new THREE.MeshBasicMaterial({ color: this.colors[i], transparent: true, opacity: 0.3 });
            const cylinderMesh = new THREE.Mesh(geometry, material);
            cylinderMesh.rotation.x = Math.PI / 2;
            cylinderMesh.position.copy(this.holeMeshes[i].position);
            cylinderMesh.position.z += Fretboard.pressEffectsHeight/2;
            
            pressEffects.push(cylinderMesh);

            // Make mesh not visible now
            cylinderMesh.visible = false;
        }

        return pressEffects;
    }

    addToScene(scene) {
        scene.add(this.mesh);
        // TODO: Comment this line if you decide to have Lanes as childrens of Fretboard
        this.lanes.forEach(lane => lane.addToScene(scene));
    }

    enableLanePressEffect(laneIndex) {
        // Right now just put visibility to true
        const pressEffect = this.pressEffects[laneIndex];
        pressEffect.visible = true;
        return
        // Fretboard.pressEffectsHeight =


        
        
        // let progress = 0;
        // const duration = 
        
        // if (effect.progress < duration) {
        //     effect.progress += 0.01;
            
        //     const height = THREE.MathUtils.lerp(0, maxHeight, effect.progress / duration);
        //     // pressEffect.position.z += height/2;
        //     effect.mesh.scale.set(1, height, 1);
        // }


        return

        holeMesh = this.holeMeshes


        if (!this.strumEffects[laneIndex]) {
            const geometry = new THREE.CylinderGeometry(this.holeRadius, this.holeRadius, 0.01, 8);
            const material = new THREE.MeshBasicMaterial({ color: this.colors[laneIndex], transparent: true, opacity: 0.6 });
            const cylinder = new THREE.Mesh(geometry, material);
            cylinder.position.copy(holeMesh.position);
            this.scene.add(cylinder);

            this.strumEffects[laneIndex] = { mesh: cylinder, progress: 0 };
        }

        const effect = this.strumEffects[laneIndex];
        const duration = this.strumAnimationDuration;
        const maxHeight = 1;

        if (effect.progress < duration) {
            effect.progress += 0.01;

            const height = THREE.MathUtils.lerp(0, maxHeight, effect.progress / duration);
            effect.mesh.scale.set(1, height, 1);
        } else {
            this.scene.remove(effect.mesh);
            delete this.strumEffects[laneIndex];
        }
    }

    disableLanePressEffect(laneIndex) {
        // Return visibility to false
        this.pressEffects[laneIndex].visible = false;
    }

    enableNoteHitEffect(laneIndex, hittedLine) {
        console.log("NOTE IN " + laneIndex + " WAS HIT WITH ACCURACY OF "+parseFloat(hittedLine.accuracy).toFixed(2)+"%")
    }

    // update() {
    //     // if (isPaused) return;

    //     // Reset currentNotes
    //     this.currentNotes = [];
    //     this.lanes.forEach((lane, index) => {
    //         const collidingNote = lane.update(this.holeMeshes[index]);
    //         if (collidingNote) {
    //             this.currentNotes.push(collidingNote);
    //         }
    //     });
    // }
}
