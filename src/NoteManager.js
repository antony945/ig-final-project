import Note from './Note.js';
import Lane from './Lane.js';
import Tick from './Tick.js';
import Fretboard from './Fretboard.js';

// SPEED SHOULD BE SPACE / TIME
// SPACE  IS HOW MUCH SPACE I WANT TO COVER
// - FROM SPAWN POINT TO PERFECT COLLISION POINT
// TIME IS HOW MUCH TIME I WANT THE PLAYER TO HAVE IN ORDER TO REACT
// - 3s
// If (songposition + 3000 > beatLine.songposition) { spawn(beatLine); }
// If you know you want the note to start at spawnY and end at endY, and take 3 seconds to get there:
// progress = 1 - ((note.songposition - songposition) / 3000);
// noteY = spawnY + ((spawnY - endY) * progress);

// https://www.reddit.com/r/gamedev/comments/2fxvk4/heres_a_quick_and_dirty_guide_i_just_wrote_how_to/

export default class NoteManager {
    static timeToReactMillisecond = 2000;
    static ticksPerBeat = 2;
    static defaultFPS = 60;

    constructor(fretboard, beatsPerMinute, beatsPerMeasure, song, notesFile) {
        this.fretboard = fretboard;

        this.song = song;
        
        // Starting from the song, it extracts information about measure
        // BPM
        // BPS = BPM/60
        // SECONDS PER BEAT (beat duration seconds) = 60/BPM (crotched duration)
        // measure duration = beat duration * X with X/4 (most of the time 4/4, X=4)
        this.beatsPerMinute = beatsPerMinute;
        this.beatsPerMeasure = beatsPerMeasure;
        this.ticksPerMeasure = NoteManager.ticksPerBeat*this.beatsPerMeasure;
        this.beatsPerSecond = this.beatsPerMinute/60;
        
        // Duration in seconds of beat and measure
        this.beatDuration = 1/this.beatsPerSecond;
        this.measureDuration = this.beatDuration * this.beatsPerMeasure;
        
        // Other parameters
        this.visibleBeatLinesCount = Math.floor(NoteManager.timeToReactMillisecond/1000 * this.beatsPerSecond);
        this.visibleTickLinesCount = this.visibleBeatLinesCount*NoteManager.ticksPerBeat;
        // TICK_SPACE = LANE_LENGTH/(TIME_TO_REACT (s) * BeatPerSecond * 2)
        // TICK_SPACE = LANE_LENGTH/(DEFAULT_VISIBLE_BEAT_LINES*2)
        this.tickSpace = this.fretboard.height / this.visibleTickLinesCount; 

        // Initialize fretboard (halfBeatLines will contain all the visible lines in the fretboard)
        // they will cycle
        this.totalTicks = 0;
        this.tickLines = this.createFretboardTicks(this.fretboard, this.DEFAULT_FPS);

        this.setupSpeed();

        // Notes stored in dictionary ordered by their half beat count
        // this.notesDict = this.importNotes(notesFile);

        // Helper
        this.laneLength = this.fretboard.laneHeight;        
        this.lanes = this.fretboard.lanes;

        // It all starts from 0, will use this to create
        this.currentTickCounter = 0;
        this.currentNotes = {};
    }

    incrementCount() {
        this.totalTicks=(this.totalTicks+1)%(this.ticksPerMeasure)
    }

    isMeasure() {
        return this.halfBeatCount === 0;
    }

    isBeat() {
        return this.halfBeatCount%2 === 0;
    }

    isHalfBeat() {
        return this.halfBeatCount%2 === 1;
    }

    // https://songbpm.com/@franz-ferdinand/take-me-out
    init(songData) {
        
    }

