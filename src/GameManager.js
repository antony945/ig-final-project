import Fretboard from './Fretboard.js';
import AudioManager from './AudioManager.js';
import NoteManager from './NoteManager.js';
import CameraShake from './CameraShake.js';
import BackgroundManager from './BackgroundManager.js';
import ScoreManager from './ScoreManager.js';
import InputManager from './InputManager.js';
import LightManager from './LightManager.js';
import Tick from './Tick.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import Stats from 'stats.js';
import { GUI } from 'lil-gui';
import * as Utils from './utils.js';

export default class GameManager {
    constructor() {
        // Create scene, camera, renderer, controls, lights
        this.init();
        this.scene.background = new THREE.Color( 0x000000 );

        // Initialize GUI
        this.setupGUI();

        // Initialize background
        const bgImgPath = 'bg/image_less_blur.png'
        // const bgImgPath = 'songs/s1/album.jpg'
        const bgVideoPath = 'bg/video480.mp4'
        // const bgVideoPath = 'GHL_Crowd_Emotions/GHL_happy_blue.mp4';
        this.setupBackgroundManager(bgVideoPath, bgImgPath, false);

        // Initialize Stats.js
        this.setupStats();        
        
        // Create fretboard
        const fretboardTextures = [
            // 'textures/fretboard/Cracked.jpg',
            // 'textures/fretboard/electric.jpg',
            // 'textures/fretboard/FatTony-Fretboard.jpg',
            // 'textures/fretboard/FlowerPower.jpg',
            // 'textures/fretboard/GH2_beta-Alternative.png',
            // 'textures/fretboard/GH2_beta-Grim.png',
            // 'textures/fretboard/GH2_beta-Metal.png',
            // 'textures/fretboard/GH2_beta-Punk.png',
            // 'textures/fretboard/Metallic.jpg',
            // 'textures/fretboard/Overdose.jpg',
            // 'textures/fretboard/Pink_Border.jpg',
            // 'textures/fretboard/pnklzr.jpg',
            // 'textures/fretboard/Rainbow_Border.png',
            // 'textures/fretboard/RoyalCarpet.jpg',
            // 'textures/fretboard/smokehero.jpg',
            // 'textures/fretboard/Transparent.png',
            // 'textures/fretboard/Velocity.jpg',
            // 'textures/fretboard/VelocityColor.jpg'
            'textures/fretboard/GH_3/GH3_Elroy.png',
            'textures/fretboard/GH_3/GH3_PC-Axel.png',
            'textures/fretboard/GH_3/GH3_PC-Casey.png',
            'textures/fretboard/GH_3/GH3_PC-Izzy.png',
            'textures/fretboard/GH_3/GH3_PC-Johnny.png',
            'textures/fretboard/GH_3/GH3_PC-Judy.png',
            'textures/fretboard/GH_3/GH3_PC-Lars.png',
            'textures/fretboard/GH_3/GH3_PC-Midori.png',
            'textures/fretboard/GH_3/GH3_PC-Morello.png',
            'textures/fretboard/GH_3/GH3_PC-Ripper.png',
            'textures/fretboard/GH_3/GH3_PC-Rock_God.png',
            'textures/fretboard/GH_3/GH3_PC-Satan.png',
            'textures/fretboard/GH_3/GH3_PC-Slash.png',
            'textures/fretboard/GH_3/GH3_PC-Xavier.png',
            'textures/fretboard/GH_3/GH3_PS2-Robot.png',
        ];
        const randomIndex = Math.floor(Math.random() * fretboardTextures.length);
        this.setupFretboard(5, 15, fretboardTextures[randomIndex], 5)

        // Create noteManager
        // this.setupNoteManager();
        this.setupNoteManager();
        
        // Initialize audio
        // this.setupAudioManager('songs/s0/take_me_out.mp3', 'songs/s0/song.ini');
        // this.setupAudioManager('songs/s0/take_me_out.mp3', 'songs/s0/song.ini');
        this.setupAudioManager('songs/s1');
        
        
        // Add lights
        this.setupLightManager(this.gui);

        // Initialize score
        this.setupScoreManager();

        // CameraShake
        this.cameraShake = new CameraShake();

        // Initialize input
        this.setupInputManager();

        // Initalize pause
        this.isPaused = false;
        // Add pause overlay
        this.createPauseOverlay();
    }

