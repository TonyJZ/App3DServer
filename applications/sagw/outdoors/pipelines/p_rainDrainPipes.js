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

var style_green = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_green.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.5,
  textureUnitS: 2,
  textureUnitT: 2
};

var RainDrainPipeParams = [
  {
    name: "Line037",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[510.249, 471.56, 4.0], [598.578, 471.635, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [598.578, 471.635, 4.0],
          [599.578, 471.635, 4.0],
          [599.578, 470.635, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[599.578, 470.635, 4.0], [599.645, 442.692, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [599.645, 442.692, 4.0],
          [599.645, 441.692, 4.0],
          [598.645, 441.692, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[598.645, 441.692, 4.0], [539.306, 441.664, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [539.306, 441.664, 4.0],
          [538.306, 441.664, 4.0],
          [527.108, 435.979, 4.0],
          [527.108, 434.979, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[527.108, 434.979, 4.0], [527.314, 187.342, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line038",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[650.212, 450.893, 4.0], [599.623, 450.829, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line039",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [551.752, 203.676, 4.0],
          [538.745, 203.676, 4.0],
          [527.299, 203.08, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line040",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[729.333, 203.798, 4.0], [573.753, 203.721, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line041",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[589.721, 203.727, 4.0], [589.79, 146.271, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line042",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[579.321, 405.156, 4.0], [579.296, 441.675, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line043",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[585.7, 405.164, 4.0], [605.212, 405.116, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [605.212, 405.116, 4.0],
          [606.212, 405.116, 4.0],
          [606.212, 406.116, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[606.212, 406.116, 4.0], [606.224, 434.859, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [606.224, 434.859, 4.0],
          [606.224, 435.859, 4.0],
          [605.276, 436.7, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[605.276, 436.7, 4.0], [599.648, 441.69, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line044",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[611.424, 401.776, 4.0], [606.207, 405.116, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line045",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[601.753, 362.061, 4.0], [527.169, 361.97, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line046",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[609.262, 247.099, 4.0], [527.263, 247.036, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line047",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[666.194, 450.89, 4.0], [716.062, 450.891, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [716.062, 450.891, 4.0],
          [717.062, 450.891, 4.0],
          [717.062, 449.891, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[717.062, 449.891, 4.0], [717.202, 349.138, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [717.202, 349.138, 4.0],
          [717.202, 348.138, 4.0],
          [716.202, 348.138, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[716.202, 348.138, 4.0], [708.178, 348.134, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [708.178, 348.134, 4.0],
          [707.178, 348.134, 4.0],
          [707.178, 347.134, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[707.178, 347.134, 4.0], [707.297, 203.786, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line048",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[649.005, 417.927, 4.0], [649.005, 415.238, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [649.005, 415.238, 4.0],
          [649.005, 414.238, 4.0],
          [650.005, 414.238, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[650.005, 414.238, 4.0], [717.119, 414.314, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line049",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[617.987, 362.032, 4.0], [717.191, 362.11, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line050",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[649.042, 404.464, 4.0], [649.035, 362.052, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line051",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[654.249, 247.121, 4.0], [707.265, 247.161, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line052",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[193.285, 1445.15, 4.0], [193.371, 1334.142, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [193.371, 1334.142, 4.0],
          [193.371, 1333.142, 4.0],
          [198.394, 1325.739, 4.0],
          [198.428, 1293.86, 4.0],
          [198.489, 1292.86, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[198.489, 1292.86, 4.0], [224.824, 861.201, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [224.824, 861.201, 4.0],
          [224.885, 860.201, 4.0],
          [225.885, 860.201, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[225.885, 860.201, 4.0], [420.753, 860.379, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [420.753, 860.379, 4.0],
          [421.753, 860.379, 4.0],
          [437.27, 856.856, 4.0],
          [438.27, 856.856, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[438.27, 856.856, 4.0], [463.827, 856.884, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line053",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [223.219, 1014.641, 4.0],
          [226.12, 1016.536, 4.0],
          [226.12, 1017.536, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[226.12, 1017.536, 4.0], [225.993, 1099.445, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [225.993, 1099.445, 4.0],
          [225.993, 1100.445, 4.0],
          [226.993, 1100.445, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[226.993, 1100.445, 4.0], [268.905, 1100.475, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [268.905, 1100.475, 4.0],
          [269.905, 1100.475, 4.0],
          [269.905, 1101.475, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[269.905, 1101.475, 4.0], [269.73, 1242.514, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line054",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[269.646, 1277.282, 4.0], [269.73, 1242.513, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line055",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[269.73, 1242.514, 4.0], [201.564, 1242.474, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line056",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[216.722, 1258.062, 4.0], [269.692, 1258.089, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line057",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[252.551, 1210.005, 4.0], [203.542, 1209.983, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line058",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[236.817, 1160.496, 4.0], [206.564, 1160.485, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line059",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[318.222, 1308.673, 4.0], [198.422, 1308.976, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line060",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[338.403, 1333.657, 4.0], [338.315, 1409.161, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [338.315, 1409.161, 4.0],
          [338.315, 1410.161, 4.0],
          [337.315, 1410.161, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[337.315, 1410.161, 4.0], [193.305, 1410.04, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line061",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[337.914, 1308.643, 4.0], [507.924, 1308.768, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [507.924, 1308.768, 4.0],
          [508.924, 1308.768, 4.0],
          [515.739, 1307.61, 4.0],
          [516.739, 1307.61, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[516.739, 1307.61, 4.0], [586.844, 1307.771, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [586.844, 1307.771, 4.0],
          [587.844, 1307.771, 4.0],
          [587.844, 1308.771, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[587.844, 1308.771, 4.0], [587.703, 1436.199, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line062",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[363.987, 1405.111, 4.0], [502.487, 1405.199, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [502.487, 1405.199, 4.0],
          [503.487, 1405.199, 4.0],
          [517.63, 1404.793, 4.0],
          [517.63, 1403.793, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[517.63, 1403.793, 4.0], [517.686, 1330.756, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [517.686, 1330.756, 4.0],
          [517.686, 1329.756, 4.0],
          [515.738, 1307.606, 4.0],
          [515.738, 1306.606, 4.0]
        ],
        segStyle: style_segment_zero
      },
      {
        route: [[515.738, 1306.606, 4.0], [515.928, 1119.684, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [515.928, 1119.684, 4.0],
          [515.928, 1118.684, 4.0],
          [514.928, 1118.684, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[514.928, 1118.684, 4.0], [480.778, 1118.878, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line063",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[298.257, 1242.548, 4.0], [515.804, 1242.743, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line064",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[473.337, 1109.576, 4.0], [473.24, 1242.704, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line065",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[361.246, 1400.661, 4.0], [363.988, 1405.111, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line066",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[361.261, 1407.681, 4.0], [363.988, 1405.111, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line067",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[381.301, 1407.768, 4.0], [384.071, 1405.121, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line068",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[381.246, 1400.672, 4.0], [384.069, 1405.123, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line069",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[401.345, 1407.81, 4.0], [403.927, 1405.135, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line070",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[401.262, 1400.702, 4.0], [403.926, 1405.136, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line071",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[421.32, 1407.799, 4.0], [424.069, 1405.15, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line072",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[421.245, 1400.711, 4.0], [424.071, 1405.149, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line073",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[441.327, 1407.837, 4.0], [443.992, 1405.16, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line074",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[441.221, 1400.722, 4.0], [443.991, 1405.162, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line075",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[461.357, 1407.856, 4.0], [463.938, 1405.177, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line076",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[461.247, 1400.712, 4.0], [463.935, 1405.175, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line077",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[481.354, 1407.853, 4.0], [483.915, 1405.198, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line078",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[481.264, 1400.748, 4.0], [483.918, 1405.187, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line079",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[501.325, 1407.87, 4.0], [503.922, 1405.18, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line080",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[501.255, 1400.77, 4.0], [503.917, 1405.188, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line081",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[519.222, 1407.398, 4.0], [517.105, 1404.813, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line082",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[511.232, 1398.663, 4.0], [517.113, 1404.81, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line083",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[529.594, 1407.38, 4.0], [517.631, 1404.554, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line084",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[526.677, 1404.934, 4.0], [517.631, 1404.146, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line085",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [571.689, 1409.414, 4.0],
          [558.197, 1409.438, 4.0],
          [547.968, 1404.563, 4.0],
          [536.633, 1382.753, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line086",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[545.49, 1407.244, 4.0], [548.391, 1404.753, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line087",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[554.682, 1398.617, 4.0], [548.387, 1404.749, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line088",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [554.708, 1393.673, 4.0],
          [558.139, 1382.703, 4.0],
          [536.63, 1382.746, 4.0],
          [517.648, 1379.038, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line089",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[514.254, 1385.042, 4.0], [517.653, 1379.051, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line090",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[519.275, 1385.094, 4.0], [517.648, 1379.041, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line091",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[514.272, 1356.767, 4.0], [517.675, 1355.409, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line092",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[519.277, 1356.497, 4.0], [517.675, 1355.415, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line093",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[513.984, 1331.007, 4.0], [517.69, 1329.758, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line094",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[520.328, 1331.023, 4.0], [517.688, 1329.758, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line095",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[527.015, 1322.142, 4.0], [517.685, 1329.756, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line096",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[561.189, 1307.715, 4.0], [561.325, 1118.719, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line097",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[707.172, 1133.451, 4.0], [707.224, 1119.811, 4.0]],
        segStyle: style_segment_long
      },
      {
        route: [
          [707.224, 1119.811, 4.0],
          [707.224, 1118.811, 4.0],
          [706.224, 1118.811, 4.0]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[706.224, 1118.811, 4.0], [526.914, 1118.698, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line098",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [527.696, 1236.719, 4.0],
          [548.507, 1236.755, 4.0],
          [561.235, 1244.924, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line099",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [582.9, 1416.376, 4.0],
          [583.328, 1411.386, 4.0],
          [587.738, 1404.798, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line100",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [699.443, 1383.401, 4.0],
          [711.344, 1383.422, 4.0],
          [711.367, 1342.636, 4.0],
          [680.757, 1325.709, 4.0],
          [644.745, 1326.499, 4.0],
          [642.674, 1332.517, 4.0],
          [632.662, 1345.069, 4.0],
          [628.136, 1357.723, 4.0],
          [624.331, 1378.09, 4.0],
          [621.802, 1387.196, 4.0],
          [613.424, 1402.023, 4.0],
          [601.97, 1406.673, 4.0],
          [587.737, 1406.607, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line101",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[696.524, 1343.836, 4.0], [711.376, 1343.424, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line102",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[643.237, 1317.11, 4.0], [644.511, 1327.17, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line103",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[644.799, 1322.538, 4.0], [644.517, 1327.171, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line104",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[635.467, 1326.827, 4.0], [644.755, 1326.499, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line105",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[634.823, 1332.165, 4.0], [642.799, 1332.209, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line106",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[631.048, 1337.465, 4.0], [642.788, 1332.209, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line107",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[626.897, 1342.443, 4.0], [632.394, 1345.782, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line108",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[624.921, 1347.904, 4.0], [632.413, 1345.783, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line109",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[619.826, 1359.347, 4.0], [628.033, 1358.335, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line110",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[624.255, 1364.287, 4.0], [627.927, 1358.887, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line111",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[605.711, 1377.47, 4.0], [624.431, 1377.47, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line112",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [640.873, 1382.364, 4.0],
          [634.678, 1381.11, 4.0],
          [624.393, 1377.74, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line113",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[629.549, 1413.296, 4.0], [634.685, 1381.111, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line114",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[619.806, 1393.762, 4.0], [621.808, 1387.161, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line115",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [[610.801, 1401.444, 4.0], [613.425, 1402.021, 4.0]],
        segStyle: style_segment_long
      }
    ]
  },
  {
    name: "Line116",
    pipeStyle: style_green,
    routeArray: [
      {
        route: [
          [594.551, 1394.114, 4.0],
          [594.007, 1398.69, 4.0],
          [602.547, 1406.435, 4.0]
        ],
        segStyle: style_segment_zero
      }
    ]
  }
];
