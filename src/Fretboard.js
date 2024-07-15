import * as THREE from 'three';
import Lane from './Lane.js';
import * as Utils from './utils.js'; // Adjust the path as necessary

export default class Fretboard {
    constructor(width, height, numLanes, asLines=true) {  
        this.geometry = new THREE.PlaneGeometry(width, height);
        this.material = new THREE.MeshPhongMaterial(
            {
                color: 0xffffff,
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

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 0;
        this.mesh.position.z = -0.01; // Move the fretboard back so the notes can be in front of it
        
        // Create lanes
        this.createLanes(numLanes, asLines);

        // Create pickup area
        this.createPickupArea(numLanes, this.laneWidth, this.laneHeight);

        // Create press cylinders
        this.createLanePressEffects();

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
        this.numLanes = numLanes;
        this.asLines = asLines;

        this.laneWidth = this.geometry.parameters.width / this.numLanes; // Width of each lane
        this.laneHeight = this.geometry.parameters.height;

        // Create lanes
        this.lanes = [];
        for (let i = 0; i < numLanes; i++) {
            const lane = new Lane(i, this.laneWidth, this.laneHeight, this.geometry, this.colors, this.asLines);
            // TODO: Think if it is better to attach Lanes to Fretboard or not
            // this.mesh.add(lane.mesh);
            this.lanes.push(lane);
        }
    }

    createPickupArea(numLanes, laneWidth, laneHeight) {
        this.pickupWidth = numLanes * laneWidth; // Width of pickup area
        this.pickupHeight = 0.8; // Height of pickup area
    
        // Create a plane geometry for the pickup area
        const geometry = new THREE.PlaneGeometry(this.pickupWidth, this.pickupHeight);
    
        // Create material for the pickup area (transparent)
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
    
        // Create mesh for the pickup area
        this.pickupMesh = new THREE.Mesh(geometry, material);
        this.pickupMesh.position.set(
            0,
            -(laneHeight / 2) + 0.5,
            0.01
        ); // Adjust position at the bottom of the fretboard
    
        // Create spherical holes (representing notes)
        this.holeRadius = laneWidth / 4; // Radius of holes for notes
        this.holeDistance = laneWidth; // Distance between holes (aligned with lanes)
        this.createPickupHoles(numLanes, this.holeRadius);
    
        // Add the pickup area to the fretboard mesh
        this.mesh.add(this.pickupMesh);
    }

    createPickupHoles(numLanes, holeRadius) {
        // const holeGeometry = new THREE.SphereGeometry(this.holeRadius, 16, 16, -Math.PI, Math.PI);
        // const holeGeometry = new THREE.RingGeometry(0.1, this.holeRadius, 8);
        const holeGeometry = new THREE.TorusGeometry(holeRadius, 0.05, 8, 8 );

        this.holeMeshes = [];
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
                0.01
            );
            
            // Add hole mesh to the pickup area mesh
            this.pickupMesh.add(holeMesh);
            // Store hole meshes
            this.holeMeshes.push(holeMesh);
        }
    }

    createLanePressEffects() {
        this.pressEffects = [];
        this.pressEffectsHeight = 0.25;

        for (let i = 0; i < this.numLanes; i++) {
            const geometry = new THREE.CylinderGeometry(this.holeRadius, this.holeRadius, this.pressEffectsHeight, 8);
            
            const material = new THREE.MeshBasicMaterial({ color: this.colors[i], transparent: true, opacity: 0.3 });
            const cylinderMesh = new THREE.Mesh(geometry, material);
            cylinderMesh.rotation.x = Math.PI / 2;
            cylinderMesh.position.copy(this.holeMeshes[i].position);

            cylinderMesh.position.z += this.pressEffectsHeight/2;
            this.pressEffects.push(cylinderMesh);

            // Make mesh not visible now
            cylinderMesh.visible = false;

            this.pickupMesh.add(cylinderMesh);
        }

    }

    addNoteToLane(measure, ...laneIndexes) {
        const addedNotes = [];

        if (!this.notesLaneIndexes[measure]) {
            this.notesLaneIndexes[measure] = [];
        }

        
        laneIndexes.forEach(laneIndex => {
            const note = this.lanes[laneIndex].addNote(measure);

            if (note) {
                this.notesLaneIndexes[measure].push(laneIndex);
                addedNotes.push(note);
            }
        });

        return addedNotes;
    }

    getNotes(measure) {
        return this.notesLaneIndexes[measure].map(laneIndex => this.lanes[laneIndex].getNote(measure));
    }

    getCurrentNotes() {
        return this.currentNotes;
        
        // or
        return this.getNotes(this.currentMeasure);
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
        // this.pressEffectsHeight =


        
        
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

    enableNoteHitEffect(laneIndex, hittedNote) {
        console.log("NOTE IN " + laneIndex + " WAS HIT WITH ACCURACY OF "+parseFloat(hittedNote.accuracy).toFixed(2)+"%")
    }

    update() {
        // Reset currentNotes
        this.currentNotes = [];
        this.lanes.forEach((lane, index) => {

            const collidingNote = lane.update(this.holeMeshes[index]);
            if (collidingNote) {
                this.currentNotes.push(collidingNote);
            }
        });
    }
}
