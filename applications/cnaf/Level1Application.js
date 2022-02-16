function Application() {
  // Create app
  var app = new APP3D.App("parent", siteObj, {}, null);
  this.app3dApp = app;
  // Set Properties
  app.getCurrentScene().setSkyBoxImage("jpg", "./assets/blueSky/");
  app.showStatsInfo(false);

  // Tune the lights
  app.getCurrentScene().ambientLight.intensity = 0.2;
  app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);

  // app.getCurrentScene().sun.color.setHex(0x080820);
  app.getCurrentScene().sun.intensity = 0;

  // initialize features
  var selectionConfig = {
    showAttributeBox: false,
    enableHover: false,
    defaultIconPath: "./assets/fleur.png",
    selectionColor: null,
    HoverColor: 0x0061ff
  };
  this.selectionFeature = new SelectionFeature(app, selectionConfig);
  // this.cameraFeature = new CameraFeature(this.app3dApp,featuresConfig.cameraFeatureConfig);

  // Initialize app Events
  app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
  app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
  app.onEvent(APP3D.Events.MOUSE_LEFT, this.deselectAll.bind(this));
  app.onEvent(
    APP3D.Events.MOUSE_MOVE,
    this.selectionFeature.onHoverOff.bind(this.selectionFeature)
  );

  // FadeEffect
  this.flyToFadeEffect = {
    radius: 35,
    dimB: 0.2
  };
  // this.enableFlyto = true;
}

