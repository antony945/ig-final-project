import * as THREE from 'three';

export default class BackgroundManager {
    constructor(videoUrl, img, scene, camera, gui) {
        this.scene = scene;
        this.camera = camera;
        this.gui = gui;
        this.img = img;

        this.backgroundPlane = null;

        // this.initControls();
        // this.initBackgroundPlane();
        this.loadBackgroundTexture();
        this.initGUI();
    }

    initBackgroundPlane() {
        this.videoUrl = videoUrl;
        this.video = document.createElement('video');
        this.video.src = this.videoUrl;
        this.video.crossOrigin = 'anonymous';
        this.video.loop = true;
        this.video.muted = true;
        // this.copyVideo = true;
        this.video.play();

        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.needsUpdate = true;
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBFormat;

        const geometry = new THREE.PlaneGeometry(16, 9); // Aspect ratio 16:9 for typical video
        const material = new THREE.MeshBasicMaterial({ map: this.videoTexture });
        const plane = new THREE.Mesh(geometry, material);

        plane.scale.set(10, 10, 5); // Scale the plane to fit the scene
        // plane.rotateX(20)
        // console.log(this.camera)

        // plane.position.copy(this.camera.position)
        plane.quaternion.copy(this.camera.quaternion)
        plane.translateZ(-20)

        // plane.position.set(0, 10, -10); // Position the plane behind other objects in the scene
        this.scene.add(plane);
    }

    loadBackgroundTexture() {
        const loader = new THREE.TextureLoader();
        loader.load(this.img, texture => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.NearestFilter;
            this.scene.background = texture;
        });

    }

    initGUI() {
        const folder = this.gui.addFolder('Background');
        folder.close();
    }
}
