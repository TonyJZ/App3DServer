function Application() {
  // Create app
  var app = new APP3D.App("parent", siteObj, {}, null);
  this.app3dApp = app;
  // Set Properties
  app.getCurrentScene().setEquirectangularSkyBox("assets/2028-Dusk.jpg");
  app.showStatsInfo(false);

  // Tune the lights
  app.getCurrentScene().ambientLight.intensity = 2;
  app.getCurrentScene().ambientLight.color.setHex(0x0000FF);

  //0xaaaaaa
  app.getCurrentScene().sun.position.set(40, 200, -10);
  var lightOpts = {
    // skyColor: 0xffffbb,
    // groundColor: 0x080820,
    intensity: 0
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

  // EmissionControlFeature
    this.emissionConfig = {
      objList: [
        { name: "model_window_grow01", iniIntensity: 0.16 },
        { name: "model_window_grow02", iniIntensity: 0.5 },
        { name: "model_window_grow03", iniIntensity: 0.12 },
        { name: "model_window_grow04", iniIntensity: 0.8 },
        { name: "model_building_other_part01_grow", iniIntensity: 0.16},
        { name: "model_building_other_part02_grow", iniIntensity: 0.3},
        { name: "model_building_other_part03_grow", iniIntensity: 0.2},
        { name: "model_building_other_part04_grow", iniIntensity: 0.7},
        { name: "model_building_other_part05_grow", iniIntensity: 0.18},
        { name: "model_building_other_part06_grow", iniIntensity: 0.3},
        { name: "model_building_other_part07_grow", iniIntensity: 0.11},
        { name: "model_building_other_part08_grow", iniIntensity: 0.3},
        { name: "model_building_other_part09_grow", iniIntensity: 0.12},
        { name: "model_road_grow_01", iniIntensity: 0.12 },
        { name: "model_road_grow_02", iniIntensity: 0.5 },
        { name: "model_road_grow_03", iniIntensity: 0.15 },
        { name: "model_road_grow_04", iniIntensity: 0.35 },
        { name: "model_road_grow_05", iniIntensity: 0.23},
     
      ],
      params: {
        intensityMin: 0.1,
        intensityMax: 1,
        speed: 0.65, // intensity increase speed (发光强度增加倍数，1.0为原始速度)
      }
    }
    this.emissionControlFeature = new EmissionControlFeature(this.emissionConfig);

  // FlowingLineFeature
  this.flowingLineFeature = new FlowingLineFeature(flowObj);

  /* var emissionConfig = {
    params: {
      intensityMin: 0.0,
      intensityMax: 1.0,
      step: 0.02,
    }
  }
  this.emissionControlFeature = new EmissionControlFeature(emissionConfig); */

  // Initialize app Events
  app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
  app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));
  /* app.onEvent(
    APP3D.Events.MOUSE_LEFT,
    this.selectionFeature.deselectAll.bind(this.selectionFeature)
  ); */
  app.onEvent(
    APP3D.Events.MOUSE_LEFT,
    this.deselectAll.bind(this)
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

  // ExplosionEffect 爆炸球
  let explosionParameters = {
    diameter: 50,
    textureUrl: "assets/explosion.png"
  };
  this.explosionEffect = new APP3D.ShaderFactory("ExplosionEffect", explosionParameters);
  this.explosionBall = this.explosionEffect.getBaseObject();
  this.explosionBall.position.setY(200);

  // GlowingBand
  this.glowParameters = null;
  this.glowBand = null;


  /*this.showPipeStatus = false;
  this.showRoadStatus = false;*/

}

