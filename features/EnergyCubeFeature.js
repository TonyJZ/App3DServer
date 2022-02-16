// "energyUsageConfig" format:
// {
//     cubes: [
//         {
//             name:   String (e.g.: "a5"),
//             height: Number (e.g.: 15),
//             color:  Hex (e.g.: 0xa9e622)
//         },
//         // ...
//     ],
//     outlinesObj: {
//         name:           String,
//         description:    String,
//         label:          String,
//         path:           String,
//         type:           String
//     }
// }
function EnergyCubeFeature(app, energyUsageConfig, mode = 0) {
    this.energyUsageConfig = energyUsageConfig;
    if (this.energyUsageConfig === undefined) {
        console.error("Error in retrieving energyUsageConfig configuration. Please double check " +
                      "your featuresConfig and refer to the documentation");
        return;
    }

    this.app3dApp = app;
    this.originalScene = app.getCurrentScene();
    this.mode = mode;

    this.originalObjects = [];
    this.energyCubes = [];
    this.energyCubesParents = [];
}

EnergyCubeFeature.prototype.init = function(scene, parents = null, callback = null) {
    this.scene = scene;
    this.originalObjects = [];
    this.energyCubes = [];
    this.energyCubesParents = parents;
    if (this.energyCubesParents === undefined || this.energyCubesParents === null) {
        this.energyCubesParents = this.scene.children;
    }

    // change the material to create a glowing object
    if (this.mode === 0) {
        this.energyCubesParents.forEach((parent) => {
            parent.updateMatrixWorld();
            for (var i = 0; i < this.energyUsageConfig.cubes.length; ++i) {
                let name = this.energyUsageConfig.cubes[i].name;
                var result = [];
                parent.traverse((child) => {
                    if (this.energyUsageConfig.cubes[i].regexMatch !== undefined && this.energyUsageConfig.cubes[i].regexMatch) {
                        if (child.name.search(name) !== -1 && child.type === "Mesh") {
                            result.push(child);
                        }
                    } else {
                        if (child.name === name) {
                            result.push(child);
                        }
                    }
                });

                result.forEach((child) => {
                    this.originalObjects.push(child);
                    if (child.type !== "Mesh") {
                        child.traverse((element) => {
                            if (element.type === "Mesh") {
                                element.updateMatrixWorld(); // as needed
                                let cube = new APP3D.GlowingObject(
                                    element.geometry,
                                    this.app3dApp.getCurrentCamera(),
                                    {
                                        color: this.energyUsageConfig.cubes[i].color,
                                        c: 1.0,
                                        p: 0.1,
                                        side: "FrontSide",
                                        blending: "NormalBlending"
                                    }
                                );
                                cube.applyMatrix(element.matrixWorld);
                                this.energyCubes.push(cube);
                                parent.add(cube);

                                cube.visible = false;
                                cube.setOpacity(0);
                                cube.scale.set(1, this.energyUsageConfig.cubes[i].height, 1);
                            }
                        });
                    } else if (child.type === "Mesh") {
                        child.updateMatrixWorld();
                        let cube = new APP3D.GlowingObject(
                            child.geometry,
                            this.app3dApp.getCurrentCamera(),
                            {
                                color: this.energyUsageConfig.cubes[i].color,
                                c: 1.0,
                                p: 0.1,
                                side: "FrontSide",
                                blending: "NormalBlending"
                            }
                        );
                        cube.applyMatrix(child.matrixWorld);
                        this.energyCubes.push(cube);
                        parent.add(cube);

                        cube.visible = false;
                        cube.setOpacity(0);
                        cube.scale.set(1, this.energyUsageConfig.cubes[i].height, 1);
                    }
                });
            }
        });
        // this.energyCubes.forEach((cube) => {
        //     this.scene.add(cube, true);
        // });

        if (callback !== null) {
            callback(this.energyCubes);
        }
    } else if (this.mode === 1) {
        // use the 2D outline to extrude a glowing object
        var energyUsageParams = [];
        this.energyUsageConfig.cubes.forEach((element) => {
            energyUsageParams[element.name] = element;
        });

        if (this.energyUsageConfig.outlinesObj === undefined) {
            return;
        }
        let outlineObjs = new APP3D.BaseObject(this.energyUsageConfig.outlinesObj, (filledObj) => {
            filledObj.traverse((object) => {
                if (object.type === "LineSegments") {
                    if (energyUsageParams[object.name] !== undefined) {
                        let energyBox = new APP3D.EnergyBox(
                            object,
                            energyUsageParams[object.name].height,
                            energyUsageParams[object.name].color,
                            this.app3dApp.getCurrentCamera()
                        );

                        energyBox.name = object.name;
                        energyBox.info = {
                            name: object.name,
                            labelMode: "boundingBox",
                            label: (energyUsageParams[object.name].label === undefined || energyUsageParams[object.name].label  === null) ? "EnergyCube" : energyUsageParams[object.name].label
                        };
                        this.energyCubes.push(energyBox);
                        this.scene.add(energyBox, true);
                    }
                }
            });

            if (callback !== null) {
                callback(this.energyCubes);
            }
        });
    }
};

EnergyCubeFeature.prototype.showEnergyCube = function(bShow) {
    this.originalObjects.forEach((object) => {
        object.visible = !bShow;
        if (object.isBaseObject) {
            object.setOpacity((bShow) ? 0 : 1);
        }
    });
    this.energyCubes.forEach((object) => {
        object.visible = bShow;
        object.setOpacity((bShow) ? 1 : 0);
    });

    if (bShow) {
        if (this.originalScene !== this.scene) {
            this.app3dApp.switchScene(this.scene, null, null, false);
        }
    } else {
        if (this.originalScene !== this.scene) {
            this.app3dApp.switchScene(this.originalScene, null, null, false);
        }
    }
};

