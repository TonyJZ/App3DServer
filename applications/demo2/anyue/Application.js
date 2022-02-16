function Application(featuresConfig) {
    // Create app
    let app = new APP3D.App("parent", siteObj, null);
    this.app3dApp = app;
    // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "assets/blueSky/");
    app.showStatsInfo(false);

    // Tune the lights
    app.getCurrentScene().ambientLight.intensity = 0.5;
    app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
    app.getCurrentScene().sun.position.set(40, 100, -10);
    let lightOpts = {
        skyColor:       0xffffbb,
        groundColor:    0x080820,
        intensity:      0.5
    };
    var hemiLight = app.getCurrentScene().addLight("HemisphereLight", lightOpts);
    hemiLight.position.set(20, 10, 10);


    // Create our main features:
    this.cameraFeature = new CameraFeature(app, featuresConfig.cameraFeatureConfig);
    this.dayNightFeature = new DayNightFeature(app, featuresConfig.dayNightConfig);
    this.selectionFeature = new SelectionFeature(app, featuresConfig.selectionConfig);
    this.transformControlFeature = new TransformControlFeature(app);
    this.interiorSceneFeature = new InteriorSceneFeature(app, featuresConfig.interiorConfig);
    this.pipelineFeature = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.energyUsageFeature = new EnergyCubeFeature(this.app3dApp, featuresConfig.energyUsageConfig, 1);
    this.emergencyFeature = new EmergencyFeature(this.app3dApp, this.app3dApp.getCurrentScene(), featuresConfig.emergencyFeatureConfig);
    this.FPVFeature = new FirstPersonViewFeature(this.app3dApp, this.app3dApp.container.dom, featuresConfig.fpvFeatureConfig);

    // Initialize app Events
    app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
    app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
    app.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
    app.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));

    // Fields to track the state of the application:
    this.showEnergyCube = false;
    this.showAlarm = false;
    this.showPipelines = false;
    this.dayNightFlag = false;
    this.shadowsOn = false;
    this.reflectiveMirror = null;
    this.ignoreSelectionList = [];
    this.transformationControlAdded = false;
    this.defaultOutlineObjects = [];
    this.showEnergyCube = false;
    this.showFPV = false;
    this.initPipelines = false;
    this.enableStatInfo = false;
    this.showShadow = false;

    // FadeEffect
    this.flyToFadeEffect = {
        radius: 8,
        dimB:   .2
    };
    this.enableFlyto = true;
}

Application.prototype.onLoad = function() {
    this.cameraFeature.flyToHomePosition(2);
    this.showAlarm = false;

    // Various initialization:
    this.initEnergyUsageScene();
    this.transformControlFeature.init("^(a[0-9]*|tank1_a[0-9]*|elevator|camera_[0-9]*)$");
    this.animateBirds();
    let mirror = this.app3dApp.queryForObject("roadside_mirror")[0];
    // mirror.setEnvMap("jpg", "assets/blueSky/");
    let selectableObjects = this.app3dApp.queryForObject("^(a[0-9]*|tank1_a[0-9]*|elevator|car|a7_tree|lawnmower|camera_[0-9]*)$");
    this.selectionFeature.init(selectableObjects);
    this.addMotionTrails();

    // Set interface globals:
    buttonsEnabled = true;
    activateDevicesPanel = true;

    // key event register
    this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
    // Mouse event registration:
    let certainObjs = this.app3dApp.queryForObject("^(?:(?!ground).)+$");
    let _this = this;
    certainObjs.forEach(object => {
        object.onEvent(APP3D.Events.MOUSE_DOUBLE, function(event) {
            if (_this.enableFlyto) {
                _this.app3dApp.getCurrentCamera().flyTo(object, 2, 60, globalFadeEffect);
            }
        });
    });
    selectableObjects.forEach((object, index) => {
        object.onEvent(APP3D.Events.MOUSE_LEFT, this.onSelect.bind(this));
    });
    // On hover
    selectableObjects.forEach((object, index) => {
        object.onEvent(APP3D.Events.MOUSE_MOVE, this.onHover.bind(this));
    });
    // hover off
    let ground = this.app3dApp.queryForObject("ground")[0];
    ground.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));
};

