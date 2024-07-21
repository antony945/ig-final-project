import * as THREE from 'three';
import Note from './Note.js';

export default class Lane {
    static radius = 0.015;
    static nickelColor = 0xb0b0b0; // 0xeeeeee
    static steelColor = 0x9a9a9a // 0xaaaaaa

    constructor(laneIndex, laneWidth, laneHeight, laneZ, fretboardWidth, pickupHeight, holeRadius) {
        this.laneIndex = laneIndex;
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.isCurrentlyPressed = false;
        
        this.collidingNote = null;
        this.notes = {};
        
        // Points defining lane
        this.p1 = new THREE.Vector3(0, this.laneHeight / 2, 0);
        this.p2 = new THREE.Vector3(0, -this.laneHeight / 2 + (1.5*pickupHeight + holeRadius), 0);
        
        this.x = -(fretboardWidth/2) + (this.laneWidth / 2) + this.laneIndex * this.laneWidth
        this.z = laneZ;
        // this.isMetallic = true;

        // Nickel string
        this.nickelMaterial = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            metalness: 0.9,
            roughness: 0.3
        });

        // Steel string
        this.steelMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.0,
            roughness: 0.8
        });

        // Generate string
        this.mesh = this.createCylinderLane(this.nickelMaterial, this.p1, this.p2, Lane.radius);
        
        this.mesh.position.x = this.x;
        this.mesh.position.z = this.z;
    }

    generateNoiseTexture(noise, size) {
        const data = new Uint8Array(size * size);
        for (let i = 0; i < size * size; i++) {
            data[i] = (noise.simplex2(i / size, i % size) * 128 + 128) | 0;
        }
        const texture = new THREE.DataTexture(data, size, size, THREE.LuminanceFormat);
        texture.needsUpdate = true;
        return texture;
    }

    createCylinderLane(material, p1, p2, radius, noise) {
        // if (isMetallic) {
        //     this.color = Lane.nickelColor;
        //     this.metalness = 0.9;
        //     this.roughness = 0.3;
        // } else {
        //     this.color = Lane.steelColor;
        //     this.metalness = 0.0;
        //     this.roughness = 0.8;
        // }
        // Create a material for strings
        // this.material = new THREE.MeshStandardMaterial({
        //     color: this.color,
        //     metalness: this.metalness,
        //     roughness: this.roughness
        // });
        this.material = material;
        this.geometry = new THREE.CylinderGeometry(radius, radius, p1.distanceTo(p2), 32);        
        return new THREE.Mesh(this.geometry, this.material);
    }
}
