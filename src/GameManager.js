import Renderer from './Renderer.js';
import Fretboard from './Fretboard.js';
import AudioManager from './AudioManager.js';
import NoteManager from './NoteManager.js';
import InputManager from './InputManager.js';
import Stats from 'stats.js';

export default class GameManager {
    constructor() {
        this.renderer = new Renderer();
        // this.audioManager = new AudioManager();
        // this.noteManager = new NoteManager();
        // this.inputManager = new InputManager();

        this.fretboard = new Fretboard(5, true);
        this.fretboard.addNoteToLane(0);
        // this.fretboard.addNoteToLane(1);
        // this.fretboard.addNoteToLane(2);
        // this.fretboard.addNoteToLane(3);
        // this.fretboard.addNoteToLane(4);

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
        this.fretboard.update(); // Update lanes and notes

        this.renderer.render();
        this.stats.end(); // End measuring FPS
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}
