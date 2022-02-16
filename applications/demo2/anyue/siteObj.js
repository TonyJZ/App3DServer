let siteObj = { // eslint-disable-line no-unused-vars
    scenes: [
        {
            name:           "anyue",
            isPrimary:      true,
            description:    "Anyue Smart Community",
            camera: {
                initialPosition: {
                    x: 200,
                    y: 180,
                    z: -50
                },
                initialFocalPoint: {
                    x: 20,
                    y: 0,
                    z: -15
                },
                homePosition: {
                    x: 167.0,
                    y: 206.0,
                    z: -148.0
                },
                homeFocalPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            },

            objects: [
                {
                    name:           "ground",
                    description:    "Anyue Smart Community",
                    label:          strings.ground_label,
                    path:           "assets/models/grounds_v4/grounds.app2",
                    type:           "ground"
                }, {
                    name:           "a1",
                    description:    "Building A3",
                    label:          strings.a1_label,
                    path:           "assets/models/anyo_glb_v2/building_a1.app2",
                    type:           "building"
                }, {
                    name:           "a2",
                    description:    "Building A4",
                    label:          strings.a2_label,
                    path:           "assets/models/anyo_glb_v2/building_a2.app2",
                    type:           "building",
                    subScene:       "a2 interior"
                }, {
                    name:           "a3",
                    description:    "Building A5",
                    label:          strings.a3_label,
                    type:           "building",
                    path:           "assets/models/anyo_glb_v2/building_a3.app2"
                }, {
                    name:           "a4",
                    description:    "Building A7",
                    label:          strings.a4_label,
                    path:           "assets/models/anyo_glb_v2/building_a4.app2",
                    type:           "building",
                    subObjects: [
                        "tank1_a4"
                    ]
                }, {
                    name:           "a5",
                    description:    "Building A8",
                    label:          strings.a5_label,
                    path:           "assets/models/anyo_glb_v2/building_a5.app2",
                    type:           "building",
                    subScene:       "a5 interior"
                }, {
                    name:           "a6",
                    description:    "Building 1",
                    label:          strings.a6_label,
                    path:           "assets/models/anyo_glb_v2/building_a6.app2",
                    type:           "building",
                    subObjects: [
                        "tank1_a6"
                    ]
                }, {
                    name:           "a7",
                    description:    "Building 2",
                    label:          strings.a7_label,
                    path:           "assets/models/anyo_glb_v2/building_a7.app2",
                    type:           "building",
                    subObjects: [
                        "tank1_a7"
                    ]
                }, {
                    name:           "a8",
                    description:    "Building 3",
                    label:          strings.a8_label,
                    path:           "assets/models/anyo_glb_v2/building_a8.app2",
                    type:           "building",
                    subObjects: [
                        "tank1_a8",
                        "elevator"
                    ]
                }, {
                    name:           "a9",
                    description:    "Building 4",
                    label:          strings.a9_label,
                    path:           "assets/models/anyo_glb_v2/building_a9.app2",
                    type:           "building",
                    subObjects: [
                        "tank1_a9"
                    ]
                }, {
                    name:           "a10",
                    description:    "Building 5",
                    label:          strings.a10_label,
                    path:           "assets/models/anyo_glb_v2/building_a10.app2",
                    type:           "building"
                }, {
                    name:           "a11",
                    description:    "Building 6",
                    label:          strings.a11_label,
                    path:           "assets/models/anyo_glb_v2/building_a11.app2",
                    type:           "building"
                }, {
                    name:           "a12",
                    description:    "Building 7",
                    label:          strings.a12_label,
                    path:           "assets/models/anyo_glb_v2/building_a12.app2",
                    type:           "building"
                }, {
                    name:           "a13",
                    description:    "Building 8",
                    label:          strings.a13_label,
                    path:           "assets/models/anyo_glb_v2/building_a13.app2",
                    type:           "building"
                }, {
                    name:           "a14",
                    description:    "Building 9",
                    label:          strings.a14_label,
                    path:           "assets/models/anyo_glb_v2/building_a14.app2",
                    type:           "building"
                }, {
                    name:           "a15",
                    description:    "Building 10",
                    label:          strings.a15_label,
                    path:           "assets/models/anyo_glb/building10.app2",
                    type:           "building"
                }, {
                    name:           "stairs",
                    description:    "stairs",
                    label:          strings.stairs_label,
                    path:           "assets/models/anyo_glb/stairs.app2",
                    type:           "object"
                }, {
                    name:           "a17",
                    description:    "link_b1b2 10",
                    label:          strings.a17_label,
                    path:           "assets/models/anyo_glb/link_b1b2.app2",
                    type:           "building"
                }, {
                    name:           "elevator",
                    description:    "elevator",
                    label:          strings.elevator_label,
                    path:           "assets/models/elevator/e10/e10.app4",
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1 / 6,
                    matrix: {
                        elements: [
                            0.7162835413190127,
                            0,
                            -0.6978093496331891,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0.6978093496331891,
                            0,
                            0.7162835413190127,
                            0,
                            81.20981923751822,
                            0,
                            -6.620246916156685,
                            1
                        ]
                    },
                }, {
                    name:           "water_tank",
                    description:    "water tanks",
                    label:          strings.water_tank_label,
                    path:           "assets/models/anyo_dae_v2/water_tanks/models/untitled.app1",
                    type:           "building",
                    selectableObjectExp: [
                        {
                            name:           "tank1_a4",
                            description:    "tankA4",
                            label:          strings.tank_a4_label,
                            subType:        "waterTank"
                        }, {
                            name:           "tank1_a6",
                            description:    "tankA6",
                            label:          strings.tank_a6_label,
                            subType:        "waterTank"
                        }, {
                            name:           "tank1_a7",
                            description:    "tankA7",
                            label:          strings.tank_a7_label,
                            subType:        "waterTank"
                        }, {
                            name:           "tank1_a8",
                            description:    "tankA8",
                            label:          strings.tank_a8_label,
                            subType:        "waterTank"
                        },
                        {
                            name:           "tank1_a9",
                            description:    "tankA9",
                            label:          strings.tank_a9_label,
                            subType:        "waterTank"
                        }
                    ]
                }, {
                    name:           "trees",
                    description:    "all the trees",
                    label:          "All the trees",
                    path:           "assets/models/trees.app2",
                    type:           "object",

                }, {
                    name:           "a7_tree",
                    description:    "a7 tree",
                    label:          strings.a7_tree_label,
                    path:           "assets/models/tree_A7.app2",
                    type:           "object",
                }, {
                    name:           "Tables",
                    description:    "Tables",
                    label:          strings.outdoor_tables_label,
                    path:           "assets/models/grounds_v4/grounds_tables.app2",
                    type:           "object",
                }, {
                    name:           "car",
                    description:    "Car",
                    label:          strings.car_label,
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1 / 10,
                    path:           "assets/models/car_v2/car.app2",
                    hasAnimationPath:   true
                }, {
                    name:           "bb_bank",
                    description:    "Bank billboard",
                    label:          "Bank of Shanghai",
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1 / 2,
                    path:           "assets/models/bb_bank/bb_bank.app4",
                    matrix: {
                        elements: [
                            3,
                            0,
                            0,
                            0,
                            0,
                            3,
                            0,
                            0,
                            0,
                            0,
                            3,
                            0,
                            -65.12702178955078,
                            22.991147994995117,
                            6.143496036529541,
                            1
                        ]
                    }
                }, {
                    name:           "bb_educ",
                    description:    "Educ billboard",
                    label:          "Educ billboard",
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1 / 2,
                    path:           "assets/models/bb_educ/bb_educ.app4",
                    matrix: {
                        elements: [
                            3,
                            0,
                            0,
                            0,
                            0,
                            3,
                            0,
                            0,
                            0,
                            0,
                            3,
                            0,
                            -9.090253829956055,
                            16.58919334411621,
                            48.957130432128906,
                            1
                        ]
                    }
                }, {
                    name:           "lawnmower",
                    description:    "Lawn mower",
                    label:          strings.lawnmower_label,
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1 / 15,
                    path:           "assets/models/lawn_mower/lawn_mower.app4",
                    hasAnimationPath:   true
                }, {
                    name:           "camera_1",
                    description:    "Camera",
                    label:          strings.camera_1_label,
                    type:           "object",
                    subType:        "securityCamera",
                    path:           "assets/models/c2/c1.app2",
                    matrix: {
                        elements: [
                            -0.6861025342672566,
                            0,
                            -0.7275048539164864,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0.7275048539164864,
                            0,
                            -0.6861025342672566,
                            0,
                            11.782177264174702,
                            7.021466057740932,
                            -39.70756982670494,
                            1,
                        ]
                    }
                }, {
                    name:           "camera_2",
                    description:    "Camera",
                    label:          strings.camera_2_label,
                    type:           "object",
                    subType:        "securityCamera",
                    path:           "assets/models/c2/c1.app2",
                    matrix: {
                        elements: [
                            0.7822413034200963,
                            0,
                            0.622975555879706,
                            0,
                            -0,
                            1,
                            0,
                            0,
                            -0.622975555879706,
                            -0,
                            0.7822413034200963,
                            0,
                            75.35016148049486,
                            4.527577404116722,
                            27.76780370622135,
                            1
                        ]
                    }
                }, {
                    name:           "camera_3",
                    description:    "Camera",
                    label:          strings.camera_3_label,
                    type:           "object",
                    subType:        "securityCamera",
                    path:           "assets/models/c2/c1.app2",
                    matrix: {
                        elements: [
                            0.7724291896517244,
                            0,
                            -0.635100895113509,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0.635100895113509,
                            0,
                            0.7724291896517244,
                            0,
                            -6.046089980141235,
                            3.394941476260634,
                            -124.80011538532355,
                            1
                        ]
                    }
                }, {
                    name:           "camera_4",
                    description:    "Camera",
                    label:          strings.camera_4_label,
                    type:           "object",
                    subType:        "securityCamera",
                    path:           "assets/models/c2/c1.app2",
                    matrix: {
                        elements: [
                            -0.8468090950118374,
                            0,
                            0.5318969417144952,
                            0,
                            0,
                            1,
                            0,
                            0,
                            -0.5318969417144952,
                            0,
                            -0.8468090950118374,
                            0,
                            -72.45927717435913,
                            2.0742387466725782,
                            3.8841516195290775,
                            1
                        ]
                    }
                }, {
                    name:           "flamingo",
                    description:    "Flamingo",
                    label:          strings.flamingo_label,
                    type:           "object",
                    startPaused:    false,
                    timeScale:      2,
                    path:           "assets/models/animations/flamingo.app5",
                    matrix: { // 50, 100 - Math.random() * 20
                        elements: [
                            -0.02984018560763966,
                            -0.0003606155289023259,
                            0.00307136441047438,
                            0,
                            -0.00044288092899365543,
                            0.029986533880142323,
                            -0.0007820756599014321,
                            0,
                            -0.003060584810840545,
                            -0.0008232510524688318,
                            -0.02983211488178906,
                            0,
                            52.52796702515267,
                            35.09390062385421,
                            155.91841193790123,
                            1
                        ]
                    }

                }, {
                    name:           "stork",
                    description:    "Stork",
                    label:          strings.stork_label,
                    type:           "object",
                    startPaused:    false,
                    timeScale:      1.5,
                    path:           "assets/models/animations/stork.app5",
                    matrix: {
                        elements: [
                            -0.02984018560763966,
                            -0.0003606155289023259,
                            0.00307136441047438,
                            0,
                            -0.00044288092899365543,
                            0.029986533880142323,
                            -0.0007820756599014321,
                            0,
                            -0.003060584810840545,
                            -0.0008232510524688318,
                            -0.02983211488178906,
                            0,
                            46.52796702515267,
                            35.09390062385421,
                            150.91841193790123,
                            1
                        ]
                    }
                }, {
                    name:           "roadside_mirror",
                    description:    "roadside mirror",
                    label:          strings.roadside_mirror_label,
                    type:           "object",
                    path:           "assets/models/mirror/m1.app4"
                }
            ]
        }, {
            name:   "a5 interior",
            camera: {
                initialPosition: {
                    x: 200,
                    y: 180,
                    z: -50
                },
                initialFocalPoint: {
                    x: 20,
                    y: 0,
                    z: -15
                },
                homePosition: {
                    x: 167.0,
                    y: 206.0,
                    z: -148.0
                },
                homeFocalPoint: {
                    x:  20,
                    y:  0,
                    z:  -15
                }
            },
            objects: [
                {
                    name:           "floor_1",
                    description:    "Thisis floor 1",
                    label:          strings.floor_1_label,
                    path:           "assets/models/a8_indoor_v7/a8_f2.app2",
                    type:           "level",
                    floorID:        "0"
                }, {
                    name:           "floor_2",
                    description:    "Thisis floor 2",
                    label:          strings.floor_2_label,
                    path:           "assets/models/a8_indoor_v7/a8_f3.app2",
                    type:           "level",
                    floorID:        "1"
                }, {
                    name:           "floor_3",
                    description:    "Thisis floor 3",
                    label:          strings.floor_3_label,
                    path:           "assets/models/a8_indoor_v7/a8_f4.app2",
                    type:           "level",
                    floorID:        "2"
                }, {
                    name:           "floor_4",
                    description:    "Thisis floor 4",
                    label:          strings.floor_4_label,
                    path:           "assets/models/a8_indoor_v7/a8_f6.app2",
                    type:           "level",
                    floorID:        "3"
                },
                {
                    name:           "floor_5",
                    description:    "Thisis floor 5",
                    label:          strings.floor_5_label,
                    path:           "assets/models/a8_indoor_v7/a8_f7.app2",
                    type:           "level",
                    floorID:        "4"
                }
            ]
        }
    ]
};
