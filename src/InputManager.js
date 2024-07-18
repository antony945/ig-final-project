export default class InputManager {

    constructor(gameManager) {
        // TODO: Understand why doesn't work with 5 key at the same time
        this.keyMap = {
            'A': 0,
            'S': 1,
            'D': 2,
            'F': 3,
            'G': 4,
            'J': 'strum',
            'K': 'strum'
        };

        this.keysPressed = {};
        this.gameManager = gameManager;

        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
    }

    onKeyDown(e) {
        if (e.key === 'Escape') {
            this.gameManager.togglePause();
        }

        if (this.keyMap[e.key.toUpperCase()] !== undefined) {
            // Check if the pressed key was strum
            if (this.keyMap[e.key.toUpperCase()] == 'strum') {
                this.gameManager.updateStrumAnimation(this.getPressedLanes());
            }

            this.keysPressed[e.key.toUpperCase()] = true;
        }
        
    }

    onKeyUp(e) {
        if (this.keyMap[e.key.toUpperCase()] !== undefined) {
            // this.keysPressed[e.key.toUpperCase()] = false;
            delete this.keysPressed[e.key.toUpperCase()];
        }
    }

    isLaneKeyPressed(laneIndex) {
        return Object.keys(this.keysPressed).some(key => this.keyMap[key] === laneIndex);
    }

    getPressedLanes() {
        return Object.keys(this.keysPressed)
            .filter(key => this.keyMap[key] !== 'strum')
            .map(key => this.keyMap[key]);
        return o;
    }

    isStrumPressed() {
        return this.keysPressed['J'] === true;
    }

}