Application.prototype.onProgress = function(count) {
    let text = strings.loading + Math.round(((count.total - count.remaining) / count.total) * 100) + "%";
    document.getElementById("progressbar").innerHTML = text;
    if (count.remaining === 0) {
        document.getElementById("progressbar").style.visibility = "hidden";
    } else {
        document.getElementById("progressbar").style.visibility = "visible";
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
            if (this.interiorSceneFeature.isInterior) {
                this.interiorSceneFeature.toggleFloorSeparation();
            }
            break;
        case "KeyB":
            this.showShadow = !this.showShadow;
            this.app3dApp.showShadow(this.showShadow);
            break;
            // Leave this code here so that we can quickly re-enable it when debugging:
            // case "KeyC":
            //     console.log("camera position", this.app3dApp.getCurrentCamera().position);
            //     let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
            //     console.log("camera lookAt", lookAt);
            //     console.log("-------------------------------");
            //     console.log(selectedObject.matrixWorld);
            //     break;
        case "KeyF":
            if (!this.app3dApp.enableFirstPersonView) {
                if (this.reflectiveMirror === null) {
                    let mirror = this.app3dApp.queryForObject("roadside_mirror")[0];
                    mirror.traverse((object) => {
                        if (object.isMesh && object.name === "mirror") {
                            let mirror = new APP3D.ReflectiveObject(
                                object,
                                this.app3dApp.getCurrentRender(),
                                this.app3dApp.getCurrentScene(),
                                {
                                    near:       1,
                                    far:        1000,
                                    resolution: 1024
                                }
                            );

                            this.reflectiveMirror = mirror;
                            mirror.name = "reflected mirror";
                            this.app3dApp.getCurrentScene().add(mirror);
                        }
                    });
                } else {
                    this.app3dApp.getCurrentScene().remove(this.reflectiveMirror);
                    this.reflectiveMirror = null;
                }
            }
            break;
        case "KeyH":
            this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
            break;
        case "KeyM":
            this.toggleTransformControlByPressingKey("translate");
            break;
        case "KeyP":
            this.showFPV = !this.showFPV;
            // if (this.showFPV) {
            //     this.FPVFeature.enable();
            // } else {
            //     this.FPVFeature.disable();
            // }
            break;
        case "KeyR":
            this.toggleTransformControlByPressingKey("rotate");
            break;
        case "KeyS":
            this.toggleTransformControlByPressingKey("scale");
            break;
        case "KeyT":
            this.enableStatInfo = !this.enableStatInfo;
            this.app3dApp.showStatsInfo(this.enableStatInfo);
            break;
        case "KeyX":
            if (devicesModeAlreadyEnabled) {
                toggleDevices();
            }
            attributesVisible = (this.app3dApp.objectAttrBox.htmlPanel.style.visibility !== "hidden");
            if (!this.interiorSceneFeature.isInterior && this.getSelectedObject() !== null && this.getSelectedObject().name == "a5") {

                toggleMainButtonsPanel();
                document.getElementById("mainButtonsToggleButton").setAttribute("onclick", "");
                document.getElementById("mainButtonsToggleButton").style.cursor = "default";
                document.getElementById("buttonsPanelToggleIcon").style.opacity = "0.25";
                document.getElementById("homeButton").setAttribute("onclick", "");
                document.getElementById("homeButton").style.cursor = "default";
                document.getElementById("homeButtonIcon").style.opacity = "0.25";

                this.app3dApp.hideAttributesBox("objectAttrBox");
                this.interiorSceneFeature.switchToInterior(
                    "a5 interior",
                    "^floor_",
                    this.onSelect.bind(this),
                    this.onProgress.bind(this),
                    this.onHover.bind(this)
                );
                // this.app3dApp.onEvent(APP3D.Events.ONLOAD, this.interiorSceneFeature.onLoad.bind(this.interiorSceneFeature));
            } else if (this.getSelectedObject() !== null && this.getSelectedObject().info.name === "a12") {
                window.location.href = window.location.href.split("/demo2")[0] + "/demo2/substation";
            } else if (this.getSelectedObject() !== null && this.getSelectedObject().name === "a6") {
                window.location.href = window.location.href.split("/demo2")[0] + "/chinamobile/idc1";
            }
            break;
        case "KeyZ":
            if (this.interiorSceneFeature.isInterior) {
                this.deselectAll();
                this.interiorSceneFeature.exitInterior(() => {
                    this.app3dApp.switchScene("anyue");
                    // Show the main buttons panel once we've exited the building:
                    toggleMainButtonsPanel();
                    document.getElementById("mainButtonsToggleButton").setAttribute("onclick", "toggleMainButtonsPanel()");
                    document.getElementById("mainButtonsToggleButton").style.cursor = "pointer";
                    document.getElementById("buttonsPanelToggleIcon").style.opacity = "1";
                    document.getElementById("homeButton").setAttribute("onclick", "myApp.cameraFeature.flyToHomePosition(2)");
                    document.getElementById("homeButton").style.cursor = "pointer";
                    document.getElementById("homeButtonIcon").style.opacity = "1";

                    // This is good enough for now, as a5 is the only object that we "Z out of"
                    let a5 = this.app3dApp.queryForObject("a5")[0];
                    this.onSelect({ object: a5 });
                    if (attributesVisible === false) {
                        this.app3dApp.hideAttributesBox("objectAttrBox");
                    }
                    this.cameraFeature.flyToHomePosition(2);
                });
            } else {
                window.location.href = window.location.href.split("/demo2")[0] + "/demo2/map";
            }
            break;

        default:
            break;
    }
};


