let featuresConfig = {
    selectionConfig: {
        showAttributeBox: true,
        enableHover: false,
        defaultIconPath: "./assets/fleur.png",
        selectionColor: null,
        HoverColor: 0x0061ff,
    },
    interiorConfig: {
        displacement: new APP3D.Vector3(8, 0, 0),
        speed: 50,
        fadeEffect: {
            radius: 40,
            dimB: 0
        },
        sunIntensity: 1.0,
        ambientLightIntensity: 1.0,
        finalPoint: new APP3D.Vector3(-58.88340309223437, 40.65593962332389,  31.865594658198162),
        finalLookAtPoint: new APP3D.Vector3(0.8359525846756876,  -0.25872447955322686, -0.4839885534327742),
        floorZoomInPath: {
            "floor_1": {
                zoomInPoint: new APP3D.Vector3(6.141231301913788,  0.8272297538462183,  -17.034725606039856),
                finalPoint: new APP3D.Vector3(-21.466890926757273, 35.82008103972553,  -16.11654781777323),
                finalLookAtPoint: new APP3D.Vector3(0.6410271597347623,  -0.7674511794774208,  0.010142366641935435)
            },
            "floor_2": {
                zoomInPoint: new APP3D.Vector3(13.983337710069415,  3.4034897114041627,  -14.580347669767264),
                finalPoint:  new APP3D.Vector3(-16.62886286098825,  43.7258168159855,  -14.961490278237422),
                finalLookAtPoint: new APP3D.Vector3(0.611343297775088,  -0.7913508961439806,  -0.0048095153185298695)
            },
            "floor_3": {
                zoomInPoint: new APP3D.Vector3(24.210849715372078, 4.782543243802266,  -18.644575512051254),
                finalPoint:  new APP3D.Vector3(5.727049347459918,  50.218266486322214,  -16.837495888796095),
                finalLookAtPoint: new APP3D.Vector3(0.36445100525144414,  -0.9312181506160502,  -0.0028671823163676224)
            },
            "floor_4": {
                zoomInPoint: new APP3D.Vector3(31.98435308197695,  7.371577507378724,  -21.9361924770136),
                finalPoint: new APP3D.Vector3(15.465040497290097,  51.229013553989375,  -16.57819640385148),
                finalLookAtPoint: new APP3D.Vector3(0.3367599134789629,  -0.9415904563472546,  0.00041616031798757946)
            },
            "floor_5": {
                zoomInPoint: new APP3D.Vector3(39.97388463071152,  9.903735845350134,  -24.939298117225803),
                finalPoint: new APP3D.Vector3(23.187604569278218, 51.5044933349956,  -16.866297663858234),
                finalLookAtPoint: new APP3D.Vector3(0.3367599134789629,  -0.9415904563472547,  0.0004161603179876072)
            }
        },
        lights: [
            {
                type: "DirectionalLight",
                color: 0xffffff,
                intensity: 1,
                position: new APP3D.Vector3(500, 1000, 500)
            }, {
                type: "HemisphereLight",
                skyColor: 0x000000,
                groundColor: 0x89beb7,
                intensity: 2,
                position: new APP3D.Vector3(0, 100, 0)
            }, {
                type: "PointLight",
                color: 0xff0000,
                intensity: 1,
                distance: 100,
                decay: 1,
                position: new APP3D.Vector3(0, 10, 0)
            }, {
                type: "SpotLight",
                color: 0x00ff00,
                intensity: 1,
                distance: 0,
                angle: Math.PI / 4,
                penumbra: 0.5,
                decay: 2,
                position: new APP3D.Vector3(15, 40, 35)
            }
        ]
    },
    cameraFeatureConfig: {
        flyingInspection: {
            anyue: {
                startingPos: null,
                startingLookAt: null,
                get pathPointsJS() {
                    return [
                        {x: this.startingPos.x,  y: this.startingPos.y, z: this.startingPos.z},
                        {x: 498.2714018660319,   y: 670.2306720027392,  z: -447.72174454545757},
                        {x: 224.95269292653708,  y: 154.77972130224984, z: -200.4333888382955},
                        {x: -179.98828056276574, y: 154.77972130224958, z: -205.7769264650275},
                        {x: -172.72030172912142, y: 176.42775677938496, z: 164.1090229428063},
                        {x: 197.52932898484204,  y: 171.11678660724814, z: 183.8725542946973},
                        {x: 132.06487904501495,  y: 26.70241182916679,  z: 75.92301957257396}, // 路口
                        {x: -7.581760346735088,  y: 16.132077065331153, z: -84.03912012273724},
                        {x: -18.273811606173624, y: 14.709815654102082, z: -100.78100562855424},
                        {x: -75.83019382778494,  y: 17.471145703178657, z: -52.37439435615146},
                        {x: 276.0136962368423,   y: 295.1760561134337,  z: -222.76164219151718},
                        {x: this.startingPos.x,  y: this.startingPos.y, z: this.startingPos.z}
                    ];
                },
                get focalPointsJS() {
                    return [
                        {x: this.startingLookAt.x, y: this.startingLookAt.y, z: this.startingLookAt.z},
                        {x: -0.514180921196532,  y: -0.7205528555543242,  z: 0.46521130965400537},
                        {x: -0.6469928225628304, y: -0.4886072358011192,  z: 0.5853744585092278},
                        {x: 0.6313212101446732,  y: -0.48860723580111826, z: 0.6022428901566674},
                        {x: 0.6083777197578846,  y: -0.5569455600080239,  z: -0.5654097569812054},
                        {x: -0.5604229932648823, y: -0.5401799370091134,  z: -0.6277990954699277},
                        {x: -0.7587436026516499, y: -0.04258309566317339, z: -0.6499960195254555}, // 路口
                        {x: -0.7133611736003685, y: -0.4171270029228818,  z: -0.5631348856464842},
                        {x: -0.6816406218250028, y: -0.3803515996418121,  z: 0.6250589758798272},
                        {x: -0.6682817137047178, y: -0.36795425016809125, z: 0.6465363260568763},
                        {x: -0.5204341454980312, y: -0.6507170656304894,  z: 0.5529155457183128},
                        {x: this.startingLookAt.x, y: this.startingLookAt.y, z: this.startingLookAt.z}
                    ];
                },
                sectionTimes: [
                    0,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    3,
                    1,
                    3,
                    2.5,
                    1
                ]
            }
        }
    },
    dayNightConfig: {
        TIMEPERIOD:     10, // unit: seconds
        ZENITHHEIGHT:   150, // unit: meters
        ZENITHANGLE:    45 / 180 * Math.PI,
        AZIMUTH:        45 / 180 * Math.PI,
        INTENSITY:      1, // float
        COLOR:          0xFFFFFF,
        LOOP:           true,
        SHOWSUNHELPER:  false,
        NIGHTSKYBOX:    "assets/darkSky/"
    },
    energyUsageConfig: {
        cubes: [
            {name: "a1", height: 15, color: 0xa9e622},
            {name: "a2", height: 25, color: 0xffe719},
            {name: "a3", height: 10, color: 0xa9e622},
            {name: "a4", height: 10, color: 0xa9e622},
            {name: "a5", height: 50, color: 0xea1e27},
            {name: "a6", height: 60, color: 0xea1e27},
            {name: "a7", height: 45, color: 0xea1e27},
            {name: "a8", height: 35, color: 0xffe719},
            {name: "a9", height: 20, color: 0xa9e622},
            {name: "a10", height: 10, color: 0xa9e622},
            {name: "a11", height: 24, color: 0xffe719},
            {name: "a12", height: 12, color: 0xa9e622},
            {name: "a13", height: 21, color: 0xffe719},
            {name: "a14", height: 15, color: 0xa9e622},
            {name: "a15", height: 23, color: 0xffe719}
        ],
        outlinesObj: {
            name:           "outlines",
            description:    "buildingFootprint",
            label:          "buildingFootprint",
            path:           "./assets/models/anyo_outlines_2D_skp_line.app1",
            type:           "object"
        }
    },
    emergencyFeatureConfig: {
        environment: {
            backgroundColor: 0x000000
        },
        alarmParams: {
            alarmSound: "./assets/alarm.mp3",
            playSound: true,
            alarmColor: 0xff0000,
            edgeStrength: 1.0,
            edgeGlow: 1.5,
            edgeThickness: 3.0,
            pulsePeriod: 0.5,
            visibleEdgeColor: 0xff0000
        }
    },
    fpvFeatureConfig: {
        geometryConfig: {},
        movementConfig: {},
        controlConfig: {LEFT: 65, UP: 87, RIGHT: 68, BOTTOM: 83, JUMP: 32}
    }
};
