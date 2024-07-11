export default class AudioManager {
    constructor() {
        this.audio = new Audio('path/to/your/song.mp3');
    }

    play() {
        this.audio.play();
    }
}
