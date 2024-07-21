import * as THREE from 'three';
import Note from './Note.js';
import { RemoveObject3D } from './utils.js';

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
    static lowerVolumeAmout = 0.5;
    
    constructor(tickIndex, ticksPerMeasure, tickSpace, totalTicks, fretboardWidth, fretboardHeight, pickupOffset, pickupHeight) {
        this.tickIndex = tickIndex;
        this.ticksPerMeasure = ticksPerMeasure;
        this.tickType = this.getTickType(this.tickIndex);
        this.totalTicks = totalTicks;

        this.tickSpace = tickSpace;
        this.spaceReset = this.tickSpace*this.totalTicks;
    
        this.x_min = -fretboardWidth / 2;
        this.x_max = +fretboardWidth / 2;

        this.y_perfect_hit = -(fretboardHeight / 2) + pickupOffset;
        this.y_start_hit = this.y_perfect_hit + (pickupHeight+pickupOffset/2) / 2;
        this.y_end_hit = this.y_perfect_hit - (pickupHeight+pickupOffset/2) / 2
        
        this.y_start = this.y_perfect_hit + tickIndex * tickSpace;
        this.z = Tick.tickZ;
        
        this.y_min = -(fretboardHeight / 2);
        this.y_max = this.y_min + fretboardHeight;
        
        this.starting_position = new THREE.Vector3(0, this.y_start, 0);
        this.max_position = new THREE.Vector3(0, this.y_max, 0);
        this.min_position = new THREE.Vector3(0, this.y_min, 0);
        
        // console.log(tickIndex, this.y_start, this.y_min, this.y_max)
        this.createTickLine(this.tickIndex);
        // will store notes using measure as key
        this.notes = {}
        this.collided = false;
        this.hitted = false;
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

    addNote(note) {
        // Only one note for laneIndex at time
        if (this.notes[note.laneIndex]) return null;

        this.notes[note.laneIndex] = note;
        return note;
    }

    getNotes() {
        return Object.values(this.notes);
    }

    getNotesLaneIndices() {
        return Object.keys(this.notes).map(Number);
    }

    reset() {
        // Put it back on top
        // this.mesh.position.copy(this.max_position);
        this.mesh.visible = false;
        this.mesh.position.y += this.spaceReset;
        this.collided = false;
        this.hitted = false;
        this.accuracy = 0.0;

        // TODO: Hide or remove from scene
        this.removeNotes();
        // this.hideNotes();
        this.notes = {};
    }

    addToScene(scene) {
        this.mesh.visible = false;
        scene.add(this.mesh);
    }

    checkCollision() {
        // Check collision only if it has notes, otherwise skip
        // TODO: Think if it's needed or not
        // if (Object.keys(this.notes).length == 0) return false;

        // TODO: To better implement it
        // return (this.mesh.position.y < this.y_start_hit) && (this.mesh.position.y > this.y_end_hit);        
        const b = (this.mesh.position.y < this.y_start_hit) && (this.mesh.position.y > this.y_end_hit);        
        // console.log(this.tickIndex + ") " + b + " | " + this.collided + " | " + this.y_start_hit + " --- " + this.mesh.position.y + " --- " + this.y_end_hit)
        return b
    }

    enableHitEffect(fretboard) {
        this.getNotesLaneIndices().forEach(laneIndex => {
            fretboard.enableFireEffect(laneIndex);
            // setTimeout(fretboard.disableFireEffect(laneIndex), 2000);
        })
    }

    handleHit(fretboard, scoreManager, audioManager, scene) {
        console.log("HIT (in lane " + this.getNotesLaneIndices() + " with " + this.accuracy.toFixed(2)+"% accuracy)")

        // Update score
        scoreManager.handleHit(this.getNotes());

        // Revert original audio
        if (! audioManager.isOriginalVolume) {
            audioManager.resetMainSongVolume();
        }

        // Mark line and all notes as hitted
        this.hitted = true;

        // TODO: Use another animation with flames
        this.enableHitEffect(fretboard);

        // TODO: Handle in better way
        Object.values(this.notes).forEach(note => {
            note.mesh.hitted = this.mesh.hitted;

            // Remove notes from the scene
            note.removeFromScene(scene)
        });

        // Remove note from current line
        this.notes = {};
    }

    static handleMiss(scoreManager, audioManager, missedNotes) {
        console.log("MISS or OVERSTRUM")
        
        // Update score
        scoreManager.handleMiss(missedNotes);

        // If not already lowered, lower the volume of the main song by 10%
        if (audioManager.isOriginalVolume) {
            audioManager.lowerMainSongVolume(Tick.lowerVolumeAmout);
        }
    }

    removeNotes() {
        Object.values(this.notes).forEach(note => {
            RemoveObject3D(note.mesh);
        });
    }

    // NOT USED
    hideNotes() {
        Object.values(this.notes).forEach(note => {
            note.mesh.visible = false;
        });
    }

    // NOT USED
    showNotes() {
        Object.values(this.notes).forEach(note => {
            note.mesh.visible = true;
        });
    }

    hasNotes() {
        return Object.keys(this.notes).length > 0
    }

    update(speed, scoreManager, audioManager, scene) {
        // Don't make line visible if over fretboard
        this.mesh.visible = this.mesh.position.y < this.y_max && this.mesh.position.y > this.y_min;

        // Update line position
        this.mesh.position.y -= speed;
        
        if (this.checkCollision()) {
            this.collided = true;

            // Accuracy is higher when note is closer to the center of the pickup
            const distance = Math.abs(this.mesh.position.y - this.y_perfect_hit);
            const maxDistance = Math.abs(this.y_end_hit - this.y_start_hit) / 2;
            this.accuracy = Math.max(0, 1 - (distance / maxDistance));
        } else {
            // Check if it collided before and if it was not hitted => MISS
            if (this.hasNotes() && this.collided && ! this.hitted) {                
                // Let audio and score manager to handle miss
                Tick.handleMiss(scoreManager, audioManager, this.getNotes());
            }

            this.collided = false;
            this.accuracy = 0.0;
        }

        // Update notes following tick line movement on y axis
        
        // Hit all the notes but make them unvisible
        Object.values(this.notes).forEach(note => {
            // Make the note rotate if it special
            note.update(scoreManager.interruptedLoadingStarPower, scoreManager.starPower, scene)

            // if (!note.mesh.visible && this.mesh.visible) {
            // console.log("hitted, here")
            // note.mesh.visible = !note.hitted && note.mesh.position.y < this.y_max && note.mesh.position.y > this.y_min;
            note.mesh.visible = this.mesh.visible && !this.hitted;

            // Let the note follow
            note.accuracy = this.accuracy;
            note.collided = this.collided;
            note.mesh.position.y = this.mesh.position.y;
        });

        if (this.mesh.position.y < this.y_min) {
            // Line has reached the bottom of the lane
            this.reset();
        }
    }
}
