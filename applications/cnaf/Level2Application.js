function Application() {
  // Create app
  var app = new APP3D.App("parent", siteObj, {}, null);
  this.app3dApp = app;
  // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "./assets/blueSky/");
  app.showStatsInfo(false);

  // Tune the lights
  app.getCurrentScene().ambientLight.intensity = 0.5;
  app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
    app.getCurrentScene().sun.position.set(40, 200, -10);
  var lightOpts = {
    skyColor: 0xffffbb,
    groundColor: 0x080820,
    intensity: 0.5
  };
  var hemiLight = app.getCurrentScene().addLight("HemisphereLight", lightOpts);
    hemiLight.position.set(20, 100, 10);

  // initialize features
  var selectionConfig = {
    showAttributeBox: false,
    enableHover: false,
    defaultIconPath: "./assets/fleur.png",
    selectionColor: null,
    HoverColor: 0x0061ff
  };
  this.selectionFeature = new SelectionFeature(app, selectionConfig);

  // Initialize app Events
  app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
  app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
  app.onEvent(
    APP3D.Events.MOUSE_LEFT,
    this.selectionFeature.deselectAll.bind(this.selectionFeature)
  );
  app.onEvent(
    APP3D.Events.MOUSE_MOVE,
    this.selectionFeature.onHoverOff.bind(this.selectionFeature)
  );

  // FadeEffect
  this.flyToFadeEffect = {
    radius: 15,
    dimB: 0.2
  };
  this.enableFlyTo;
}

Application.prototype.onLoad = function() {
  var _this = this;

  // key event register
  this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
  var selectableObjects = this.app3dApp.queryForObject(
    "^(?:(?!ground|trees).)+$"
  );
  this.selectionFeature.init(selectableObjects);

  selectableObjects.forEach(function(object, index) {
    object.onEvent(
      APP3D.Events.MOUSE_LEFT,
      _this.selectionFeature.select.bind(_this.selectionFeature)
    );
    object.onEvent(
      APP3D.Events.MOUSE_MOVE,
      _this.selectionFeature.onHover.bind(_this.selectionFeature)
    );
    object.onEvent(APP3D.Events.MOUSE_DOUBLE, _this.flyTo.bind(_this));
  });
  var floors = this.app3dApp.queryForObject("ground|floor");
  floors.forEach(function(floor) {
    floor.onEvent(
      APP3D.Events.MOUSE_MOVE,
      _this.selectionFeature.onHoverOff.bind(_this.selectionFeature)
    );
    floor.onEvent(
      APP3D.Events.MOUSE_LEFT,
      _this.selectionFeature.deselectAll.bind(_this.selectionFeature)
    );
  });
  // add pipelines
    // this.pipelineFeature = new PipelineFeature(this.app3dApp.getCurrentScene());
    // this.pipelineFeature.init(PipelineParams);
    // this.pipelineFeature.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
    // this.pipelineFeature.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
    
//   this.pipelineFeature.onEvent(
//     APP3D.Events.MOUSE_MOVE,
//     this.selectionFeature.onHover.bind(this.selectionFeature)
//   );

// init labels
  this.InitTankLabels();
  // this.InitPumpLabels();
  // this.InitValveLabels();
  // this.InitGeneralLabels();
};

Application.prototype.InitTankLabels = function() {
  var tanks = this.app3dApp.queryForObject( "model_oilTank" );
  tanks.forEach(tank => {
    let label = new Label({
      labelType: 'tank',
      name: tank.info.label,
      theme:'abnormal',
      info:{
        height:600,
        bulk:80,
        temperature:19.5
      },
      position:{
        x:400,
        y:400
      },
    });
    label.createLabel(tank.name);
    let labelDiv = $('#' + tank.name)[0]; 
    console.log(labelDiv);
    tank.addLabel({
      div: labelDiv
    });
    tank.hideLabel();
  });
};

Application.prototype.InitPumpLabels = function() {
  var pumps = this.app3dApp.queryForObject( "model_pump_PU" );
  pumps.forEach(pump => {
    let label = new Label({
      labelType: 'pump',
      name: pump.label,
      theme:'normal',
      position:{
        x:400,
        y:200
      },
      info: {
        state: '正常',
        pressure: 600,
        speed: 12.5
      }
    });
    label.createLabel(pump.name);
    let labelDiv = $('#' + pump.name); 
    console.log(labelDiv);
    pump.addLabel({
      div: labelDiv
    });
  });
};

Application.prototype.InitValveLabels = function() {
  var valves = this.app3dApp.queryForObject( "model_valve" );
  valves.forEach(valve => {
    let label = new Label({
      labelType: 'valve',
      name: valve.label
    });
    label.createLabel(valve.name);
    let labelDiv = $('#' + valve.name); 
    console.log(labelDiv);
    valve.addLabel({
      div: labelDiv
    });
  });
};

Application.prototype.InitGeneralLabels = function() {

};

Application.prototype.onProgress = function(count) {
  var text =
    strings.loading +
    Math.round(((count.total - count.remaining) / count.total) * 100) +
    "%";
  document.getElementById("progressbar").innerHTML = text;
  if (count.remaining === 0) {
    var child = document.getElementById("progressbar"); // to support IE 11
    child.parentNode.removeChild(child);
    // document.getElementById("progressbar").remove();
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
      window.location.href =
        window.location.href.split("cnaf/")[0] + "cnaf/level1";
      break;
    case "Comma":
      var previous_room = parseInt(window.location.href.match(/\d+$/)[0]);
      if (previous_room > 1) {
        window.location.href =
          window.location.href.split("sagw/")[0] +
          "sagw/room" +
          (previous_room - 1).toString();
      }
      break;
    case "Period":
      var next_room = parseInt(window.location.href.match(/\d+$/)[0]);
      if (next_room < 5) {
        window.location.href =
          window.location.href.split("sagw/")[0] +
          "sagw/room" +
          (next_room + 1).toString();
      }
      break;

    default:
      break;
  }
};

Application.prototype.flyTo = function(event) {
  this.app3dApp
    .getCurrentCamera()
    .flyTo(event.object, 1.5, 30, this.flyToFadeEffect);
};

window.onload = function() {
  var myApp = new Application();
};
