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

var style_red = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_red.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var CompressedAirPipeParams = [{
  name: "Line299",
  pipeStyle: style_red,
  routeArray: [{
    route: [[555.641, 354.747, 4.0], [555.641, 360.002, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[555.641, 360.002, 4.0], [555.641, 361.002, 4.0], [554.641, 361.002, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[554.641, 361.002, 4.0], [508.246, 361.002, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[508.246, 361.002, 4.0], [507.246, 361.002, 4.0], [507.246, 362.002, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[507.246, 362.002, 4.0], [506.984, 533.001, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[506.984, 533.001, 4.0], [506.984, 534.001, 4.0], [507.984, 534.001, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[507.984, 534.001, 4.0], [546.095, 534.001, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[546.095, 534.001, 4.0], [547.095, 534.001, 4.0], [547.095, 535.001, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[547.095, 535.001, 4.0], [547.095, 576.998, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line300",
  pipeStyle: style_red,
  routeArray: [{
    route: [[507.064, 481.874, 4.0], [508.654, 484.648, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line301",
  pipeStyle: style_red,
  routeArray: [{
    route: [[408.329, 745.67, 4.0], [408.224, 884.304, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line302",
  pipeStyle: style_red,
  routeArray: [{
    route: [[408.228, 879.355, 4.0], [415.107, 891.72, 4.0], [448.88, 891.744, 4.0]],
    segStyle: style_segment_zero
  }]
}, {
  name: "Line303",
  pipeStyle: style_red,
  routeArray: [{
    route: [[408.247, 853.767, 4.0], [388.366, 889.398, 4.0], [361.281, 889.379, 4.0]],
    segStyle: style_segment_zero
  }]
}, {
  name: "Line304",
  pipeStyle: style_red,
  routeArray: [{
    route: [[233.433, 1286.343, 4.0], [233.433, 1275.988, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[233.433, 1275.988, 4.0], [233.433, 1274.988, 4.0], [232.433, 1274.988, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[232.433, 1274.988, 4.0], [213.441, 1274.988, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[213.441, 1274.988, 4.0], [212.441, 1274.988, 4.0], [212.441, 1275.988, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[212.441, 1275.988, 4.0], [212.394, 1329.074, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[212.394, 1329.074, 4.0], [212.394, 1330.074, 4.0], [213.394, 1330.074, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[213.394, 1330.074, 4.0], [216.352, 1330.074, 4.0]],
    segStyle: style_segment_long
  }]
}];