    createIntroOverlay() {
        this.introOverlay = document.createElement('div');
        this.introOverlay.style.position = 'fixed';
        this.introOverlay.style.top = 0;
        this.introOverlay.style.left = 0;
        this.introOverlay.style.width = '100%';
        this.introOverlay.style.height = '100%';
        this.introOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.introOverlay.style.color = 'white';
        this.introOverlay.style.display = 'flex';
        this.introOverlay.style.flexDirection = 'column';
        this.introOverlay.style.justifyContent = 'center';
        this.introOverlay.style.alignItems = 'center';
        this.introOverlay.style.fontSize = '2em';
        this.introOverlay.style.zIndex = '1000'; // Make sure it overlays everything

        const instructions = document.createElement('div');
        instructions.innerText = 'How to Play: \n- Use keys A, S, D, F, G to play notes \n- Press J or K at the same time to strum them\n\nPress any key to continue...';
        instructions.style.textAlign = 'center';
        instructions.style.marginBottom = '20px';

        this.introOverlay.appendChild(instructions);
        document.body.appendChild(this.introOverlay);

        // Add an event listener to remove the overlay on key press
        const removeIntroOverlay = () => {
            document.body.removeChild(this.introOverlay);
            window.removeEventListener('keydown', removeIntroOverlay);
            this.isPaused = false;
            this.startGameLoop(); // Start the game after the overlay is removed
        };

        window.addEventListener('keydown', removeIntroOverlay);
    }

    setupFretboard(width, height, textureFile, numLanes) {
        this.fretboard = new Fretboard(
            width,
            height,
            textureFile,
            numLanes
        );
        // this.fretboard = new Fretboard(5, 15, 5, 'textures/GH2_beta-Metal.png');
        this.fretboard.addToScene(this.scene);
    }

    setupInputManager() {
        this.inputManager = new InputManager(this);
    }

    setupScoreManager() {
        this.scoreManager = new ScoreManager(this.fretboard, this.scene);
    }