Application.prototype.getSelectedObject = function() {
    return this.selectionFeature.getSelectedObject();
};

Application.prototype.deselectAll = function() {
    this.selectionFeature.deselectAll();
    if (this.transformControlFeature.transformationControlAdded) {
        this.toggleTransformControlByPressingKey(this.transformControlFeature.currentMode);
    }

    // If we're clicking a new icon, there might already be an icon which was previously
    // hidden, so check for that first, and if found, restore it:
    if (iconToRestore !== null) {
        iconToRestore.style.visibility = "visible";
    }
};

Application.prototype.onHover = function(event) {
    this.selectionFeature.onHover(event);
};

Application.prototype.onSelect = function(event) {
    if (event.object !== this.selectionFeature.getSelectedObject()) {
        this.deselectAll();
        this.selectionFeature.select(event, null, this.getIconPath(event.object), this.getAttributeBoxImage(event.object));

        // If we're clicking an object, there might already be an icon which was previously
        // hidden, so check for that first, and if found, restore it:
        if (iconToRestore !== null) {
            iconToRestore.style.visibility = "visible";
        }
    }
};

Application.prototype.getIconPath = function(object) {
    if (object.name.search("^tank1_") != -1) {
        return  "./assets/8a-white.png";
    } else if (object.name.search("^camera_") != -1) {
        return "./assets/8b-white.png";
    } else if (object.name.search("^a[0-9]") != -1) {
        return "./assets/8c-white.png";
    } else {
        return "./assets/fleur.png";
    }
};

Application.prototype.getAttributeBoxImage = function(object) {
    if (object.name.search("^tank1_") != -1) {
        return  "./assets/dummyData2.png";
    } else if (object.name.search("^camera_") != -1) {
        return "./assets/dummyData3.png";
    } else {
        return "./assets/dummyData1.png";
    }
};

Application.prototype.hidePipelines = function() {
    this.pipelineFeature.hidePipes();
    if (this.getSelectedObject() !== null && this.getSelectedObject().isPipeline) {
        this.deselectAll();
    }

};

Application.prototype.initEnergyUsageScene = function() {
    var energyScene = new APP3D.BaseScene("EnergyScene");
    energyScene.setSkyBoxImage("jpg", "assets/darkSky/");
    var groundObj = this.app3dApp.queryForObject("ground")[0];
    energyScene.add(groundObj.clone());
    var _this = this;
    function enableEnergyCubeSelectable(cubes) {
        cubes.forEach((object, index) => {
            object.onEvent(APP3D.Events.MOUSE_LEFT, _this.onSelect.bind(_this));
        });
        // On hover
        cubes.forEach((object, index) => {
            object.onEvent(APP3D.Events.MOUSE_MOVE, _this.onHover.bind(_this));
        });
    }
    this.energyUsageFeature.init(energyScene, null, enableEnergyCubeSelectable);
};

