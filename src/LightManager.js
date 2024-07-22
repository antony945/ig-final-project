import * as THREE from 'three';

export default class LightManager {
    constructor(gui) {
        this.lights = [];
        this.resetted = true;

        // GUI
        this.gui = gui;
        this.lightFolders = [];

        // Create default lights
        this.createDirectionalLight(0xffffff, [5, 0, 7.5]);
        this.createAmbientLight(0x404040);
        // this.createPointLight(0xffffff, [0, 0, 10]);
    }

    addToScene(scene) {
        scene.add(...this.lights);
    }

    createLight(light, color, position) {
        if (position) {
            light.position.set(...position);
            light.originalPosition = position.slice(); // Store the original position as a copy
        }
        light.originalColor = new THREE.Color(color); // Store the original color
        this.lights.push(light);
    }

    createPointLight(color, position) {
        const light = new THREE.PointLight(color, 1, 100);
        this.createLight(light, color, position);

        // Add GUI control
        this.addLightGUI('Point Light', light);
    }

    createDirectionalLight(color, position) {
        const light = new THREE.DirectionalLight(color, 2);
        
        this.createLight(light, color, position)

        // Add GUI control
        this.addLightGUI('Directional Light', light);
    }

    createAmbientLight(color) {
        const light = new THREE.AmbientLight(color, 2); // Soft white light
        this.createLight(light, color, null)

        // Add GUI control
        this.addLightGUI('Ambient Light', light);
    }

    addLightGUI(name, light) {
        const folder = this.gui.addFolder(name);
        const lightColor = { color: light.color.getHex() };
        folder.addColor(lightColor, 'color').onChange((value) => {
            light.color.set(value);
        });

        if (light.originalPosition) {
            folder.add(light.position, 'x', -50, 50).listen();
            folder.add(light.position, 'y', -50, 50).listen();
            folder.add(light.position, 'z', -10, 50).listen();
        }

        folder.add(light, 'intensity', 0, 2).listen();

        this.lightFolders.push(folder);
    }

    animateLights() {
        this.resetted = false;
        const color1 = new THREE.Color(0xffffff); // White
        const color2 = new THREE.Color(0xa8ffff); // Light blue
        const cycleDuration = 2000; // Duration of one color cycle in milliseconds
        const elapsed = Date.now() % cycleDuration;
        const t = elapsed / cycleDuration;

        this.lights.forEach(light => {
            if (light.isDirectionalLight) {
                const interpolatedColor = color1.clone().lerp(color2, Math.sin(t * Math.PI));
                light.color.set(interpolatedColor);
            }
        });
    }

    update(starPower) {
        if (starPower) {
            this.animateLights();
            return
        }
        
        if (this.resetted) {
            return
        }

        // Reset lights to original properties
        this.lights.forEach(light => {
            if (light.originalPosition) {
                light.position.set(...light.originalPosition);
            }
            console.log(light.originalColor)
            light.color.set(light.originalColor);
            light.intensity = 2;
        });
        this.resetted = true;
    }
}