    setupBackgroundManager(bgVideoPath, bgImgPath, useVideo) {
        this.backgroundManager = new BackgroundManager(bgVideoPath, bgImgPath, this.scene, this.camera, this.gui, useVideo);
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.pauseGame();
        } else {
            this.resumeGame();
        }
    }

    pauseGame() {
        // Freeze audio
        this.audioManager.pauseActiveSounds();

        // Show pause overlay
        this.pauseOverlay.style.display = 'block';
    }

    resumeGame() {
        // Resume animations
        this.startGameLoop();

        // Resume audio
        this.audioManager.resumeActiveSounds();

        // Hide pause overlay
        this.pauseOverlay.style.display = 'none';
    }

    createPauseOverlay() {
        this.pauseOverlay = document.createElement('div');
        this.pauseOverlay.style.position = 'fixed';
        this.pauseOverlay.style.top = 0;
        this.pauseOverlay.style.left = 0;
        this.pauseOverlay.style.width = '100%';
        this.pauseOverlay.style.height = '100%';
        this.pauseOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.pauseOverlay.style.color = 'white';
        this.pauseOverlay.style.display = 'flex';
        this.pauseOverlay.style.justifyContent = 'center';
        this.pauseOverlay.style.alignItems = 'center';
        this.pauseOverlay.style.fontSize = '3em';
        this.pauseOverlay.style.display = 'none';
        // this.pauseOverlay.innerText = 'Game Paused - Press ESC to Resume';
        document.body.appendChild(this.pauseOverlay);
    }

    setupNoteManager() {
        this.noteManager = new NoteManager(
            this.fretboard,
            this.audioManager,
        );
        this.noteManager.addTicksToScene(this.scene);
        this.noteManager.addAllNotesToScene(this.scene);
        // this.noteManager.addNextNotesToScene(this.scene);
    }

    setupAudioManager(mainSongFolder) {
        const soundEffects = {
            songStart: ['effects/song_start_1.mp3', 'effects/song_start_2.mp3', 'effects/song_start_3.mp3'],
            crowdStart: ['effects/crowd_256.mp3'],
            strumMiss: [
                'effects/note_miss_1.mp3',
                'effects/note_miss_2.mp3',
                'effects/note_miss_3.mp3',
                'effects/note_miss_4.mp3',
                'effects/note_miss_5.mp3',
                'effects/note_miss_6.mp3'
            ]
        };

        const mainSongAudioFile = mainSongFolder + '/full_song.mp3';

        this.audioManager = new AudioManager(
            mainSongAudioFile,
            soundEffects,
            this.listener
        );

        // this.songProperties = this.audioManager.getSongProperties();
        // console.log(this.songProperties)
        // this.initMusicPlayer(mainSongImgFile);
        // this.updateMusicPlayer(this.songProperties);
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
            50 // far
        );
        this.defaultCameraPosition = new THREE.Vector3(0, -9.9, 5);

        this.camera.position.copy(this.defaultCameraPosition);
        this.scene.add(this.camera);

        // Setup listener
        this.listener = new THREE.AudioListener();
        this.camera.add(this.listener);

        // Initialize OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        // Create a clock
        this.clock = new THREE.Clock();
    }

    setupStats() {
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.getElementById('stats-container').appendChild(this.stats.dom);
    }

    setupGUI() {
        this.gui = new GUI();

        // Camera settings
        const cameraFolder = this.gui.addFolder('Camera');
        cameraFolder.add(this.camera.position, 'x', -100, 100).name('X Position');
        cameraFolder.add(this.camera.position, 'y', -100, 100).name('Y Position');
        cameraFolder.add(this.camera.position, 'z', -100, 100).name('Z Position');
        cameraFolder.add(this.camera.rotation, 'x', 0, Math.PI).name('X Rotation');
        cameraFolder.close();

        this.gui.close();
    }

    setupHelpers() {
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
        // const helper = new THREE.CameraHelper( this.camera );
        // this.scene.add( helper );
        const lightHelper = new THREE.DirectionalLightHelper( this.directionalLight, 5 );
        this.scene.add( lightHelper );
    }

    setupLightManager() {
        this.lightManager = new LightManager(this.gui);
        this.lightManager.addToScene(this.scene);

        // // create helpers for all the lights in the lightManager depending on their type
        // this.lightManager.lights.forEach(light => {
        //     let helper;

        //     if (light instanceof THREE.DirectionalLight) {
        //         // light.position.normalize();
        //         helper = new THREE.DirectionalLightHelper(light, 1, 0x000000);
        //     } else if (light instanceof THREE.SpotLight) {
        //         helper = new THREE.SpotLightHelper(light);
        //     } else if (light instanceof THREE.PointLight) {
        //         helper = new THREE.PointLightHelper(light);
        //     } else if (light instanceof THREE.HemisphereLight) {
        //         helper = new THREE.HemisphereLightHelper(light);
        //     } else if (light instanceof THREE.RectAreaLight) {
        //         // RectAreaLightHelper is not part of the core three.js library, it might be in an example library
        //         helper = new RectAreaLightHelper(light);
        //     } else {
        //         console.warn('Unknown light type:', light);
        //         return;
        //     }

        //     this.scene.add(helper);
        // });
    }

    shakeCamera() {
        this.cameraShake.shake(this.camera, new THREE.Vector3(0.3, 0.1, 0.3), 100);
    }

    updateStrumAnimation(pressedLanes) {
        // Called on strum keyDown
        const currentNotes = this.noteManager.getCurrentNotes(); // currentNotes will vary from 0 to 4        
        console.log(currentNotes)

        // I want currentNotesLaneIndexes to store for every element n in currentNotes, the element n.laneIndex       
        // Compare them using a set
        const currentNotesLaneIndices = new Set(this.noteManager.getCurrentNotesLaneIndices());
        // const currentNotesLaneIndexes = new Set(currentNotes.map(note => note.laneIndex));
        const pressedLanesIndices = new Set(pressedLanes);
        
        // Check if we are pressing ALL AND ONLY the lanes of the currentNotes        
        const correctPress = Utils.EqualsSets(currentNotesLaneIndices, pressedLanesIndices);
        // console.log(currentNotes);
        // console.log(currentNotesLaneIndices);
        // console.log(pressedLanesIndices);
        // console.log(correctPress)
       
        if (currentNotes.length > 0 && correctPress) { // CORRECT HIT
            const currentTick = this.noteManager.currentTick;
            
            // Update score, re-put volume as original and generate hit effect 
            currentTick.handleHit(this.fretboard, this.scoreManager, this.audioManager, this.scene);
        } else { // MISS or OVERSTRUM
            this.shakeCamera();
            Tick.handleMiss(this.scoreManager, this.audioManager, currentNotes);
            this.audioManager.playRandomSoundEffect('strumMiss');

            // The missing notes event will be handled from the currentTick.update  
        }
    }

    // ----------------------------------------------------------------------------------------------------------------

    // Animation function
    gameLoop() {
        if (this.isPaused) return; // Skip the animation frame if the game is paused
        // Will be invoked again from resumeGame() function

        const deltaTime = this.clock.getDelta();
        this.fps = 1/deltaTime;
        this.stats.begin(); // Begin measuring FPS
        
        // Get pressed lanes in this frame
        const pressedLanesIndices = this.inputManager.getPressedLanes();
        
        // console.log(this.fps)
        this.noteManager.update(this.scoreManager, this.audioManager, this.fps, this.scene); // Update ticks and notes position and handles miss without strumming   
        this.fretboard.update(pressedLanesIndices, deltaTime, this.noteManager.tickSpeed); // Update fretboard texture and press effects
        
        this.cameraShake.update(this.camera);

        this.lightManager.update(this.scoreManager.starPower, deltaTime);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.stats.end(); // End measuring FPS

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // Starts the game and runs gameLoop
    startGame() {
        // this.test1();
        // this.test2();
        
        
        // Render everything on background
        // this.scene.background = new THREE.Color( 0xffffff );
        console.log(this.scene.background)
        this.renderer.render(this.scene, this.camera);
        this.isPaused = true;

        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.fretboard.fireEffects.forEach(fireEffect => {
                fireEffect.material.setPerspective(this.camera.fov, window.innerHeight);
            });
            if (this.isPaused) {
                this.renderer.render(this.scene, this.camera);
            }
        });

        // Add intro overlay that will run gameLoop
        this.createIntroOverlay();
    }

    test1() {
        const y_perfect_hit = -(this.fretboard.fretboardHeight / 2) + this.fretboard.pickupOffset;
        const y_start_hit = y_perfect_hit + (this.fretboard.pickupHeight+this.fretboard.pickupOffset/2) / 2;
        const y_end_hit = y_perfect_hit - (this.fretboard.pickupHeight+this.fretboard.pickupOffset/2) / 2
        const p1 = new THREE.Vector3(-this.fretboard.fretboardWidth/2, y_start_hit, 0);
        const p2 = new THREE.Vector3(+this.fretboard.fretboardWidth/2, y_start_hit, 0);
        const material = new THREE.LineBasicMaterial({
            color: 0xff0000,
        });
        const points = [];
        // Create line from points
        points.push(p1, p2);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const testMesh = new THREE.Line(geometry, material);

        const p3 = new THREE.Vector3(-this.fretboard.fretboardWidth/2, y_end_hit, 0);
        const p4 = new THREE.Vector3(+this.fretboard.fretboardWidth/2, y_end_hit, 0);
        const material2 = new THREE.LineBasicMaterial({
            color: 0xff0000,
        });
        const points2 = [];
        // Create line from points
        points2.push(p3, p4);
        const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
        const testMesh2 = new THREE.Line(geometry2, material2);

        const p5 = new THREE.Vector3(-this.fretboard.fretboardWidth/2, y_perfect_hit, 0);
        const p6 = new THREE.Vector3(+this.fretboard.fretboardWidth/2, y_perfect_hit, 0);
        const material3 = new THREE.LineBasicMaterial({
            color: 0xff0000,
        });
        const points3 = [];
        // Create line from points
        points3.push(p5, p6);
        const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);
        const testMesh3 = new THREE.Line(geometry3, material3);
            
        this.scene.add(testMesh, testMesh2, testMesh3);
    }
    
    test2() {
        const notes = []
        // notes.push(...this.noteManager.createNotes(0,3,false,false,false,0,1,2,3,4)) // normal
        notes.push(...this.noteManager.createNotes(0,3,true,false,false,0,1,2,3,4)) // special
        // notes.push(...this.noteManager.createNotes(0,3,false,false,false,3)) // normal star
        // notes.push(...this.noteManager.createNotes(0,3,true,false,false,4)) // special star

        notes.forEach(note => {
            note.addToScene(this.scene);
            note.mesh.visible = true
        })
    }

    startGameLoop() {
        this.audioManager.startAudioSequence(NoteManager.introMeasures, this.noteManager.measureDuration);
        this.gameLoop();
    }
}
