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

var style_blue = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_blue.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var SewerPipeParams = [
  {
    name: "Line142",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [529.414, 403.982, 4.0],
          [528.621, 393.71, 4.0],
          [528.621, 392.71, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[528.621, 392.71, 4.0], [528.792, 227.258, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [528.792, 227.258, 4.0],
          [528.792, 226.258, 4.0],
          [537.169, 213.752, 4.0],
          [557.076, 213.722, 4.0],
          [557.123, 203.767, 4.0],
          [569.942, 200.75, 4.0],
          [569.943, 199.36, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line143",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[531.546, 304.094, 4.0], [528.707, 304.094, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line144",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[543.92, 440.188, 4.0], [621.717, 440.245, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [621.717, 440.245, 4.0],
          [622.717, 440.245, 4.0],
          [635.974, 447.883, 4.0],
          [636.974, 447.883, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[636.974, 447.883, 4.0], [670.025, 447.901, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [670.025, 447.901, 4.0],
          [671.025, 447.901, 4.0],
          [682.654, 441.244, 4.0],
          [701.573, 441.267, 4.0],
          [707.135, 431.967, 4.0],
          [707.135, 430.967, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[707.135, 430.967, 4.0], [707.179, 376.921, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [707.179, 376.921, 4.0],
          [707.179, 375.921, 4.0],
          [705.162, 364.817, 4.0],
          [705.162, 363.817, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[705.162, 363.817, 4.0], [705.308, 201.871, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line145",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[577.85, 412.144, 4.0], [577.85, 440.212, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line146",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[607.751, 420.187, 4.0], [607.751, 440.235, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line147",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[607.709, 471.007, 4.0], [607.751, 440.234, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line148",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[705.163, 364.818, 4.0], [528.648, 364.668, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line149",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[605.694, 356.64, 4.0], [605.694, 364.735, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line150",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[643.577, 416.447, 4.0], [646.027, 416.447, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [646.027, 416.447, 4.0],
          [647.027, 416.447, 4.0],
          [647.027, 415.447, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[647.027, 415.447, 4.0], [647.027, 364.768, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line151",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[722.187, 353.389, 4.0], [705.172, 353.389, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line152",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [234.54, 635.103, 4.0],
          [229.045, 623.179, 4.0],
          [232.053, 573.978, 4.0],
          [240.648, 573.972, 4.0],
          [240.659, 570.963, 4.0],
          [241.659, 570.963, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[241.659, 570.963, 4.0], [255.915, 570.97, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [255.915, 570.97, 4.0],
          [256.915, 570.97, 4.0],
          [256.915, 569.97, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[256.915, 569.97, 4.0], [256.974, 526.225, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line153",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[236.898, 589.957, 4.0], [231.133, 589.126, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line154",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[236.905, 589.351, 4.0], [231.126, 589.125, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line155",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [378.063, 575.31, 4.0],
          [372.632, 574.651, 4.0],
          [372.632, 573.651, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[372.632, 573.651, 4.0], [372.667, 554.446, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [372.667, 554.446, 4.0],
          [372.667, 553.446, 4.0],
          [373.667, 553.446, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[373.667, 553.446, 4.0], [674.688, 553.681, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [674.688, 553.681, 4.0],
          [675.688, 553.681, 4.0],
          [675.688, 554.681, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[675.688, 554.681, 4.0], [675.604, 664.613, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line156",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [338.587, 730.739, 4.0],
          [337.478, 733.765, 4.0],
          [338.478, 733.765, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[338.478, 733.765, 4.0], [599.582, 733.993, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [599.582, 733.993, 4.0],
          [600.582, 733.993, 4.0],
          [622.369, 741.346, 4.0],
          [635.205, 744.792, 4.0],
          [636.205, 744.792, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[636.205, 744.792, 4.0], [668.628, 744.778, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [668.628, 744.778, 4.0],
          [669.628, 744.778, 4.0],
          [669.628, 743.778, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[669.628, 743.778, 4.0], [669.663, 735.042, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [669.663, 735.042, 4.0],
          [669.663, 734.042, 4.0],
          [670.663, 734.042, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[670.663, 734.042, 4.0], [674.532, 734.052, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [674.532, 734.052, 4.0],
          [675.532, 734.052, 4.0],
          [675.532, 733.052, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[675.532, 733.052, 4.0], [675.604, 664.613, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line157",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [675.604, 664.613, 4.0],
          [679.59, 664.481, 4.0],
          [679.59, 672.462, 4.0],
          [681.418, 672.462, 4.0],
          [687.596, 664.481, 4.0],
          [688.596, 664.481, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[688.596, 664.481, 4.0], [726.564, 664.566, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [726.564, 664.566, 4.0],
          [727.564, 664.566, 4.0],
          [727.564, 663.566, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[727.564, 663.566, 4.0], [727.611, 646.734, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line158",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[703.543, 733.35, 4.0], [703.543, 734.459, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [703.543, 734.459, 4.0],
          [703.543, 735.459, 4.0],
          [702.543, 735.459, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[702.543, 735.459, 4.0], [679.482, 735.461, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [679.482, 735.461, 4.0],
          [678.482, 735.461, 4.0],
          [675.534, 733.839, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line159",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[702.898, 733.367, 4.0], [703.332, 735.46, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line160",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[369.023, 731.839, 4.0], [369.526, 733.793, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line161",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[375.201, 731.862, 4.0], [375.53, 733.801, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line162",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[381.31, 731.882, 4.0], [382.506, 733.809, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line163",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[383.734, 731.882, 4.0], [382.505, 733.805, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line164",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[386.056, 731.869, 4.0], [386.056, 733.802, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line165",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[491.039, 731.949, 4.0], [492.528, 733.905, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line166",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[494.962, 731.933, 4.0], [492.526, 733.901, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line167",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[502.83, 731.952, 4.0], [503.511, 733.902, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line168",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[510.759, 731.954, 4.0], [511.492, 733.916, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line169",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[511.344, 731.947, 4.0], [511.491, 733.916, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line170",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[513.367, 732.03, 4.0], [511.491, 733.916, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line171",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[513.892, 732.04, 4.0], [514.366, 733.918, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line172",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[514.602, 732.027, 4.0], [514.527, 733.919, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line173",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[515.17, 732.039, 4.0], [514.747, 733.919, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line174",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[517.679, 732.045, 4.0], [518.45, 733.922, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line175",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[518.227, 732.032, 4.0], [518.699, 733.922, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line176",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[571.538, 732.082, 4.0], [572.522, 733.97, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line177",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[594.749, 732.021, 4.0], [595.507, 733.987, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line178",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[596.512, 732.015, 4.0], [595.578, 733.988, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line179",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[598.706, 732.024, 4.0], [600.583, 733.993, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line180",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[600.421, 732.006, 4.0], [600.582, 733.993, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line181",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[601.88, 731.997, 4.0], [600.707, 734.036, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line182",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[378.073, 570.62, 4.0], [372.64, 568.52, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line183",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[378.118, 567.171, 4.0], [372.642, 568.501, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line184",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[378.184, 561.113, 4.0], [372.659, 560.473, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line185",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[446.827, 560.249, 4.0], [445.668, 553.502, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line186",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[547.658, 573.455, 4.0], [547.685, 553.585, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line187",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[541.0, 574.289, 4.0], [547.657, 573.451, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line188",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[540.987, 572.282, 4.0], [547.66, 573.448, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line189",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[541.033, 571.824, 4.0], [547.669, 568.372, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line190",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[541.023, 570.501, 4.0], [547.666, 568.371, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line191",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[541.027, 567.288, 4.0], [547.666, 568.372, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line192",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[540.997, 561.25, 4.0], [547.678, 560.435, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line193",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[547.664, 538.847, 4.0], [547.685, 553.582, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line194",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[571.681, 541.289, 4.0], [571.681, 553.6, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line195",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[205.136, 1390.498, 4.0], [205.295, 1312.055, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [205.295, 1312.055, 4.0],
          [205.295, 1311.055, 4.0],
          [205.356, 1310.05, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[205.356, 1310.05, 4.0], [216.898, 1122.08, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [216.898, 1122.08, 4.0],
          [216.959, 1121.078, 4.0],
          [212.304, 1107.036, 4.0],
          [212.365, 1106.036, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[212.365, 1106.036, 4.0], [227.188, 863.208, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [227.188, 863.208, 4.0],
          [227.249, 862.208, 4.0],
          [228.249, 862.208, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[228.249, 862.208, 4.0], [455.317, 862.387, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line196",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[274.969, 1217.175, 4.0], [275.036, 1097.012, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line197",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [216.959, 1121.078, 4.0],
          [220.483, 1115.486, 4.0],
          [221.483, 1115.486, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[221.483, 1115.486, 4.0], [275.025, 1115.517, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line198",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [435.539, 862.369, 4.0],
          [441.136, 860.373, 4.0],
          [442.136, 860.373, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[442.136, 860.373, 4.0], [458.438, 860.34, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line199",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[197.046, 1321.523, 4.0], [205.298, 1311.563, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line200",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[517.882, 1311.286, 4.0], [205.295, 1311.055, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line201",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[214.753, 1390.507, 4.0], [205.131, 1389.441, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line202",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[214.78, 1389.688, 4.0], [205.141, 1389.029, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line203",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[214.784, 1385.064, 4.0], [205.145, 1385.064, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line204",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [469.44, 1097.606, 4.0],
          [469.359, 1105.715, 4.0],
          [474.913, 1112.693, 4.0],
          [475.913, 1112.693, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[475.913, 1112.693, 4.0], [665.63, 1112.813, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [665.63, 1112.813, 4.0],
          [666.63, 1112.813, 4.0],
          [688.637, 1128.555, 4.0],
          [696.152, 1146.733, 4.0],
          [716.726, 1146.754, 4.0],
          [725.186, 1171.17, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line205",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [
          [696.301, 1146.391, 4.0],
          [701.208, 1135.534, 4.0],
          [711.626, 1135.627, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line206",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[517.953, 1112.72, 4.0], [517.853, 1222.064, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [517.853, 1222.064, 4.0],
          [517.853, 1223.064, 4.0],
          [516.853, 1223.064, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[516.853, 1223.064, 4.0], [470.323, 1223.065, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [470.323, 1223.065, 4.0],
          [469.323, 1223.065, 4.0],
          [469.323, 1224.065, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[469.323, 1224.065, 4.0], [469.282, 1244.732, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [469.282, 1244.732, 4.0],
          [469.282, 1245.732, 4.0],
          [468.282, 1245.732, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[468.282, 1245.732, 4.0], [254.678, 1245.546, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [254.678, 1245.546, 4.0],
          [253.678, 1245.546, 4.0],
          [253.678, 1244.546, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[253.678, 1244.546, 4.0], [253.67, 1234.623, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [253.67, 1234.623, 4.0],
          [253.67, 1233.623, 4.0],
          [252.67, 1233.623, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[252.67, 1233.623, 4.0], [247.128, 1233.639, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [247.128, 1233.639, 4.0],
          [246.128, 1233.639, 4.0],
          [246.145, 1232.857, 4.0],
          [245.145, 1232.857, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[245.145, 1232.857, 4.0], [220.271, 1232.837, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [220.271, 1232.837, 4.0],
          [219.271, 1232.837, 4.0],
          [210.41, 1227.768, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line207",
    pipeStyle: style_blue,
    routeArray: [
      {
        route: [[411.095, 1232.687, 4.0], [469.306, 1232.748, 4.0]],
        segStyle: style_segment_long
      }
    ]
  }
];
