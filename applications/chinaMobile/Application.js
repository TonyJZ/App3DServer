function Application() {
    // Create app
    let app = new APP3D.App("parent", siteObj, null);
    this.app3dApp = app;
    // set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "./assets/skybox/");

    // tune the lights
    app.getCurrentScene().ambientLight.intensity = 0.5;
    app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
    app.getCurrentScene().sun.position.set(40, 20, -10);
    var hemiLight = app.getCurrentScene().addLight("HemisphereLight", {
        skyColor: 0xffffbb,
        groundColor: 0x080820,
        intensity: .5
    });
    hemiLight.position.set(20, 10, 10);



    // create features
    this.cabinetFeature = new CabinetFeature(this, app);
    this.energyCubeFeature = new EnergyCubeFeature(app, energyUsageParams);
    this.floorsFeature = new FloorsFeature(app);
    this.emergencyFeature = new EmergencyFeature(
        this.app3dApp,
        this.app3dApp.getCurrentScene(),
        {
            environment: {
                backgroundColor: 0x000000
            },
            alarmParams: {
                alarmSound: "./assets/alarm.mp3",
                playSound: true
            }
        }
    );
    this.transformFeature = new TransformFeature(app, this);

    let selectionConfig = {
        showAttributeBox: false,
        enableHover: false,
        defaultIconPath: "./assets/fleur.png",
        selectionColor: null,
        HoverColor: 0x0061ff,
    };
    this.selectionFeature = new SelectionFeature(app, selectionConfig);

    // initialize app Events
    app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
    app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
    app.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
    app.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));

    // connection cable
    this.connCableVisible = false;

    this.showEnergyCube = false;
    this.showAlarm = false;

    // object selection;
    // this.selectedObject = null;

    // fadeEffect
    this.flyToFadeEffect = {
        radius: 8,
        dimB: .2
    };


    // Storage space
    this.showingStorageSpace = false;

    // dont show stat
    this.app3dApp.showStatsInfo(false);

    // heatmap
    this.isHeatMapShowing = false;
}

Application.prototype.onLoad = function() {
    // initialize features
    this.cabinetFeature.init();


    let floors = this.app3dApp.queryForObject("floor_2");
    this.floorsFeature.init(this.deselectAll.bind(this));
    this.floorsFeature.separateFloors();
    this.transformFeature.init();
    this.energyCubeFeature.init(this.app3dApp.getCurrentScene(), floors);

    // key event register
    this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));

    // setSelection
    this.selectableObjects = this.app3dApp.queryForObject("^(cabinet_[1-2]|server_[1-4]u|exchanger0[1-9]|camera00[1-7]|flood_detector00[0-9]|smoke_detector00[1-9]|temp_humidity_monitor00[1-3]|UPS00[1-9]|distribution_cabinet00[1-4]|battery0[0-2][0-9])$");
    this.selectableObjects.forEach((object) => {
        object.onEvent(APP3D.Events.MOUSE_LEFT, this.select.bind(this));
        object.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    });
    let flyToObjects = this.app3dApp.queryForObject("^(camera00[1-7]|server_[1-4]u|exchanger0[1-9]|flood_detector00[0-9]|smoke_detector00[1-9]|temp_humidity_monitor00[1-3]|UPS00[1-9]|distribution_cabinet00[1-4]|battery0[0-2][0-9])$");
    // Fly to for selection
    flyToObjects.forEach((object) => {
        object.onEvent(APP3D.Events.MOUSE_DOUBLE, this.flyToObject.bind(this));
    });

    // clicking on floor deselects anything selected
    let floors_click = this.app3dApp.queryForObject("^floor");
    floors_click.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
        floor.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));
    });
};

