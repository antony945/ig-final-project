import Fretboard from './Fretboard.js';
import AudioManager from './AudioManager.js';
import NoteManager from './NoteManager.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import Stats from 'stats.js';
import { GUI } from 'lil-gui';
import * as Utils from './utils.js';

export default class GameManager {
    constructor() {
        // Create scene, camera, renderer, controls, lights
        this.init();
        
        // this.addFog();

        // this.noteManager = new NoteManager();

        // Create fretboard
        this.fretboard = new Fretboard(5, 15, 5, true);
        this.fretboard.addToScene(this.scene);

        // Load note
        // TODO: For now set all measures to -1
        const measure = -1;
        const notes = this.fretboard.addNoteToLane(measure, 0, 1, 2);
        notes.forEach(n => this.scene.add(n.mesh));
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

        // Initialize helpers
        // this.setupHelpers();

        // Initialize score
        this.setupScore();

        // ScreenShake
        this.screenShake = Utils.ScreenShake();

        // Initialize input
        this.setupInput();

        // Initialize audio
        this.setupAudioManager();
    }

    setupAudioManager() {
        const soundEffects = {
            // noteHit: 'path/to/noteHit.mp3',
            // strumMiss: 'path/to/strumMiss.mp3'
            // Add other sound effects as needed
        };

        this.audioManager = new AudioManager(
            'songs/s0/guitar.opus',
            soundEffects,
            'songs/s0/song.ini',
            this.listener
        );
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
        this.renderer.shadowMap.enabled = true; // Enable shadow maps
        document.body.appendChild(this.renderer.domElement);

        // Set up camera
        this.camera = new THREE.PerspectiveCamera(
            75, // fov
            window.innerWidth / window.innerHeight, // aspectRatio
            0.1, // near
            100 // far
        );
        this.defaultCameraPosition = new THREE.Vector3(0, -10, 5);

        this.camera.position.copy(this.defaultCameraPosition);
        this.scene.add(this.camera);

        // Setup listener
        this.listener = new THREE.AudioListener();
        this.camera.add(this.listener);

        // Initialize OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Create a clock
        this.clock = new THREE.Clock();
    }

    // INPUT ---------------------
    setupInput() {
        this.keyMap = {
            'A': 0,
            'S': 1,
            'D': 2,
            'F': 3,
            'G': 4,
            'J': 'strum'
        };

        this.keysPressed = {};

        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
    }

    onKeyDown(e) {
        if (this.keyMap[e.key.toUpperCase()] !== undefined) {
            // Check if the pressed key was strum
            if (this.keyMap[e.key.toUpperCase()] == 'strum') {
                this.updateStrumAnimation();
            }

            this.keysPressed[e.key.toUpperCase()] = true;
        }
        
    }

    onKeyUp(e) {
        if (this.keyMap[e.key.toUpperCase()] !== undefined) {
            delete this.keysPressed[e.key.toUpperCase()];
        }
    }

    isLaneKeyPressed() {
        return Object.keys(this.keysPressed).some(key => this.keyMap[key] !== 'strum');
    }

    getPressedLanes() {
        return Object.keys(this.keysPressed)
            .filter(key => this.keyMap[key] !== 'strum')
            .map(key => this.keyMap[key]);
    }

    isStrumPressed() {
        return this.keysPressed['J'] === true;
    }

    setupScore() {
        this.score = 0;
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        const scoreContainer = document.getElementById('score-container');
        scoreContainer.innerText = `Score: ${this.score}`;
    }

    updateScore(points) {
        this.score += points;
        this.updateScoreDisplay();
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
        cameraFolder.close();

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
        // this.rotateX = 0;
        fretboardFolder.add(this.fretboard.mesh.rotation, 'x', 0, Math.PI).name('X Rotation').onChange((value) => {
            this.fretboard.rotate(value);
        });
        fretboardFolder.close();
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
        this.directionalLight.position.set(5, 0, 7.5);
        // this.directionalLight.castShadow = true; // Enable shadows for directional light
        this.scene.add(this.directionalLight);

        // Point light
        this.pointLight = new THREE.PointLight(0xffffff, 1, 100); // color, intensity, distance
        this.pointLight.position.set(0, 0, 10);
        // this.pointLight.castShadow = true; // Enable shadows for point light
        this.scene.add(this.pointLight);

        // Add a moving spotlight
        this.spotLight = new THREE.SpotLight(0xffffff);
        this.spotLight.position.set(0, 0, 0); // Initial position
        this.spotLight.angle = Math.PI / 6;
        this.spotLight.penumbra = 0.1;
        this.spotLight.decay = 2;
        this.spotLight.distance = 200;
        this.spotLight.castShadow = true;
        this.scene.add(this.spotLight);

        // Add a target object for the spotlight to follow
        this.spotLightTarget = new THREE.Object3D();
        this.spotLightTarget.position.set(0, 0, 0);
        this.scene.add(this.spotLightTarget);
        this.spotLight.target = this.spotLightTarget;
    }

