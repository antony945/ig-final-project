import Renderer from './Renderer.js';
import AudioManager from './AudioManager.js';
import NoteManager from './NoteManager.js';
import InputManager from './InputManager.js';
import Fretboard from './Fretboard.js';
import Stats from 'stats.js';

export default class GameManager {
    constructor() {
        this.renderer = new Renderer();
        // this.audioManager = new AudioManager();
        // this.noteManager = new NoteManager();
        // this.inputManager = new InputManager();
        this.fretboard = new Fretboard();
        this.fretboard.addToScene(this.renderer.scene);
    
        // Initialize Stats.js
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.getElementById('stats-container').appendChild(this.stats.dom);        
    }

    startGame() {
        // this.audioManager.play();
        this.gameLoop();
    }

    gameLoop() {
        this.stats.begin(); // Begin measuring FPS
        // this.noteManager.update();
        // this.inputManager.checkInput();
        this.renderer.render();
        this.stats.end(); // End measuring FPS
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}
