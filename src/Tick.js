import * as THREE from 'three';
import Note from './Note.js';

export default class Tick {
    static tickZ = 0.01;
    static defaultTickness = {
        'tick': 1,
        'beat': 2,
        'measure': 3
    }
    static defaultColor = {
        'tick': 0x8e8e8e,
        'beat': 0xb9b9b9,
        'measure': 0xffffff
    }
    // static defaultColor = {
    //     'tick': 0xAAAAAA,
    //     'beat': 0xFF0000,
    //     'measure': 0x0000FF
    // }
    
    constructor(tickIndex, ticksPerMeasure, tickSpace, fretboardWidth, fretboardHeight, pickupOffset, noteRadius) {
        this.tickIndex = tickIndex;
        this.ticksPerMeasure = ticksPerMeasure;
        this.tickType = this.getTickType(this.tickIndex);

        this.tickSpace = tickSpace;

        this.spaceReset = this.tickSpace*this.ticksPerMeasure;
    
        this.x_min = -fretboardWidth / 2;
        this.x_max = +fretboardWidth / 2;

        this.y_perfect_hit = -(fretboardHeight / 2) + pickupOffset;
        this.y_start_hit = this.y_perfect_hit + noteRadius / 2;
        this.y_end_hit = this.y_perfect_hit - noteRadius / 2
        
        this.y_start = this.y_perfect_hit + tickIndex * tickSpace;
        this.z = Tick.tickZ;
        
        this.y_min = -(fretboardHeight / 2);
        this.y_max = this.y_min + fretboardHeight;
        
        this.starting_position = new THREE.Vector3(0, this.y_start, 0);
        this.max_position = new THREE.Vector3(0, this.y_max, 0);
        this.min_position = new THREE.Vector3(0, this.y_min, 0);
        
        // console.log(tickIndex, this.y_start, this.y_min, this.y_max)
        this.createTickLine(this.tickIndex);
        console.log(this.tickIndex + ") - " + this.tickType + " - " + this.mesh.position.y);
    
        this.notes = {}
        this.collided = false;
    }

    getTickType(tickIndex) {
        if ((tickIndex % this.ticksPerMeasure) === 0) return 'measure';
        if ((tickIndex % 2) === 0) return 'beat';
        return 'tick';
    }

    createTickLine() {
        this.material = new THREE.LineBasicMaterial({
            color: Tick.defaultColor[this.tickType],
            linewidth: Tick.defaultTickness[this.tickType]
        });
        this.points = [];
        // Create line from points
        this.a = new THREE.Vector3(this.x_min, 0, 0)
        this.b = new THREE.Vector3(this.x_max, 0, 0)
        this.points.push(this.a, this.b);

        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.mesh = new THREE.Line(this.geometry, this.material);
        this.mesh.position.y = this.y_start // Assuming lines are along the y-axis
        this.mesh.position.z = this.z
        // const yPos = -this.laneHeight / 2 + tickIndex * this.tickSpace;
    }

    addNoteToLane(laneIndex, note) {
        // Only one note for laneIndex at time
        if (this.notes[laneIndex]) return null;

        this.notes[laneIndex] = note;
        return note;
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    update(speed) {
        // Update tick lines
        this.mesh.visible = this.mesh.position.y < this.y_max;

        this.mesh.position.y -= speed;
        if (this.mesh.position.y < this.y_min) {
            // Line has reached the bottom of the lane
            this.mesh.visible = false;
            this.reset();
        }

        // Check collision and set collided to True
        if (this.checkCollision()) {
            this.collided = true;
            // Accuracy is higher when note is closer to the center of the pickup
            const distance = Math.abs(this.mesh.position.y - this.y_perfect_hit);
            const maxDistance = Math.abs(this.y_end_hit - this.y_start_hit) / 2;
            this.accuracy = Math.max(0, 1 - (distance / maxDistance));
        } else {
            this.collided = false;
            this.accuracy = 0.0;
        }

        // Update notes
        Object.values(this.notes).forEach(note => {
            // Follow tick line movement on y axis
            note.mesh.visible = this.mesh.visible;
            note.mesh.position.y = this.mesh.position.y;
        });
    }

    checkCollision() {
        // Check collision only if it has notes, otherwise skip
        if (Object.keys(this.notes).length == 0) return false;

        // TODO: To better implement it
        // console.log(this.y_start_hit + " --- " + this.mesh.position.y + " --- " + this.y_end_hit )
        return (this.mesh.position.y < this.y_start_hit) && (this.mesh.position.y > this.y_end_hit);        
    }

    reset() {
        // Put it back on top
        // this.mesh.position.copy(this.max_position);
        this.mesh.position.y += this.spaceReset;
        this.collided = false;
        this.accuracy = 0.0;
    }
}
