class createScene {
    //Constructor for making a basic starting scene.
    constructor() {
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 20, height: 20 }, scene);
        engine.runRenderLoop(function () {
            scene.render();
        });
        window.addEventListener("resize", function () {
            engine.resize();
        });
    }
}

class camera {
    constructor(masterClass) {
        const currentScene = masterClass;
        currentScene.consoleOut();
    }

    getCoordinated() {

    }

    setCoordinates() {

    }

    getFacing() {

    }

    setFacing() {

    }


}

class ground {
    constructor(masterClass) {

    }

    getHeight() {

    }

    setHeight() {

    }

    getTexture() {

    }

    setTexture() {

    }

    getColor() {

    }

    setColor() {

    }
}

class light {
    constructor(masterClass) {

    }
}






//Test Code
const myScene = new createScene();
const myCamera = new camera(myScene);




