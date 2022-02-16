function Application(siteConfig) {
    // Create app
    let app = new APP3D.App("parent", siteObj, null);
    this.app3dApp = app;
    // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "assets/blueSky/");
    app.showStatsInfo(false);

    // Tune the lights
    app.getCurrentScene().ambientLight.intensity = 0.5;
    app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
    app.getCurrentScene().sun.position.set(40, 20, -10);
    let lightOpts = {
        skyColor:       0xffffbb,
        groundColor:    0x080820,
        intensity:      0.5
    };
    var hemiLight = app.getCurrentScene().addLight("HemisphereLight", lightOpts);
    hemiLight.position.set(20, 10, 10);

    // Create features
    let selectionConfig = {
        showAttributeBox: false,
        enableHover: false,
        defaultIconPath: "./assets/fleur.png",
        selectionColor: null,
        HoverColor: 0x0061ff,
    };
    this.selectionFeature = new SelectionFeature(app, selectionConfig);

    // Initialize app Events
    app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
    app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
    app.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.deselectAll.bind(this.selectionFeature));
    app.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));
    this.showEnergyCube = false;
    this.showAlarm = false;
    this.showPipelines = false;
    this.dayNightFlag = false;
    this.shadowsOn = false;
    this.reflectiveMirror = null;
    this.ignoreSelectionList = [];
    this.transformationControlAdded = false;
    this.defaultOutlineObjects = [];

    // FadeEffect
    this.flyToFadeEffect = {
        radius: 8,
        dimB:   .2
    };
}

Application.prototype.onLoad = function() {

    // key event register
    this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));


    // Mouse event registration:
    let selectableObjects = this.app3dApp.queryForObject("^(?:(?!ground|label|joint).)+$");

    this.selectionFeature.init(selectableObjects);
    selectableObjects.forEach((object) => {
        object.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
        object.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));

        object.onEvent(APP3D.Events.MOUSE_DOUBLE, function(event) {
            myApp.app3dApp.getCurrentCamera().flyTo(object, 2, 7, globalFadeEffect);
        });
    });
    // hover off
    let ground = this.app3dApp.queryForObject("ground")[0];
    ground.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));

    // add pipelines
    this.pipelineFeature = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.pipelineFeature.init(substationPipeParams);
    this.pipelineFeature.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    this.pipelineFeature.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));


};

Application.prototype.onProgress = function(count) {
    let text = strings.loading + Math.round(((count.total - count.remaining) / count.total) * 100) + "%";
    document.getElementById("progressbar").innerHTML = text;
    if (count.remaining === 0) {
        document.getElementById("progressbar").remove();
    }
};

Application.prototype.onKeyDown = function(event) {
    // Microsoft Edge events don't have a "code" field, so in those cases we simply convert the "key" value
    // to the "code" data format (i.e.: "Key<uppercase_key_name>").
    var key = event.code || event.key;
    if (key.length === 1) {
        key = "Key" + key.toUpperCase();
    }
    switch (key) {
        case "KeyH":
            this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
            break;
        case "KeyZ":
            window.location.href = window.location.href.split("/demo2")[0] + "/demo2/anyue";
            break;
        default:
            break;
    }
};

Application.prototype.getSelectedObject = function() {
    return this.selectionFeature.getSelectedObject();
};


// Have to add document onload
var myApp = new Application();