Application.prototype.onLoad = function() {
  var _this = this;
  turnOnUnRealBloomPass(this.app3dApp);//初始添加光晕
  // key event register
  this.app3dApp.onEvent(APP3D.Events.KEY_DOWN, this.onKeyDown.bind(this));
  var selectableObjects = this.app3dApp.queryForObject(
    "^model_building_other|^model_ui"
  );
  // 设置建筑模型环境色
   selectableObjects.forEach(object => {
    object.setEnvMapEquirectangularImage("assets/earth_atmos_4096_light.jpg", this.app3dApp.getCurrentRender(), 1024);
  });
  this.selectionFeature.init(selectableObjects);

  // 设置地面模型环境色
   var selectableObjects01 = this.app3dApp.queryForObject(
    "^model_darkStyle"
  );
   selectableObjects01.forEach(object => {
    object.setEnvMapEquirectangularImage("assets/light.jpg", this.app3dApp.getCurrentRender(), 1024);
  });
  this.selectionFeature.init(selectableObjects01);


   /*//设置道路发光显隐
	this.roadStatusBlocks = this.app3dApp.queryForObject("^model_road_grow");
	this.roadStatusBlocks.forEach(object =>{
        object.visible = false;
    }); */

  // RippleEffect
  var objectRipple = this.app3dApp.queryForObject("model_ripple");
  objectRipple.forEach(function (obj) {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material.depthTest = false;
      }
    });
    let parametersRipple = {
      object: obj,
      meshName: "model_ripple",
      restore: false,
      color: "#ff0000",
      // duration: 0.5,
    };
    effect1 = new APP3D.ShaderFactory("RippleEffect", parametersRipple);
  });
  // 建筑表面 Ripple
  let buildingsRipple = this.app3dApp.queryForObject("^model_building_other$");
  buildingsRipple.forEach(function (plane) {
    parametersRipple2 = {
      object: plane,
      meshName: "model_building_other",
      restore: false,
      color: "#66CCCC",
      duration: 5, //sec
      rippleCenter: { x: -0.55, y: 0.55 },
    };
    effect1_2 = new APP3D.ShaderFactory("RippleEffect", parametersRipple2);
  });
  
  // RadarEffect
  var objectRadar = this.app3dApp.queryForObject("model_radar");
  var initialPos = objectRadar[0].getCenter();
  objectRadar[0].position.set(initialPos.x + 400, initialPos.y, initialPos.z + 1800);
  objectRadar.forEach(function (obj) {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material.depthTest = false;
      }
    });
    let parametersRadar = {
      object: obj,
      meshName: "model_ripple",
      restore: false,
      color: "#ff0000",
      speed: 1.5,
    };
    effect2 = new APP3D.ShaderFactory("RadarEffect", parametersRadar);
  });

  // FlowingLineEffectPipe
  this.flowingLineFeature.create(this.app3dApp.getCurrentScene());

  //add explosion object
  this.app3dApp.getCurrentScene().add(this.explosionBall);
  this.explosionBall.setVisibility(false);

   // water
  let waters = this.app3dApp.queryForObject("model_river")[0];
  let waterParameters = {
    object: waters,
    color: '#3399FF', //水面颜色
    scale: 0.1, //波纹尺寸(相对于原图的比例)
    flowX: 0.5, //X轴流速
    flowY: 0.5, //Y轴流速
    normal1Url: "./assets/Water_1_M_Normal.jpg", //X轴法向量底图
    normal2Url: "./assets/Water_2_M_Normal.jpg", //Y轴法向量底图
  };
  let waterEffect = new APP3D.ShaderFactory("WaterEffect", waterParameters);
  this.app3dApp.getCurrentScene().add(waterEffect.getBaseObject());
  // waterEffect.getBaseObject().position.setY(80);

  // alphaTest
  // let plants = this.app3dApp.queryForObject("model_darkStyle")[0];
  // plants.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material.alphaTest = 0.4;
  //     child.material.needUpdates = true;
  //   }
  // });


  // GlowingBand  发光带
  let glowObj = this.app3dApp.queryForObject("model_building_003")[0];
  let glowMesh = "model_building_003";
  this.glowParameters = {
    object: glowObj,
    meshName: glowMesh,
    backgroundMixer: true,
    alpha: 0.1,
    time: 1.0,
    direction: 1.0,
    bandWidth: 0.99999,
    redBase: 0.0,
    greenBase: 0.0,
    blueBase: 0.0,
    redAmp: 0.0,
    greenAmp: 0.8,
    blueAmp: 0.0,
    uSpeed: 0.8,
    vSpeed: 0.8,
    restore: false,
  }
  this.glowBand = new APP3D.ShaderFactory("GlowingBandEffect", this.glowParameters);
  this.glowParameters.restore = false;
  this.glowBand.updateParameters(this.glowParameters);

  //SPACE032SN.png

  selectableObjects.forEach(function(object, index) {
    // object.onEvent(
    //   APP3D.Events.MOUSE_LEFT,
    //   _this.selectionFeature.select.bind(_this.selectionFeature)
    // );
    //鼠标点击选中
    // object.onEvent(
    //   APP3D.Events.MOUSE_LEFT,
    //   _this.select.bind(_this)
    // );
    // object.onEvent(
    //   APP3D.Events.MOUSE_MOVE,
    //   _this.selectionFeature.onHover.bind(_this.selectionFeature)
    // );
    //鼠标双击事件
    // object.onEvent(APP3D.Events.MOUSE_DOUBLE, _this.flyTo.bind(_this));
  });
  var floors = this.app3dApp.queryForObject("ground|circles");
  floors.forEach(function(floor) {
    floor.onEvent(
      APP3D.Events.MOUSE_MOVE,
      _this.selectionFeature.onHoverOff.bind(_this.selectionFeature)
    );
    /* floor.onEvent(
      APP3D.Events.MOUSE_LEFT,
      _this.selectionFeature.deselectAll.bind(_this.selectionFeature)
    ); */
    floor.onEvent(
      APP3D.Events.MOUSE_LEFT,
      _this.deselectAll.bind(_this)
    );
  });

  this.flyToHomePosition(2);
  // init labels
  // this.InitTankLabels();

  //显示warning label
  this.InitDarkWarningLabels();
  //初始化主建筑label
  this.InitDarkMainBuildingLabels();
  //初始化监测中心label
  this.InitDarkMonitoringCenterLabels();

};
//初始化报警label
Application.prototype.InitDarkWarningLabels = function() {
  let _this = this;
  let waringBuildings = this.app3dApp.queryForObject("^model_building_008$|^model_building_009$|^model_building_010$|^model_oilCar$");
  waringBuildings.forEach(function(waringBuilding) {
    let label = new Label({
      labelType: 'dark-danger',
      name: waringBuilding.info.label,
    });
    label.createLabel(waringBuilding.name);
    let labelDiv = $('#' + waringBuilding.name)[0];
    waringBuilding.addLabel({
      div: labelDiv,
      anchorType: APP3D.LabelPosition.LABEL_TOP,
      labelStartPxRelativeX: -parseInt(labelDiv.offsetWidth, 10) / 2,
      labelStartPxRelativeY: parseInt(labelDiv.offsetHeight, 10) + 50
    });
    // tank.hideLabel();
    //报警label点击显示面板
    $('#' + waringBuilding.name).click(function() {
      _this.deselectAll();
      if ($('body>[class*='+waringBuilding.name+']').css('display') === 'block') {
        // _this.deselectAll();
        return false
      }
      $('.'+waringBuilding.name).fadeIn(300, function() {
        $('.'+waringBuilding.name+' .line1').fadeIn(200, function() {
          $('.'+waringBuilding.name+' .line2').fadeIn(150, function() {
            $('.'+waringBuilding.name+' .line3').fadeIn(100)
              if(waringBuilding.name === 'model_building_009'){
                chartSeven.resize()
              }else if(waringBuilding.name === 'model_oilCar') {
                chartEight.resize()
              }
          })
        })
      });
      $('.panel-left').fadeIn(300,function(){
        $('.panel-left .line1').fadeIn(200,function(){
          $('.panel-left .line2').fadeIn(150,function(){
            $('.panel-left .line3').fadeIn(100,function(){
              chartLeft.resize()
            })
          })
        })
      });
    })

  });
};
let towerFlag = true;
let centerFlag = true;
//初始化主建筑label
Application.prototype.InitDarkMainBuildingLabels = function() {
  let _this = this;
  let mainBuildings = this.app3dApp.queryForObject("^model_building_001$|^model_building_002$");
  mainBuildings.forEach(function(mainBuilding) {
    let label = new Label({
      labelType: 'main-building',
      // name: "触发火警警",
      info: {
        bgUrl: mainBuilding.name.indexOf('model_building_001') > -1 ? './assets/darkStyleImg/TV_Tower.png' : './assets/darkStyleImg/Financial_Center.png'
      },
    });
    label.createLabel(mainBuilding.name);
    let labelDiv = $('#' + mainBuilding.name)[0];
    mainBuilding.addLabel({
      div: labelDiv,
      anchorType: APP3D.LabelPosition.LABEL_TOP,
      labelStartPxRelativeX: -parseInt(labelDiv.offsetWidth, 10) / 2,
      labelStartPxRelativeY: parseInt(labelDiv.offsetHeight, 10)
    });
    // tank.hideLabel();
    //主建筑label点击显示面板
    let onFinish = function() {
      console.log("finished");
    };
    let onProgress = function(position) {
      /* let camPos = app.getCurrentCamera().position;
      let dis;
      if (position.name === "3") {
        dis = camPos.distanceTo(new APP3D.Vector3(position.x, position.y, position.z));
        console.log(position);
        console.log("do your business logic once");
        console.log("distance to the control point: ", dis);
        return false; //do the callback once in the closing area 
      } else {
        dis = camPos.distanceTo(new APP3D.Vector3(position.x, position.y, position.z));
        console.log(position);
        console.log("distance to the control point: ", dis);
        return true; //do the callback multiple times in the closing area
      }; */
      return false;
    };
    
    /* let flag1 = false;
    let flag2 = false; */
    $('#' + mainBuilding.name).click(function() {
      _this.deselectAll();
      /* towerFlag = !towerFlag
      centerFlag = !centerFlag */
      let id = $(this).attr('id');
      if (id.indexOf('model_building_001') > -1) { //东方明珠塔
        if (!towerFlag) {
          towerFlag = true;
          // _this.flyToHomePosition(2);
          _this.flyToCustomPosition({
            x:-926.8082233348978,
            y:940.5625674153316,
            z:43.64715040279282,
          },{
            x:0.8126177590010598,
            y:-0.5730642288379806,
            z:-0.10606492060255493,
          },1);
        }else {
          towerFlag = false;
        
        
        $('.panel-tv').fadeIn(300, function() {
          $('.panel-tv .line1').fadeIn(200, function() {
            chartFour.resize();
            $('.panel-tv .line2').fadeIn(150, function() {
              chartFive.resize();
              $('.panel-tv .line3').fadeIn(100)
              chartSix.resize();
            })
          })
        })
        let ctrlPoints = [{
            x: -820.466222981575,
            y: 893.6295004839053,
            z: -55.23899902504124,
          },
          {
            x: 509.62691659766665,
            y: 1096.0336798628296,
            z: 813.6579247669647,
          },
          {
            x: 1368.5610633781544,
            y: 941.0356500337515,
            z: -445.97591293459607,
          },
          {
            x: -82.5354092181152,
            y: 1031.7828584135107,
            z: -1209.8753240553242,
          },
          {
            x: -820.466222981575,
            y: 893.6295004839053,
            z: -55.23899902504124,
          },

        ];
        let focalPoints = [{
            x: 0.8126177590010598,
            y: -0.5730642288379805,
            z: -0.10606492060255493,
          },
          {
            x: -0.14649009030174748,
            y: -0.7031381523086562,
            z: -0.6957998219397266,
          },
          {
            x: -0.767207302726509,
            y: -0.6035295279612847,
            z: 0.21712914019528504,
          },
          {
            x: 0.2528868857015328,
            y: -0.6618477181991861,
            z: 0.7056952748564431,
          },
          {
            x: 0.8126177590010598,
            y: -0.5730642288379805,
            z: -0.10606492060255493,
          },
        ];
        let sectionTimes = [3, 3, 3, 3, 3, 3];
        // console.log(278, mainBuilding.getCenter())
        _this.app3dApp.getCurrentCamera().flyingInspection(
          ctrlPoints,
          focalPoints,
          sectionTimes,
          onFinish, true, //是否重复执行
          onProgress, 10);
        }  
      } else { //大厦
        if (!centerFlag) {
          centerFlag = true;
          _this.flyToCustomPosition({
            x:113.44333868675903,
            y:806.685993993437,
            z:635.8504935697323,
          },{
            x:0.8126177590010597,
            y:-0.5730642288379808,
            z:-0.10606492060255489,
          },1);

        }else {
          centerFlag = false;
        
        $('.panel-chart').fadeIn(300, function() {
          $('.panel-chart .line1').fadeIn(200, function() {
            chartOne.resize();
            $('.panel-chart .line2').fadeIn(150, function() {
              chartTwo.resize();
              $('.panel-chart .line3').fadeIn(100)
              chartThree.resize();
            })
          })
        })
        let ctrlPoints = [{
            x: 128.80029211201372,
            y: 728.2194793857902,
            z: 616.6154640555267,
          },
          {
            x: 798.8136364935497,
            y: 753.8091107440981,
            z: -192.4274788622754,
          },
          {
            x: 1512.6778409865688,
            y: 616.103211475046,
            z: 543.8437769337427,
          },
          {
            x: 811.0469501545018,
            y: 773.7675867272126,
            z: 1146.1351068596548,
          },
          {
            x: 128.80029211201372,
            y: 728.2194793857902,
            z: 616.6154640555267,
          },

        ];
        let focalPoints = [
          {
            x: 0.8126177590010598,
            y: -0.5730642288379806,
            z: -0.10606492060255493,
          },
          {
            x: 0.015677511865748815,
            y: -0.624478333996521,
            z: 0.7808847712631031,
          },
          {
            x: -0.8581076332084286,
            y: -0.5101101346192543,
            z: -0.05864247938273881,
          },
          {
            x: -0.019512123144370834,
            y: -0.6410543483330127,
            z: -0.7672474174174428,
          },
          {
            x: 0.8126177590010598,
            y: -0.5730642288379806,
            z: -0.10606492060255493,
          },
        ];
        let sectionTimes = [3, 3, 3, 3, 3, 3];
        _this.app3dApp.getCurrentCamera().flyingInspection(
          ctrlPoints,
          focalPoints,
          sectionTimes,
          onFinish, true, //是否重复执行
          onProgress, 10);
        /* let path = [{
            ctrlPoint: {
              name: "1",
              x: -168.5982046698137,
              y: 40.94409186960053,
              z: -113.86399347652592
            },
            focalPoint: {
              x: 0.6310640471840624,
              y: -0.14960645566213013,
              z: 0.7611675747007923
            },
            sectionTime: 1,
            stopTime: 1
          },
          {
            ctrlPoint: {
              name: "2",
              x: -98.2033085489548,
              y: 24.514740245899585,
              z: -28.95611036906054
            },
            focalPoint: {
              x: 0.6310640471840624,
              y: -0.1496064556621301,
              z: 0.7611675747007924
            },
            sectionTime: 1,
            stopTime: 2,
          },
          {
            ctrlPoint: {
              name: "3",
              x: -25.836468003422027,
              y: 31.87020792324345,
              z: 93.41494418031861
            },
            focalPoint: {
              x: 0.8864947778819902,
              y: -0.3599354908352769,
              z: 0.29081514957981286
            },
            sectionTime: 4,
            stopTime: 3
          },
          {
            ctrlPoint: {
              name: "4",
              x: 132.79968719508813,
              y: 35.75704233275643,
              z: 39.42901360353525
            },
            focalPoint: {
              x: -0.6471463320967848,
              y: -0.3289241678282714,
              z: -0.6877576002285662
            },
            sectionTime: 1,
            stopTime: 4
          }

        ]; 
        _this.app3dApp.getCurrentCamera().flyInPath(path, true, onFinish, onProgress, 10) */

        }
      };
      //显示左侧边栏面板
      $('.panel-left').fadeIn(300,function(){
        $('.panel-left .line1').fadeIn(200,function(){
          $('.panel-left .line2').fadeIn(150,function(){
            $('.panel-left .line3').fadeIn(100,function(){
              chartLeft.resize()
            })
          })
        })
      });
    })

  });
};
//初始化检测中心label
Application.prototype.InitDarkMonitoringCenterLabels = function() {
  let monitoringObjects = this.app3dApp.queryForObject(
    "^model_building_003$|^model_building_004$|^model_building_005$|^model_building_006$|^model_building_007$"
  )
  let infoList = []
  monitoringObjects.forEach(function(monitoringObject) {
    let info = {
      'PM2.5': parseInt(Math.random() * 200 + 100),
      'noise': parseInt(Math.random() * 100 + 40)
    };
    let label = new Label({
      labelType: 'monitoring-center',
      name: monitoringObject.info.label,
      info
    });
    label.createLabel(monitoringObject.name);
    let labelDiv = $('#' + monitoringObject.name)[0];
    monitoringObject.addLabel({
      div: labelDiv,
      anchorType: APP3D.LabelPosition.LABEL_TOP,
      labelStartPxRelativeX: -parseInt(labelDiv.offsetWidth, 10) / 2,
      labelStartPxRelativeY: parseInt(labelDiv.offsetHeight, 10) + 50
    });
    // monitoringObject.hideLabel();
    //报警label点击显示面板
  });
  let timer = setInterval(function() {
    monitoringObjects.forEach(function(monitoringObject) {
      let info = {
        'PM2.5': parseInt(Math.random() * 200 + 100),
        'noise': parseInt(Math.random() * 100 + 40)
      };
      $('#' + monitoringObject.name + ' .noise>td:last-of-type').text(info.noise + 'dB');
      $('#' + monitoringObject.name + ' .pm>td:last-of-type').text(info['PM2.5']);
      if (info.noise > 80) {
        $('#' + monitoringObject.name + ' .noise>td:last-of-type').attr('class', 'warning');
      } else {
        $('#' + monitoringObject.name + ' .noise>td:last-of-type').removeClass('warning');
      }
    })
  }, 5000)
};

