import {getThreeAccess} from "./threeDRenderScript.js";
import * as THREE from "./three.module.min.js"
import {OBJLoader} from "./OBJLoader.js"

export const buildings = () =>{
    const threeAccess = getThreeAccess();

    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load('./assets/planet.jpg');

    const geometry = new THREE.SphereGeometry(20, 100, 100); // Radius, widthSegments, heightSegments
    const material = new THREE.MeshStandardMaterial({
    //   color: "#fff", // Blue color
      map:sphereTexture,
      metalness: 0.5,
      roughness: 0.5
    });
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(frustumWidth  - 1, frustumHeight - 1, 0);
    threeAccess.scene.add(sphere);
}

const building_init = (pathName , scaleArray , positionArray) =>{
    const threeAccess = getThreeAccess();

    //load 3d environment
    const loader = new OBJLoader();
    loader.load(
        mode === "create" ?`../assets/${pathName}` : `./assets/${pathName}`, // Replace with the actual path
        (object) => {
            object.scale.set(...scaleArray); // Scale the model
            object.position.set(...positionArray); // Scale the model
            threeAccess.scene.add(object); // Add the loaded model to the scene
            console.log("Model loaded successfully!");
        },
        (xhr) => {
            console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`); // Loading progress
        },
        (error) => {
            console.error("Error loading model:", error);
        }
    );
    //load 3d environment

}