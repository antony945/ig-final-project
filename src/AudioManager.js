import * as THREE from 'three';
import ini from 'ini';

export default class AudioManager {
    constructor(mainSongPath, soundEffects, songIniPath, listener) {
        this.listener = listener;
        this.audioLoader = new THREE.AudioLoader();
        
        this.soundEffects = {};
        this.loadSoundEffects(soundEffects);

        this.songProperties = this.loadSongProperties(songIniPath);
        this.mainSong = new THREE.Audio(this.listener);
        this.loadMainSong(mainSongPath);

        this.activeSounds = [];

        // this.delay = 3000; // Delay in milliseconds before the main song starts
        // this.skipTime = 3; // Time in seconds to skip at the start of the song
    }

    async loadSongProperties(path) {
        const response = await fetch(path);
        const data = await response.text();
        return ini.parse(data).Song;
    }

    loadSoundEffects(soundEffects) {
        for (const [name, path] of Object.entries(soundEffects)) {
            const sound = new THREE.Audio(this.listener);
            this.audioLoader.load(path, (buffer) => {
                sound.setBuffer(buffer);
            });
            this.soundEffects[name] = sound;
        }
    }

    loadMainSong(path) {
        this.audioLoader.load(path, (buffer) => {
            this.mainSong.setBuffer(buffer);
            this.mainSong.setLoop(false);
        });
    }

    playMainSong() {
        if (!this.mainSong.isPlaying) {
            this.mainSong.play();
        }
    }

    pauseMainSong() {
        if (this.mainSong.isPlaying) {
            this.mainSong.pause();
        }
    }

    playSoundEffect(name) {
        const effect = this.soundEffects[name];
        if (effect && effect.isPlaying) {
            effect.stop();
        }
        if (effect) {
            effect.play();
        }
    }

    pauseSoundEffect(name) {
        const effect = this.soundEffects[name];
        if (effect && effect.isPlaying) {
            effect.pause();
        }
    }

    // TODO: TO implement
    pauseActiveSounds() {
        this.pauseMainSong();
    }

    // TODO: TO implement
    resumeActiveSounds() {
        this.playMainSong();
    }

    // pauseAllSounds() {
    //     this.mainSong.pause();

    //     Object.values(this.soundEffects).forEach(effect => {
    //         console.log("isPlaying? ", effect.isPlaying)
    //         effect.pause();
    //     });


    //     // // Clear all pending tasks and track remaining time
    //     // for (const task of this.delayedTasks) {
    //     //     clearTimeout(task.id);
    //     //     task.remaining -= Date.now() - task.start;
    //     // }
    // }

    // resumeAllSounds() {
    //     this.mainSong.play();

    //     Object.values(this.soundEffects).forEach(effect => {
    //         console.log("isPlaying? ", effect.isPlaying)
    //         effect.play();
    //     });

    //     // this.isPaused = false;

    //     // // Reschedule all tasks with remaining time
    //     // for (const task of this.delayedTasks) {
    //     //     task.start = Date.now();
    //     //     task.id = setTimeout(() => {
    //     //         task.callback();
    //     //         this.delayedTasks = this.delayedTasks.filter(t => t.id !== task.id);
    //     //     }, task.remaining);
    //     // }
    // }
}