function turnOnUnRealBloomPass(app) {
  app.getCurrentScene().sun.intensity = 0;
  app.getCurrentScene().ambientLight.intensity = 0.65;
  app.getCurrentScene().ambientLight.color.setHex(0xffffff); // 0xf59191

  app.setBloomStyle({
    enabled: true,
    exposure: 0.73,
    bloomStrength: 1.9,
    bloomThreshold: 0.21,
    bloomRadius: 0.95,
  });
};

function restoreNormal(app) {
  app.getCurrentScene().sun.intensity = 0;
  app.getCurrentScene().ambientLight.intensity = 0.5;

  app.setBloomStyle({
    enabled: false,
  });
};
// 计算相机焦点坐标
function calculateTargetPoint(finalPos, finalLookAtDir, targetElevation) {
  var r = (targetElevation - finalPos.y) / finalLookAtDir.y;
  var targetPos = {
    x: finalPos.x + finalLookAtDir.x * r,
    y: finalPos.y + finalLookAtDir.y * r,
    z: finalPos.z + finalLookAtDir.z * r
  };
  return targetPos;
}
var bUseEmissiveMap = false;
var bTurnOnUnRealBloomPass = true;//添加光晕
var isExplosion = true;
var isGlowBand = true;
var isUpdateEmission = false;

