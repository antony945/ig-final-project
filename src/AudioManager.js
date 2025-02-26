import * as THREE from 'three';
import songData from '../public/songs/in_too_deep.json'

export default class AudioManager {
    constructor(mainSongPath, soundEffects, listener) {
        this.listener = listener;
        this.audioLoader = new THREE.AudioLoader();
        
        this.soundEffects = {};
        this.loadSoundEffects(soundEffects);
        
        this.mainSong = new THREE.Audio(this.listener);
        this.loadMainSong(mainSongPath);
        this.isOriginalVolume = true;
        this.currentVolume = this.mainSong.getVolume()
        this.originalVolume = this.currentVolume;

        this.delayedTasks = [];
        this.activeSounds = [];

        // this.delay = 3000; // Delay in milliseconds before the main song starts
        // this.skipTime = 3; // Time in seconds to skip at the start of the song
    }

    getMainSongCurrentTime() {
        const currentTime = this.mainSong.context.currentTime - this.mainSong.startTime
        return currentTime
    }

    startAudioSequence(introMeasures, measureDuration) {
        const index = 2;
        this.scheduleTask(() => this.playSoundEffect('songStart', index, 0.5), 500);
        this.scheduleTask(() => this.playDefaultSoundEffect('crowdStart', 0.8), 1000);
        this.scheduleTask(() => this.playMainSong(), (introMeasures)*measureDuration*1000-measureDuration/songData.songInfo.resolution*1000);
    }

    scheduleTask(callback, delay) {
        const task = {
            callback,
            remaining: delay,
            start: Date.now(),
        };

        this.delayedTasks.push(task);

        task.id = setTimeout(() => {
            callback();
            this.delayedTasks = this.delayedTasks.filter(t => t.id !== task.id);
        }, delay);
        
    }

    loadSoundEffects(soundEffects) {
        for (const [name, paths] of Object.entries(soundEffects)) {
            this.soundEffects[name] = []
            paths.forEach(path => {
                const sound = new THREE.Audio(this.listener);
                this.audioLoader.load(path, (buffer) => {
                    sound.setBuffer(buffer);
                });
                this.soundEffects[name].push(sound);
            });
        }
    }

    loadMainSong(path) {
        this.audioLoader.load(path, (buffer) => {
            this.mainSong.setBuffer(buffer);
            this.mainSong.setLoop(false);
        });
    }

    setMainSongVolume(new_volume) {
        if (new_volume == this.currentVolume) return

        this.currentVolume = new_volume;
        this.isOriginalVolume = (this.currentVolume === this.originalVolume)
        this.mainSong.setVolume(this.currentVolume);
    }

    lowerMainSongVolume(amount) {
        this.setMainSongVolume(Math.max(0, this.mainSong.getVolume() - amount));
    }

    lowerMainSongVolumePercentage(percentage) {
        const reductionAmount = this.mainSong.getVolume() * (percentage / 100);
        this.setMainSongVolume(Math.max(0, this.mainSong.getVolume() - reductionAmount));
    }

    resetMainSongVolume() {
        this.setMainSongVolume(this.originalVolume);
    }

    playMainSong() {
        console.log("Stared main song here...")

        if (this.mainSong.isPlaying) return;
        this.mainSong.play();
        return this.mainSong.duration;
    }

    pauseMainSong() {
        if (! this.mainSong.isPlaying) return;
        this.mainSong.pause();
    }

    lowerSoundEffectVolume(name, index, amount) {
        const effects = this.soundEffects[name];
        if (!effects) return;
        
        const e = effects[index];
        if (!e) return;
        
        const newVolume = Math.max(0, e.getVolume() - amount);
        e.setVolume(newVolume);
    }

    playSoundEffect(name, index, amount=0) {
        const effects = this.soundEffects[name];
        if (! effects) return;

        const e = effects[index];


        this.lowerSoundEffectVolume(name, index, amount);

        if (e.isPlaying) {
            e.stop();
        }

        e.play();
    }

    playDefaultSoundEffect(name, amount=0) {
        return this.playSoundEffect(name, 0, amount);
    }

    playRandomSoundEffect(name, amount=0) {
        const effects = this.soundEffects[name];
        if (! effects) return;
        const randomIndex = Math.floor(Math.random() * effects.length);
        return this.playSoundEffect(name, randomIndex, amount);
        // const e = effects[randomIndex];
        // if (! e.isPlaying) {
        //     e.stop();
        // }
        // e.play();
    }

    pauseSoundEffect(name) {
        const effects = this.soundEffects[name];
        if (! effects) return;

        const e = effects[0];
        if (e.isPlaying) {
            e.pause();
        }
    }

    getActiveSounds() {
        const activeSounds = [];
        
        if (this.mainSong.isPlaying) {
            activeSounds.push(this.mainSong);
        }

        for (const sound of Object.values(this.soundEffects)) {
            for (const s of sound) {
                if (s.isPlaying) {
                    activeSounds.push(s);
                }
            }
        }

        return activeSounds;
    }

    pauseActiveSounds() {
        this.activeSounds = this.getActiveSounds();

        this.activeSounds.forEach(sound => {
            sound.pause();
        });

        // Clear all pending tasks and track remaining time
        for (const task of this.delayedTasks) {
            clearTimeout(task.id);
            task.remaining -= Date.now() - task.start;
        }
    }

    resumeActiveSounds() {
        // No need to re-fetch active sounds, as resume is always after a pause
        this.activeSounds.forEach(sound => {
            sound.play();
        }); 

        // Reschedule all tasks with remaining time
        for (const task of this.delayedTasks) {
            task.start = Date.now();
            task.id = setTimeout(() => {
                task.callback();
                this.delayedTasks = this.delayedTasks.filter(t => t.id !== task.id);
            }, task.remaining);
        }
    }
}