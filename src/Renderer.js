import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

export default class Renderer {
    constructor() {
        this.cameraDirection = new THREE.Vector3()

        // Set up scene
        this.scene = new THREE.Scene();
        const canvas = document.querySelector('#three-canvas');
        this.camPositionSpan = document.querySelector("#position");
        this.camLookAtSpan = document.querySelector("#lookingAt");
        
        // Set up the renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        document.body.appendChild(this.renderer.domElement);

        // Set up camera
        this.camera = new THREE.PerspectiveCamera(
            75, // fov
            window.innerWidth / window.innerHeight, // aspectRatio
            2, // near
            75 // far
        );
        this.camera.position.set(
            0,
            -10.5,
            5
        );

        // Initialize OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        
        // Add lights
        this.addLights();
    
        // Bind resize event
        window.addEventListener('resize', () => this.onWindowResize());
    }

    addLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // color, intensity
        this.scene.add(ambientLight);

        // // Directional light
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensity
        // directionalLight.position.set(5, 10, 7.5);
        // this.scene.add(directionalLight);

        // Point light
        const pointLight = new THREE.PointLight(0xffffff, 1, 100); // color, intensity, distance
        pointLight.position.set(0, 10, 10);
        this.scene.add(pointLight);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);

        // 5. calculate and display the vector values on screen
        // this copies the camera's unit vector direction to cameraDirection
        this.camera.getWorldDirection(this.cameraDirection)
        // scale the unit vector up to get a more intuitive value
        this.cameraDirection.set(
            this.cameraDirection.x * 100,
            this.cameraDirection.y * 100,
            this.cameraDirection.z * 100
        )
        // update the onscreen spans with the camera's position and lookAt vectors
        this.camPositionSpan.innerHTML = `Position: (${this.camera.position.x.toFixed(1)}, ${this.camera.position.y.toFixed(1)}, ${this.camera.position.z.toFixed(1)})`
        this.camLookAtSpan.innerHTML = `LookAt: (${(this.camera.position.x + this.cameraDirection.x).toFixed(1)}, ${(this.camera.position.y + this.cameraDirection.y).toFixed(1)}, ${(this.camera.position.z + this.cameraDirection.z).toFixed(1)})}`
    }
}