function CameraFeature(app, cameraConfig) {
    this.app = app;
    this.cameraConfig = cameraConfig;
}

CameraFeature.prototype.flyingInspection = function(cameraFeatureConfig, setToActive, flyingInspectionName) {
    if (setToActive) {
        let flyingConfig = this.cameraConfig.flyingInspection[flyingInspectionName];
        if (flyingConfig === undefined) {
            console.error("Error in retrieving flyingInspection configuration. Please double check " +
                          "your featuresConfig and refer to the documentation");
            return;
        }
        flyingConfig.startingPos = this.app.camera.getPosition();
        flyingConfig.startingLookAt = this.app.camera.getLookAtVector();

        let pathPointsJS = flyingConfig.pathPointsJS;
        let focalPointsJS = flyingConfig.focalPointsJS;
        let sectionTimes = flyingConfig.sectionTimes;

        this.app.camera.flyingInspection(pathPointsJS, focalPointsJS, sectionTimes, () => {
            toggleButtonColour(1, true);
            activeModeNumbers.splice(activeModeNumbers.indexOf(1), 1);
        });
    } else {
        this.app.getCurrentCamera().stopFlying();
    }
};

CameraFeature.prototype.flyToHomePosition = function(durationSeconds) {
    if (activeModeNumbers.includes(1)) {
        toggleButtonColour(1, true);
        activeModeNumbers.splice(activeModeNumbers.indexOf(1), 1);
    }

    this.app.orbitControl.target.set(
        this.app.cameraHome.lookAt.x,
        this.app.cameraHome.lookAt.y,
        this.app.cameraHome.lookAt.z
    );

    let startingPos = this.app.camera.getPosition();
    let startingLookAt = this.app.camera.getLookAtVector();
    let pathPointsJS = [
        {
            x:  startingPos.x,
            y:  startingPos.y,
            z:  startingPos.z
        }, {
            x:  this.app.cameraHome.position.x,
            y:  this.app.cameraHome.position.y,
            z:  this.app.cameraHome.position.z
        }
    ];

    let focalPointsJS = [
        {
            x: startingLookAt.x,
            y: startingLookAt.y,
            z: startingLookAt.z
        }, {
            x: -0.5154716370895205,
            y: -0.720734177900921,
            z: 0.46349890632204666
        }
    ];

    let sectionTimes = [
        0,
        (durationSeconds !== undefined) ? durationSeconds : 1
    ];

    this.app.camera.flyingInspection(pathPointsJS, focalPointsJS, sectionTimes, null);
    let finalLookAtPoint = {
        x: 20,
        y: 0,
        z: -15
    };
    this.app.orbitControl.target.set(
        finalLookAtPoint.x,
        finalLookAtPoint.y,
        finalLookAtPoint.z
    );
};

CameraFeature.prototype.locate = function(deviceName) {
    let re = new RegExp("^" + deviceName + "$");
    let device = this.app.queryForObject(re)[0];

    var pullOutPosition = null;
    var stopDistance = 50;
    if (zoomInOutParams[deviceName] !== undefined) {
        pullOutPosition =  zoomInOutParams[deviceName].pullOutPosition;
        stopDistance = zoomInOutParams[deviceName].stopDistance;
    }

    this.app.getCurrentCamera().zoomOutZoomIn(device, stopDistance, 2, null, pullOutPosition, globalFadeEffect);
};