Application.prototype.onLoad = function() {
  var _this2 = this;

  // let ground = this.app3dApp.queryForObject("ground");
  // ground[0].traverse(mesh => {
  //     if(mesh.isMesh) {
  //         if(mesh.material.transparent) {
  //             // mesh.material.depthWrite = false;
  //             // mesh.material.depthTest = true;
  //             // mesh.material.transparent = false;
  //         }
  //     }
  // });

  //   var trees = this.app3dApp.queryForObject("trees");
  //   trees[0].traverse(function(mesh) {
  //     if (mesh.isMesh) {
  //       if (mesh.material.transparent) {
  //         mesh.renderOrder = 100;
  //         mesh.material.depthWrite = false;
  //         // mesh.material.depthTest = true;
  //       }
  //     }
  //   });

  // key event register
  this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
  // var selectableObjects = this.app3dApp.queryForObject(
  //   "^(?:(?!model_map|trees).)+$"
  var selectableObjects = this.app3dApp.queryForObject(
    "^model_plane|model_oilTank001|model_oilTank002$"
  );
  this.selectionFeature.init(selectableObjects);

  selectableObjects.forEach(function(object, index) {
    object.onEvent(
      APP3D.Events.MOUSE_LEFT,
      _this2.selectionFeature.select.bind(_this2.selectionFeature)
    );
    object.onEvent(
      APP3D.Events.MOUSE_MOVE,
      _this2.selectionFeature.onHover.bind(_this2.selectionFeature)
    );
    object.onEvent(APP3D.Events.MOUSE_DOUBLE, _this2.flyTo.bind(_this2));
  });

  this.buildings = this.app3dApp.queryForObject("^(?:(?!ground|trees).)+$");
  this.buildingGroup1 = this.app3dApp.queryForObject(
    "heat_treatment_plant|forge_factory|dct_factory|business_building|joint_factory"
  );
  this.buildingGroup2 = this.app3dApp.queryForObject(
    "power_station|security_center|test_center|transformer_station"
  );
  this.buildingGroup1.forEach(function(building) {
    building.setLabelContents("./assets/fleur.png", null, null);
  });
  this.buildingGroup2.forEach(function(building) {
    building.setLabelContents("./assets/fleur.png", null, null);
  });

  this.trees = this.app3dApp.queryForObject("trees");

  // this.fences = this.app3dApp.queryForObject("fences_pavilion");

  this.showBuildings = true; //显示建筑
  this.showTrees = false; //显示植被
  this.showFences = false; //栏杆
  this.showbuildingGroup1Labels = false; //建筑群1
  this.showbuildingGroup2Labels = false; //建筑群2

  var floors = this.app3dApp.queryForObject("ground|floor");
  floors.forEach(function(floor) {
    floor.onEvent(
      APP3D.Events.MOUSE_MOVE,
      _this2.selectionFeature.onHoverOff.bind(_this2.selectionFeature)
    );
    floor.onEvent(APP3D.Events.MOUSE_LEFT, _this2.deselectAll.bind(_this2));
  });

  // add pipelines
  this.streetLightPowerLines = new PipelineFeature(
    this.app3dApp.getCurrentScene()
  );
  this.streetLightPowerLines.init(StreetLightPowerLineParams);
  // this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.streetLightPowerLines.hidePipes();
  this.streetLightPowerLines.shownLabelPipe = this.streetLightPowerLines.query(
    "Line016"
  );
  this.streetLightPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.streetLightPowerLines.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.streelight_power_lines,
      null,
      null
    );
    _this2.streetLightPowerLines.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(
      _this2.streetLightPowerLines.pipelines,
      0xffff00
    );
  });

  this.electricPowerLines = new PipelineFeature(
    this.app3dApp.getCurrentScene()
  );
  this.electricPowerLines.init(ElectricPowerLineParams);
  // this.electricPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.electricPowerLines.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.electricPowerLines.hidePipes();
  this.electricPowerLines.shownLabelPipe = this.electricPowerLines.query(
    "Line128"
  );
  this.electricPowerLines.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.electricPowerLines.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.electric_power_lines,
      null,
      null
    );
    _this2.electricPowerLines.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.electricPowerLines.pipelines, 0xffff00);
  });

  this.rainDrainPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
  this.rainDrainPipes.init(RainDrainPipeParams);
  // this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.rainDrainPipes.hidePipes();
  this.rainDrainPipes.shownLabelPipe = this.rainDrainPipes.query("Line052");
  this.rainDrainPipes.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.rainDrainPipes.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.rain_drain_pipes,
      null,
      null
    );
    _this2.rainDrainPipes.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.rainDrainPipes.pipelines, 0xffff00);
  });

  this.compressedAirPipes = new PipelineFeature(
    this.app3dApp.getCurrentScene()
  );
  this.compressedAirPipes.init(CompressedAirPipeParams);
  // this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.compressedAirPipes.hidePipes();
  this.compressedAirPipes.shownLabelPipe = this.compressedAirPipes.query(
    "Line301"
  );
  this.compressedAirPipes.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.compressedAirPipes.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.compressed_air_pipes,
      null,
      null
    );
    _this2.compressedAirPipes.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.compressedAirPipes.pipelines, 0xffff00);
  });

  this.waterSupplyPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
  this.waterSupplyPipes.init(WaterSupplyPipeParams);
  // this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.waterSupplyPipes.shownLabelPipe = this.waterSupplyPipes.query("Line291");
  this.waterSupplyPipes.hidePipes();
  this.waterSupplyPipes.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.waterSupplyPipes.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.water_supply_lines,
      null,
      null
    );
    _this2.waterSupplyPipes.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.waterSupplyPipes.pipelines, 0xffff00);
  });

  this.naturalGasPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
  this.naturalGasPipes.init(NaturalGasPipeParams);
  // this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.naturalGasPipes.hidePipes();
  this.naturalGasPipes.shownLabelPipe = this.naturalGasPipes.query("Line215");
  this.naturalGasPipes.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.naturalGasPipes.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.natural_gas_pipes,
      null,
      null
    );
    _this2.naturalGasPipes.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.naturalGasPipes.pipelines, 0xffff00);
  });

  this.sewerPipes = new PipelineFeature(this.app3dApp.getCurrentScene());
  this.sewerPipes.init(SewerPipeParams);
  // this.sewerPipes.onEvent(APP3D.Events.MOUSE_LEFT, this.selectionFeature.select.bind(this.selectionFeature));
  // this.sewerPipes.onEvent(APP3D.Events.MOUSE_MOVE, this.selectionFeature.onHover.bind(this.selectionFeature));
  this.sewerPipes.hidePipes();
  this.sewerPipes.shownLabelPipe = this.sewerPipes.query("Line156");
  this.sewerPipes.onEvent(APP3D.Events.MOUSE_LEFT, function(event) {
    // this.selectionFeature.onHover.bind(this.selectionFeature);
    _this2.sewerPipes.shownLabelPipe.setLabelContents(
      "assets/4.png",
      strings.sewer_lines,
      null,
      null
    );
    _this2.sewerPipes.shownLabelPipe.showLabel();
    _this2.app3dApp.showOutline(_this2.sewerPipes.pipelines, 0xffff00);
  });

  this.showElectricPowerLines = false;
  this.showRainDrainPipes = false;
  this.showStreetLightPowerLines = false; //路灯照明
  this.showCompressedAirPipes = false;
  this.showWaterSupplyPipes = false;
  this.showNaturalGasPipes = false;
  this.showSewerPipes = false;
  this.showShadow = false;
  this.isFlying = false;

  this.app3dApp.getCurrentScene().ambientLight.intensity = 0.5;
  this.app3dApp.getCurrentScene().sun.intensity = 1.5; //阳光强度 1
  // this.app3dApp.getCurrentScene().setSunPosition(-300, 200, 400);
  // this.app3dApp.getCurrentScene().setSunTarget(600, 0, -300);

  var bbox = this.app3dApp.getCurrentScene().getBoundingBox();
  var sceneOffset = new APP3D.Vector3();
  sceneOffset.x = (bbox.min.x + bbox.max.x) * 0.5;
  sceneOffset.y = bbox.min.y;
  sceneOffset.z = (bbox.min.z + bbox.max.z) * 0.5;
  var sunPos = this.app3dApp.getCurrentScene().sun.position.clone();
  sunPos.add(sceneOffset);

  this.app3dApp
    .getCurrentScene()
    .setSunPosition(sunPos.x - 200, 300, sunPos.z + 300);
  this.app3dApp
    .getCurrentScene()
    .setSunTarget(sceneOffset.x, sceneOffset.y, sceneOffset.z);

  this.app3dApp.getCurrentScene().sun.shadow.camera.left = -600;
  this.app3dApp.getCurrentScene().sun.shadow.camera.right = 600;
  this.app3dApp.getCurrentScene().sun.shadow.camera.top = 750;
  this.app3dApp.getCurrentScene().sun.shadow.camera.bottom = -750;
  this.app3dApp.getCurrentScene().sun.shadow.camera.near = 0.1;
  this.app3dApp.getCurrentScene().sun.shadow.camera.far = 2000;
  this.app3dApp.getCurrentScene().sun.shadow.mapSize.width = 8192;
  this.app3dApp.getCurrentScene().sun.shadow.mapSize.height = 8192;

  // this.app3dApp.getCurrentScene().showLightHelper(true);
  // this.app3dApp.getCurrentScene().showShadowCameraHelper(true);

  var lightOpts = {
    skyColor: 0xffffbb,
    groundColor: 0x080820,
    intensity: 0.5
  };
  var hemiLight = this.app3dApp
    .getCurrentScene()
    .addLight("HemisphereLight", lightOpts);
  hemiLight.position.set(sunPos.x + 20, 200, sunPos.z + 10);

  // this.cameraFeature.flyToHomePosition(2);加载完成后的动画
  //this.flyToHomePosition(2);
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
function cancelRcurrent() {
  //取消巡航高亮
  var rTab = $(".bottom-tabs>div[name=KeyR]");
  if (rTab.hasClass("current")) {
    rTab.removeClass("current");
    var imgSrc = rTab.children("img").attr("src");
    rTab.children("img").attr("src", imgSrc.replace(/_p\.svg/g, ".svg"));
    myApp1.isFlying = false;
  }
}
//互斥函数
function mutualExclusion(_this, flag, codeName) {
  //巡航时需要取消显示所有label flag='all'
  //选择管道隐藏主次建筑label 及其他管道label
  //快捷键M 表示主场景 隐藏次建筑与所有管道label flag='showbuildingGroup2Labels'
  _this.selectionFeature.deselectAll();
  var obj = {
    showElectricPowerLines: "electricPowerLines",
    showRainDrainPipes: "rainDrainPipes",
    showStreetLightPowerLines: "streetLightPowerLines",
    showCompressedAirPipes: "compressedAirPipes",
    showWaterSupplyPipes: "waterSupplyPipes",
    showNaturalGasPipes: "naturalGasPipes",
    showSewerPipes: "sewerPipes"
  };
  //隐藏次建筑
  if (
    _this.showbuildingGroup2Labels &&
    (flag === "showbuildingGroup2Labels" || flag === "all")
  ) {
    _this.showbuildingGroup2Labels = false;
    _this.showLabels(_this.buildingGroup2, _this.showbuildingGroup2Labels);
    // console.log($('.bottom-tabs>div[name=KeyA]'))
    var KeyADiv = $(".bottom-tabs>div[name=KeyA]");
    if (KeyADiv.hasClass("current")) {
      KeyADiv.removeClass("current");
      var src = KeyADiv.children("img").attr("src");
      KeyADiv.children("img").attr("src", src.replace(/_p\.svg/g, ".svg"));
    }
  }
  //隐藏主建筑
  if (
    _this.showbuildingGroup1Labels &&
    (flag === "showbuildingGroup1Labels" || flag === "all")
  ) {
    _this.showbuildingGroup1Labels = false;
    _this.showLabels(_this.buildingGroup1, _this.showbuildingGroup1Labels);
    var KeyMDiv = $(".bottom-tabs>div[name=KeyM]");
    if (KeyMDiv.hasClass("current")) {
      KeyMDiv.removeClass("current");
      var _src = KeyMDiv.children("img").attr("src");
      KeyMDiv.children("img").attr("src", _src.replace(/_p\.svg/g, ".svg"));
    }
  }
  // 点击的是管道
  if (flag.indexOf("Lines") > -1 || flag.indexOf("Pipes") > -1) {
    //隐藏主建筑label
    if (_this.showbuildingGroup1Labels) {
      _this.showbuildingGroup1Labels = false;
      _this.showLabels(_this.buildingGroup1, _this.showbuildingGroup1Labels);
      var _KeyMDiv = $(".bottom-tabs>div[name=KeyM]");
      if (_KeyMDiv.hasClass("current")) {
        _KeyMDiv.removeClass("current");
        var _src2 = _KeyMDiv.children("img").attr("src");
        _KeyMDiv.children("img").attr("src", _src2.replace(/_p\.svg/g, ".svg"));
      }
    }
    //隐藏次建筑label
    if (_this.showbuildingGroup2Labels) {
      _this.showbuildingGroup2Labels = false;
      _this.showLabels(_this.buildingGroup2, _this.showbuildingGroup2Labels);
      var _KeyADiv = $(".bottom-tabs>div[name=KeyA]");
      if (_KeyADiv.hasClass("current")) {
        _KeyADiv.removeClass("current");
        var _src3 = _KeyADiv.children("img").attr("src");
        _KeyADiv.children("img").attr("src", _src3.replace(/_p\.svg/g, ".svg"));
      }
    }
    // 隐藏其他管道
    for (var key in obj) {
      if (_this[key] && obj[key] && key !== flag) {
        _this[key] = false;
        _this.togglePipelines(_this[obj[key]], _this[key]);
      }
    }
    // 移除tab上的管道高亮
    var divList = $(".bottom-tabs>div");
    for (var i = 0; i < divList.length; i++) {
      var name = $(divList[i]).attr("name");
      if (name.indexOf("Digit") > -1 && name !== codeName) {
        if ($(divList[i]).hasClass("current")) {
          $(divList[i]).removeClass("current");
          var _src4 = $(divList[i])
            .children("img")
            .attr("src");
          $(divList[i])
            .children("img")
            .attr("src", _src4.replace(/_p\.svg/g, ".svg"));
        }
      }
    }
  }
  if (flag === "all" || flag.indexOf("building") != -1) {
    for (var _key in obj) {
      if (_this[_key] && obj[_key]) {
        _this[_key] = false;
        _this.togglePipelines(_this[obj[_key]], _this[_key]);
      }
    }
    // 移除tab上的管道高亮
    var _divList = $(".bottom-tabs>div");
    for (var _i = 0; _i < _divList.length; _i++) {
      var _name = $(_divList[_i]).attr("name");
      if (_name.indexOf("Digit") > -1) {
        if ($(_divList[_i]).hasClass("current")) {
          $(_divList[_i]).removeClass("current");
          var _src5 = $(_divList[_i])
            .children("img")
            .attr("src");
          $(_divList[_i])
            .children("img")
            .attr("src", _src5.replace(/_p\.svg/g, ".svg"));
        }
      }
    }
  }
}
Application.prototype.onKeyDown = function(event, keyName, $this) {
  var _this3 = this;

  // Microsoft Edge events don't have a "code" field, so in those cases we simply convert the "key" value
  // to the "code" data format (e.g.: "Key<uppercase_key_name>", etc.).
  if (!keyName) {
    var key = event.code || event.key;
    if (key.length === 1) {
      if (/^\d+$/.test(key)) {
        key = "Digit" + key;
      } else {
        key = "Key" + key.toUpperCase();
      }
    }
  } else {
    var key = keyName;
  }
  //使用快捷键时保证界面与底部栏样式统一

  // if (
  //   !$this &&
  //   $(".bottom-tabs>div[name=" + key + "]")
  //     .children("img")
  //     .attr("src")
  // ) {
  //   var currentTab = $(".bottom-tabs>div[name=" + key + "]");
  //   var imgSrc = currentTab.children("img").attr("src");
  //   if (currentTab.hasClass("current")) {
  //     currentTab.removeClass("current");
  //     currentTab
  //       .children("img")
  //       .attr("src", imgSrc.replace(/_p\.svg/g, ".svg"));
  //   } else {
  //     currentTab.addClass("current");
  //     currentTab
  //       .children("img")
  //       .attr("src", imgSrc.replace(/\.svg/g, "_p.svg"));
  //   }
  // }
  switch (key) {
    // case "Digit1":
    //   //路灯照明

    //   this.showStreetLightPowerLines = !this.showStreetLightPowerLines;
    //   this.togglePipelines(
    //     this.streetLightPowerLines,
    //     this.showStreetLightPowerLines
    //   );
    //   if (this.showStreetLightPowerLines) {
    //     this.app3dApp.getCurrentScene().sun.intensity = 1; //阳光强度 1
    //     this.streetLightPowerLines.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.streelight_power_lines,
    //       null,
    //       null
    //     );
    //     this.streetLightPowerLines.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(
    //       this.streetLightPowerLines.pipelines,
    //       0xffff00
    //     );

    //     mutualExclusion(this, "showStreetLightPowerLines", "Digit1"); //互斥
    //     cancelRcurrent(); //取消巡航高亮
    //   } else {
    //     this.app3dApp.getCurrentScene().sun.intensity = 1.5; //阳光强度 1
    //   }
    //   break;
    // case "KeyC":
    //   console.log("camera position", this.app3dApp.getCurrentCamera().position);
    //   var lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
    //   console.log("camera lookAt", lookAt);
    //   console.log("-----------------------");
    //   break;
    // case "Digit2":
    //   //雨水管道
    //   this.showRainDrainPipes = !this.showRainDrainPipes;
    //   this.togglePipelines(this.rainDrainPipes, this.showRainDrainPipes);
    //   if (this.showRainDrainPipes) {
    //     this.rainDrainPipes.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.rain_drain_lines,
    //       null,
    //       null
    //     );
    //     this.rainDrainPipes.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.rainDrainPipes.pipelines, 0xffff00);
    //     mutualExclusion(this, "showRainDrainPipes", "Digit2");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //   break;
    // case "Digit3":
    //   //电力管道
    //   this.showElectricPowerLines = !this.showElectricPowerLines;
    //   this.togglePipelines(
    //     this.electricPowerLines,
    //     this.showElectricPowerLines
    //   );
    //   if (this.showElectricPowerLines) {
    //     this.electricPowerLines.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.electric_power_lines,
    //       null,
    //       null
    //     );
    //     this.electricPowerLines.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.electricPowerLines.pipelines, 0xffff00);
    //     mutualExclusion(this, "showElectricPowerLines", "Digit3");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //   break;
    // case "Digit4":
    //   //压缩空气
    //   this.showCompressedAirPipes = !this.showCompressedAirPipes;
    //   this.togglePipelines(
    //     this.compressedAirPipes,
    //     this.showCompressedAirPipes
    //   );
    //   if (this.showCompressedAirPipes) {
    //     this.compressedAirPipes.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.compressed_air_lines,
    //       null,
    //       null
    //     );
    //     this.compressedAirPipes.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.compressedAirPipes.pipelines, 0xffff00);
    //     mutualExclusion(this, "showCompressedAirPipes", "Digit4");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //   break;
    // case "Digit5":
    //   //厂区给水
    //   this.showWaterSupplyPipes = !this.showWaterSupplyPipes;
    //   this.togglePipelines(this.waterSupplyPipes, this.showWaterSupplyPipes);
    //   if (this.showWaterSupplyPipes) {
    //     this.waterSupplyPipes.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.water_supply_lines,
    //       null,
    //       null
    //     );
    //     this.waterSupplyPipes.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.waterSupplyPipes.pipelines, 0xffff00);
    //     mutualExclusion(this, "showWaterSupplyPipes", "Digit5");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //   break;
    // case "Digit6":
    //   //天然气管道
    //   this.showNaturalGasPipes = !this.showNaturalGasPipes;
    //   this.togglePipelines(this.naturalGasPipes, this.showNaturalGasPipes);
    //   if (this.showNaturalGasPipes) {
    //     this.naturalGasPipes.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.natural_gas_lines,
    //       null,
    //       null
    //     );
    //     this.naturalGasPipes.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.naturalGasPipes.pipelines, 0xffff00);
    //     mutualExclusion(this, "showNaturalGasPipes", "Digit6");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //   break;
    // case "Digit7":
    //   //污水管道
    //   this.showSewerPipes = !this.showSewerPipes;
    //   this.togglePipelines(this.sewerPipes, this.showSewerPipes);
    //   if (this.showSewerPipes) {
    //     this.sewerPipes.shownLabelPipe.setLabelContents(
    //       "assets/4.png",
    //       strings.sewer_lines,
    //       null,
    //       null
    //     );
    //     this.sewerPipes.shownLabelPipe.showLabel();
    //     this.app3dApp.showOutline(this.sewerPipes.pipelines, 0xffff00);
    //     mutualExclusion(this, "showSewerPipes", "Digit7");
    //     cancelRcurrent(); //取消巡航高亮
    //   }

    //  break;
    // case "KeyC":
    //      console.log("camera position", this.app3dApp.getCurrentCamera().position);
    //      let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
    //      console.log("camera lookAt", lookAt);
    //      console.log("-------------------------------");
    //      console.log(selectedObject.matrixWorld);
    //      break;
    case "KeyE":
      //植被环境
      this.showTrees = !this.showTrees;
      this.trees.forEach(function(tree) {
        tree.setVisibility(_this3.showTrees);
      });
      break;
    case "KeyF":
      this.showFences = !this.showFences;
      this.fences.forEach(function(fence) {
        fence.setVisibility(_this3.showFences);
      });
      break;
    case "KeyH":
      this.flyToHomePosition();
      mutualExclusion(myApp1, "all");
      cancelRcurrent(); //取消巡航高亮
      //this.cameraFeature.flyToHomePosition(2);
      //this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
      break;
    case "KeyR":
      //巡航检查
      // 取消所有显示setLabel
      mutualExclusion(this, "all");

      // Flying inspection
      this.isFlying = !this.isFlying;
      var flyingI = function flyingI() {
        this.flyingInspection(
          featuresConfig.cameraFeatureConfig,
          this.isFlying,
          "outdoors",
          flyingI.bind(this)
        );
      };
      if (this.isFlying) {
        flyingI.call(this);
      } else {
        this.app3dApp.getCurrentCamera().stopFlying();
      }

      break;
    case "KeyS":
      //投影
      this.showShadow = !this.showShadow;
      this.app3dApp.showShadow(this.showShadow);
      break;
    case "KeyT":
      this.showStatsInfo = !this.showStatsInfo;
      this.app3dApp.showStatsInfo(this.showStatsInfo);
      break;
    case "KeyV":
      this.showBuildings = !this.showBuildings;
      this.buildings.forEach(function(building) {
        building.setVisibility(_this3.showBuildings);
      });
      break;
    case "KeyX":
      if (this.selectionFeature.getSelectedObject().name === "model_plane") {
        window.location.href =
          window.location.href.split("cnaf/")[0] + "cnaf/level2_1";
      }
      break;
    case "KeyM":
      //主建筑
      this.showbuildingGroup1Labels = !this.showbuildingGroup1Labels;
      this.showLabels(this.buildingGroup1, this.showbuildingGroup1Labels);
      if (this.showbuildingGroup1Labels) {
        //label互斥
        mutualExclusion(this, "showbuildingGroup2Labels");
        cancelRcurrent(); //取消巡航高亮
      }

      // move camera to center looking downwards
      if (this.showbuildingGroup1Labels) {
        var finalPos = {
          x: 931.6955251399341,
          y: 546.1081715903705,
          z: -1309.2656852253413
        };
        var finalLookAtDirection = {
          x: -0.621187179443687,
          y: -0.6686630325264609,
          z: 0.4086762007106774
        };
        /* let finalPos = {x: 866.4608348384163, y: 1092.9181782707512, z: -764.2764838281281};
                let finalLookAtDirection =  {x: -0.28982578224378625, y: -0.9570733237861078, z: 0.0034159689386117353}; */
        var stopDistance = 0;
        var duration = 1;
        this.app3dApp
          .getCurrentCamera()
          .flyToPoint(
            finalPos,
            duration,
            stopDistance,
            null,
            finalLookAtDirection
          );

        this.app3dApp.orbitControl.target.set(
          finalPos.x + finalLookAtDirection.x * 816,
          finalPos.y + finalLookAtDirection.y * 816,
          finalPos.z + finalLookAtDirection.z * 816
        );
      } else {
        this.flyToHomePosition();
        //this.cameraFeature.flyToHomePosition(2);
      }

      break;
    case "KeyA":
      //次建筑
      this.showbuildingGroup2Labels = !this.showbuildingGroup2Labels;
      this.showLabels(this.buildingGroup2, this.showbuildingGroup2Labels);
      if (this.showbuildingGroup2Labels) {
        //label互斥
        mutualExclusion(this, "showbuildingGroup1Labels");
        cancelRcurrent(); //取消巡航高亮
      }
      //Move camera to center looking downwards
      if (this.showbuildingGroup2Labels) {
        var _finalPos = {
          x: 1052.1916043252925,
          y: 408.0807803133695,
          z: -307.9982147842263
        };
        var _finalLookAtDirection = {
          x: -0.6782927511462757,
          y: -0.594635820371119,
          z: -0.4316563272720354
        };
        /* let finalPos = {x: 866.4608348384163, y: 1092.9181782707512, z: -764.2764838281281};
                let finalLookAtDirection =  {x: -0.28982578224378625, y: -0.9570733237861078, z: 0.0034159689386117353}; */
        var _stopDistance = 0;
        var _duration = 1;
        this.app3dApp
          .getCurrentCamera()
          .flyToPoint(
            _finalPos,
            _duration,
            _stopDistance,
            null,
            _finalLookAtDirection
          );

        this.app3dApp.orbitControl.target.set(
          _finalPos.x + _finalLookAtDirection.x * 686,
          _finalPos.y + _finalLookAtDirection.y * 686,
          _finalPos.z + _finalLookAtDirection.z * 686
        );
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
  this.app3dApp
    .getCurrentCamera()
    .flyTo(event.object, 2, 250, this.flyToFadeEffect);
};

Application.prototype.togglePipelines = function(pipelines, bShow) {
  if (bShow) {
    pipelines.showPipes();

    //pipeline is visible. so move camera to center and look downwards
    var finalPos = {
      x: 866.4608348384163,
      y: 1092.9181782707512,
      z: -764.2764838281281
    };
    var finalLookAtDirection = {
      x: -0.28982578224378625,
      y: -0.9570733237861078,
      z: 0.0034159689386117353
    };
    var stopDistance = 0;
    var duration = 1;

    this.app3dApp
      .getCurrentCamera()
      .flyToPoint(finalPos, duration, stopDistance, null, finalLookAtDirection);

    this.app3dApp.orbitControl.target.set(
      finalPos.x + finalLookAtDirection.x * 1140,
      finalPos.y + finalLookAtDirection.y * 1140,
      finalPos.z + finalLookAtDirection.z * 1140
    );
  } else {
    pipelines.hidePipes();
    pipelines.shownLabelPipe.hideLabel();
    // this.flyToHomePosition();
    //this.cameraFeature.flyToHomePosition(2);1
    // if (this.getSelectedObject() !== null && this.getSelectedObject().isPipeline) {
    //     this.deselectAll();
    // }
  }
};

Application.prototype.showLabels = function(objects, bShow) {
  objects.forEach(function(element) {
    if (bShow) element.showLabel();
    else element.hideLabel();
  });
};

Application.prototype.deselectAll = function() {
  this.app3dApp.getCurrentScene().sun.intensity = 1.5; //鼠标左键 恢复阳光亮度2
  this.selectionFeature.deselectAll();
  this.app3dApp.showOutline([]);
  if (this.showElectricPowerLines)
    this.electricPowerLines.shownLabelPipe.hideLabel();
  if (this.showRainDrainPipes) this.rainDrainPipes.shownLabelPipe.hideLabel();
  if (this.showStreetLightPowerLines)
    this.streetLightPowerLines.shownLabelPipe.hideLabel();
  if (this.showCompressedAirPipes)
    this.compressedAirPipes.shownLabelPipe.hideLabel();
  if (this.showWaterSupplyPipes)
    this.waterSupplyPipes.shownLabelPipe.hideLabel();
  if (this.showNaturalGasPipes) this.naturalGasPipes.shownLabelPipe.hideLabel();
  if (this.showSewerPipes) this.sewerPipes.shownLabelPipe.hideLabel();
};
Application.prototype.flyToHomePosition = function(durationSecond) {
  var finalPos = {
    x: 1817.2676911940216,
    y: 1002.3687296242108,
    z: -786.6684113459318
  };
  var finalLookAtDirection = {
    x: -0.8036968926800241,
    y: -0.5946411613998464,
    z: 0.021753019687282812
  };
  var stopDistance = 0;
  var duration = durationSecond ? durationSecond : 1; //默认值为1秒

  this.app3dApp
    .getCurrentCamera()
    .flyToPoint(finalPos, duration, stopDistance, null, finalLookAtDirection);

  this.app3dApp.orbitControl.target.set(462.5, 0, -750);
};

Application.prototype.flyingInspection = function(
  cameraFeatureConfig,
  setToActive,
  flyingInspectionName,
  onFinish
) {
  if (setToActive) {
    var flyingConfig =
      cameraFeatureConfig.flyingInspection[flyingInspectionName];
    if (flyingConfig === undefined) {
      console.error(
        "Error in retrieving flyingInspection configuration. Please double check " +
          "your featuresConfig and refer to the documentation"
      );
      return;
    }
    flyingConfig.startingPos = this.app3dApp.camera.getPosition();
    flyingConfig.startingLookAt = this.app3dApp.camera.getLookAtVector();

    var pathPointsJS = flyingConfig.pathPointsJS;
    var focalPointsJS = flyingConfig.focalPointsJS;
    var sectionTimes = flyingConfig.sectionTimes;
    var scope = this;
    this.app3dApp.getCurrentCamera().flyToPoint(
      pathPointsJS[0],
      2,
      0,
      function() {
        scope.app3dApp
          .getCurrentCamera()
          .flyingInspection(
            pathPointsJS,
            focalPointsJS,
            sectionTimes,
            null,
            true
          );
      },
      focalPointsJS[0]
    );
  } else {
    this.app3dApp.getCurrentCamera().stopFlying();
  }
};
window.onload = function() {
  var myApp = new Application();
  window.myApp1 = myApp;
};
