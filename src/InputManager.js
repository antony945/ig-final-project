export default class InputManager {
    constructor() {
        this.keyMap = {
            1: 'A',
            2: 'S',
            3: 'D',
            4: 'F',
            5: 'G'
        };

        window.addEventListener('keydown', (e) => this.onKeyDown(e));
    }

    onKeyDown(e) {
        // Handle key press
    }

    checkInput() {
        // Check if the correct key is pressed
    }
}