    // Create just the visible ones and every time one will go away, a new one will be created
    createFretboardTicks(fretboard) {
        // In the game, there are three types of divider lines: thin lines, thick lines, and thick lines which are even thicker at the edges (I'll call them huge lines).
        // We will define a measure as the time represented between two consecutive huge lines.
        // Each measure is divided by a certain number of thick lines representing beats within the measure. And finally each beat is divided in half by the thin lines (called tick).
        // huge lines -> i'll call them Measures ()
        // thick lines -> i'll call them Baat ()
        // thin lines -> i'll call them Tick

        // space between tick lines depends on:
        // - how many tick lines are visible in a certain moment
        //      - and this depends on how much time we want to give the user to react, so how much time we want the line to take to go from top of the fretboard to bottom of it
        // - fretboard length (in height)
        // DEFAULT_VISIBLE_BEAT_LINES = TIME_TO_REACT (s) * BPS (beat/s) = [beat]
        // TICK_SPACE = LANE_LENGTH/(TIME_TO_REACT (s) * BeatPerSecond * 2)
        // e.g.
        // 3.0 seconds to react

        // BPS*3.5 = 6 beats in 3.5 seconds ()
        // EBAT_SPACE = TICK_SPACE * 2
        // MEASURE_SPACE = BEAT_SPACE * X

        // Decide how many ticks to create
        // Best idea: create this.tickPerMeasure that will every time cycle
        // use visibleTickLines only if it's grater than ticksPerMeasure
        this.totalTicks = this.ticksPerMeasure;
        if (this.totalTicks < this.visibleTickLinesCount) {
            this.totalTicks = this.visibleTickLinesCount; 
        }

        const tickLines = []
        // this.totalTicks = 2;
        for (let tickIndex = 0; tickIndex < this.totalTicks; tickIndex++) {
            // Create tick line passing fretboard width and height (and offset probably)
            const tickLine = new Tick(
                tickIndex,
                this.ticksPerMeasure,
                this.tickSpace,
                fretboard.width,
                fretboard.height,
                fretboard.pickupOffset,
                fretboard.holeRadius
            );
            
            tickLines.push(tickLine);
        }

        // TODO: Disable visibility for lanes out of scope

        return tickLines; 
    }

    setupSpeed() {
        // lane_speed, calculated by knowing that we want a default number of beats lines on the screen
        // e.g.
        // DEFAULT_VISIBLE_BEAT_LINES = TIME_TO_REACT (s) * BPS (beat/s) = [beat]
        //
        // LANE_LENGTH = 20 (space)
        // lane_speed = LANE_LENGTH/(DEFAULT_VISIBLE_BEAT_LINES * SECONDS_PER_BEAT) / FPS
        // AND SO
        // lane_speed = LANE_LENGTH/TIME_TO_REACT / FPS [ threejs.uom / frame]
        // decide if check sometime how many fps we have in order to speedup or not the game
        // this.speed = (this.fretboard.height / (this.visibleBeatLinesCount * this.beatDuration)) / NoteManager.defaultFPS;
        this.speed = (this.fretboard.height / (NoteManager.timeToReactMillisecond/1000));
        // console.log("speed ", this.speed1)
        // console.log("speed ", this.speed2)
    }

    addTicksToScene(scene) {
        this.tickLines.forEach(tl => {
            tl.addToScene(scene);
        });
    }

    importNotes(noteFile) {
        // Import notes from a note file where it's written their measure, beat, semi-beat, location and maybe the hold (and if they are in a loading star phase or not)
    }

    generateNotes() {
        // Generate notes based on song data and assign them to lanes
        // Assign note to every beat
    }

    addNoteToLanes(measure, ...laneIndexes) {
        const addedNotes = [];

        // Convert measure from 0 to 7
        measure = measure % this.ticksPerMeasure;

        // Get tickLine
        const currentTick = this.tickLines[measure]
        console.log(currentTick);

        // Create here the note and pass it to the tick
        laneIndexes.forEach(laneIndex => {
            const lane = this.lanes[laneIndex];
            const note = new Note(currentTick.tickIndex, laneIndex, lane.x, currentTick.mesh.position.y, lane.z, this.fretboard.laneWidth/4, this.fretboard.laneWidth, this.fretboard.laneHeight, this.fretboard.colors[laneIndex]);
            const addedNote = currentTick.addNoteToLane(laneIndex, note);
            if (addedNote) {
                addedNotes.push(addedNote);
            }
        });

        return addedNotes;
    }

    update(fps) {
        const speed = this.speed/fps;

        // Update tick lines
        this.tickLines.forEach(tl => {
            tl.update(speed);
        });

        // Check if one of them has collided
        this.currentTick = this.tickLines.filter((tl) => tl.collided)
        if (this.currentTick.length > 0) {
            this.currentTick = this.currentTick[0]
            this.currentNotes = this.currentTick.notes;
        } else {
            this.currentNotes = {}
        }
    }

    getCurrentNotes() {
        return Object.values(this.currentNotes);
    }

    getCurrentNotesLaneIndexes() {
        return Object.keys(this.currentNotes).map(Number);
    }

    checkCollision() {
        // Check if notes are hit correctly
        // it checks collision between lines and pickup hole
    }
}
