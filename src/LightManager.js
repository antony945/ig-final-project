import * as THREE from 'three';

class LightManager {
    constructor(gui) {
        this.lights = [];
        this.resetted = true;

        // GUI
        this.gui = gui;
        this.lightFolders = [];

        // Create default lights
        this.createDirectionalLight(0xffffff, [5, 0, 7.5]);
        this.createAmbientLight(0x404040);
        this.createPointLight(0xffffff, [0, 0, 10]);
        this.createSpotLight(0xffffff, [0, 5, 5]);
    }

    addToScene(scene) {
        scene.add(...this.lights);
        // scene.add(this.spotLightTarget);
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
        const light = new THREE.DirectionalLight(color, 1);
        
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

    createSpotLight(color, position) {
        const light = new THREE.SpotLight(color);
        light.position.set(...position);
        light.castShadow = true;
        light.angle = Math.PI / 4;
        light.penumbra = 0.1;
        light.decay = 2;
        light.distance = 200;

        this.lights.push(light);
        // Add GUI folder for this light if needed
        this.addLightGUI('Spot Light', light, true);
    }

    addLightGUI(name, light, isSpotLight = false) {
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

        if (isSpotLight) {
            folder.add(light, 'angle', 0, Math.PI / 2).name('Angle').listen();
            folder.add(light, 'penumbra', 0, 1).name('Penumbra').listen();
            folder.add(light, 'decay', 1, 2).name('Decay').listen();
            folder.add(light, 'distance', 0, 200).name('Distance').listen();
        }

        this.lightFolders.push(folder);
    }

    animateLights(deltaTime) {
        const colorChangeSpeed = 0.5;
        const positionChangeSpeed = 0.5;

        const light = this.lights[0]
        light.color.set(0xffffff);
        light.intensity = 3;

        // if (light.originalPosition) {
        //     light.position.x = light.originalPosition[0] + Math.sin(deltaTime * positionChangeSpeed) * 5;
        //     light.position.z = light.originalPosition[1] + Math.cos(deltaTime * positionChangeSpeed) * 5;
        // }

        // this.lights.forEach(light => {
        //     // Animate color to a bluish hue
        //     // const hslColor = light.originalColor.getHSL({ h: 0, s: 0, l: 0 });
        //     // hslColor.h += deltaTime * colorChangeSpeed;
        //     // if (hslColor.h > 1) hslColor.h -= 1;
        //     // light.color.setHSL(hslColor.h, hslColor.s, hslColor.l);
        //     light.color.set(0x0000ff)
        //     light.intensity = 0.2

        //     // Animate position in a circular motion
        //     if (light.originalPosition) {
        //         const time = Date.now() * 0.001;
        //         light.position.x = light.originalPosition[0] + Math.sin(time * positionChangeSpeed) * 5;
        //         light.position.y = light.originalPosition[1] + Math.cos(time * positionChangeSpeed) * 5;
        //     }
        // });

        this.resetted = false;
    }

    update(starPower, deltaTime) {
        if (starPower) {
            this.animateLights(deltaTime);
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
            light.color.set(light.originalColor);
            light.intensity = 1;
        });
        this.resetted = true;
    }
}

export default LightManager;
