import * as THREE from 'three';

export default class Fretboard {
    constructor() {
        this.geometry = new THREE.PlaneGeometry(5, 20);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.z = -1; // Move the fretboard back so the notes can be in front of it
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
