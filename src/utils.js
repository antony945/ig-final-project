import * as THREE from 'three';

export function RemoveObject3D(object3D) {
    if (!(object3D instanceof THREE.Object3D)) return false;

    // for better memory management and performance
    if (object3D.geometry) object3D.geometry.dispose();

    if (object3D.material) {
        if (object3D.material instanceof Array) {
            // for better memory management and performance
            object3D.material.forEach(material => material.dispose());
        } else {
            // for better memory management and performance
            object3D.material.dispose();
        }
    }
    object3D.removeFromParent(); // the parent might be the scene or another Object3D, but it is sure to be removed this way
    return true;
}

export function EqualsLists(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
}

export function EqualsSets(a, b) {
    return a.size === b.size && [...a].every((value) => b.has(value));
}
