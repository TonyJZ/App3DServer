function EnergyCubeFeature(app, energyUsageConfig) {
    this.app = app;
    this.energyUsageConfig = energyUsageConfig;
    this.originalObjects = [];
    this.energyCubes = [];
    // this.seoWrapper = new APP3D.SEObjectWrapper();
    this.energyCubesParents = [];
}

EnergyCubeFeature.prototype.init = function(parents) {
    this.originalObjects = [];
    this.energyCubes = [];
    this.energyCubesParents = parents;

    this.energyCubesParents.forEach((parent) => {
        for (var i = 0; i < this.energyUsageConfig.length; ++i) {
            let name = this.energyUsageConfig[i].name;
            var result = [];
            parent.traverse((child) => {
                if (this.energyUsageConfig[i].regexMatch !== undefined && this.energyUsageConfig[i].regexMatch) {
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
                var cube = new APP3D.BaseObject();
                if (child.type !== "Mesh") {
                    // var singleGeometry = new APP3D.Geometry();
                    child.traverse((element) => {
                        if (element.type === "Mesh") {
                            element.updateMatrixWorld(); // as needed
                            var glowingMesh = this.seoWrapper.createGlowObject(element.geometry, this.app.getCurrentCamera(), {
                                color: this.energyUsageConfig[i].color,
                                c: 1.0,
                                p: 0.1,
                                side: "FrontSide",
                                blending: "NormalBlending"
                            });
                            glowingMesh.applyMatrix(element.matrixWorld);
                            cube.add(glowingMesh);
                        }
                    });
                    // var mesh = new APP3D.Mesh(singleGeometry);

                } else if (child.type === "Mesh") {
                    child.updateMatrixWorld();
                    var glowingMesh = this.seoWrapper.createGlowObject(child.geometry, this.app.getCurrentCamera(), {
                        color: this.energyUsageConfig[i].color,
                        c: 1.0,
                        p: 0.1,
                        side: "FrontSide",
                        blending: "NormalBlending"
                    });
                    glowingMesh.applyMatrix(child.matrixWorld);
                    cube.add(glowingMesh);
                }

                cube.visible = false;
                cube.scale.set(1, this.energyUsageConfig[i].height, 1);
                this.energyCubes.push(cube);
                parent.add(cube);
            });
        }
    });
};
EnergyCubeFeature.prototype.showEnergyCube = function(bShow) {

    this.originalObjects.forEach((object) => {
        object.visible = !bShow;
    });
    this.energyCubes.forEach((object) => {
        object.visible = bShow;
    });
};

