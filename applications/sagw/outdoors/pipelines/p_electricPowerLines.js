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

var style_yellow = {
  color: 0xffffff,
  // textureUrl: "./assets/pipeTextures/color_yellow.png",
  textureUrl: "./assets/pipeTextures/arrows_yellow.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var ElectricPowerLineParams = [
  {
    name: "Line117",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [
          [505.159, 484.578, 4.0],
          [505.252, 360.944, 4.0],
          [507.211, 318, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [
          [507.211, 318, 4.0],
          [507.262, 316.884, 4.0],
          [508.262, 316.884, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[508.262, 316.884, 4.0], [535.741, 316.884, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line118",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[535.742, 315.929, 4.0], [518.609, 315.912, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [518.609, 315.912, 4.0],
          [517.609, 315.912, 4.0],
          [517.609, 314.912, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[517.609, 314.912, 4.0], [517.689, 206.089, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [517.689, 206.089, 4.0],
          [517.689, 205.089, 4.0],
          [518.689, 205.089, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[518.689, 205.089, 4.0], [719.804, 205.228, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [719.804, 205.228, 4.0],
          [720.804, 205.228, 4.0],
          [720.804, 204.228, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[720.804, 204.228, 4.0], [720.804, 196.354, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line119",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[576.527, 205.13, 4.0], [576.527, 199.254, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line120",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[505.179, 460.795, 4.0], [601.626, 460.795, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [601.626, 460.795, 4.0],
          [602.626, 460.795, 4.0],
          [602.626, 461.795, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[602.626, 461.795, 4.0], [602.626, 473.439, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line121",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[601.995, 473.645, 4.0], [601.995, 473.519, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [601.995, 473.519, 4.0],
          [601.995, 472.519, 4.0],
          [600.995, 472.519, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[600.995, 472.519, 4.0], [584.643, 472.519, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [584.643, 472.519, 4.0],
          [583.643, 472.519, 4.0],
          [583.643, 473.519, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[583.643, 473.519, 4.0], [583.643, 478.3, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [583.643, 478.3, 4.0],
          [583.643, 479.3, 4.0],
          [582.643, 479.3, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[582.643, 479.3, 4.0], [576.12, 479.3, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line122",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[604.098, 473.443, 4.0], [604.098, 468.872, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [604.098, 468.872, 4.0],
          [604.098, 467.872, 4.0],
          [605.098, 467.872, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[605.098, 467.872, 4.0], [619.178, 467.872, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [619.178, 467.872, 4.0],
          [620.178, 467.872, 4.0],
          [620.178, 466.872, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[620.178, 466.872, 4.0], [620.178, 436.966, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line123",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[505.191, 454.502, 4.0], [578.966, 454.502, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line124",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[505.246, 368.676, 4.0], [637.429, 368.751, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [637.429, 368.751, 4.0],
          [638.429, 368.751, 4.0],
          [638.429, 369.751, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[638.429, 369.751, 4.0], [638.429, 372.002, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line125",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[639.316, 372.005, 4.0], [639.316, 369.759, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [639.316, 369.759, 4.0],
          [639.316, 368.759, 4.0],
          [640.316, 368.759, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[640.316, 368.759, 4.0], [702.365, 368.759, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [702.365, 368.759, 4.0],
          [703.365, 368.759, 4.0],
          [708.061, 374.905, 4.0],
          [708.061, 375.905, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[708.061, 375.905, 4.0], [708.061, 384.671, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [708.061, 384.671, 4.0],
          [708.061, 385.671, 4.0],
          [709.061, 385.671, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[709.061, 385.671, 4.0], [718.999, 385.671, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [718.999, 385.671, 4.0],
          [719.999, 385.671, 4.0],
          [719.999, 386.671, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[719.999, 386.671, 4.0], [719.999, 434.239, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line126",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[736.413, 220.954, 4.0], [736.413, 221.446, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [736.413, 221.446, 4.0],
          [736.413, 222.446, 4.0],
          [735.413, 222.446, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[735.413, 222.446, 4.0], [717.513, 222.446, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [717.513, 222.446, 4.0],
          [716.513, 222.446, 4.0],
          [716.513, 223.446, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[716.513, 223.446, 4.0], [716.513, 265.093, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [716.513, 265.093, 4.0],
          [716.513, 266.093, 4.0],
          [715.513, 266.093, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[715.513, 266.093, 4.0], [266.093, 266.093, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line127",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[691.567, 275.969, 4.0], [699.595, 275.969, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [699.595, 275.969, 4.0],
          [700.595, 275.969, 4.0],
          [700.595, 276.969, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[700.595, 276.969, 4.0], [700.595, 304.632, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [700.595, 304.632, 4.0],
          [700.595, 305.632, 4.0],
          [701.595, 305.632, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[701.595, 305.632, 4.0], [715.061, 305.632, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [715.061, 305.632, 4.0],
          [716.061, 305.632, 4.0],
          [716.061, 306.632, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[716.061, 306.632, 4.0], [716.061, 345.086, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [716.061, 345.086, 4.0],
          [716.061, 346.086, 4.0],
          [717.061, 346.086, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[717.061, 346.086, 4.0], [722.859, 346.086, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line128",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[734.693, 534.517, 4.0], [258.856, 534.174, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [258.856, 534.174, 4.0],
          [257.856, 534.174, 4.0],
          [257.856, 535.174, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[257.856, 535.174, 4.0], [257.856, 579.44, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [257.856, 579.44, 4.0],
          [257.856, 580.44, 4.0],
          [256.856, 580.44, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[256.856, 580.44, 4.0], [247.497, 580.44, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [247.497, 580.44, 4.0],
          [246.497, 580.44, 4.0],
          [246.497, 581.44, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[246.497, 581.44, 4.0], [246.497, 584.228, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line129",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[504.096, 536.067, 4.0], [276.684, 535.918, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [276.684, 535.918, 4.0],
          [275.684, 535.918, 4.0],
          [275.684, 536.918, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[275.684, 536.918, 4.0], [275.523, 739.278, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [275.523, 739.278, 4.0],
          [275.523, 741.278, 4.0],
          [277.523, 741.278, 4.0]
        ],
        segStyle: {
          routeType: 1,
          connectionRadius: 2,
          tubularSegments: 16
        }
      },
      {
        route: [[277.523, 741.278, 4.0], [443.801, 741.278, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [443.801, 741.278, 4.0],
          [444.801, 741.278, 4.0],
          [444.801, 740.278, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[444.801, 740.278, 4.0], [444.801, 732.88, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line130",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[275.599, 642.84, 4.0], [289.729, 642.84, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line131",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[275.64, 593.797, 4.0], [257.544, 602.348, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line132",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[275.624, 611.679, 4.0], [257.536, 611.679, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line133",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[256.568, 610.795, 4.0], [259.461, 610.833, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [259.461, 610.833, 4.0],
          [260.461, 610.833, 4.0],
          [260.461, 611.833, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[260.461, 611.833, 4.0], [260.446, 632.383, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [260.446, 632.383, 4.0],
          [260.446, 633.383, 4.0],
          [259.446, 633.383, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[259.446, 633.383, 4.0], [229.995, 633.383, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [229.995, 633.383, 4.0],
          [228.995, 633.383, 4.0],
          [228.934, 634.383, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[228.934, 634.383, 4.0], [188.402, 1301.768, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [188.402, 1301.768, 4.0],
          [188.341, 1302.769, 4.0],
          [189.341, 1302.769, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[189.341, 1302.769, 4.0], [509.396, 1302.964, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [509.396, 1302.964, 4.0],
          [510.396, 1302.964, 4.0],
          [510.396, 1301.964, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[510.396, 1301.964, 4.0], [510.444, 1246.79, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [510.444, 1246.79, 4.0],
          [510.444, 1245.79, 4.0],
          [511.444, 1245.79, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[511.444, 1245.79, 4.0], [554.997, 1245.821, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [554.997, 1245.821, 4.0],
          [555.997, 1245.821, 4.0],
          [555.997, 1244.821, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[555.997, 1244.821, 4.0], [556.053, 1166.238, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [556.053, 1166.238, 4.0],
          [556.053, 1165.238, 4.0],
          [555.053, 1165.238, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[555.053, 1165.238, 4.0], [554.289, 1165.24, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line134",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[554.257, 1164.157, 4.0], [567.923, 1164.157, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [567.923, 1164.157, 4.0],
          [568.923, 1164.157, 4.0],
          [568.923, 1163.157, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[568.923, 1163.157, 4.0], [568.985, 1130.231, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [568.985, 1130.231, 4.0],
          [568.985, 1129.231, 4.0],
          [569.985, 1129.231, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[569.985, 1129.231, 4.0], [711.933, 1129.34, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line135",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[325.637, 1328.626, 4.0], [325.698, 1316.665, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [325.698, 1316.665, 4.0],
          [325.698, 1315.665, 4.0],
          [326.698, 1315.665, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[326.698, 1315.665, 4.0], [520.648, 1315.764, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [520.648, 1315.764, 4.0],
          [521.648, 1315.764, 4.0],
          [521.648, 1316.764, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[521.648, 1316.764, 4.0], [521.644, 1375.452, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [521.644, 1375.452, 4.0],
          [521.644, 1376.452, 4.0],
          [522.644, 1376.452, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[522.644, 1376.452, 4.0], [535.872, 1376.468, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line136",
    routeArray: [
      {
        route: [
          [536.177, 1378.013, 4.0],
          [536.177, 1380.162, 4.0],
          [553.355, 1390.906, 4.0],
          [591.666, 1390.906, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line137",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[572.385, 1390.906, 4.0], [572.385, 1377.04, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [572.385, 1377.04, 4.0],
          [572.385, 1376.04, 4.0],
          [573.385, 1376.04, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[573.385, 1376.04, 4.0], [617.108, 1376.04, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line138",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[243.938, 1302.799, 4.0], [243.938, 1318.781, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line139",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[199.805, 1114.025, 4.0], [260.961, 1114.011, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [260.961, 1114.011, 4.0],
          [261.961, 1114.011, 4.0],
          [261.961, 1115.011, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[261.961, 1115.011, 4.0], [261.775, 1215.909, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [261.775, 1215.909, 4.0],
          [261.775, 1216.909, 4.0],
          [260.775, 1216.909, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[260.775, 1216.909, 4.0], [222.759, 1216.898, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [222.759, 1216.898, 4.0],
          [221.759, 1216.898, 4.0],
          [221.759, 1217.898, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[221.759, 1217.898, 4.0], [221.759, 1219.38, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line140",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[261.931, 1129.712, 4.0], [281.351, 1129.712, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line141",
    pipeStyle: style_yellow,
    routeArray: [
      {
        route: [[206.95, 996.384, 4.0], [230.425, 996.384, 4.0]],
        segStyle: style_segment_long
      }
    ]
  }
];
