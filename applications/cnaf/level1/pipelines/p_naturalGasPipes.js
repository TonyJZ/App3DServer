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

var style_orange = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_yellow2.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var NaturalGasPipeParams = [{
  name: "Line208",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[730.498, 456.942, 4.0], [518.332, 456.565, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[518.332, 456.565, 4.0], [517.332, 456.565, 4.0], [517.332, 455.565, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[517.332, 455.565, 4.0], [517.373, 409.025, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[517.373, 409.025, 4.0], [517.373, 408.025, 4.0], [518.373, 408.025, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[518.373, 408.025, 4.0], [537.138, 408.025, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line209",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[730.497, 457.913, 4.0], [517.63, 457.773, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[517.63, 457.773, 4.0], [516.63, 457.773, 4.0], [516.63, 456.773, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[516.63, 456.773, 4.0], [516.712, 340.269, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[516.712, 340.269, 4.0], [516.712, 339.269, 4.0], [517.712, 339.269, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[517.712, 339.269, 4.0], [533.92, 339.269, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line210",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[725.454, 735.457, 4.0], [725.443, 742.217, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[725.443, 742.217, 4.0], [725.443, 743.217, 4.0], [724.443, 743.217, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[724.443, 743.217, 4.0], [345.667, 742.954, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[345.667, 742.954, 4.0], [344.667, 742.954, 4.0], [344.667, 741.954, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[344.667, 741.954, 4.0], [344.667, 731.7, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line211",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[406.816, 529.381, 4.0], [406.73, 647.861, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line212",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[406.782, 576.908, 4.0], [626.112, 577.06, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[626.112, 577.06, 4.0], [627.112, 577.06, 4.0], [627.112, 578.06, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[627.112, 578.06, 4.0], [627.112, 721.2, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[627.112, 721.2, 4.0], [627.112, 722.2, 4.0], [626.112, 722.2, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[626.112, 722.2, 4.0], [290.814, 722.028, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[290.814, 722.028, 4.0], [289.814, 722.028, 4.0], [289.814, 721.028, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[289.814, 721.028, 4.0], [289.913, 577.828, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[289.913, 577.828, 4.0], [289.913, 576.828, 4.0], [290.913, 576.828, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[290.913, 576.828, 4.0], [406.782, 576.908, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line213",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[681.11, 733.352, 4.0], [681.11, 733.576, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[681.11, 733.576, 4.0], [681.11, 734.576, 4.0], [680.11, 734.576, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[680.11, 734.576, 4.0], [678.489, 734.576, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[678.489, 734.576, 4.0], [677.489, 734.576, 4.0], [677.489, 733.576, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[677.489, 733.576, 4.0], [677.489, 725.726, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[677.489, 725.726, 4.0], [677.489, 724.726, 4.0], [676.489, 724.726, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[676.489, 724.726, 4.0], [657.219, 724.726, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[657.219, 724.726, 4.0], [656.219, 724.726, 4.0], [656.219, 723.726, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[656.219, 723.726, 4.0], [656.219, 722.158, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line214",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[680.447, 733.345, 4.0], [680.447, 734.085, 4.0], [679.447, 734.085, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[679.447, 734.085, 4.0], [679.16, 734.085, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[679.16, 734.085, 4.0], [678.16, 734.085, 4.0], [678.16, 733.085, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[678.16, 733.085, 4.0], [678.16, 724.919, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[678.16, 724.919, 4.0], [678.16, 723.919, 4.0], [677.16, 723.919, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[677.16, 723.919, 4.0], [658.375, 723.919, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[658.375, 723.919, 4.0], [657.375, 723.919, 4.0], [657.375, 722.919, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[657.375, 722.919, 4.0], [657.375, 722.163, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line215",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[740.078, 843.769, 4.0], [435.511, 843.564, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[435.511, 843.564, 4.0], [434.511, 843.564, 4.0], [434.511, 844.564, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[434.511, 844.564, 4.0], [434.511, 868.126, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line216",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[434.511, 866.367, 4.0], [465.497, 866.389, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line217",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[708.671, 1141.874, 4.0], [704.549, 1141.874, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[704.549, 1141.874, 4.0], [703.549, 1141.874, 4.0], [703.549, 1140.874, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[703.549, 1140.874, 4.0], [703.549, 1129.82, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[703.549, 1129.82, 4.0], [703.549, 1128.82, 4.0], [702.549, 1128.82, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[702.549, 1128.82, 4.0], [692.602, 1128.82, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[692.602, 1128.82, 4.0], [691.602, 1128.82, 4.0], [665.082, 1109.84, 4.0], [664.082, 1109.84, 4.0]],
    segStyle: style_segment_zero
  }, {
    route: [[664.082, 1109.84, 4.0], [524.944, 1109.731, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[524.944, 1109.731, 4.0], [523.944, 1109.731, 4.0], [523.944, 1110.731, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[523.944, 1110.731, 4.0], [523.898, 1152.447, 4.0]],
    segStyle: style_segment_long
  }, {
    route: [[523.898, 1152.447, 4.0], [523.898, 1153.447, 4.0], [522.898, 1153.447, 4.0]],
    segStyle: style_segment_turn
  }, {
    route: [[522.898, 1153.447, 4.0], [509.399, 1153.447, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line218",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[523.912, 1139.928, 4.0], [527.708, 1139.931, 4.0]],
    segStyle: style_segment_long
  }]
}, {
  name: "Line219",
  pipeStyle: style_orange,
  routeArray: [{
    route: [[195.796, 1218.155, 4.0], [261.395, 1218.204, 4.0]],
    segStyle: style_segment_long
  }]
}];