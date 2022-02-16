function InteriorSceneFeature(app3dApp, interiorConfig) {
    this.app3dApp = app3dApp;
    this.interiorConfig = interiorConfig;
    this.isSeparated = false;
    this.displacement = interiorConfig.displacement;
    this.direction = 1 ;
    this.speed = interiorConfig.speed;
    this.isAnimationOngoing = false;
    this.floors = [];
    this.isInterior = false;
    this.isIndoorLightsAdded = false;

    this.indoorDirectionalLight = null;
    this.indoorHemisphereLight = null;
    this.indoorPointLight = null;
    this.indoorSpotLight = null;
}

InteriorSceneFeature.prototype.switchToInterior = function(sceneName, floorExp, onSelect, onProgress, onHover) {
    this.floorExp = floorExp;
    this.onSelect = onSelect;
    this.onHover = onHover;
    this.isInterior = true;
    this.app3dApp.switchScene(sceneName, this.onLoad.bind(this), onProgress);
    this.app3dApp.getCurrentScene().setSkyBoxImage("jpg", "assets/blueSky/");
    this.app3dApp.getCurrentCamera().zoomOutZoomInPoint(this.interiorConfig.finalPoint, 1, 2, this.interiorConfig.finalLookAtPoint, this.interiorConfig.finalPoint, null);

    this.app3dApp.getCurrentScene().sun.intensity = this.interiorConfig.sunIntensity;
    this.app3dApp.getCurrentScene().ambientLight.intensity = this.interiorConfig.ambientLightIntensity;
    this.app3dApp.getCurrentScene().ambientLight.color.setHex(0xffffff);
};

InteriorSceneFeature.prototype.onLoad = function(scene) {
    this.floors = scene.queryForObject(this.floorExp);
    this.separateFloors();
    this.indoorEvents(this.onSelect, this.onHover);

    // add indoor lights
    if (!this.isIndoorLightsAdded) {
        this.interiorConfig.lights.forEach((lightConfig) => {
            let indoorLight = this.app3dApp.getCurrentScene().addLight(lightConfig.type, lightConfig);
            indoorLight.position.copy(lightConfig.position);
            scene.add(indoorLight);
        });
        this.isIndoorLightsAdded  = true;
    }
};

InteriorSceneFeature.prototype.exitInterior = function(onExit) {
    this.collapseFloors(onExit);
    this.isInterior = false;
};


InteriorSceneFeature.prototype.setOthersVisibility = function(floor_name, bVisible) {
    this.floors.forEach((floor) => {
        if (floor.name != floor_name) {
            floor.setVisibility(bVisible);
        }
    });
};
InteriorSceneFeature.prototype.makeAllVisible = function() {
    this.floors.forEach((floor) => {
        floor.setVisibility(true);
    });
};
InteriorSceneFeature.prototype.collapseFloors = function(onExit = null) {
    if (this.direction === -1) {
        this.toggleFloorSeparation(onExit);
    } else {
        if (onExit !== null) {
            onExit();
        }
    }
};
InteriorSceneFeature.prototype.toggleFloorSeparation = function(onComplete = null) {
    if (!this.isAnimationOngoing) {
        this.isAnimationOngoing = true;
        this.displacement.x = Math.abs(this.displacement.x) * this.direction;

        this.moveFloors(this.floors, this.displacement, this.speed, () => {
            this.isAnimationOngoing = false;
            if (onComplete !== null) {
                onComplete();
            }
        });
        this.direction = this.direction * (-1);
    }
};

InteriorSceneFeature.prototype.separateFloors = function() {
    if (this.direction === 1) {
        this.toggleFloorSeparation();
    }
};
InteriorSceneFeature.prototype.moveFloors = function(floors, displacement, speed, callback = null) {
    if (floors.length !== 0) {
        let animationCount = floors.length;
        for (let i = 0; i < floors.length; i++) {
            let floorId = floors[i].info.floorID;
            let finalPosition = new APP3D.Vector3();
            floors[i].getWorldPosition(finalPosition);

            finalPosition.x = finalPosition.x + floorId * displacement.x;
            finalPosition.y = finalPosition.y + floorId * displacement.y;
            finalPosition.z = finalPosition.z + floorId * displacement.z;

            let floorSpeed = speed + floorId * speed;
            floors[i].moveTo(finalPosition, floorSpeed, function() {
                animationCount -= 1;
                if (animationCount === 0) {
                    if (callback !== null) {
                        callback();
                    }
                }
            }, false);
        }
    }
};

InteriorSceneFeature.prototype.indoorEvents = function(onSelect, onHover) {
    this.floors.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_LEFT, onSelect);
        floor.onEvent(APP3D.Events.MOUSE_MOVE, onHover);
    });
    // fly to
    this.floors.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_DOUBLE, function(event) {

            this.app3dApp.getCurrentCamera().zoomOutZoomInPoint(this.interiorConfig.floorZoomInPath[floor.name].finalPoint, 2, 2, this.interiorConfig.floorZoomInPath[floor.name].finalLookAtPoint, this.interiorConfig.floorZoomInPath[floor.name].zoomInPoint);
            this.app3dApp.getCurrentCamera().fadeEffect(floor, this.interiorConfig.floorZoomInPath[floor.name].zoomInPoint, 50, this.interiorConfig.fadeEffect);
        }.bind(this));
    });
};
