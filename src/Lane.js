export default class Lane {
    constructor(index) {
        this.index = index;
        this.notes = [];
    }

    addNote() {
        // Add a note to this lane
    }

    update() {
        this.notes.forEach(note => note.update());
    }
}
