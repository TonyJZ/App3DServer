function Application() {
    // Create app
    let app = new APP3D.App("parent", siteObj, {}, null);
    this.app3dApp = app;
    // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "./assets/blueSky/");
    app.showStatsInfo(false);

    // Tune the lights
    app.getCurrentScene().ambientLight.intensity = 0.2;
    app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
   
    // app.getCurrentScene().sun.color.setHex(0x080820);
    app.getCurrentScene().sun.intensity = 0;

    // app.getCurrentScene().showAxesHelper(true);
    // app.showCameraHelper(true);
    
    // initialize features
    let selectionConfig =  {
        showAttributeBox: false,
        enableHover: false,
        defaultIconPath: "./assets/fleur.png",
        selectionColor: null,
        HoverColor: 0x0061ff,
    };
    this.selectionFeature = new SelectionFeature(app, selectionConfig);
    //this.cameraFeature = new CameraFeature(this.app3dApp,featuresConfig.cameraFeatureConfig);
    

    // Initialize app Events
    app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
    app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
    app.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
    app.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));

    // FadeEffect
    this.flyToFadeEffect = {
        radius: 35,
        dimB:   .2
    };
}

Application.prototype.onLoad = function() {
    // key event register
    this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
    let selectableObjects = this.app3dApp.queryForObject("^(?:(?!ground|fences_pavilion|trees).)+$");
    this.selectionFeature.init(selectableObjects);

    selectableObjects.forEach((object, index) => {
        object.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
        object.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
        object.onEvent(APP3D.Events.MOUSE_DOUBLE, this.flyTo.bind(this));
    });
    
    this.buildings = this.app3dApp.queryForObject("^(?:(?!ground|trees|fences_pavilion).)+$");
    this.buildingGroup1 = this.app3dApp.queryForObject("heat_treatment_plant|forge_factory|dct_factory|business_building|joint_factory");
    this.buildingGroup2 = this.app3dApp.queryForObject("power_station|security_center|test_center|transformer_station");
    this.buildingGroup1.forEach(building => {
        building.setLabelContents("./assets/fleur.png", null, null);
    });
    this.buildingGroup2.forEach(building => {
        building.setLabelContents("./assets/fleur.png", null, null);
    });
    
    this.trees = this.app3dApp.queryForObject("trees");
    
    this.fences = this.app3dApp.queryForObject("fences_pavilion");

    this.showBuildings = true;
    this.showTrees = false;
    this.showFences = false;
    this.showbuildingGroup1Labels = false;
    this.showbuildingGroup2Labels = false;

    let floors = this.app3dApp.queryForObject("ground|floor");
    floors.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHoverOff.bind(this.selectionFeature));
        floor.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
    });

    // add pipelines
    this.streetLightPowerLines = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.streetLightPowerLines.init(StreetLightPowerLineParams);
    // this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.streetLightPowerLines.hidePipes();
    this.streetLightPowerLines.shownLabelPipe = this.streetLightPowerLines.query("Line016");
    this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.streetLightPowerLines.shownLabelPipe.setLabelContents("assets/4.png",strings.streelight_power_lines,null,null);
        this.streetLightPowerLines.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.streetLightPowerLines.pipelines, 0xffff00);
    });

    this.electricPowerLines = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.electricPowerLines.init(ElectricPowerLineParams);
    // this.electricPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.electricPowerLines.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.electricPowerLines.hidePipes();
    this.electricPowerLines.shownLabelPipe = this.electricPowerLines.query("Line128");
    this.electricPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.electricPowerLines.shownLabelPipe.setLabelContents("assets/4.png",strings.electric_power_lines,null,null);
        this.electricPowerLines.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.electricPowerLines.pipelines, 0xffff00);
    });

    this.rainDrainPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.rainDrainPipes.init(RainDrainPipeParams);
    // this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.rainDrainPipes.hidePipes();
    this.rainDrainPipes.shownLabelPipe = this.rainDrainPipes.query("Line052");
    this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.rainDrainPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.rain_drain_pipes,null,null);
        this.rainDrainPipes.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.rainDrainPipes.pipelines, 0xffff00);
    });

    this.compressedAirPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.compressedAirPipes.init(CompressedAirPipeParams);
    // this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.compressedAirPipes.hidePipes();
    this.compressedAirPipes.shownLabelPipe = this.compressedAirPipes.query("Line301");
    this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.compressedAirPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.compressed_air_pipes,null,null);
        this.compressedAirPipes.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.compressedAirPipes.pipelines, 0xffff00);
    });

    this.waterSupplyPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.waterSupplyPipes.init(WaterSupplyPipeParams);
    // this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.waterSupplyPipes.shownLabelPipe = this.waterSupplyPipes.query("Line291");
    this.waterSupplyPipes.hidePipes();
    this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.waterSupplyPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.water_supply_pipes,null,null);
        this.waterSupplyPipes.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.waterSupplyPipes.pipelines, 0xffff00);
    });

    this.naturalGasPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.naturalGasPipes.init(NaturalGasPipeParams);
    // this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.naturalGasPipes.hidePipes();
    this.naturalGasPipes.shownLabelPipe = this.naturalGasPipes.query("Line215");
    this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.naturalGasPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.natural_gas_pipes,null,null);
        this.naturalGasPipes.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.naturalGasPipes.pipelines, 0xffff00);
    });

    this.sewerPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
    this.sewerPipes.init(SewerPipeParams);
    // this.sewerPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.sewerPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    this.sewerPipes.hidePipes();
    this.sewerPipes.shownLabelPipe = this.sewerPipes.query("Line156");
    this.sewerPipes.onEvent(APP3D.Events.MOUSE_LEFT, (event) => {
        // this.selectionFeature.onHover.bind(this.selectionFeature);
        this.sewerPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.sewer_pipes,null,null);
        this.sewerPipes.shownLabelPipe.showLabel();
        this.app3dApp.showOutline(this.sewerPipes.pipelines, 0xffff00);
    });

    this.showElectricPowerLines = false;
    this.showRainDrainPipes = false;
    this.showStreetLightPowerLines = false;
    this.showCompressedAirPipes = false;
    this.showWaterSupplyPipes = false;
    this.showNaturalGasPipes = false;
    this.showSewerPipes = false;
    this.showShadow = false;
    this.isFlying = false;

    this.app3dApp.getCurrentScene().ambientLight.intensity = 0.5;
    this.app3dApp.getCurrentScene().sun.intensity = 1;
    // this.app3dApp.getCurrentScene().setSunPosition(-300, 200, 400);
    // this.app3dApp.getCurrentScene().setSunTarget(600, 0, -300);

    let bbox = this.app3dApp.getCurrentScene().getBoundingBox();
    let sceneOffset = new APP3D.Vector3();
    sceneOffset.x = (bbox.min.x + bbox.max.x)*0.5;
    sceneOffset.y = bbox.min.y;
    sceneOffset.z = (bbox.min.z + bbox.max.z)*0.5;
    let sunPos = this.app3dApp.getCurrentScene().sun.position.clone();
    sunPos.add(sceneOffset);

    this.app3dApp.getCurrentScene().setSunPosition(sunPos.x - 200, 300, sunPos.z + 300);
    this.app3dApp.getCurrentScene().setSunTarget(sceneOffset.x, sceneOffset.y, sceneOffset.z);

    this.app3dApp.getCurrentScene().sun.shadow.camera.left = -600;
    this.app3dApp.getCurrentScene().sun.shadow.camera.right = 600;
    this.app3dApp.getCurrentScene().sun.shadow.camera.top = 750;
    this.app3dApp.getCurrentScene().sun.shadow.camera.bottom = -750;
    this.app3dApp.getCurrentScene().sun.shadow.camera.near = 0.1;
    this.app3dApp.getCurrentScene().sun.shadow.camera.far = 2000;

    this.app3dApp.getCurrentScene().sun.shadow.mapSize.width = 2048;
    this.app3dApp.getCurrentScene().sun.shadow.mapSize.height = 2048;

    // this.app3dApp.getCurrentScene().updateShadowRange(this.app3dApp.getCurrentScene().sun);
    
    // this.app3dApp.getCurrentScene().showLightHelper(true);
    // this.app3dApp.getCurrentScene().showShadowCameraHelper(true);

    let lightOpts = {
        skyColor:       0xffffbb,
        groundColor:    0x080820,
        intensity:      0.5
    };
    var hemiLight = this.app3dApp.getCurrentScene().addLight("HemisphereLight", lightOpts);
    hemiLight.position.set(sunPos.x + 20, 200, sunPos.z + 10);


   // this.cameraFeature.flyToHomePosition(2);
   this.flyToHomePosition();
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
    // to the "code" data format (e.g.: "Key<uppercase_key_name>", etc.).
    var key = event.code || event.key;
    if (key.length === 1) {
        if (/^\d+$/.test(key)) {
            key = "Digit" + key;
        } else {
		    key = "Key" + key.toUpperCase();
        }
    }
    switch (key) {
        case "Digit1":
            this.showStreetLightPowerLines = !this.showStreetLightPowerLines;
            this.togglePipelines(this.streetLightPowerLines, this.showStreetLightPowerLines);
            if(this.showStreetLightPowerLines) {
                this.streetLightPowerLines.shownLabelPipe.setLabelContents("assets/4.png",strings.streelight_power_lines,null,null);
                this.streetLightPowerLines.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.streetLightPowerLines.pipelines, 0xffff00);
            }
            break;
        case "KeyC":
             console.log("camera position", this.app3dApp.getCurrentCamera().position);
             let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
             console.log("camera lookAt", lookAt);
             console.log("-----------------------");
             break;
        case "Digit2":
            this.showRainDrainPipes = !this.showRainDrainPipes;
            this.togglePipelines(this.rainDrainPipes, this.showRainDrainPipes);
            if(this.showRainDrainPipes) {
                this.rainDrainPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.rain_drain_pipes,null,null);
                this.rainDrainPipes.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.rainDrainPipes.pipelines, 0xffff00);
            }
            break;
        case "Digit3":
            this.showElectricPowerLines = !this.showElectricPowerLines;
            this.togglePipelines(this.electricPowerLines, this.showElectricPowerLines);
            if(this.showElectricPowerLines) {
                this.electricPowerLines.shownLabelPipe.setLabelContents("assets/4.png",strings.electric_power_lines,null,null);
                this.electricPowerLines.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.electricPowerLines.pipelines, 0xffff00);
            }
            break;
        case "Digit4":
            this.showCompressedAirPipes = !this.showCompressedAirPipes;
            this.togglePipelines(this.compressedAirPipes, this.showCompressedAirPipes);
            if(this.showCompressedAirPipes) {
                this.compressedAirPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.compressed_air_pipes,null,null);
                this.compressedAirPipes.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.compressedAirPipes.pipelines, 0xffff00);
            }
            break;
        case "Digit5":
            this.showWaterSupplyPipes = !this.showWaterSupplyPipes;
            this.togglePipelines(this.waterSupplyPipes, this.showWaterSupplyPipes);
            if(this.showWaterSupplyPipes) {
                this.waterSupplyPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.water_supply_pipes,null,null);
                this.waterSupplyPipes.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.waterSupplyPipes.pipelines, 0xffff00);
            }
            break;
        case "Digit6":
            this.showNaturalGasPipes = !this.showNaturalGasPipes;
            this.togglePipelines(this.naturalGasPipes, this.showNaturalGasPipes);
            if(this.showNaturalGasPipes) {
                this.naturalGasPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.natural_gas_pipes,null,null);
                this.naturalGasPipes.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.naturalGasPipes.pipelines, 0xffff00);
            }
            break;
        case "Digit7":
            this.showSewerPipes = !this.showSewerPipes;
            this.togglePipelines(this.sewerPipes, this.showSewerPipes);
            if(this.showSewerPipes) {
                this.sewerPipes.shownLabelPipe.setLabelContents("assets/4.png",strings.sewer_pipes,null,null);
                this.sewerPipes.shownLabelPipe.showLabel();
                this.app3dApp.showOutline(this.sewerPipes.pipelines, 0xffff00);
            }
            break;
        // case "KeyC":
        //      console.log("camera position", this.app3dApp.getCurrentCamera().position);
        //      let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
        //      console.log("camera lookAt", lookAt);
        //      console.log("-------------------------------");
        //      console.log(selectedObject.matrixWorld);
        //      break;
        case "KeyE":
            this.showTrees = !this.showTrees;
            this.trees.forEach((tree) => {
                tree.setVisibility(this.showTrees);
            });
            break;
        case "KeyF":
            this.showFences = !this.showFences;
            this.fences.forEach((fence) => {
                fence.setVisibility(this.showFences);
            });
            break;
        case "KeyH":
            this.flyToHomePosition();
            //this.cameraFeature.flyToHomePosition(2);
            //this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
            break;
        case "KeyR":
            // Flying inspection
            this.isFlying = !this.isFlying;
            let flyingI = function(){
                this.flyingInspection(featuresConfig.cameraFeatureConfig, this.isFlying,"outdoors", flyingI.bind(this));
            }
            if(this.isFlying){
                flyingI.call(this);
            } else {
                this.app3dApp.getCurrentCamera().stopFlying();
            }
            
            break;
        case "KeyS":
            this.showShadow = !this.showShadow;
            this.app3dApp.showShadow(this.showShadow);
            break;
        case "KeyT":
            this.showStatsInfo = !this.showStatsInfo;
            this.app3dApp.showStatsInfo(this.showStatsInfo);
            break;
        case "KeyV":
            this.showBuildings = !this.showBuildings;
            this.buildings.forEach((building) => {
                building.setVisibility(this.showBuildings);
            });
            break;
        case "KeyX":

            if (this.selectionFeature.getSelectedObject().name === "power_station_1") {
                window.location.href = window.location.href.split("sagw/")[0] + "sagw/room1";
            }
            // else if (this.selectionFeature.getSelectedObject().name === "joint_factory") {
            //     window.location.href = window.location.href.split("sagw/")[0] + "sagw/room2";
            // } 
            else if (this.selectionFeature.getSelectedObject().name === "power_station_2") {
                window.location.href = window.location.href.split("sagw/")[0] + "sagw/room4";
            } 
            else if (this.selectionFeature.getSelectedObject().name === "power_station_3") {
                window.location.href = window.location.href.split("sagw/")[0] + "sagw/room5";
            } 
            // else if (this.selectionFeature.getSelectedObject().name === "forge_factory") {
            //     window.location.href = window.location.href.split("sagw/")[0] + "sagw/room5";
            // }
            break;
        case "KeyM":
            this.showbuildingGroup1Labels = !this.showbuildingGroup1Labels;
            this.showLabels(this.buildingGroup1, this.showbuildingGroup1Labels);
            if(this.showbuildingGroup1Labels && this.showbuildingGroup2Labels) {
                this.showbuildingGroup2Labels = false;
                this.showLabels(this.buildingGroup2, this.showbuildingGroup2Labels);
            }

            // move camera to center looking downwards
            if(this.showbuildingGroup1Labels){
                let finalPos = {x: 866.4608348384163, y: 1092.9181782707512, z: -764.2764838281281};
                let finalLookAtDirection =  {x: -0.28982578224378625, y: -0.9570733237861078, z: 0.0034159689386117353};
                let stopDistance = 0;
                let duration = 1;
                this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null , finalLookAtDirection );
            } else {
                this.flyToHomePosition();
                //this.cameraFeature.flyToHomePosition(2);
            }

            break;
        case "KeyA":
            this.showbuildingGroup2Labels = !this.showbuildingGroup2Labels;
            this.showLabels(this.buildingGroup2, this.showbuildingGroup2Labels);
            if(this.showbuildingGroup2Labels && this.showbuildingGroup1Labels) {
                this.showbuildingGroup1Labels = false;
                this.showLabels(this.buildingGroup1, this.showbuildingGroup1Labels);
            }

            //Move camera to center looking downwards
            if(this.showbuildingGroup2Labels){
                let finalPos = {x: 866.4608348384163, y: 1092.9181782707512, z: -764.2764838281281};
                let finalLookAtDirection =  {x: -0.28982578224378625, y: -0.9570733237861078, z: 0.0034159689386117353};
                let stopDistance = 0;
                let duration = 1;
                this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null , finalLookAtDirection );
            } else {
                this.flyToHomePosition();
                //this.cameraFeature.flyToHomePosition(2);
            }


            break;
        default:
            break;
    }
};

