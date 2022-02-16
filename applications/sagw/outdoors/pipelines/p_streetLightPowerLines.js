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

var style_pink = {
    color: 0xffffff,
    textureUrl: "./assets/pipeTextures/arrows_pink.png",
    textureRotation: 0,
    speed: 10,
    radius: 0.5,
    textureUnitS: 2,
    textureUnitT: 2
};

var StreetLightPowerLineParams = [
    {
        name: "Line001",
        pipeStyle: style_pink,
        routeArray: [ {   
                route: [[517.0, 483.249, 4.0],[548.486, 483.249, 4.0],[555.039, 476.696, 4.0],[583.003, 476.696, 4.0]],
                segStyle: style_segment_zero
            },{
                route: [[583.003, 476.696, 4.0],[584.003, 476.696, 4.0],[584.003, 475.696, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[584.003, 475.696, 4.0],[584.003, 459.35, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line002",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[605.142, 473.511, 4.0],[605.142, 460.458, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[605.142, 460.458, 4.0],[605.142, 459.458, 4.0],[604.142, 459.458, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[604.142, 459.458, 4.0],[519.131, 459.458, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[519.131, 459.458, 4.0],[518.131, 459.458, 4.0],[518.131, 458.458, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[518.131, 458.458, 4.0],[518.131, 206.857, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[518.131, 206.857, 4.0],[518.131, 205.857, 4.0],[519.131, 205.857, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[519.131, 205.857, 4.0],[531.269, 205.857, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line003",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[518.103, 256.036, 4.0],[692.431, 256.036, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line004",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[606.099, 473.447, 4.0],[606.099, 461.369, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[606.099, 461.369, 4.0],[606.099, 460.369, 4.0],[607.099, 460.369, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[607.099, 460.369, 4.0],[693.603, 460.396, 4.0],[708.477, 455.942, 4.0],[714.113, 455.942, 4.0]],
                segStyle: style_segment_zero
            },{
                route: [[714.113, 455.942, 4.0],[715.113, 455.942, 4.0],[715.113, 454.942, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[715.113, 454.942, 4.0],[715.113, 234.791, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line005",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[715.76, 235.284, 4.0],[722.444, 206, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[722.444, 206, 4.0],[722.712, 204.821, 4.0],[721.2, 204.902, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[721.2, 204.902, 4.0],[703.818, 205.839, 4.0],[608.282, 205.839, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line006",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[715.113, 415.805, 4.0],[646.522, 415.805, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[646.522, 415.805, 4.0],[645.522, 415.805, 4.0],[645.522, 414.805, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[645.522, 414.805, 4.0],[645.522, 393.685, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line007",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[715.113, 360.901, 4.0],[693.268, 366.802, 4.0],[546.456, 366.802, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line008",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[577.491, 538.119, 4.0],[671.852, 538.119, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[671.852, 538.119, 4.0],[672.852, 538.119, 4.0],[672.852, 539.119, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[672.852, 539.119, 4.0],[672.852, 742.685, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line009",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[672.852, 615.948, 4.0],[699.635, 620.539, 4.0],[724.378, 620.539, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line010",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[672.852, 735.547, 4.0], [583.497, 735.547, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[583.497, 735.547, 4.0],[582.497, 735.547, 4.0],[582.497, 736.547, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[582.497, 736.547, 4.0], [582.497, 742.707, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[582.497, 742.707, 4.0],[582.497, 743.707, 4.0],[581.497, 743.707, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[581.497, 743.707, 4.0], [533.938, 743.707, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line011",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[545.617, 538.098, 4.0], [259.775, 538.098, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[259.775, 538.098, 4.0],[258.775, 538.098, 4.0],[258.775, 539.098, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[258.775, 539.098, 4.0], [258.775, 565.442, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[258.775, 565.442, 4.0],[258.775, 566.442, 4.0],[259.775, 566.442, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[259.775, 566.442, 4.0], [269.51, 566.442, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[269.51, 566.442, 4.0],[270.51, 566.442, 4.0],[270.51, 567.442, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[270.51, 567.442, 4.0], [270.503, 641.68, 4.0], [262.39, 670.446, 4.0], [262.39, 742.253, 4.0]],
                segStyle: style_segment_zero
            },{
                route: [[262.39, 742.253, 4.0],[262.39, 743.253, 4.0],[263.39, 743.253, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[263.39, 743.253, 4.0], [497.953, 743.253, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line012",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[270.503, 641.681, 4.0], [257.802, 641.681, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line013",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[260.486, 792.458, 4.0], [509.237, 792.458, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line014",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[246.632, 809.041, 4.0], [246.612, 834.005, 4.0], [249.192, 848.41, 4.0], [249.174, 851.065, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line015",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[249.192, 848.41, 4.0], [410.455, 848.512, 4.0],[435.448, 843.43, 4.0], [459.433, 843.458, 4.0],[468.215, 841.369, 4.0], [477.361, 833.919, 4.0],[492.103, 844.73, 4.0], [682.113, 844.588, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line016",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[467.943, 792.458, 4.0], [468.215, 841.37, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line017",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[229.857, 746.197, 4.0], [195.395, 1309.88, 4.0], [195.395, 1390.68, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line018",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[223.449, 851.007, 4.0], [249.174, 851.066, 4.0], [478.118, 851.581, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line019",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[207.924, 1104.949, 4.0], [272.829, 1104.949, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[272.829, 1104.949, 4.0],[273.829, 1104.949, 4.0],[273.829, 1105.949, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[273.829, 1105.949, 4.0], [273.762, 1218.985, 4.0],[279.351, 1234.537, 4.0], [464.402, 1234.686, 4.0],[470.753, 1224.561, 4.0], [470.819, 1118.679, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line020",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[195.633, 1305.99, 4.0], [503.298, 1306.241, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[503.298, 1306.241, 4.0],[513.298, 1306.241, 4.0],[513.298, 1296.241, 4.0]],
                segStyle: {
                    routeType: 1,
                    connectionRadius: 10,
                    tubularSegments: 32
                }
            },{
                route: [[513.298, 1296.241, 4.0], [513.298, 1250.224, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line021",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[348.396, 1306.114, 4.0], [348.326, 1407.148, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[348.326, 1407.148, 4.0],[348.326, 1408.148, 4.0],[347.326, 1408.148, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[347.326, 1408.148, 4.0], [245.726, 1408.087, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line022",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[520.333, 1235.058, 4.0], [520.441, 1116.3, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[520.441, 1116.3, 4.0],[520.442, 1115.217, 4.0],[521.5, 1115.063, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[521.5, 1115.063, 4.0], [559.487, 1109.562, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line023",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[203.023, 1429.694, 4.0], [554.085, 1424.298, 4.0],[605.267, 1422.966, 4.0], [629.787, 1418.069, 4.0], [654.194, 1412.67, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line024",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[523.62, 1424.767, 4.0], [523.408, 1319.154, 4.0]],
                segStyle: style_segment_long
            },{
                route: [[523.408, 1319.154, 4.0],[523.408, 1318.154, 4.0],[524.408, 1318.154, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[524.408, 1318.154, 4.0], [610.848, 1318.214, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line025",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[182.378, 1426.625, 4.0], [182.636, 1416.349, 4.0], [190.487, 1413.664, 4.0], [196.804, 1415.255, 4.0], [218.71, 1415.811, 4.0], [243.531, 1415.54, 4.0], [319.689, 1414.094, 4.0], [351.146, 1412.448, 4.0], [352.499, 1409.545, 4.0], [416.867, 1409.079, 4.0], [420.168, 1411.742, 4.0], [445.161, 1412.516, 4.0], [470.164, 1412.305, 4.0], [520.163, 1410.982, 4.0], [523.591, 1409.712, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line026",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[523.512, 1370.697, 4.0], [602.966, 1370.753, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line027",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.686, 1374.249, 4.0], [537.712, 1374.249, 4.0],[537.702, 1372.97, 4.0], [535.413, 1371.061, 4.0], [535.426, 1330.471, 4.0]],
                segStyle: style_segment_zero
            },{
                route: [[535.426, 1330.471, 4.0],[535.426, 1329.471, 4.0],[536.426, 1329.471, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[536.426, 1329.471, 4.0], [605.65, 1329.515, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line028",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[535.416, 1358.282, 4.0], [605.637, 1358.34, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line029",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[535.423, 1339.897, 4.0], [605.662, 1339.942, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line030",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.579, 1374.923, 4.0], [538.587, 1374.924, 4.0], [538.595, 1372.703, 4.0], [622.294, 1372.757, 4.0], [634.745, 1387.948, 4.0], [670.943, 1405.7, 4.0], [701.217, 1398.245, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line031",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[622.294, 1372.757, 4.0], [634.577, 1333.947, 4.0], [668.663, 1323.638, 4.0], [688.042, 1325.141, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line032",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.39, 1375.599, 4.0], [538.659, 1375.611, 4.0], [538.671, 1377.152, 4.0], [546.991, 1400.409, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line033",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.667, 1376.433, 4.0], [539.461, 1376.445, 4.0], [556.258, 1375.039, 4.0], [571.01, 1375.045, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    },
    {
        name: "Line034",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.696, 1377.084, 4.0], [568.861, 1377.115, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line035",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[536.682, 1377.633, 4.0], [539.476, 1377.657, 4.0],[548.821, 1384.641, 4.0], [607.587, 1384.68, 4.0]],
                segStyle: style_segment_zero
            },{
                route: [[607.587, 1384.68, 4.0],[608.587, 1384.68, 4.0],[608.587, 1385.68, 4.0]],
                segStyle: style_segment_turn
            },{
                route: [[608.587, 1385.68, 4.0], [608.575, 1397.419, 4.0]],
                segStyle: style_segment_long
            }
        ],
    },
    {
        name: "Line036",
        pipeStyle: style_pink,
        routeArray: [ {
                route: [[552.268, 1405.504, 4.0], [555.951, 1409.175, 4.0], [596.21, 1409.214, 4.0], [604.723, 1408.066, 4.0], [613.398, 1402.026, 4.0]],
                segStyle: style_segment_zero
            }
        ],
    }
];