Application.prototype.onProgress = function(count) {
    let text = "Loading : " + Math.round(((count.total - count.remaining) / count.total) * 100) + "%";
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
        case "KeyA":
            this.transformFeature.addCabinet();
            // floor = this.app3dApp.queryForObject("cabinet_")[0];
            // this.app3dApp.addTransformController(floor,"translate");
            // console.log("floor",flooar);
            // console.log("matrix",floor.matrixWorld);
            break;
        // case "KeyC":
        //     console.log("camera position", this.app3dApp.getCurrentCamera().position.x + ", "
        //                 + this.app3dApp.getCurrentCamera().position.y + ", " + this.app3dApp.getCurrentCamera().position.z);
        //     let lookAt = this.app3dApp.camera.getLookAtVector();
        //     console.log("camera lookAt", lookAt.x + ", " + lookAt.y + ", " + lookAt.z);
        //     console.log("-------------------------------");
        //     console.log("matrix", this.selectionFeature.getSelectedObject().matrix);
        //     break;
        case "KeyD":
            this.selectionFeature.getSelectedObject().removeLabel();
            this.removeObject(this.selectionFeature.getSelectedObject());
            this.deselectAll(null);
            break;
        case "KeyE":
            this.showEnergyCube = !this.showEnergyCube;
            this.energyCubeFeature.showEnergyCube(this.showEnergyCube);
            // console.log
            break;
        case "KeyF":
            this.floorsFeature.toggleFloorSeparation();
            break;
        case "KeyG":
            this.connCableVisible = !this.connCableVisible;
            let connCable1 = this.app3dApp.queryForObject("conn_cable_1")[0];
            connCable1.setVisibility(this.connCableVisible);
            break;
        case "KeyH":
            this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
            break;
        case "KeyL":
            this.showAlarm = !this.showAlarm;
            if (this.showAlarm) {
                this.emergencyFeature.show(["cabinet_2"]);
            } else {
                this.emergencyFeature.restore();
            }
            break;
        case "KeyM":
            this.transformFeature.toggleTransform(this.selectionFeature.getSelectedObject(), "translate");
            break;
        case "KeyP":
            if (!this.isHeatMapShowing) {
                this.showHeatMap();
            } else {
                this.removeHeatMap();
            }
            break;
        case "KeyR":
            this.transformFeature.toggleTransform(this.selectionFeature.getSelectedObject(), "rotate");
            break;
        case "KeyS":
            this.transformFeature.toggleTransform(this.selectionFeature.getSelectedObject(), "scale");
            break;
        case "KeyT":
            this.toggleStorageSpace();
            break;
        case "KeyY":
            this.enableStatInfo = !this.enableStatInfo;
            this.app3dApp.showStatsInfo(this.enableStatInfo);
            break;
        case "KeyZ":
            window.location.href = window.location.href.split("/chinamobile/idc1")[0] + "/demo2/anyue";
            break;
        case "Escape":
        case "Esc":
            if (!this.transformFeature.removeControl(this.selectionFeature.getSelectedObject())) {
                this.floorsFeature.makeAllVisible();
                this.showEnergyCube = false;
                this.energyCubeFeature.showEnergyCube(this.showEnergyCube);
                // set the  storage to invisible
                let storage = this.app3dApp.queryForObject("green_server")[0];
                storage.setVisibility(this.showingStorageSpace);
                let connCable1 = this.app3dApp.queryForObject("conn_cable_1")[0];
                connCable1.setVisibility(this.connCableVisible);
            }
            break;
        default:
            console.log(event);
            break;
    }
};

Application.prototype.toggleStorageSpace = function() {
    this.app3dApp.getCurrentCamera().animations.removeAll(9);
    let storage = this.app3dApp.queryForObject("green_server")[0];
    let cabinets = this.app3dApp.queryForObject("^cabinet");
    storage.traverse((object) => {
        object.renderOrder = -3;
    });
    if (!this.showingStorageSpace) {
        cabinets.forEach((object) => {
            object.setOpacity(.1);
            // object.setVisibility(false);
        });
        storage.setVisibility(true);
        this.showingStorageSpace = true;
    } else {
        cabinets.forEach((object) => {
            object.setOpacity(1);
        });
        storage.setVisibility(false);
        this.showingStorageSpace = false;
        $(".percent-box").fadeOut();
        $(".opc").fadeOut();

    }
};

