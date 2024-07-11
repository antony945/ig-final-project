import Note from './Note.js';
import Lane from './Lane.js';

export default class NoteManager {
    constructor() {
        this.notes = [];
        this.lanes = [new Lane(1), new Lane(2), new Lane(3), new Lane(4), new Lane(5)];
    }

    generateNotes(songData) {
        // Generate notes based on song data and assign them to lanes
    }

    update() {
        this.notes.forEach(note => note.update());
    }

    checkCollision() {
        // Check if notes are hit correctly
    }
}
