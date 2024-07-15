import Note from './Note.js';
import Lane from './Lane.js';

// SPEED SHOULD BE SPACE / TIME
// SPACE  IS HOW MUCH SPACE I WANT TO COVER
// - FROM SPAWN POINT TO PERFECT COLLISION POINT
// TIME IS HOW MUCH TIME I WANT THE PLAYER TO HAVE IN ORDER TO REACT
// - 3s
// If (songposition + 3000 > note.songposition) { spawn(note); }
// If you know you want the note to start at spawnY and end at endY, and take 3 seconds to get there:
// progress = 1 - ((note.songposition - songposition) / 3000);
// noteY = spawnY + ((spawnY - endY) * progress);

// https://www.reddit.com/r/gamedev/comments/2fxvk4/heres_a_quick_and_dirty_guide_i_just_wrote_how_to/

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