    addFog() {
        this.scene.fog = new THREE.FogExp2(0x01131e, 0.025);
    }

    updateLights() {
        // Update spotlight position to simulate movement
        const time = this.clock.getElapsedTime();
        this.spotLight.position.x = Math.sin(time) * 10;
        this.spotLight.position.z = Math.cos(time) * 10;

        // Update the spotlight target to follow the note
        this.spotLightTarget.position.x = Math.sin(time) * 5;
        this.spotLightTarget.position.z = Math.cos(time) * 5;
    }

    shakeCamera() {
        this.screenShake.shake(this.camera, new THREE.Vector3(0.1, 0, 0.1), 200);
        // this.camera.position.copy(this.defaultCameraPosition);
    }

    updateLaneAnimations() {
        // console.log(this.fretboard.isLanePressed);
        const pressedLanesIndices = this.getPressedLanes();

        this.fretboard.isLanePressed.forEach((wasPressed, laneIndex) => {
            const isPressed = pressedLanesIndices.includes(laneIndex);

            if (isPressed && !wasPressed) {
                this.fretboard.enableLanePressEffect(laneIndex);
            } else if (!isPressed && wasPressed) {
                this.fretboard.disableLanePressEffect(laneIndex);
            }

            this.fretboard.isLanePressed[laneIndex] = isPressed;
        });
    }

    updateStrumAnimation() {
        // Called on strum keyDown
        // for sure strum is pressed here
        // Check if there are colliding notes
        // Make sense to store notes with time index
        // t0 -> note on red and yellow (1,2)
        // t1 -> note on red

        // currentNotes will vary from 0 to 4
        const currentNotes = this.fretboard.getCurrentNotes();
        // const currentNotes = [];
        console.log(currentNotes);

        // I want currentNotesLaneIndexes to store for every element n in currentNotes, the element n.laneIndex       
        // Compare them using a set
        const currentNotesLaneIndexes = new Set(currentNotes.map(note => note.laneIndex));
        const pressedLanesIndexes = new Set(this.getPressedLanes());

        // Check if we are pressing ALL AND ONLY the lanes of the currentNotes        
        const correctPress = Utils.EqualsSets(currentNotesLaneIndexes, pressedLanesIndexes);
        console.log(currentNotesLaneIndexes);
        console.log(pressedLanesIndexes);
        console.log(correctPress)

        // Strummed with no loaded notes -> SHAKE
        if (currentNotes.length == 0 || ! correctPress) {
            this.shakeCamera();
        } else {
            // Here there are notes and user is correctly pressing all of them
            // Hit them all
            currentNotes.forEach(note => {
                // TODO: Store sequence of hitted notes
                const points = Math.round(note.accuracy * 400); // Calculate points based on accuracy
                this.updateScore(points); // Update score
            
                // TODO: Use another animation with flames
                this.fretboard.enableNoteHitEffect(note.laneIndex, note);

                // Optionally, remove the note or mark it as hit
                // lane.removeNote(note);
                note.hit = true;
                note.removeFromScene(this.scene);
            });
        }
    }

    // Animation function
    gameLoop() {
        this.stats.begin(); // Begin measuring FPS
        
        // this.noteManager.update();

        // this.updateLights();

        this.updateLaneAnimations();
        this.screenShake.update(this.camera);
        this.controls.update();
        this.fretboard.update(); // Update lanes and notes
    
        this.renderer.render(this.scene, this.camera);
        this.stats.end(); // End measuring FPS
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // Starts the game and runs gameLoop
    startGame() {
        this.audioManager.playMainSong();
        this.gameLoop();
    }
}
