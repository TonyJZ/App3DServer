let siteObj = { // eslint-disable-line no-unused-vars
    scenes: [
        {
            name:           "A12substation",
            description:    "Anyue Smart Community A12 substation",
            camera: {
                initialPosition: {
                    x: 25.70243131302057,
                    y: 23.132188181718558,
                    z: -6.425607828255258
                },
                initialFocalPoint: {
                    x:  0,
                    y:  0,
                    z:  0
                },
                homePosition:  {
                    x: 15,
                    y: 20,
                    z: 15
                },
                homeFocalPoint: {
                    x:  0,
                    y:  0,
                    z:  0
                }
            },

            objects: [
                {
                    name:           "ground",
                    description:    "SAIC floor",
                    label:          strings.substation_ground_label,
                    path:           "assets/models/facility/floor/floor2.app4",
                    type:           "ground"
                }, {
                    name:               "facilities",
                    description:        "facilities",
                    label:              "Facilities",
                    path:               "assets/models/facility/facility4/machines.app4",
                    type:               "facility",
                    selectableObjectExp: [
                        {
                            name: "machine01",
                            label: strings.machine_01_label,
                            Description: "Machine 01",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine02",
                            label: strings.machine_02_label,
                            Description: "Machine 02",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine03",
                            label: strings.machine_03_label,
                            Description: "Machine 03",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine04",
                            label: strings.machine_04_label,
                            Description: "Machine 04",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine05",
                            label: strings.machine_05_label,
                            Description: "Machine 05",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine06",
                            label: strings.machine_06_label,
                            Description: "Machine 06",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine07",
                            label: strings.machine_07_label,
                            Description: "Machine 07",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine08",
                            label: strings.machine_08_label,
                            Description: "Machine 08",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine09",
                            label: strings.machine_09_label,
                            Description: "Machine 09",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine10",
                            label: strings.machine_10_label,
                            Description: "Machine 10",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine11",
                            label: strings.machine_11_label,
                            Description: "Machine 11",
                            labelMode:  "boundingBox"
                        }, {
                            name: "machine12",
                            label: strings.machine_12_label,
                            Description: "Machine 12",
                            labelMode:  "boundingBox"
                        },
                    ]
                }, {
                    name:               "joint",
                    description:        "joint",
                    label:              strings.joint_label,
                    path:               "assets/models/facility/facility4/joint01.app4",
                    type:               "joint"
                }, {
                    name:               "label",
                    description:        "labels",
                    label:              strings.label_label,
                    type:               "label",
                    path:               "assets/models/facility/facility4/labels.app4"
                }, {
                    name:               "fan1",
                    description:        "fan",
                    label:              strings.fan_1_label,
                    type:               "fan",
                    path:               "assets/models/facility/facility4/fan.app4",
                    startPaused:        false,
                    timeScale:         0,
                    matrix: {
                        elements: [
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            8.061,
                            0, // 1.181,
                            -5.074,
                            1
                        ]
                    }
                }, {
                    name:               "fan2",
                    description:        "fan",
                    label:              strings.fan_2_label,
                    type:               "fan",
                    path:               "assets/models/facility/facility4/fan.app4",
                    startPaused:        false,
                    timeScale:         1,
                    matrix: {
                        elements: [
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            8.061,
                            0, // 1.181,
                            -1.196,
                            1
                        ]
                    }
                }, {
                    name:               "fan3",
                    description:        "fan",
                    label:              strings.fan_3_label,
                    type:               "fan",
                    path:               "assets/models/facility/facility4/fan.app4",
                    startPaused:        false,
                    timeScale:         2,
                    matrix: {
                        elements: [
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            8.061,
                            0, // 1.181,
                            2.682,
                            1
                        ]
                    }
                }
            ]
        }
    ]
};
