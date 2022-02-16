function Application() {
    // Create app
    let app = new APP3D.App("parent", siteObj, {}, null);
    this.app3dApp = app;
    // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "./assets/blueSky/");
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

    // initialize features
    let selectionConfig =  {
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

    // FadeEffect
    this.flyToFadeEffect = {
        radius: 15,
        dimB:   .2
    };
    this.enableFlyTo;
}

Application.prototype.onLoad = function() {
    // key event register
    this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
    let selectableObjects = this.app3dApp.queryForObject("^(?:(?!ground|floor).)+$");
    this.selectionFeature.init(selectableObjects);

    selectableObjects.forEach((object, index) => {
        object.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
        object.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
        object.onEvent(APP3D.Events.MOUSE_DOUBLE, this.flyTo.bind(this));
    });
    let floors = this.app3dApp.queryForObject("ground|floor");
    floors.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));
        floor.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.deselectAll.bind(this.selectionFeature));
    });
    // add pipelines
    this.pipelineFeature = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.pipelineFeature.init(PipelineParams);
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
        // case "KeyC":
        //      console.log("camera position", this.app3dApp.getCurrentCamera().position);
        //      let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
        //      console.log("camera lookAt", lookAt);
        //      console.log("-------------------------------");
        //      console.log(selectedObject.matrixWorld);
        //      break;
        case "KeyH":
            this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
            break;
        case "KeyT":
            this.showStatsInfo = !this.showStatsInfo;
            this.app3dApp.showStatsInfo(this.showStatsInfo);
            break;
        case "KeyZ":
            window.location.href = window.location.href.split("sagw/")[0] + "sagw/outdoors";
            break;
        case "Comma":
            let previous_room = parseInt(window.location.href.match(/\d+$/)[0]);
            if (previous_room > 1) {
                window.location.href = window.location.href.split("sagw/")[0] + "sagw/room" + (previous_room - 1).toString();
            }
            break;
        case "Period":
            let next_room = parseInt(window.location.href.match(/\d+$/)[0]);
            if (next_room < 5) {
                window.location.href = window.location.href.split("sagw/")[0] + "sagw/room" + (next_room + 1).toString();
            }
            break;

        default:
            break;
    }
};

Application.prototype.flyTo = function(event) {
    this.app3dApp.getCurrentCamera().flyTo(event.object, 1.5, 30, this.flyToFadeEffect);
};

window.onload  = function() {
    var myApp = new Application();
};


