// import * as THREE from 'three';
import {Text} from 'troika-three-text'

// https://guitarhero.neoseeker.com/wiki/Game_Mechanics#:~:text=Every%20time%20you%20hit%2010,your%20score%20multiplier%20will%20increase.&text=For%20example%2C%20a%202x%20multiplier,400%20per%204%2Dnote%20chord.
// https://www.scorehero.com/forum/viewtopic.php?t=378
// https://wiki.scorehero.com/GuideScoringSystemFAQ
export default class ScoreManager {
    constructor(fretboard, scene) {
        this.score = 0;
        this.defaultMultiplier = 1;
        this.multiplier = this.defaultMultiplier;
        this.streakCount = 0;
        this.maxMultiplier = 4;
        this.loadingStarPower = false;
        this.starPower = false;
        this.starPowerMultiplier = 2;
        // this.starPowerMeasureDuration = 4; // Star power last for 4 measures - 4*beats_per_measure beats
        // for now let's use star power that lasts for a fixed number of notes, it's simple for now
        this.starPowerMeasureDuration = 2;
        this.starPowerCurrentTickCount = 0;

        this.regularNoteScore = 50;
               
        // Create streak text
        this.streak2 = new Text();
        this.streak2_default_text = "STREAK";
        this.streak2.fontSize = 0.55
        this.streak2.position.x = 0.3
        this.streak2.position.y = fretboard.fretboardHeight/2;
        this.streak2.position.z = 1.1;
        this.streak2.orientation = "+x+z"
        this.streak2.fontStyle = "italic"
        this.streak2.outlineWidth = 0.05
        this.streak2.outlineBlur = 0.05

        this.streak1 = new Text();
        this.streak1_default_text = "NOTE";
        this.streak1.position.x = 0.3
        this.streak1.fontSize = 0.8       
        this.streak1.position.y = fretboard.fretboardHeight/2;
        this.streak1.position.z = this.streak2.position.z+this.streak2.fontSize+0.2;
        this.streak1.orientation = "+x+z"
        this.streak1.fontStyle = "italic"
        this.streak1.outlineWidth = 0.05
        this.streak1.outlineBlur = 0.05
        // this.streak1.

        this.streakText = new Text();
        // this.streakText.text = this.streakCount.toString();
        this.streakText.fontSize = 1.2;
        this.streakText.position.x = -fretboard.fretboardWidth/2.8;
        this.streakText.position.y = fretboard.fretboardHeight/2;
        this.streakText.position.z = 1.95;
        this.streakText.orientation = "+x+z"
        // this.streakText.fontStyle = "italic"
        this.streakText.outlineWidth = 0.05
        this.streakText.outlineBlur = 0.05
        // this.streakText.textAlign = 'left' 
        this.addToScene(scene);

        this.thunderImg = document.getElementById('thunder');

        // Other initialization as needed
        this.updateScoreUI();
    }

    addToScene(scene) {
        scene.add(this.streak1, this.streak2, this.streakText)
    }

    updateScoreUI() {
        if (this.streakCount) {
            this.streakText.text = this.streakCount.toString();
            this.streak1.text = this.streak1_default_text;
            this.streak2.text = this.streak2_default_text;
            this.streakText.sync();
            this.streak1.sync();
            this.streak2.sync();
        }
        const score = document.getElementById('score');
        score.innerText = `${this.score}`;
        const multiplier = document.getElementById('multiplier-value');
        multiplier.innerText = `${this.multiplier}`;
        
        // this.drawStarPowerCircle();
        this.drawMultiplierCircle();
    }

    drawMultiplierCircle() {
        const canvas = document.getElementById('multiplier-circle');
        const ctx = canvas.getContext('2d');
        const radius = canvas.width / 2;
        const lineWidth = 10;
        const totalParts = 10
        const angleStep = (2 * Math.PI) / totalParts; // Divide circle into 10 parts
        var filledParts = this.streakCount % totalParts;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw the grey ring
        ctx.beginPath();
        ctx.arc(radius, radius, radius - lineWidth / 2, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        if (this.defaultMultiplier == this.maxMultiplier) {
            filledParts = 9
        }

        // Draw the filled part of the ring
        if (filledParts > 0) {
            ctx.beginPath();
            ctx.arc(radius, radius, radius - lineWidth / 2, -Math.PI / 2, (filledParts * angleStep) - Math.PI / 2);
            ctx.strokeStyle = 'aquamarine';
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }

    hideStarPowerCircle() {
        const canvas = document.getElementById('star-power-circle');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.thunderImg.style.display = 'none';
    }

    drawStarPowerCircle() {
        const canvas = document.getElementById('star-power-circle');
        const ctx = canvas.getContext('2d');
        const radius = canvas.width / 2;
        const lineWidth = 10;
        const totalParts = this.starPowerMeasureDuration * 8
        const angleStep = (2 * Math.PI) / totalParts; // Divide circle into 2*8 parts
        const filledParts = this.starPowerCurrentTickCount % totalParts;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw the aquamarine ring
        ctx.beginPath();
        ctx.arc(radius, radius, radius - lineWidth / 2, 0, 2 * Math.PI);
        ctx.strokeStyle = 'aquamarine';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    
        // Draw the filled part of the ring
        if (filledParts > 0) {
            ctx.beginPath();
            // ctx.arc(radius, radius, radius - lineWidth / 2, -Math.PI / 2, (filledParts * angleStep) - Math.PI/2);
            ctx.arc(radius, radius, radius - lineWidth / 2, -Math.PI / 2, (-Math.PI / 2) + (filledParts * angleStep), true);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }

    // --------------------------------------------------------------------------------

    incrementScore(points) {
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
        this.multiplier = 1;
        // this.updateScoreUI();
    }

    activateStarPower() {
        console.log("STAR POWER ACTIVATED")
        this.starPower = true;
        this.starPowerCurrentTickCount = 0;
        this.thunderImg.style.display = 'block';
    }

    deactivateStarPower() {
        console.log("STAR POWER DEACTIVATED")
        this.starPower = false;
        this.starPowerCurrentTickCount = 0;
        this.hideStarPowerCircle();
    }

    // TODO: Think if implement accuracy or not
    handleHit(hittedNotes) {
        // We have list of hitted notes, for each of them
        const isSomeNoteStar = hittedNotes.some(n => n.isSpecial);
        const isSomeNoteLastStar = hittedNotes.some(n => n.isLastSpecial);

        if (isSomeNoteStar && !this.loadingStarPower && !this.interruptedLoadingStarPower) { // First note of loading star power phase
            this.loadingStarPower = true;
        }
        
        if (isSomeNoteLastStar) { // Last note after loading star power phase => enter star power phase
            this.interruptedLoadingStarPower = false;
            
            if (this.loadingStarPower) {
                this.loadingStarPower = false;
                this.activateStarPower();
            }
        }

        // Increment score
        hittedNotes.forEach(n => {
            this.incrementScore(n.accuracy*this.regularNoteScore); // Accuracy based score
            // this.incrementScore(this.regularNoteScore); // Constant score for all notes
        });

        // Update just once the score UI
        this.updateScoreUI();
    }

    handleMiss(missedNotes) {
        if (this.loadingStarPower || missedNotes.some(n => n.isSpecial)) {
            this.interruptedLoadingStarPower = true;

            // We are no longer in the star power loading phase
            this.loadingStarPower = false;
        }
        if (missedNotes.some(n => n.isLastSpecial)) {
            this.interruptedLoadingStarPower = false;
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
