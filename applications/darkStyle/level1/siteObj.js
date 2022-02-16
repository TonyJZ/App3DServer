var siteObj = {
  scenes: [{
    name: "darkStyle",
    isPrimary: true,
    camera: {
      initialPosition: {
        x: -2300.763073399684,
        y: 500.449409233422,
        z: 700.063793476806
      },
      initialFocalPoint: {
        x: 0,
        y: 0,
        z: 0
      },
      homePosition: {
        x: 0.763073399684,
        y: 0.449409233422,
        z: 0.063793476806
      },
      homeFocalPoint: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    objects: [
      {
        name: "model_darkStyle",
        path: "./assets/models/level1/dark/model_darkStyle.app3",
        selectableObjectExp: [{
            name: "model_ground", //地面
          },
          {
            name: "model_road", //路面
          },
          {
            name: "model_jinmao", //河流
          },
          {
            name: "model_building_001", //东方明珠
          },
          {
            name: "model_building_001_grow", //东方明珠发光部分
          },
          {
            name: "model_building_002", //环球金融中心
          },
          {
            name: "model_building_002_grow", //环球金融中心发光部分
          },
          {
            name: "model_building_003", //城市检测中心1
            label: "城市检测中心1"
          },
          {
            name: "model_building_004", //城市检测中心2
            label: "城市检测中心2"
          },
          {
            name: "model_building_005", //城市检测中心3
            label: "城市检测中心3"
          },
          {
            name: "model_building_006", //城市检测中心4
            label: "城市检测中心4"
          },
          {
            name: "model_building_007", //城市检测中心5
            label: "城市检测中心5"
          },
          {
            name: "model_building_008", //火灾事故
            label: "火灾事故"
          },
          {
            name: "model_building_009", //人流密度预警
            label: "人流密度预警"
          },
          {
            name: "model_building_010", //电梯故障
            label: "电梯故障"
          },
          {
            name: "model_oilCar", //油罐车翻车
            label: "油罐车翻车"
          },
        ]
      },
      {
          name: "model_river",
          path: "./assets/models/level1/dark/model_river.app3",
      },
      {
          name: "model_ui",
          path: "./assets/models/level1/dark/model_ui.app3",
      },
      {
          name: "model_ripple",
          path: "./assets/models/level1/dark/model_ripple.app3",
          label: "火灾事故报警动效"
      },
      {
        name: "model_radar",
        path: "./assets/models/level1/dark/model_ripple.app3",
        label: "雷达"
      },
      {
        name: "model_up",
        path: "./assets/models/level1/dark/model_up.app3",
        label: "粒子向上移动"
      },
      {
        name: "model_building_other",
        path: "./assets/models/level1/dark/model_building_other.app3",
        label: "其他模型"
      },
      {
        name: "model_building_other_grow",
        path: "./assets/models/level1/dark/model_building_other_grow.app3",
        selectableObjectExp: [
          {
            name: "model_building_other_part01_grow", 
          },
          {
            name: "model_building_other_part02_grow", 
          },
          {
            name: "model_building_other_part03_grow", 
          },
          {
            name: "model_building_other_part04_grow", 
          },
          {
            name: "model_building_other_part05_grow", 
          },
          {
            name: "model_building_other_part06_grow", 
          },
          {
            name: "model_building_other_part07_grow", 
          },
          {
            name: "model_building_other_part08_grow", 
          },
          {
            name: "model_building_other_part09_grow", 
          },
        ]
      },
      {
        name: "model_window_grow",
        path: "./assets/models/level1/dark/model_window_grow.app3",
        selectableObjectExp: [{
            name: "model_window_grow01", //窗户01发光
          },
          {
            name: "model_window_grow02", //窗户02发光
          },
          {
            name: "model_window_grow03", //窗户03发光
          },
          {
            name: "model_window_grow04", //窗户04发光
          },
          {
            name: "model_window_grow05", //窗户05发光
          },
        ]
      },
      {
        name: "model_road_grow",
        path: "./assets/models/level1/dark/model_road_grow.app3",
        selectableObjectExp: [{
            name: "model_road_grow_01", 
          },
          {
            name: "model_road_grow_02", 
          },
          {
            name: "model_road_grow_03",
          },
          {
            name: "model_road_grow_04",
          },
          {
            name: "model_road_grow_05",
          },
        ]
      },


    ]
  }]
};