Application.prototype.animateBirds = function() {
    let flamingo = this.app3dApp.queryForObject("flamingo")[0];
    if (flamingo !== undefined) {
        let flamingoStartPos = new APP3D.Vector3();
        flamingo.getWorldPosition(flamingoStartPos);
        let flamingoFinalPos = {x: 17.914566418124792, y: 35.09390062385421, z: -175.13631872522416};
        let animateFlamingo = function() {
            flamingo.position.copy(flamingoStartPos);
            flamingo.moveTo(flamingoFinalPos, 100, animateFlamingo);
        };
        animateFlamingo();
    }
    let stork = this.app3dApp.queryForObject("stork")[0];
    if (stork !== undefined) {
        let storkStartPos = new APP3D.Vector3();
        stork.getWorldPosition(storkStartPos);
        let storkFinalPos = {x: 11.914566418124792, y: 35.09390062385421, z: -180.13631872522416};
        let animateStork = function() {
            stork.position.copy(storkStartPos);
            stork.moveTo(storkFinalPos, 95, animateStork);
        };
        animateStork();
    }
};

// Because we want the button to switch on / off when the user toggles transformation mode via key
// press, we need this special version of the toggle transform mode function which will do things
// like toggling the button colour and setting the active mode.
Application.prototype.toggleTransformControlByPressingKey = function(mode) {
    this.app3dApp.hideAttributesBox("objectAttrBox");

    let selectedObject = this.selectionFeature.getSelectedObject();

    // If there's a transform control visible on the screen matching the specified transform mode
    // then remove it.
    if (this.transformControlFeature.transformationControlAdded && (mode === this.transformControlFeature.currentMode)) {
        this.transformControlFeature.removeTransformControl();
        activeModeNumbers.splice(activeModeNumbers.indexOf(3), 1);
        toggleButtonColour(3, true);
    }
    // Otherwise, no transform control is currently visible on screen, or there's a transform control
    // on screen but it's not the desired one, so we need to add the desired one:
    else {
        if (selectedObject !== null && this.transformControlFeature.isAllowed(selectedObject)) {
            if (this.transformControlFeature.transformationControlAdded !== true) {
                toggleButtonColour(3, true);
            }
            // Need to add this to active mode so that button behaves properly on hover-over:
            if (activeModeNumbers.indexOf(3) === -1) {
                activeModeNumbers.push(3);
            }
            this.transformControlFeature.addTransformControl(selectedObject, mode);
        }
    }
};

// As the complement to the above function, because this function is called after a button press,
// there is no need to set button colour / active mode:
Application.prototype.toggleTransformControlByClickingButton = function(mode) {
    let selectedObject = this.selectionFeature.getSelectedObject();

    // If there's a transform control visible on the screen matching the specified transform mode
    // then remove it.
    if (this.transformControlFeature.transformationControlAdded) {
        this.transformControlFeature.removeTransformControl();
    }
    // Otherwise, no transform control is currently visible on screen, or there's a transform control
    // on screen but it's not the desired one, so we need to add the desired one:
    else {
        this.transformControlFeature.addTransformControl(selectedObject, mode);
    }
};

Application.prototype.addMotionTrails = function() {
    // Add motion trails to the car and lawnmower:
    let particleNoisePath = "assets/particleSprites/perlin-512.png";
    let spriteTexturePath = "assets/particleSprites/particle2.png";
    let carFX = new APP3D.ParticleEffect(this.app3dApp.getCurrentScene(), particleNoisePath, spriteTexturePath);
    let car = this.app3dApp.queryForObject("car")[0];
    car.attachParticleEffect(carFX);
    let lawnmowerFX = new APP3D.ParticleEffect(this.app3dApp.getCurrentScene(), particleNoisePath, spriteTexturePath);
    let lawnmower = this.app3dApp.queryForObject("lawnmower")[0];
    lawnmower.attachParticleEffect(lawnmowerFX);
};

// Have to add document onload
var myApp = new Application(featuresConfig);