Application.prototype.flyTo = function(event) {
    this.app3dApp.getCurrentCamera().flyTo(event.object, 2, 250, this.flyToFadeEffect);
};

Application.prototype.togglePipelines = function(pipelines, bShow) {
    if (bShow) {
        pipelines.showPipes();

        //pipeline is visible. so move camera to center and look downwards
        let finalPos = {x: 866.4608348384163, y: 1092.9181782707512, z: -764.2764838281281};
        let finalLookAtDirection =  {x: -0.28982578224378625, y: -0.9570733237861078, z: 0.0034159689386117353};
        let stopDistance = 0;
        let duration = 1;

        this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null , finalLookAtDirection )
    
    } else {
        pipelines.hidePipes();
        pipelines.shownLabelPipe.hideLabel();
        this.flyToHomePosition();
        //this.cameraFeature.flyToHomePosition(2);1
        // if (this.getSelectedObject() !== null && this.getSelectedObject().isPipeline) {
        //     this.deselectAll();
        // }
    }
};

Application.prototype.showLabels = function(objects, bShow) {
    objects.forEach((element) => {
        if(bShow)
            element.showLabel();
        else
            element.hideLabel();
    });
};

Application.prototype.deselectAll = function() {
    this.selectionFeature.deselectAll();
    this.app3dApp.showOutline([]);
    if(this.showElectricPowerLines)
        this.electricPowerLines.shownLabelPipe.hideLabel();
    if(this.showRainDrainPipes)
        this.rainDrainPipes.shownLabelPipe.hideLabel();
    if(this.showStreetLightPowerLines)
        this.streetLightPowerLines.shownLabelPipe.hideLabel();
    if(this.showCompressedAirPipes)
        this.compressedAirPipes.shownLabelPipe.hideLabel();
    if(this.showWaterSupplyPipes)
        this.waterSupplyPipes.shownLabelPipe.hideLabel();
    if(this.showNaturalGasPipes)
        this.naturalGasPipes.shownLabelPipe.hideLabel();
    if(this.showSewerPipes)
        this.sewerPipes.shownLabelPipe.hideLabel();
};
Application.prototype.flyToHomePosition = function(){
    let finalPos = {x: 1817.2676911940216, y: 1002.3687296242108, z: -786.6684113459318};
    let finalLookAtDirection =  {x: -0.8036968926800241, y: -0.5946411613998464, z: 0.021753019687282812};
    let stopDistance = 0;
    let duration = 1;

    this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null , finalLookAtDirection )

};

Application.prototype.flyingInspection = function(cameraFeatureConfig, setToActive, flyingInspectionName, onFinish) {
    if (setToActive) {
        let flyingConfig = cameraFeatureConfig.flyingInspection[flyingInspectionName];
        if (flyingConfig === undefined) {
            console.error("Error in retrieving flyingInspection configuration. Please double check " +
                          "your featuresConfig and refer to the documentation");
            return;
        }
        flyingConfig.startingPos = this.app3dApp.camera.getPosition();
        flyingConfig.startingLookAt = this.app3dApp.camera.getLookAtVector();

        let pathPointsJS = flyingConfig.pathPointsJS;
        let focalPointsJS = flyingConfig.focalPointsJS;
        let sectionTimes = flyingConfig.sectionTimes;
        let scope = this;
        this.app3dApp.getCurrentCamera().flyToPoint(pathPointsJS[0], 2, 0, () =>{
            scope.app3dApp.getCurrentCamera().flyingInspection(pathPointsJS, focalPointsJS, sectionTimes,null, true);
        } , focalPointsJS[0]);
        
    } else {
        this.app3dApp.getCurrentCamera().stopFlying();
    }
};
window.onload  = function() {
    var myApp = new Application();
};


