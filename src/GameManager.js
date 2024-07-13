import Fretboard from './Fretboard.js';
import AudioManager from './AudioManager.js';
import NoteManager from './NoteManager.js';
import InputManager from './InputManager.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import Stats from 'stats.js';
import { GUI } from 'dat.gui';

export default class GameManager {
    constructor() {
        // Create scene, camera, renderer, controls, lights
        this.init();

        // this.audioManager = new AudioManager();
        // this.noteManager = new NoteManager();
        // this.inputManager = new InputManager();

        // Create fretboard
        this.fretboard = new Fretboard(5, true);
        this.fretboard.addToScene(this.scene);

        // Load note
        const n = this.fretboard.addNoteToLane(0);
        this.scene.add(n);
        // this.fretboard.addNoteToLane(1);
        // this.fretboard.addNoteToLane(2);
        // this.fretboard.addNoteToLane(3);
        // this.fretboard.addNoteToLane(4);

        // Add lights
        this.addLights();
    
        // Initialize Stats.js
        this.setupStats();
        
        // Initialize GUI
        this.setupGUI();

        // Helpers
        // this.setupHelpers();
    }

    init() {
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
            0.1, // near
            100 // far
        );
        this.camera.position.set(
            0,
            -10,
            5
        );

        // Initialize OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    setupStats() {
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.getElementById('stats-container').appendChild(this.stats.dom);
    }

    setupGUI() {
        this.gui = new GUI();

        // Directional light settings
        const lightFolder = this.gui.addFolder('Directional Light');
        lightFolder.add(this.directionalLight.position, 'x', -100, 100).name('X Position');
        lightFolder.add(this.directionalLight.position, 'y', -100, 100).name('Y Position');
        lightFolder.add(this.directionalLight.position, 'z', -100, 100).name('Z Position');
        lightFolder.add(this.directionalLight, 'intensity', 0, 2).name('Intensity');
        lightFolder.close();

        // Ambient light settings
        const ambientLightFolder = this.gui.addFolder('Ambient Light');
        ambientLightFolder.add(this.ambientLight, 'intensity', 0, 2).name('Intensity');
        ambientLightFolder.close();

        // Point light settings
        const pointLightFolder = this.gui.addFolder('Point Light');
        pointLightFolder.add(this.pointLight.position, 'x', -100, 100).name('X Position');
        pointLightFolder.add(this.pointLight.position, 'y', -100, 100).name('Y Position');
        pointLightFolder.add(this.pointLight.position, 'z', -100, 100).name('Z Position');
        pointLightFolder.add(this.pointLight, 'intensity', 0, 2).name('Intensity');
        pointLightFolder.close();

        // Camera settings
        const cameraFolder = this.gui.addFolder('Camera');
        cameraFolder.add(this.camera.position, 'x', -100, 100).name('X Position');
        cameraFolder.add(this.camera.position, 'y', -100, 100).name('Y Position');
        cameraFolder.add(this.camera.position, 'z', -100, 100).name('Z Position');
        cameraFolder.add(this.camera.rotation, 'x', 0, Math.PI).name('X Rotation');
        cameraFolder.open();

        // Fretboard settings
        const fretboardFolder = this.gui.addFolder('Fretboard');

        
        fretboardFolder.addColor({ color: `#${this.fretboard.mesh.material.color.getHexString()}` }, 'color').onChange((color) => {
            this.fretboard.mesh.material.color.set(color);
        });
        fretboardFolder.add(this.fretboard.mesh.material, 'opacity', 0, 1).name('Opacity').onChange((value) => {
            this.fretboard.mesh.material.opacity = value;
            this.fretboard.mesh.material.transparent = value < 1.0;
        });
        fretboardFolder.add(this.fretboard.mesh.material, 'transparent').name('Transparent').onChange((value) => {
            this.fretboard.mesh.material.transparent = value;
        });
        fretboardFolder.add(this.fretboard.mesh.material, 'wireframe').name('Wireframe').onChange((value) => {
            this.fretboard.mesh.material.wireframe = value;
        });
        
        this.rotateX = 0;
        fretboardFolder.add(this, 'rotateX', 0, Math.PI).name('X Rotation').onChange((value) => {
            this.fretboard.rotate(value);
        });
        fretboardFolder.open();
    }

    setupHelpers() {
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
        // const helper = new THREE.CameraHelper( this.camera );
        // this.scene.add( helper );
        const lightHelper = new THREE.DirectionalLightHelper( this.directionalLight, 5 );
        this.scene.add( lightHelper );
    }

    addLights() {
        // Ambient light
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // color, intensity
        this.scene.add(this.ambientLight);

        // Directional light
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensity
        this.directionalLight.position.set(5, 10, 7.5);
        this.scene.add(this.directionalLight);

        // Point light
        this.pointLight = new THREE.PointLight(0xffffff, 1, 100); // color, intensity, distance
        this.pointLight.position.set(0, 10, 10);
        this.scene.add(this.pointLight);
    }

    // Animation function
    gameLoop() {
        this.stats.begin(); // Begin measuring FPS
        
        // this.noteManager.update();
        // this.inputManager.checkInput();
        
        this.controls.update();
        this.fretboard.update(); // Update lanes and notes
        this.renderer.render(this.scene, this.camera);

        // Calculate and display the vector values on screen
        this.camera.getWorldDirection(this.cameraDirection); // this copies the camera's unit vector direction to cameraDirection
        this.cameraDirection.multiplyScalar(100); // scale the unit vector up to get a more intuitive value

        // update the onscreen spans with the camera's position and lookAt vectors
        this.camPositionSpan.innerHTML = `
            Position: (
                ${this.camera.position.x.toFixed(1)},
                ${this.camera.position.y.toFixed(1)},
                ${this.camera.position.z.toFixed(1)}
            )`
        this.camLookAtSpan.innerHTML = `
            LookAt: (
                ${(this.camera.position.x + this.cameraDirection.x).toFixed(1)},
                ${(this.camera.position.y + this.cameraDirection.y).toFixed(1)},
                ${(this.camera.position.z + this.cameraDirection.z).toFixed(1)}
            )`

        this.stats.end(); // End measuring FPS

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // Starts the game and runs gameLoop
    startGame() {
        // this.audioManager.play();
        this.gameLoop();
    }
}