Application.prototype.locate = function(deviceName) {
    let re = new RegExp("^" + deviceName + "$");
    let device = this.app3dApp.queryForObject(re);
    if (device.length === 1) {
        this.deselectAll();
        if (this.floorsFeature.getCurrentFloor() !== "floor_2") {
            // this.floorsFeature.selectFloor(this.floorsFmeature, "floor_2");
            this.floorsFeature.setOthersVisibility("floor_2", false);
        }
        device = device [0];
        this.onObjectClick({object: device});
        // this.selectedObject = device;
        // this.app3dApp.showOutline([this.selectedObject], 0x0061ff);

        let pullOutPosition = {
            x:  -0.7445555907416921,
            y:  20.759145693159564,
            z:  -2.444295858997161
        };
        let stopDistance = 10;
        this.app3dApp.getCurrentCamera().zoomOutZoomIn(device, stopDistance, 2, null, pullOutPosition, null);
        // if its a cabinet or server, open it
        if (deviceName.search("^(cabinet_)") !== -1) {
            this.cabinetFeature.openCabinet(device);
        } else if (deviceName.search("^(server_|exchanger)") !== -1) {
            this.cabinetFeature.openCabinet(device.getParentObject());
        }

    }

};

Application.prototype.addToFlyToList = function(object) {
    object.onEvent(APP3D.Events.MOUSE_DOUBLE, this.flyToObject.bind(this));
};

Application.prototype.flyToObject = function(event) {
    if (this.showingStorageSpace) {
        this.toggleStorageSpace();
    }
    this.app3dApp.getCurrentCamera().flyTo(event.object, 1.2, 10, this.flyToFadeEffect);

};

Application.prototype.onObjectClick = function(event) {
    this.selectionFeature.select(event);
};

Application.prototype.select = function(event) {
    this.deselectAll();
    this.selectionFeature.select(event);

};

Application.prototype.deselectAll = function(event) {
    if (this.selectionFeature.getSelectedObject() !== null) {
        this.transformFeature.removeControl(this.selectionFeature.getSelectedObject());
    }
    this.selectionFeature.deselectAll();

};

Application.prototype.addSelectableObject = function(object) {
    this.selectableObjects.push(object);
    object.onEvent(APP3D.Events.MOUSE_LEFT, this.onObjectClick.bind(this));

};

Application.prototype.removeObject = function(object) {
    if (this.selectionFeature.getSelectedObject() !== null) {
        object.parent.remove(object);
    }
};

Application.prototype.ifObjectExists  = function(deviceName) {
    if (this.app3dApp.queryForObject("^" + deviceName + "$").length === 1) {
        return true;
    }
    return false;
};

Application.prototype.removeHeatMap = function() {
    let floorSegments = this.app3dApp.queryForObject("^floor00[1-5]$");
    let floor1 = floorSegments[0];
    floor1.removeHeatMap();
    let floor2 = floorSegments[1];
    floor2.removeHeatMap();
    let floor3 = floorSegments[2];
    floor3.removeHeatMap();
    this.app3dApp.getCurrentScene().remove(this.app3dApp.queryForObject("^slider$")[0]);

    this.isHeatMapShowing = false;

};

Application.prototype.showHeatMap = function() {
    let floorSegments = this.app3dApp.queryForObject("^floor00[1-5]$");

    let floor1 = floorSegments[0];
    let locations = [new APP3D.Vector3(-2.0, 2.0, 0.0), new APP3D.Vector3(-10.0, -10.0, 0.0),  new APP3D.Vector3(10.0, -10.0, 0.0)];
    let values = [0.0, .86, 1.0];
    floor1.setHeatMap(locations, values, 3);

    let floor2 = floorSegments[1];
    let locations2 = [new APP3D.Vector3(-2.0, 2.0, 0.0)];
    let values2 = [1.0];
    floor2.setHeatMap(locations2, values2, 2);

    let floor3 = floorSegments[2];
    let locations3 = [new APP3D.Vector3(0.0, 0.0, 0.0)];
    let values3 = [.3];
    floor3.setHeatMap(locations3, values3, 2);
    this.app3dApp.getCurrentScene().addFixedTexture("slider", "assets/IDC02/slider.png", .35, 1.3, 1, 0);
    this.isHeatMapShowing = true;


};
var myApp = new Application();


