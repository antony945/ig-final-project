// https://guitarhero.neoseeker.com/wiki/Game_Mechanics#:~:text=Every%20time%20you%20hit%2010,your%20score%20multiplier%20will%20increase.&text=For%20example%2C%20a%202x%20multiplier,400%20per%204%2Dnote%20chord.
// https://www.scorehero.com/forum/viewtopic.php?t=378
// https://wiki.scorehero.com/GuideScoringSystemFAQ
export default class ScoreManager {
    constructor() {
        this.score = 0;
        this.defaultMultiplier = 1;
        this.multiplier = this.defaultMultiplier;
        this.streakCount = 0;
        // this.maxMultiplier = 4;
        this.loadingStarPower = false;
        this.starPower = false;
        this.starPowerMultiplier = 2;
        // this.starPowerMeasureDuration = 4; // Star power last for 4 measures - 4*beats_per_measure beats
        // for now let's use star power that lasts for a fixed number of notes, it's simple for now
        this.starPowerNoteDuration = 20;
        this.starPowerCurrentNoteCount = 0;

        this.regularNoteScore = 50;

        // Other initialization as needed
        this.updateScoreUI(this.score);
    }

    updateScoreUI() {
        if (this.starPower) {
            multiplier.style.color = 0x0000ff
        }

        const score = document.getElementById('score');
        score.innerText = `${this.score}`;
        const multiplier = document.getElementById('multiplier');
        multiplier.innerText = `${this.multiplier}x`;
        const streak = document.getElementById('streak');
        streak.innerText = `( ${this.streakCount} )`;

        // TODO: Add support for star power (make a little star appear) and display remainingStarPowerNotes (=this.starPowerNoteDuration - this.starPowerCurrentNoteCount)
    }

    incrementScore(points) {
        if (this.starPower) {
            this.starPowerCurrentNoteCount++;
            if (this.starPowerCurrentNoteCount == this.starPowerNoteDuration) {
                this.deactivateStarPower();
            }
        }

        this.streakCount++;
        if (this.streakCount === 10) {
            this.defaultMultiplier = 2;
        } else if (this.streakCount === 20) {
            this.defaultMultiplier = 3;
        } else if (this.streakCount === 30) {
            this.defaultMultiplier = 4;
        }


        this.multiplier = this.defaultMultiplier;
        if (this.starPower) {
            this.multiplier *= this.starPowerMultiplier;
        }

        this.score += Math.floor(points * this.multiplier);
    }

    resetStreak() {
        this.streakCount = 0;
        this.defaultMultiplier = 1; // it also resets the multiplier
        // this.updateScoreUI();
    }

    activateStarPower() {
        this.starPower = true;
    }

    deactivateStarPower() {
        this.starPower = false;
        this.starPowerCurrentNoteCount = 0;
    }

    // TODO: Think if implement accuracy or not
    handleHit(hittedNotes) {
        // We have list of hitted notes, for each of them
        const isSomeNoteStar = hittedNotes.some(n => n.isStarNote);
        if (isSomeNoteStar && !this.loadingStarPower) { // First note of loading star power phase
            this.loadingStarPower = true;
        } else if (! isSomeNoteStar && this.loadingStarPower) { // First note after loading star power phase => enter star power phase
            this.loadingStarPower = false;
            this.activateStarPower();
        }

        // Increment score
        hittedNotes.forEach(n => {
            // this.incrementScore(n.accuracy*this.regularNoteScore); // Accuracy based score
            this.incrementScore(this.regularNoteScore); // Constant score for all notes
        });

        // Update just once the score UI
        this.updateScoreUI();
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

        // Update just once the score UI
        this.updateScoreUI();
    }
}