Application.prototype.onProgress = function(count) {
  let text = Math.round(((count.total - count.remaining) / count.total) * 100) + "%";
  let progressbar = document.getElementById("progressbar");
  let textBox = progressbar.querySelector(".text");
  let proInner = progressbar.querySelector("#pro-inner");
  textBox.innerHTML = strings.loading + text + '...';
  proInner.style.width = text;

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
    case "Escape":
      this.deselectAll();
      /* let towerFlag = true;
      let centerFlag = true; */
      if(!towerFlag){
        towerFlag = true;
        // _this.flyToHomePosition(2);
        this.flyToCustomPosition({
          x:-926.8082233348978,
          y:940.5625674153316,
          z:43.64715040279282,
        },{
          x:0.8126177590010598,
          y:-0.5730642288379806,
          z:-0.10606492060255493,
        },1);
      }else if(!centerFlag){
        centerFlag = true;
        // _this.flyToHomePosition(2);
        this.flyToCustomPosition({
          x:113.44333868675903,
          y:806.685993993437,
          z:635.8504935697323,
        },{
          x:0.8126177590010597,
          y:-0.5730642288379808,
          z:-0.10606492060255489,
        },1);
      }else {
        this.flyToHomePosition(2);//返回初始状态
      };
      
      break;
    case "KeyC":
      console.log("camera position", this.app3dApp.getCurrentCamera().position);
      let lookAt = this.app3dApp.getCurrentCamera().getLookAtVector();
      console.log("camera lookAt", lookAt);
      console.log("-------------------------------");
      // console.log(selectedObject.matrixWorld);
      break;
    case "KeyX":
      bUseEmissiveMap = !bUseEmissiveMap;
      let objs = this.app3dApp.queryForObject("build_1|build_2|build_3");
      objs.forEach(obj => {
        obj.traverse((child) => {
          if (child.isMesh) {
            if (bUseEmissiveMap) {
              child.material.emissive.setHex(0xff0000);
              child.material.emissiveIntensity = 1;
              child.material.emissiveMap = APP3D.Texture.load("./assets/emissivMap3.png");
            } else {
              child.material.emissive.setHex(0x000000);
              child.material.emissiveIntensity = 1;
              child.material.emissiveMap = null;
            }
          }
        });
      });
    case "KeyE":
      isExplosion = !isExplosion;
      if (isExplosion) {
        this.explosionBall.setVisibility(true);
      } else {
        this.explosionBall.setVisibility(false);
      }
      break;
    case "KeyB":
      isGlowBand = !isGlowBand;
      if (isGlowBand) {
        this.glowParameters.restore = false;
        this.glowBand.updateParameters(this.glowParameters);
      } else {
        this.glowParameters.restore = true;
        this.glowBand.updateParameters(this.glowParameters);
      }
      break;
    case "KeyW":
      bTurnOnUnRealBloomPass = !bTurnOnUnRealBloomPass;
      if (bTurnOnUnRealBloomPass) {
        turnOnUnRealBloomPass(this.app3dApp);
      } else {
        restoreNormal(this.app3dApp);
      }
      break;
    case "KeyH":
      this.selectionFeature.enableHover(!this.selectionFeature.isHoverEnabled);
      break;
    case "KeyT":
      this.showStatsInfo = !this.showStatsInfo;
      this.app3dApp.showStatsInfo(this.showStatsInfo);
      break;
    case "KeyU":
      // emission test
      isUpdateEmission = !isUpdateEmission;
      if (isUpdateEmission) {
        /* var emissionObj = this.app3dApp.queryForObject("model_road_grow");
        this.emissionControlFeature.start(emissionObj); */
        this.emissionConfig.objList.forEach(obj => {
          var emissionObj = this.app3dApp.queryForObject(obj.name);
          this.emissionControlFeature.start(emissionObj, obj.iniIntensity);
        });

      } else {
        // this.emissionControlFeature.pause();
        this.emissionConfig.objList.forEach(obj => {
          var emissionObj = this.app3dApp.queryForObject(obj.name);
          this.emissionControlFeature.pause(emissionObj);
        });

      }
      break;
    case "KeyL":
      // LUT Composer
      let parametersLUT = {
        renderer: this.app3dApp.renderer,
        scene: this.app3dApp.getCurrentScene(),
        camera: this.app3dApp.getCurrentCamera(),
        lutInfo: { name: 'custom', size: 16, filter: true, url: './assets/inverse-s8.png' },
      };
      let lutComposer = new APP3D.EffectComposerFactory("lut", parametersLUT);
      this.app3dApp.composer = lutComposer;
      break;
      /*case "KeyN":   //道路发光显隐
         this.showRoadStatus = !this.showRoadStatus;
        if (!this.showRoadStatus) {
            this.roadStatusBlocks.forEach(object =>{
                object.visible = false;
            });
        }
        else {
            this.roadStatusBlocks.forEach(object =>{
                object.visible = true;
            });
        }
        break;
    case "KeyM":   //流线发光显隐
         this.showPipeStatus = !this.showPipeStatus;
        if (!this.showPipeStatus) {
            this.flowingLineFeature.create(this.app3dApp.getCurrentScene());
        }
        else {
        	this.flowingLineFeature.bind(this.app3dApp.getCurrentScene());
        }
        break;*/
    default:
      break;
  }
};

