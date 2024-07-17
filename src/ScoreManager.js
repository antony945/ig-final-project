// https://guitarhero.neoseeker.com/wiki/Game_Mechanics#:~:text=Every%20time%20you%20hit%2010,your%20score%20multiplier%20will%20increase.&text=For%20example%2C%20a%202x%20multiplier,400%20per%204%2Dnote%20chord.
// https://www.scorehero.com/forum/viewtopic.php?t=378
// https://wiki.scorehero.com/GuideScoringSystemFAQ
export default class ScoreManager {
    constructor() {
        this.score = 0;
        this.multiplier = 1;
        this.streakCount = 0;
        this.maxMultiplier = 4;
        this.loadingStarPower = false;
        this.starPower = false;
        this.starPowerMultiplier = 2;
        this.starPowerMeasureDuration = 4; // Star power last for 4 measures - 4*beats_per_measure beats
        this.notesDefaultScore = 50;

        // Other initialization as needed
        this.updateScoreUI(this.score);
    }

    updateScoreUI() {
        const score = document.getElementById('score');
        score.innerText = `${this.score}`;
        const multiplier = document.getElementById('multiplier');
        multiplier.innerText = `${this.multiplier}x`;
        const streak = document.getElementById('streak');
        streak.innerText = `( ${this.streakCount} )`;
    }

    incrementScore(points) {
        this.score += points * this.multiplier;
        this.streakCount++;
        if (this.streakCount === 10) {
            this.multiplier = 2;
        } else if (this.streakCount === 20) {
            this.multiplier = 3;
        } else if (this.streakCount === 30) {
            this.multiplier = 4;
        }

        this.updateScoreUI(this.score);
    }

    resetStreak() {
        this.streakCount = 0;
        this.multiplier = 1; // it also resets the multiplier
        this.updateScoreUI(this.multiplier);
    }

    activateStarPower() {
        this.starPower = true;
        this.multiplier *= this.starPowerMultiplier;
    }

    deactivateStarPower() {
        this.starPower = false;
        this.multiplier /= this.starPowerMultiplier;
    }

    // TODO: Think if implement accuracy or not
    handleHit(isNoteSpecial, noteAccuracy=1) {
        if (isNoteSpecial) {
            // We entered the star power loading, keep that in mind
            this.loadingStarPower = true;
        }

        this.incrementScore(noteAccuracy*this.notesDefaultScore); // Constant score for all notes
    }

    handleMiss() {
        if (this.loadingStarPower) {
            // We are no longer in the star power loading phase
            this.loadingStarPower = false;
        }

        // If we were in the star power we must deactivate it
        if (this.starPower) {
            this.deactivateStarPower();
        }

        this.resetStreak();
    }
}
