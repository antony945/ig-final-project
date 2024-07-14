export default class InputManager {
    constructor() {
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
}
