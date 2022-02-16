// config = {
//     geometryConfig:{width: 1, height: 1, depth: 1},
//     movementConfig:{lookSpeed:0.002, movementSpeed: 400, objectMass: 50, eyeHeight: 1.5},
//     controlConfig:{LEFT: 65, UP: 87, RIGHT: 68, BOTTOM: 83, JUMP: 32}
// }
function FirstPersonViewFeature(app, domElement, config) {
    this.app3dApp = app;

    this.FPC = new APP3D.FirstPersonControls(app.getCurrentCamera(), domElement, config.geometryConfig, config.movementConfig);
    if (config.controlConfig !== undefined) {
        this.FPC.keys.LEFT = (config.controlConfig.LEFT === undefined) ? this.FPC.keys.LEFT : config.controlConfig.LEFT;
        this.FPC.keys.UP = (config.controlConfig.UP === undefined) ? this.FPC.keys.UP : config.controlConfig.UP;
        this.FPC.keys.RIGHT = (config.controlConfig.RIGHT === undefined) ? this.FPC.keys.RIGHT : config.controlConfig.RIGHT;
        this.FPC.keys.BOTTOM = (config.controlConfig.BOTTOM === undefined) ? this.FPC.keys.BOTTOM : config.controlConfig.BOTTOM;
        this.FPC.keys.JUMP = (config.controlConfig.JUMP === undefined) ? this.FPC.keys.JUMP : config.controlConfig.JUMP;
    }

}

FirstPersonViewFeature.prototype.enable = function() {
    this.backupCameraConfig = {
        position: this.app3dApp.getCurrentCamera().getPosition().clone(),
        target: this.app3dApp.getCurrentCamera().getLookAtVector().clone(),
        rotation: this.app3dApp.getCurrentCamera().rotation.clone()
    };

    this.app3dApp.orbitControl.saveState();
    this.app3dApp.orbitControl.enabled = false;
    this.FPC.enabled = true;
    this.FPC.lock();

    this.FPC.reset();
    this.FPC.setPosition(this.backupCameraConfig.position);
    this.FPC.lookAt(this.backupCameraConfig.target);
    this.app3dApp.getCurrentScene().add(this.FPC);
};

FirstPersonViewFeature.prototype.disable = function() {
    this.FPC.enabled = false;
    this.FPC.unlock();

    this.app3dApp.getCurrentScene().remove(this.FPC);

    this.app3dApp.getCurrentCamera().setPosition(this.backupCameraConfig.position);
    this.app3dApp.getCurrentCamera().setLookAtVector(this.backupCameraConfig.target);
    this.app3dApp.getCurrentCamera().rotation.copy(this.backupCameraConfig.rotation);

    this.app3dApp.orbitControl.enabled = true;
    this.app3dApp.orbitControl.reset();
};