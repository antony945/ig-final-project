import Note from './Note.js';
import Lane from './Lane.js';
import Tick from './Tick.js';
import Fretboard from './Fretboard.js';
import songData from '../public/songs/sample.json'

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
    static introMeasures = 4

    constructor(fretboard, beatsPerMinute, beatsPerMeasure, notesFile, mainSong) {
        this.fretboard = fretboard;
        this.mainSong = mainSong;   // To sync audio with notes
        
        // Starting from the song, it extracts information about measure
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
        this.tickSpace = this.fretboard.fretboardHeight / this.visibleTickLinesCount;
        this.measureSpace = this.tickSpace*this.ticksPerMeasure;   

        // Setup speed
        this.speed = 0;
        this.tickSpeed = 0;
        this.setupSpeed();

        // It all starts from 0, will use this
        this.currentTick = null;
        this.currentTickCounter = 0;
        this.currentMeasureCounter = -(NoteManager.introMeasures);
        this.totalTickCounter = this.getTotalTickCounter(this.currentMeasureCounter, this.currentTickCounter);

        // Initialize fretboard (halfBeatLines will contain all the visible lines in the fretboard) - they will cycle
        this.totalTicks = 0;
        this.tickLines = this.createFretboardTicks(this.fretboard);

        // Import notes from a note file where it's written their measure, beat, semi-beat, location and maybe the hold (and if they are in a loading star phase or not)
        // this.loadNotesFromFile(notesFile).then(addedNotes => {
        //     this.allNotes = addedNotes;
        // });
        this.allNotes = this.loadNotesFromJson(songData)
        this.allNotesIndex = 0;
    }

    getMeasureCounter(totalTickCounter) {
        return Math.floor(totalTickCounter / this.ticksPerMeasure)
    }

    getTickCounter(totalTickCounter) {
        return (totalTickCounter % this.ticksPerMeasure)
    }

    getTotalTickCounter(measureCounter, tickCounter) {
        return measureCounter*this.ticksPerMeasure + tickCounter
    }

    async loadNotesFromFile(filePath) {
        try {
            const response = await fetch(filePath);
            const jsonData = await response.json();
            return this.loadNotesFromJson(jsonData);
        } catch (error) {
            console.error('Error loading JSON file:', error);
            return null;
        }
    }

    // https://songbpm.com/@franz-ferdinand/take-me-out
    loadNotesFromJson(songData) {
        const songInfo = songData.songInfo;
        const notes = songData.notes;

        const addedNotes = [];

        let loadingStarPhase = false;
        notes.forEach(item => {
            if (item === "begin_loading_star_phase") {
                loadingStarPhase = true;
            } else if (item === "end_loading_star_phase") {
                loadingStarPhase = false;
            } else {
                const measure = item.measure;

                addedNotes.push(...this.createNotes(measure, item.tick, loadingStarPhase, ...item.lanes));
            };
        });

        // console.log(addedNotes)
        return addedNotes;
    }

    // Create just the visible ones and every time one will go away, a new one will be created
    createFretboardTicks() {
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
        // console.log(this.totalTicks)

        const tickLines = []

        for (let tickIndex = 0; tickIndex < this.totalTicks; tickIndex++) {
            // Create tick line passing fretboard width and height (and offset probably)
            const tickLine = new Tick(
                tickIndex,
                this.ticksPerMeasure,
                this.tickSpace,
                this.totalTicks,
                this.fretboard.fretboardWidth,
                this.fretboard.fretboardHeight,
                this.fretboard.pickupOffset,
                this.fretboard.pickupHeight,
                // fretboard.holeRadius
            );
            // console.log(tickLine)
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
        this.speed = (this.fretboard.fretboardHeight / (NoteManager.timeToReactMillisecond/1000));
        // console.log("speed ", this.speed1)
        // console.log("speed ", this.speed2)
    }

    createNotes(measure, tick, isSpecial, ...laneIndexes) {
        const addedNotes = [];

        // Get tickLine
        const currentTick = this.tickLines[tick]

        // Create here the note and pass it to the tick
        laneIndexes.forEach(laneIndex => {
            const lane = this.fretboard.lanes[laneIndex];

            // Create all notes already in their position (even outside the lane)
            const noteY = currentTick.mesh.position.y + this.measureSpace * measure
            const note = new Note(measure, currentTick.tickIndex, laneIndex, lane.x, noteY, lane.z, this.fretboard.laneWidth/4, this.fretboard.laneWidth, this.fretboard.laneHeight, Fretboard.colors[laneIndex], isSpecial);
            addedNotes.push(note);
        });
        
        return addedNotes;
    }

    addTicksToScene(scene) {
        this.tickLines.forEach(tl => {
            tl.addToScene(scene);
        });
    }

    getAllNotes() {
        return this.allNotes;
        Object.values(this.allNotes).forEach(measureNotes => {
            allNotes.push(...measureNotes);
        });

        return allNotes
    }

    getNotes(measure) {
        return this.allNotes.filter(note => note.measure === measure)

        if (! this.allNotes[measure])   return [];
        return this.allNotes[measure]
    }

    // Not used
    addNotesToScene(measure) {
        this.allNotes[measure].forEach(note => note.addToScene(scene));
    }

    addAllNotesToScene(scene) {
        // console.log(this.getAllNotes())
        this.getAllNotes().forEach(note => note.addToScene(scene));
    }

    // Not used
    hasToBeVisible(note) {
        // has to be visible by checking its measure and tick
        const currentTotalTick = this.currentMeasureCounter*this.ticksPerMeasure + this.currentTickCounter
        const noteTotalTick = note.measure*this.ticksPerMeasure + note.tick

        return noteTotalTick < (currentTotalTick+this.ticksPerMeasure)
    }

    // Not used
    addNextNotesToScene(scene) {
        // allNotes are ordered based on measure, break when you found some nodes having a bigger measure

        for (this.allNotesIndex in this.allNotes) {
            const note = this.allNotes[this.allNotesIndex];
            if (this.hasToBeVisible(note)) {
                note.addToScene(scene);
                this.tickLines[note.tick].addNote(note);
            } else {
                break;
            }
        }

        this.allNotes.forEach(note => {
            note.addToScene(scene);
        });
    }

    // addNoteToLanes(tick, isSpecial, ...laneIndexes) {
    //     const addedNotes = [];

    //     // Get tickLine
    //     const currentTick = this.tickLines[tick]

    //     // Create here the note and pass it to the tick
    //     laneIndexes.forEach(laneIndex => {
    //         const lane = this.fretboard.lanes[laneIndex];
    //         const note = new Note(currentTick.tickIndex, laneIndex, lane.x, currentTick.mesh.position.y, lane.z, this.fretboard.laneWidth/4, this.fretboard.laneWidth, this.fretboard.laneHeight, Fretboard.colors[laneIndex], isSpecial);
    //         const addedNote = currentTick.addNote(note);
    //         if (addedNote) {
    //             addedNotes.push(addedNote);
    //         }
    //     });
        
    //     return addedNotes;
    // }

    getCurrentNotes() {
        console.log(this.currentTick)
        if (! this.currentTick) return []

        return this.currentTick.getNotes();
    }

    getCurrentNotesLaneIndices() {
        if (! this.currentTick) return []

        return this.currentTick.getNotesLaneIndices();
    }

    updateVisibleNotes() {
        const start = this.totalTickCounter+this.ticksPerMeasure
        const end = start + this.totalTicks;
        // console.log("finding notes from ", start, " to ", end)
        for (; this.allNotesIndex < this.allNotes.length; this.allNotesIndex++) {
            // console.log(this.allNotesIndex)
            const note = this.allNotes[this.allNotesIndex];
            const noteTotalTick = this.getTotalTickCounter(note.measure, note.tick);
            // console.log(noteTotalTick)
            if (noteTotalTick >= start && noteTotalTick < end) {
                // console.log(noteTotalTick, noteTotalTick % this.totalTicks)
                const where_to_add = noteTotalTick % this.totalTicks
                this.tickLines[where_to_add].addNote(note);
            } else {
                // console.log("finished")
                break
            }
        }
    }

    // -------------------------------------------------------------------------------------------------------------------

    update(scoreManager, audioManager, fps, scene) {
        // console.log(this.currentMeasureCounter);
        // console.log(this.currentTickCounter);
        // console.log(this.totalTickCounter)
        // console.log(this.currentTick);

        this.tickSpeed = this.speed/fps;
        // console.log(this.tickSpeed)

        // Initialize current tick
        this.currentTick = null;

        // Update tick lines
        this.tickLines.forEach(tl => {
            const wasColliding = tl.collided;
            tl.update(this.tickSpeed, scoreManager, audioManager);

            // console.log("here")
            if (tl.collided) {
                this.currentTick = tl;

                if (!wasColliding) {
                    this.updateVisibleNotes();

                    this.totalTickCounter++;
                    this.currentTickCounter++;
                    // this.currentTickCounter = this.totalTickCounter % this.totalTicks;
                    
                    if (this.currentTickCounter === this.ticksPerMeasure) {
                        this.currentTickCounter = 0;
                        this.currentMeasureCounter++;
                    }
    
                    this.currentTick = this.tickLines[this.currentTickCounter];
                    this.currentTick = tl;
    
                    // if (Object.keys(tl.notes).length !== 0) {
                    //     console.log(tl.tickIndex + ") - " + tl.tickType + " - PosY: " + tl.mesh.position.y);
                    //     console.log(tl.notes)
                    // }
                }
            }
        });

        // console.log(this.currentTick)
    }
}