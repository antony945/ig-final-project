import * as THREE from 'three';
import ini from 'ini';
import fs from 'fs';

export default class AudioManager {
    constructor(mainSongPath, soundEffects, songIniPath, listener) {
        this.listener = listener;
        this.audioLoader = new THREE.AudioLoader();
        
        this.soundEffects = {};
        this.loadSoundEffects(soundEffects);

        this.songProperties = this.loadSongProperties(songIniPath);
        this.mainSong = new THREE.Audio(this.listener);
        this.loadMainSong(mainSongPath);

        this.delay = 3000; // Delay in milliseconds before the main song starts
    }

    async loadSongProperties(path) {
        const response = await fetch(path);
        const data = await response.text();
        return ini.parse(data).Song;
        // const data = fs.readFileSync(path, 'utf-8');
        // return ini.parse(data).Song;
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
        setTimeout(() => {
            this.mainSong.play();
        }, this.delay);
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

    stopSoundEffect(name) {
        const effect = this.soundEffects[name];
        if (effect && effect.isPlaying) {
            effect.stop();
        }
    }
}