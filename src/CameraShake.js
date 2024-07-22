import * as THREE from 'three';

// Based on https://github.com/felixmariotto/three-screenshake/tree/master
export default class CameraShake {
    constructor() {
        this.shaking = false;
        this.shakeStartTime = 0;
        this.shakeDuration = 0;
        this.shakeMagnitude = new THREE.Vector3();
        this.originalPosition = new THREE.Vector3();
    }

    shake(camera, magnitude, duration) {
        if (this.shaking) return;
        this.shaking = true;
        this.shakeStartTime = Date.now();
        this.shakeDuration = duration;
        this.shakeMagnitude.copy(magnitude);
        this.originalPosition.copy(camera.position);
    }

    update(camera) {
        if (this.shaking) {
            const elapsed = Date.now() - this.shakeStartTime;
            if (elapsed < this.shakeDuration) {
                // Randomize shake position within magnitude
                const shakeOffset = new THREE.Vector3(
                    this.randomRange(-this.shakeMagnitude.x, this.shakeMagnitude.x),
                    this.randomRange(-this.shakeMagnitude.y, this.shakeMagnitude.y),
                    this.randomRange(-this.shakeMagnitude.z, this.shakeMagnitude.z)
                );

                // Apply shake effect to camera position
                camera.position.copy(this.originalPosition).add(shakeOffset);
            } else {
                // Shake duration elapsed, stop shaking
                this.shaking = false;
                camera.position.copy(this.originalPosition);
            }
        }
    }

    randomRange(min, max) {
        return min + Math.random() * (max - min);
    }
}
