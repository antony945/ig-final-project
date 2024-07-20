import * as THREE from 'three';

export default class Note {
    static starPowerColor = 0x4FDDDA;

    // TODO: Support starPower parameter to change appearance during starPower
    constructor(measure, tick, laneIndex, start_x, start_y, start_z, noteRadius, laneWidth, laneHeight, color, isSpecial=false, isLastSpecial=false, starPowerActive=false) {
        this.measure = measure;
        this.tick = tick;
        this.laneIndex = laneIndex;
        this.noteRadius = noteRadius;
        this.laneWidth = laneWidth;
        this.laneHeight = laneHeight;
        this.color = color;
        this.x = start_x;
        this.z = start_z;
        this.start_y = start_y;
        this.max_y = laneHeight / 2;
        this.min_y = -laneHeight / 2;
        this.meshName = "lane_" + laneIndex;

        // Start from the top and ensure it is in front of the fretboard
        this.starting_position = new THREE.Vector3(this.x, this.start_y, this.z);

        // Define materials
        this.mainMaterial = this.createRegularMaterial()
        this.sideMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.2,
            roughness: 0.6,
            side: THREE.DoubleSide
        });
        // this.mainMaterialStarPower = this.createStarPowerMaterial();
        
        // Normal circular note
        this.mesh = this.createMesh(this.mainMaterial, this.sideMaterial, isSpecial);

        this.mesh.castShadow = true; // Ensure the note casts shadows
        this.mesh.receiveShadow = true; // Ensure the note receives shadows

        // Other parameters
        this.collided = false;
        this.accuracy = 0;
        this.hitted = false;
        // Is true if the note is part of the loading star power phase
        this.isSpecial = isSpecial;
        this.isLastSpecial = isLastSpecial;
        this.isStarPowerMaterialOn = false;
    }

    createRegularMaterial() {
        return new THREE.MeshStandardMaterial({
            color: this.color, // Base color of the material
            metalness: 0.6,  // metallic
            roughness: 0.4,   // Slightly smooth for a reflecstive look
            name: "regular_"+this.color,
            wireframe: false,
            side: THREE.DoubleSide
        });
    }

    createStarPowerMaterial() {
        return new THREE.MeshNormalMaterial({
            name: "starPower",
            wireframe: false,
            side: THREE.DoubleSide
        });
    }

    createEdgeMesh(geometry, color, thresholdAngle=120) {
        const edgeGeometry = new THREE.EdgesGeometry(geometry, thresholdAngle);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: color });
        const edgeMesh = new THREE.LineSegments(edgeGeometry, edgeMaterial);
        return edgeMesh;
    };

    createMesh(mainMaterial, sideMaterial, isSpecial) {
        this.material = mainMaterial;

        const bottomRadius = .95*this.noteRadius;
        const topRadius = .4*this.noteRadius;  
        // const topTopRadius = .3*this.noteRadius;
        const bottomHeight = .3*this.noteRadius;
        const centralHeight = .4*this.noteRadius;
        const topHeight = .1*this.noteRadius;

        // Bottom + Central mesh - Colored half-cone
        // var bottomMesh, centralMesh;
        
        var meshes; 
        if (isSpecial) {
            meshes = this.createStarMeshes(topRadius, bottomRadius, centralHeight, bottomHeight, topHeight, sideMaterial, mainMaterial);
        } else {
            meshes = this.createRegularMeshes(topRadius, bottomRadius, centralHeight, bottomHeight, topHeight, sideMaterial, mainMaterial);
        }
        
        const bottomMesh = meshes.bottom.mesh
        const centralMesh = meshes.central.mesh
        const topMesh = meshes.top.mesh
        
        const edgeColor = 0x000000
        const bottomEdges = this.createEdgeMesh(meshes.bottom.geometry, edgeColor);
        const centralEdges = this.createEdgeMesh(meshes.central.geometry, edgeColor);
        const topEdges = this.createEdgeMesh(meshes.top.geometry, edgeColor);
        
        bottomMesh.add(bottomEdges);
        centralMesh.add(centralEdges);
        centralMesh.name = "central";
        topMesh.add(topEdges);

        // FINAL NOTE
        const mesh = new THREE.Object3D();
        mesh.add(bottomMesh);
        mesh.add(centralMesh);
        mesh.add(topMesh);
        mesh.position.copy(this.starting_position);
        mesh.name = this.meshName
        // mesh.name = "lane_" + this.laneIndex;

        return mesh

        // this.geometry = new THREE.SphereGeometry(this.noteRadius*0.9, 32, 32);
        // this.material = new THREE.MeshBasicMaterial({ color: this.color });
        // this.mesh = new THREE.Mesh(this.geometry, this.material);

        // Position the note at the top of the lane
        // this.mesh.position.copy(this.starting_position);
    }

    createRegularMeshes(topRadius, bottomRadius, centralHeight, bottomHeight, topHeight, sideMaterial, mainMaterial) {
        bottomRadius *= 1.25;
        
        const bottomGeometry = new THREE.CylinderGeometry(bottomRadius, bottomRadius, bottomHeight, 32, 1);
        // const bottomGeometry = new THREE.TorusGeometry(bottomRadius, smallHeight, 12, 32);
        const bottomMesh = new THREE.Mesh(bottomGeometry, sideMaterial);
        bottomMesh.rotation.x = Math.PI / 2;
        bottomMesh.rotation.y = Math.PI / 2;
        
        const centralGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, centralHeight, 32, 1);
        const centralMesh = new THREE.Mesh(centralGeometry, mainMaterial);
        centralMesh.rotation.x = Math.PI / 2;
        centralMesh.rotation.y = Math.PI / 2;
        centralMesh.position.z = (centralHeight/2) + bottomHeight/2;

        // Top - White half-cone
        const topGeometry = new THREE.CylinderGeometry(topRadius, topRadius, topHeight, 32, 1);
        const topMesh = new THREE.Mesh(topGeometry, sideMaterial);
        topMesh.rotation.x = Math.PI / 2;
        topMesh.rotation.y = Math.PI / 2;
        topMesh.position.z = centralHeight + bottomHeight - topHeight;
        return {
            bottom: {
                geometry: bottomGeometry,
                mesh: bottomMesh,
            },
            central: {
                geometry: centralGeometry,
                mesh: centralMesh,
            },
            top: {
                geometry: topGeometry,
                mesh: topMesh
            }
        }
    }

    createStarMeshes(topRadius, bottomRadius, centralHeight, bottomHeight, topHeight, sideMaterial, mainMaterial) {
        // Create the star-shape
        const outerRadius = bottomRadius*1.5;
        const innerRadius = bottomRadius*0.75;
        const points = 5;
        const verticesBottom = [];
        const verticesCentral = [];
    
        // Base mesh 
        for (let i = 0; i < points; i++) {
            const thetaOuter = (i * 2 * Math.PI) / points;
            const thetaInner = ((i + 0.5) * 2 * Math.PI) / points;
            verticesBottom.push(Math.cos(thetaOuter) * outerRadius, Math.sin(thetaOuter) * outerRadius, 0-bottomHeight/2);
            verticesBottom.push(Math.cos(thetaInner) * innerRadius, Math.sin(thetaInner) * innerRadius, 0-bottomHeight/2);
        }

        // Create intermediate vertices with no factor
        const intermediateVertexIndex1 = verticesBottom.length / 3;
        const intermediateFactor1 = 1.0
        for (let i = 0; i < points; i++) {
            const thetaOuter = (i * 2 * Math.PI) / points;
            const thetaInner = ((i + 0.5) * 2 * Math.PI) / points;
            verticesBottom.push(Math.cos(thetaOuter) * outerRadius * intermediateFactor1, Math.sin(thetaOuter) * outerRadius * intermediateFactor1, bottomHeight/2);
            verticesBottom.push(Math.cos(thetaInner) * innerRadius * intermediateFactor1, Math.sin(thetaInner) * innerRadius * intermediateFactor1, bottomHeight/2);
            
            verticesCentral.push(Math.cos(thetaOuter) * outerRadius * intermediateFactor1, Math.sin(thetaOuter) * outerRadius * intermediateFactor1, bottomHeight/2);
            verticesCentral.push(Math.cos(thetaInner) * innerRadius * intermediateFactor1, Math.sin(thetaInner) * innerRadius * intermediateFactor1, bottomHeight/2);
        }

        // Create intermediate vertices with factor
        const intermediateVertexIndex2 = verticesCentral.length / 3;
        const intermediateFactor2 = topRadius;
        for (let i = 0; i < points; i++) {
            const thetaOuter = (i * 2 * Math.PI) / points;
            const thetaInner = ((i + 0.5) * 2 * Math.PI) / points;
            verticesCentral.push(Math.cos(thetaOuter) * outerRadius * intermediateFactor2, Math.sin(thetaOuter) * outerRadius * intermediateFactor2, centralHeight+bottomHeight);
            verticesCentral.push(Math.cos(thetaInner) * innerRadius * intermediateFactor2, Math.sin(thetaInner) * innerRadius * intermediateFactor2, centralHeight+bottomHeight);
        }

        // Create the top point of the cone
        // const topVertexIndex = vertices.length/3;
        // vertices.push(0, 0, 3);

        // Create the indices for the faces
        const indicesBottom = [];
        const indicesCentral = [];
        for (let i = 0; i < points * 2; i++) {
            const nextIndex = (i + 1) % (points * 2);
            indicesBottom.push(i, nextIndex, intermediateVertexIndex1 + i);
            indicesBottom.push(nextIndex, intermediateVertexIndex1 + nextIndex, intermediateVertexIndex1 + i);
            
            indicesCentral.push(i, nextIndex, intermediateVertexIndex1 + i);
            indicesCentral.push(nextIndex, intermediateVertexIndex1 + nextIndex, intermediateVertexIndex1 + i);

            // indicesCentral.push(intermediateVertexIndex1 + i, intermediateVertexIndex1 + nextIndex, intermediateVertexIndex2 + i);
            // indicesCentral.push(intermediateVertexIndex1 + nextIndex, intermediateVertexIndex2 + nextIndex, intermediateVertexIndex2 + i);
        }

        // Create the vertices and faces for the bottom
        const bottomGeometry = new THREE.BufferGeometry();
        // Set vertices
        bottomGeometry.setAttribute('position',
            new THREE.BufferAttribute(
                new Float32Array(
                    verticesBottom
                ), 3
            )
        )
        // Set faces
        bottomGeometry.setIndex(indicesBottom);
        bottomGeometry.computeVertexNormals();
        
        // Darken bottom mesh with main material color
        const bottomMaterial = sideMaterial.clone()
        if (mainMaterial.color === undefined) {
            bottomMaterial.color.set(0x000000)
        } else {
            bottomMaterial.color.set(this.darkenColor(mainMaterial.color, .95))
        }
        
        // Create the geometry and mesh
        const bottomMesh = new THREE.Mesh(bottomGeometry, bottomMaterial);

        // Create the vertices and faces for the bottom
        const centralGeometry = new THREE.BufferGeometry();
        // Set vertices
        centralGeometry.setAttribute('position',
            new THREE.BufferAttribute(
                new Float32Array(
                    verticesCentral
                ), 3
            )
        )
        // Set faces
        centralGeometry.setIndex(indicesCentral);
        centralGeometry.computeVertexNormals();
        // Create the geometry and mesh    
        const centralMesh = new THREE.Mesh(centralGeometry, mainMaterial);

        // Top - White half-cone
        const topGeometry = new THREE.CylinderGeometry(topRadius, topRadius, topHeight, 32, 1);
        const topMesh = new THREE.Mesh(topGeometry, sideMaterial);
        topMesh.rotation.x = Math.PI / 2;
        topMesh.rotation.y = Math.PI / 2;
        topMesh.position.z = centralHeight + bottomHeight - topHeight;        
        
        return {
            bottom: {
                geometry: bottomGeometry,
                mesh: bottomMesh,
            },
            central: {
                geometry: centralGeometry,
                mesh: centralMesh,
            },
            top: {
                geometry: topGeometry,
                mesh: topMesh
            }
        }
    }
    
    darkenColor(color, percentage) {
        const hsl = {};
        color.getHSL(hsl);
        hsl.l *= (1 - percentage); // Reduce lightness by the percentage
        const darkenedColor = new THREE.Color();
        darkenedColor.setHSL(hsl.h, hsl.s, hsl.l);
        return darkenedColor;
    }

    update(interruptedLoadingStarPower, starPower, scene) {
        if (this.isSpecial) {
            this.mesh.rotation.z += 0.03;
        
            if (interruptedLoadingStarPower) {
                // Need to change its shape
                // Unique way is to remove from scene and add another
                this.removeFromScene(scene);
                // Change mesh creating a new one normal-shaped
                this.mesh = this.createMesh(this.mainMaterial, this.sideMaterial, false);
                // Add it asato scene
                this.addToScene(scene);
                // scene.add(this.mesh);
            }
        }
        if (!this.isStarPowerMaterialOn && starPower) {
            this.material.color.setHex(Note.starPowerColor);
            this.isStarPowerMaterialOn = true;
        } else if (this.isStarPowerMaterialOn && !starPower) {
            this.material.color.setHex(this.color);
            this.isStarPowerMaterialOn = false;
        }

        // if (starPower) {
        //     scene.traverse(obj => {
        //         if(obj.isMesh && obj.material.name.includes('regular')) {
        //            obj.material = this.mainMaterialStarPower;
        //         }
        //     });
        //     this.isStarPowerMaterialOn = true;
        // } else if (this.isStarPowerMaterialOn && !starPower) {
            
        //     scene.traverse(obj => {
        //         if (obj.isMesh && obj.material.name.includes('starPower')) {
        //             obj.material = this.mainMaterial;
        //         }
        //     });
        //     // this.mesh.getObjectByName('central').material = this.mainMaterial;
        //     // console.log(this.mesh)
        //     // this.mesh.material.color.set(this.color);
        //     this.isStarPowerMaterialOn = false;
        // }
    }
    
    reset() {
        // Put it back on topgrou
        this.mesh.position.copy(this.starting_position);
        // Reset other parameters
        this.accuracy = 0;
        this.collided = false;
        this.hit = false;
    }

    addToScene(scene) {
        this.mesh.visible = false;
        scene.add(this.mesh);
    }

    removeFromScene(scene) {
        scene.remove(this.mesh);
        // TODO: This would have to remove the note from the scene once hitted
        // But now for testing purpose it's just reset it on original position
        // this.reset();
    }

    checkCollision(pickupHoleMesh) {
        // Check if the note collide with the pickup hole mesh
        const noteBox = new THREE.Box3().setFromObject(this.mesh);
        const pickupBox = new THREE.Box3().setFromObject(pickupHoleMesh);

        this.collided = noteBox.intersectsBox(pickupBox);
        this.accuracy = 0;
        if (this.collided) {
            // Calculate collision accuracy
            const noteCenterY = this.mesh.position.y;
            const pickupCenterY = pickupBox.min.y + (pickupBox.max.y - pickupBox.min.y) / 2;

            // Accuracy is higher when note is closer to the center of the pickup
            const distance = Math.abs(noteCenterY - pickupCenterY);
            const maxDistance = (pickupBox.max.y - pickupBox.min.y) / 2;

            this.accuracy = Math.max(0, 1 - (distance / maxDistance));
        }
        return { collided: this.collided, accuracy: this.accuracy };
    }
}
