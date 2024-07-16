import * as THREE from 'three';

export default class BackgroundManager {
    constructor(img, scene, gui) {
        this.scene = scene;
        this.gui = gui;
        this.img = img;

        this.backgroundPlane = null;
        this.blurLevel = 0;

        this.loadBackgroundTexture();
        this.initGUI();
    }

    loadBackgroundTexture() {
        const loader = new THREE.TextureLoader();
        loader.load(this.img, texture => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.NearestFilter;
            this.scene.background = texture;

            // Initial blur effect
            this.applyBlur();
        });

    }

    applyBlur() {
        if (this.scene.background) {
            console.log("here")
            const maxAnisotropy = this.scene.background.anisotropy;
            const blurLevel = Math.max(1, Math.floor(this.blurLevel * maxAnisotropy));
            this.scene.background.anisotropy = blurLevel;
            this.scene.background.needsUpdate = true;
        }
    }

    setBlur(level) {
        this.blurLevel = level;
        this.applyBlur();
    }

    initGUI() {
        const folder = this.gui.addFolder('Background');

        folder.add(this, 'blurLevel', 0, 8, 1).name('Blur').onChange((value) => this.setBlur(value));
        folder.open();
    }
}
