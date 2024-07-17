import * as THREE from 'three';

export default class Tick {
    static tickZ = 0.01;
    static defaultTickness = {
        'tick': 1,
        'beat': 2,
        'measure': 3
    }
    static defaultColor = {
        'tick': 0xAAAAAA,
        'beat': 0x888888,
        'measure': 0xFFFFFF
    }

    constructor(tickIndex, tickSpace, ticksPerMeasure, fretboardWidth, pickupY) {
        this.tickIndex = tickIndex;
        this.tickSpace = tickSpace;
        this.ticksPerMeasure = ticksPerMeasure;
    
        this.x_min = -fretboardWidth / 2;
        this.x_max = +fretboardWidth / 2;
        this.y = pickupY + tickIndex * tickSpace;
        this.z = Tick.tickZ;

        this.createTickLine(this.tickIndex);
    }

    getTickType(tickIndex) {
        if ((tickIndex % this.ticksPerMeasure) === 0) return 'measure';
        if ((tickIndex % 2) == 0) return 'beat';
        return 'tick';
    }

    createTickLine(tickIndex) {
        const tickType = this.getTickType(tickIndex); 

        this.material = new THREE.LineBasicMaterial({
            color: Tick.defaultColor[tickType],
            linewidth: Tick.defaultTickness[tickType]
        });
        this.points = [];
        // Create line from points
        this.a = new THREE.Vector3(this.x_min, this.y, this.z)
        this.b = new THREE.Vector3(this.x_max, this.y, this.z)
        this.points.push(this.a, this.b);

        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        this.mesh = new THREE.Line(this.geometry, this.material);

        const yPos = -this.laneHeight / 2 + tickIndex * this.tickSpace;
        // this.mesh.position.set(0, yPos, 0); // Assuming lines are along the y-axis
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }
}