// 选择
Application.prototype.select = function(event) {
  this.deselectAll();
  this.selectionFeature.select(event, null, null, null);
}
// 取消选择全部
Application.prototype.deselectAll = function() {
  this.selectionFeature.deselectAll();
  // this.flyToHomePosition(2);

  let src = $('.cruise img').attr('src');
  if (src.indexOf('_p') > -1) {
    $('.cruise img').attr('src', src.replace(/_p\.png/g, '.png'));
  }

  // $('.panel-warning').fadeOut(80);
  $('body>[class^="panel-"]').fadeOut(80, function() {
    $('.line1').hide();
    $('.line2').hide();
    $('.line3').hide();
  });
}
Application.prototype.flyTo = function(event) {
  this.app3dApp
    .getCurrentCamera()
    .flyTo(event.object, 1.5, 30, this.flyToFadeEffect);
};

Application.prototype.flyToCustomPosition = function(finalPos1,finalLookAtDirection1,durationSecond) {
  this.deselectAll();
  // let finalPos, finalLookAtDirection;
  let finalPos = finalPos1 ? finalPos1 : {
    x: -3362.5742581566374,
    y: 2246.8562323182327,
    z: 861.9225965422893
  };
  let finalLookAtDirection =finalLookAtDirection1 ? finalLookAtDirection1 : {
    x: 0.8126177590010599,
    y: -0.5730642288379802,
    z: -0.10606492060255485
  };

  let stopDistance = 0;
  let duration = durationSecond ? durationSecond : 1; //默认值为1秒

  this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null, finalLookAtDirection);
  var targetPos = calculateTargetPoint(finalPos, finalLookAtDirection, 0);
  this.app3dApp.orbitControl.target.set(targetPos.x, targetPos.y, targetPos.z);
};

Application.prototype.flyToHomePosition = function(durationSecond) {
  this.deselectAll();
  let finalPos, finalLookAtDirection;
  finalPos = {x: 606.4515087819299, y: 2897.121675755723, z: 4280.901013924466};
  finalLookAtDirection = {x: -0.16257779654767457, y: -0.5080528385701363, z: -0.845843232100683};

  let stopDistance = 0;
  let duration = durationSecond ? durationSecond : 1; //默认值为1秒

  this.app3dApp.getCurrentCamera().flyToPoint(finalPos, duration, stopDistance, null, finalLookAtDirection);
  var targetPos = calculateTargetPoint(finalPos, finalLookAtDirection, 0);
  this.app3dApp.orbitControl.target.set(targetPos.x, targetPos.y, targetPos.z);
};


window.onload = function() {
  var myApp = window.myApp = new Application();
};
