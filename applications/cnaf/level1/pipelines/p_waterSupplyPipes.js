var style_segment_zero = {
  routeType: 0,
  connectionRadius: 0,
  tubularSegments: 0
};

var style_segment_long = {
  routeType: 0,
  connectionRadius: 0,
  tubularSegments: 1
};

var style_segment_turn = {
  routeType: 1,
  connectionRadius: 1,
  tubularSegments: 8
};

var style_cyan = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_blue.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var WaterSupplyPipeParams = [{
  name: "Line220",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[601.1, 473.444, 4.0], [601.1, 444.258, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[601.1, 444.258, 4.0], [601.1, 443.258, 4.0], [600.1, 443.258, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[600.1, 443.258, 4.0], [513.145, 443.258, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[513.145, 443.258, 4.0], [512.145, 443.258, 4.0], [512.145, 442.258, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[512.145, 442.258, 4.0], [512.287, 217.681, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[512.287, 217.681, 4.0], [512.287, 216.681, 4.0], [513.287, 216.681, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[513.287, 216.681, 4.0], [728.838, 216.8, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[728.838, 216.8, 4.0], [729.838, 216.8, 4.0], [729.838, 217.8, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[729.838, 217.8, 4.0], [729.67, 460.907, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[729.67, 460.907, 4.0], [729.67, 461.907, 4.0], [728.67, 461.907, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[728.67, 461.907, 4.0], [601.1, 461.835, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line221",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[571.16, 216.713, 4.0], [571.16, 199.14, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line222",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[740.223, 359.421, 4.0], [512.197, 359.294, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line223",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[732.772, 359.418, 4.0], [732.772, 357.216, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[732.772, 357.216, 4.0], [732.772, 356.216, 4.0], [731.772, 356.216, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[731.772, 356.216, 4.0], [539.624, 356.077, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[539.624, 356.077, 4.0], [538.624, 356.077, 4.0], [538.624, 355.077, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[538.624, 355.077, 4.0], [538.624, 354.37, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line224",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[644.54, 359.368, 4.0], [644.511, 417.175, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[644.511, 417.175, 4.0], [644.511, 418.175, 4.0], [645.511, 418.175, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[645.511, 418.175, 4.0], [646.488, 418.175, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[646.488, 418.175, 4.0], [647.488, 418.175, 4.0], [647.488, 419.175, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[647.488, 419.175, 4.0], [647.488, 419.655, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line225",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[512.186, 384.466, 4.0], [536.396, 384.466, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line226",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[512.174, 402.971, 4.0], [536.38, 402.971, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line227",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[551.984, 443.258, 4.0], [551.984, 436.34, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line228",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[576.3, 443.257, 4.0], [576.326, 412.135, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[576.326, 412.135, 4.0], [576.326, 411.135, 4.0], [575.326, 411.135, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[575.326, 411.135, 4.0], [568.717, 411.135, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line229",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[740.824, 550.714, 4.0], [272.674, 550.415, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[272.674, 550.415, 4.0], [271.674, 550.415, 4.0], [271.674, 551.415, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[271.674, 551.415, 4.0], [271.541, 742.796, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[271.541, 742.796, 4.0], [271.541, 743.796, 4.0], [272.541, 743.796, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[272.541, 743.796, 4.0], [662.05, 744.204, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[662.05, 744.204, 4.0], [663.05, 744.204, 4.0], [663.05, 743.204, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[663.05, 743.204, 4.0], [663.183, 550.665, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line230",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[730.702, 550.704, 4.0], [725.971, 742.766, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[725.971, 742.766, 4.0], [725.971, 743.766, 4.0], [724.971, 743.766, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[724.971, 743.766, 4.0], [603.42, 743.71, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[603.42, 743.71, 4.0], [602.42, 743.71, 4.0], [602.42, 742.71, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[602.42, 742.71, 4.0], [602.42, 731.78, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line231",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.062, 726.61, 4.0], [664.271, 726.61, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line232",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.063, 721.029, 4.0], [699.74, 721.029, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[699.74, 721.029, 4.0], [700.74, 721.029, 4.0], [700.74, 722.029, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[700.74, 722.029, 4.0], [700.74, 722.953, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line233",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.066, 721.029, 4.0], [627.018, 721.029, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line234",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.124, 635.609, 4.0], [724.077, 635.609, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line235",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[717.091, 635.607, 4.0], [717.091, 636.884, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line236",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[677.113, 635.608, 4.0], [677.113, 636.884, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line237",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.158, 586.597, 4.0], [664.353, 586.597, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line238",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[663.164, 578.375, 4.0], [627.111, 578.375, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line239",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[652.186, 550.657, 4.0], [652.186, 556.705, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line240",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[552.744, 550.595, 4.0], [552.744, 556.409, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line241",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[552.744, 550.594, 4.0], [552.744, 539.189, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line242",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[544.133, 550.588, 4.0], [544.133, 567.584, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[544.133, 567.584, 4.0], [544.133, 568.584, 4.0], [543.133, 568.584, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[543.133, 568.584, 4.0], [540.769, 568.584, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line243",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[502.142, 550.553, 4.0], [502.142, 551.733, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line244",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[444.461, 550.527, 4.0], [444.461, 560.488, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line245",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[438.185, 550.52, 4.0], [438.185, 556.412, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line246",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[388.164, 550.489, 4.0], [388.164, 555.484, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line247",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[384.247, 550.487, 4.0], [384.247, 560.269, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line248",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[338.165, 550.457, 4.0], [338.165, 553.677, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line249",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.657, 578.342, 4.0], [272.867, 578.342, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line250",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.652, 582.351, 4.0], [248.695, 582.326, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[248.695, 582.326, 4.0], [247.695, 582.326, 4.0], [247.695, 583.326, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[247.695, 583.326, 4.0], [247.695, 584.358, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line251",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.624, 628.335, 4.0], [272.823, 628.335, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line252",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.614, 637.349, 4.0], [233.19, 637.349, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line253",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.586, 678.351, 4.0], [272.797, 678.351, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line254",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[271.551, 728.344, 4.0], [272.746, 728.344, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line255",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[310.061, 743.837, 4.0], [310.061, 744.504, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line256",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[349.035, 743.877, 4.0], [349.035, 731.827, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line257",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[355.025, 743.888, 4.0], [355.025, 743.427, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line258",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[373.865, 743.901, 4.0], [373.865, 731.83, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line259",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[385.286, 743.912, 4.0], [385.286, 731.781, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line260",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[393.996, 743.922, 4.0], [393.996, 731.789, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line261",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[405.029, 743.928, 4.0], [405.029, 744.549, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line262",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[409.113, 743.938, 4.0], [409.113, 731.805, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line263",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[455.042, 743.984, 4.0], [455.042, 743.408, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line264",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[491.698, 744.024, 4.0], [491.698, 731.861, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line265",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[499.745, 744.033, 4.0], [499.745, 731.87, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line266",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[502.048, 744.033, 4.0], [502.048, 743.587, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line267",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[516.874, 744.05, 4.0], [516.874, 731.882, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line268",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[552.052, 744.091, 4.0], [552.052, 743.59, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line269",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[570.733, 744.11, 4.0], [570.947, 731.908, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line270",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[597.343, 744.136, 4.0], [597.343, 731.944, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line271",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[600.055, 744.141, 4.0], [600.055, 743.411, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line272",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[618.741, 743.716, 4.0], [618.741, 731.972, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line273",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[734.58, 1096.884, 4.0], [598.68, 1096.884, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line274",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[719.38, 1096.881, 4.0], [719.38, 1093.91, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[719.38, 1093.91, 4.0], [719.38, 1092.91, 4.0], [718.38, 1092.91, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[718.38, 1092.91, 4.0], [699.581, 1092.857, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[699.581, 1092.857, 4.0], [698.581, 1092.857, 4.0], [698.581, 1093.857, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[698.581, 1093.857, 4.0], [698.581, 1135.813, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[698.581, 1135.813, 4.0], [698.581, 1136.813, 4.0], [697.581, 1136.813, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[697.581, 1136.813, 4.0], [524.709, 1136.694, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[524.709, 1136.694, 4.0], [523.709, 1136.694, 4.0], [523.709, 1137.694, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[523.709, 1137.694, 4.0], [523.658, 1221.771, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[523.658, 1221.771, 4.0], [523.658, 1222.771, 4.0], [524.658, 1222.771, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[524.658, 1222.771, 4.0], [532.678, 1222.771, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[532.678, 1222.771, 4.0], [533.678, 1222.771, 4.0], [533.678, 1223.771, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[533.678, 1223.771, 4.0], [533.678, 1224.467, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line275",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[695.844, 1096.884, 4.0], [695.844, 1114.816, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line276",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[695.844, 1114.306, 4.0], [703.347, 1114.306, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[703.347, 1114.306, 4.0], [704.347, 1114.306, 4.0], [704.347, 1115.306, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[704.347, 1115.306, 4.0], [704.347, 1131.75, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line277",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[695.844, 1114.306, 4.0], [477.179, 1114.142, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[477.179, 1114.142, 4.0], [476.179, 1114.142, 4.0], [476.179, 1113.142, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[476.179, 1113.142, 4.0], [476.179, 1107.99, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line278",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[662.669, 1114.28, 4.0], [662.669, 1133.588, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[662.669, 1133.588, 4.0], [662.669, 1134.588, 4.0], [663.669, 1134.588, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[663.669, 1134.588, 4.0], [711.936, 1134.588, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line279",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[551.835, 1114.195, 4.0], [551.835, 1139.955, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line280",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[532.064, 1136.699, 4.0], [532.064, 1108.94, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line281",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[532.063, 1136.7, 4.0], [532.063, 1139.944, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line282",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[523.671, 1200.903, 4.0], [509.39, 1200.903, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line283",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[566.318, 1114.209, 4.0], [566.195, 1303.294, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[566.195, 1303.294, 4.0], [566.195, 1304.294, 4.0], [565.195, 1304.294, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[565.195, 1304.294, 4.0], [203.302, 1304.03, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[203.302, 1304.03, 4.0], [202.302, 1304.03, 4.0], [202.363, 1303.03, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[202.363, 1303.03, 4.0], [229.124, 864.709, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[229.124, 864.709, 4.0], [229.185, 863.709, 4.0], [230.185, 863.709, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[230.185, 863.709, 4.0], [438.609, 863.872, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[438.609, 863.872, 4.0], [439.609, 863.872, 4.0], [439.609, 864.872, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[439.609, 864.872, 4.0], [439.609, 866.37, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line284",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[479.194, 1304.231, 4.0], [479.328, 1108.939, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line285",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[280.887, 1304.086, 4.0], [280.887, 1318.807, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line286",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[261.636, 1304.073, 4.0], [261.636, 1277.423, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[261.636, 1277.423, 4.0], [261.636, 1276.423, 4.0], [260.636, 1276.423, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[260.636, 1276.423, 4.0], [248.231, 1276.423, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line287",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[261.636, 1299.378, 4.0], [213.751, 1299.378, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[213.751, 1299.378, 4.0], [212.751, 1299.378, 4.0], [212.751, 1298.378, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[212.751, 1298.378, 4.0], [212.751, 1277.017, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[212.751, 1277.017, 4.0], [212.751, 1276.017, 4.0], [213.751, 1276.017, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[213.751, 1276.017, 4.0], [231.845, 1276.017, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[231.845, 1276.017, 4.0], [232.845, 1276.017, 4.0], [232.845, 1277.017, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[232.845, 1277.017, 4.0], [232.845, 1286.43, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line288",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[256.475, 1304.069, 4.0], [256.475, 1318.794, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line289",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[226.745, 1304.047, 4.0], [226.745, 1318.774, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line290",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[208.137, 1208.447, 4.0], [262.037, 1208.49, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[262.037, 1208.49, 4.0], [263.037, 1208.49, 4.0], [263.037, 1209.49, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[263.037, 1209.49, 4.0], [263.037, 1223.961, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line291",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[401.753, 863.842, 4.0], [401.753, 847.818, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[401.753, 847.818, 4.0], [401.753, 846.818, 4.0], [402.753, 846.818, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[402.753, 846.818, 4.0], [479.528, 846.818, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[479.528, 846.818, 4.0], [480.528, 846.818, 4.0], [480.528, 847.818, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[480.528, 847.818, 4.0], [480.528, 979.534, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line292",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[405.401, 863.847, 4.0], [405.401, 873.597, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line293",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[203.733, 1304.03, 4.0], [203.658, 1386.555, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[203.658, 1386.555, 4.0], [203.658, 1387.555, 4.0], [204.658, 1387.555, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[204.658, 1387.555, 4.0], [214.787, 1387.555, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line294",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[205.627, 1387.555, 4.0], [205.593, 1432.145, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line295",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[205.593, 1432.145, 4.0], [203.827, 1432.187, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line296",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[205.593, 1432.145, 4.0], [599.55, 1425.049, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[599.55, 1425.049, 4.0], [600.55, 1425.031, 4.0], [621.329, 1422.075, 4.0], [695.547, 1402.849, 4.0], [706.439, 1390.192, 4.0], [712.568, 1374.309, 4.0], [712.561, 1371.175, 4.0]],
    segStyle: style_segment_zero
  }]
}, {
  name: "Line297",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[205.605, 1416.18, 4.0], [185.498, 1416.18, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[185.498, 1416.18, 4.0], [184.498, 1416.18, 4.0], [184.498, 1417.18, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[184.498, 1417.18, 4.0], [184.498, 1423.33, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line298",
  pipeStyle: style_cyan,
  routeArray: [{
    route: [[205.605, 1416.18, 4.0], [349.193, 1416.286, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[349.193, 1416.286, 4.0], [350.193, 1416.286, 4.0], [355.827, 1410.88, 4.0], [356.827, 1410.88, 4.0]],
    segStyle: style_segment_zero
  }, {
    route: [[356.827, 1410.88, 4.0], [559.432, 1411.548, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[559.432, 1411.548, 4.0], [560.432, 1411.548, 4.0], [598.211, 1410.914, 4.0], [604.226, 1410.016, 4.0], [612.679, 1406.158, 4.0], [617.51, 1401.687, 4.0], [624.347, 1386.591, 4.0], [633.067, 1349.87, 4.0], [637.767, 1342.295, 4.0], [647.124, 1333.064, 4.0], [659.931, 1333.064, 4.0], [668.523, 1326.453, 4.0]],
    segStyle: style_segment_zero
  }]
}];