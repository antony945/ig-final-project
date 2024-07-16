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

// https://discourse.threejs.org/t/round-edged-box-2/1448
export function RoundEdgedBox(width, height, depth, radius, widthSegments, heightSegments, depthSegments, smoothness) {
    width = width || 1;
    height = height || 1;
    depth = depth || 1;
    radius = radius || (Math.min(Math.min(width, height), depth) * .25);
    widthSegments = Math.floor(widthSegments) || 1;
    heightSegments = Math.floor(heightSegments) || 1;
    depthSegments = Math.floor(depthSegments) || 1;
    smoothness = Math.max(3, Math.floor(smoothness) || 3);

    let halfWidth = width * .5 - radius;
    let halfHeight = height * .5 - radius;
    let halfDepth = depth * .5 - radius;

    var geometry = new THREE.Geometry();

    // corners - 4 eighths of a sphere
    var corner1 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, 0, Math.PI * .5);
    corner1.translate(-halfWidth, halfHeight, halfDepth);
    var corner2 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, 0, Math.PI * .5);
    corner2.translate(halfWidth, halfHeight, halfDepth);
    var corner3 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, Math.PI * .5, Math.PI * .5);
    corner3.translate(-halfWidth, -halfHeight, halfDepth);
    var corner4 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, Math.PI * .5, Math.PI * .5);
    corner4.translate(halfWidth, -halfHeight, halfDepth);
    
    geometry.merge(corner1);
    geometry.merge(corner2);
    geometry.merge(corner3);
    geometry.merge(corner4);

    // edges - 2 fourths for each dimension
    // width
    var edge = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, 0, Math.PI * .5);
    edge.rotateZ(Math.PI * .5);
    edge.translate(0, halfHeight, halfDepth);
    var edge2 = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, Math.PI * 1.5, Math.PI * .5);
    edge2.rotateZ(Math.PI * .5);
    edge2.translate(0, -halfHeight, halfDepth);

    // height
    var edge3 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, 0, Math.PI * .5);
    edge3.translate(halfWidth, 0, halfDepth);
    var edge4 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, Math.PI * 1.5, Math.PI * .5);
    edge4.translate(-halfWidth, 0, halfDepth);

    // depth
    var edge5 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, 0, Math.PI * .5);
    edge5.rotateX(-Math.PI * .5);
    edge5.translate(halfWidth, halfHeight, 0);
    var edge6 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, Math.PI * .5, Math.PI * .5);
    edge6.rotateX(-Math.PI * .5);
    edge6.translate(halfWidth, -halfHeight, 0);

    edge.merge(edge2);
    edge.merge(edge3);
    edge.merge(edge4);
    edge.merge(edge5);
    edge.merge(edge6);

    // sides
    // front
    var side = new THREE.PlaneGeometry(width - radius * 2, height - radius * 2, widthSegments, heightSegments);
    side.translate(0, 0, depth * .5);

    // right
    var side2 = new THREE.PlaneGeometry(depth - radius * 2, height - radius * 2, depthSegments, heightSegments);
    side2.rotateY(Math.PI * .5);
    side2.translate(width * .5, 0, 0);

    side.merge(side2);

    geometry.merge(edge);
    geometry.merge(side);

    // duplicate and flip
    var secondHalf = geometry.clone();
    secondHalf.rotateY(Math.PI);
    geometry.merge(secondHalf);

    // top
    var top = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
    top.rotateX(-Math.PI * .5);
    top.translate(0, height * .5, 0);

    // bottom
    var bottom = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
    bottom.rotateX(Math.PI * .5);
    bottom.translate(0, -height * .5, 0);

    geometry.merge(top);
    geometry.merge(bottom);

    geometry.mergeVertices();

    return geometry;
}

// https://github.com/felixmariotto/three-screenshake/tree/master
export function ScreenShake() {

	return {

		// When a function outside ScreenShake handle the camera, it should
		// always check that ScreenShake.enabled is false before.
		enabled: false,

		_timestampStart: undefined,

		_timestampEnd: undefined,

		_startPoint: undefined,

		_endPoint: undefined,



		// update(camera) must be called in the loop function of the renderer,
		// it will re-position the camera according to the requested shaking.
		update: function update(camera) {
			if ( this.enabled == true ) {
				const now = Date.now();
				if ( this._timestampEnd > now ) {
					let interval = (Date.now() - this._timestampStart) / 
						(this._timestampEnd - this._timestampStart) ;
					this.computePosition( camera, interval );
				} else {
					camera.position.copy(this._startPoint);
					this.enabled = false;
				};
			};
		},



		// This initialize the values of the shaking.
		// vecToAdd param is the offset of the camera position at the climax of its wave.
		shake: function shake(camera, vecToAdd, milliseconds) {
            if (this.enabled) return;
			this.enabled = true ;
			this._timestampStart = Date.now();
			this._timestampEnd = this._timestampStart + milliseconds;
			this._startPoint = new THREE.Vector3().copy(camera.position);
			this._endPoint = new THREE.Vector3().addVectors( camera.position, vecToAdd );
		},




		computePosition: function computePosition(camera, interval) {

			// This creates the wavy movement of the camera along the interval.
			// The first bloc call this.getQuadra() with a positive indice between
			// 0 and 1, then the second call it again with a negative indice between
			// 0 and -1, etc. Variable position will get the sign of the indice, and
			// get wavy.
			if (interval < 0.4) {
				var position = this.getQuadra( interval / 0.4 );
			} else if (interval < 0.7) {
				var position = this.getQuadra( (interval-0.4) / 0.3 ) * -0.6;
			} else if (interval < 0.9) {
				var position = this.getQuadra( (interval-0.7) / 0.2 ) * 0.3;
			} else {
				var position = this.getQuadra( (interval-0.9) / 0.1 ) * -0.1;
			}
			
			// Here the camera is positioned according to the wavy 'position' variable.
			camera.position.lerpVectors( this._startPoint, this._endPoint, position );
		},

		// This is a quadratic function that return 0 at first, then return 0.5 when t=0.5,
		// then return 0 when t=1 ;
		getQuadra: function getQuadra(t) {
			return 9.436896e-16 + (4*t) - (4*(t*t)) ;
		}

	};

};

export function EqualsLists(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
}

export function EqualsSets(a, b) {
    return a.size === b.size && [...a].every((value) => b.has(value));
}
