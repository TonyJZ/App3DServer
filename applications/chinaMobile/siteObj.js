let siteObj = { // eslint-disable-line no-unused-vars
    scenes: [
        {
            name:      "china_mobile",
            isPrimary:      true,
            camera: {
                initialPosition: {
                    x: 0.6500528102107991,
                    y: 46.28102687562419,
                    z: 63.43602084402637
                },
                initialFocalPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                homePosition:  {
                    x: 0.6500528102107991,
                    y: 46.28102687562419,
                    z: 63.43602084402637
                },
                homeFocalPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            },
            objects: [
                {
                    name:           "floor_1",
                    description:    "Floor 1",
                    label:          "1楼",
                    path:           "assets/IDC02/floor_copy.app4",
                    type:           "ground",
                    floorId:        0,
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
                            0,
                            -3.1912264479155867,
                            -0.02708518528433146,
                            1
                        ]
                    }
                }, /* {
                    name:           "floor_3",
                    description:    "Floor 3",
                    label:          strings.china_mobile_floor_1,
                    path:           "assets/IDC02/floor_copy.app4",
                    type:           "ground",
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
                            0.009660840864440301,
                            6.868571137354219,
                            -0.3710272510502426,
                            1
                        ]
                    }
                },{
                    name:           "floor_4",
                    description:    "Floor 4",
                    label:          strings.china_mobile_floor_1,
                    path:           "assets/IDC02/floor_copy.app4",
                    type:           "ground",
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
                            0.004530164165605921,
                            10.281524647355802,
                            -0.3710272510502426,
                            1
                        ]
                    }
                },*/
                {
                    name:           "cabinet_1",
                    description:    "server 1",
                    label:          "机房-A组列头柜01",
                    path:           "assets/IDC02/cab01.app4",
                    type:           "object",
                    startPaused:    true,
                    timeScale:      2,
                    selectableObjectExp: [
                        {
                            name:         "server_1u",
                            description:   "",
                            label:         "DELL PowerEdge 1U"
                        }, {
                            name:         "server_2u",
                            description:   "",
                            label:         "DELL PowerEdge 2U"
                        }, {
                            name:         "server_4u",
                            description:   "",
                            label:         "DELL PowerEdge 4U"
                        },
                    ]
                }, {
                    name:           "cabinet_2",
                    description:    "server 1",
                    label:          "机房-B组列头柜01",
                    path:           "assets/IDC02/cab02.app4",
                    type:           "object",
                    startPaused:    true,
                    timeScale:      2,
                    selectableObjectExp: [
                        {
                            name:         "exchanger01",
                            description:   "",
                            label:         "交换机01"
                        }, {
                            name:         "exchanger02",
                            description:   "",
                            label:         "交换机02"
                        }, {
                            name:         "exchanger03",
                            description:   "",
                            label:         "交换机03"
                        }, {
                            name:         "exchanger04",
                            description:   "",
                            label:         "交换机04"
                        }, {
                            name:         "exchanger05",
                            description:   "",
                            label:         "交换机05"
                        }, {
                            name:         "exchanger06",
                            description:   "",
                            label:         "交换机06"
                        }
                    ]
                }, {
                    name:           "cabinets",
                    description:    "server 1",
                    label:          "空机柜",
                    path:           "assets/IDC02/cabinets.app4",
                    type:           "object"
                }, {
                    name:           "batteries",
                    description:    "25 battery boxes in right side room",
                    label:          "蓄电池组",
                    path:           "assets/IDC02/batterys.app4",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "battery001",
                            description:   "",
                            label:         "电池室-蓄电池-001"
                        }, {
                            name:         "battery002",
                            description:   "",
                            label:         "电池室-蓄电池-002"
                        }, {
                            name:         "battery003",
                            description:   "",
                            label:         "电池室-蓄电池-003"
                        }, {
                            name:         "battery004",
                            description:   "",
                            label:         "电池室-蓄电池-004"
                        }, {
                            name:         "battery005",
                            description:   "",
                            label:         "电池室-蓄电池-005"
                        }, {
                            name:         "battery006",
                            description:   "",
                            label:         "电池室-蓄电池-006"
                        }, {
                            name:         "battery007",
                            description:   "",
                            label:         "电池室-蓄电池-007"
                        }, {
                            name:         "battery008",
                            description:   "",
                            label:         "电池室-蓄电池-008"
                        }, {
                            name:         "battery009",
                            description:   "",
                            label:         "电池室-蓄电池-009"
                        }, {
                            name:         "battery010",
                            description:   "",
                            label:         "电池室-蓄电池-010"
                        }, {
                            name:         "battery011",
                            description:   "",
                            label:         "电池室-蓄电池-011"
                        }, {
                            name:         "battery015",
                            description:   "",
                            label:         "电池室-蓄电池-015"
                        }, {
                            name:         "battery016",
                            description:   "",
                            label:         "电池室-蓄电池-016"
                        }, {
                            name:         "battery017",
                            description:   "",
                            label:         "电池室-蓄电池-017"
                        }, {
                            name:         "battery018",
                            description:   "",
                            label:         "电池室-蓄电池-018"
                        }, {
                            name:         "battery019",
                            description:   "",
                            label:         "电池室-蓄电池-019"
                        }, {
                            name:         "battery020",
                            description:   "",
                            label:         "电池室-蓄电池-020"
                        }, {
                            name:         "battery021",
                            description:   "",
                            label:         "电池室-蓄电池-021"
                        }, {
                            name:         "battery022",
                            description:   "",
                            label:         "电池室-蓄电池-022"
                        }, {
                            name:         "battery023",
                            description:   "",
                            label:         "电池室-蓄电池-023"
                        }, {
                            name:         "battery024",
                            description:   "",
                            label:         "电池室-蓄电池-024"
                        }, {
                            name:         "battery025",
                            description:   "",
                            label:         "电池室-蓄电池-025"
                        }
                    ]
                }, {
                    name:           "cameras",
                    description:    "7 cameras",
                    label:          "摄像头",
                    path:           "assets/IDC02/camera.app4",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "camera001",
                            description:   "",
                            label:         "摄像头01"
                        }, {
                            name:         "camera002",
                            description:   "",
                            label:         "摄像头02"
                        }, {
                            name:         "camera003",
                            description:   "",
                            label:         "摄像头03"
                        }, {
                            name:         "camera004",
                            description:   "",
                            label:         "摄像头04"
                        }, {
                            name:         "camera005",
                            description:   "",
                            label:         "摄像头05"
                        }, {
                            name:         "camera006",
                            description:   "",
                            label:         "摄像头06"
                        }, {
                            name:         "camera007",
                            description:   "",
                            label:         "摄像头07"
                        }
                    ]
                }, {
                    name:           "flood_detectors",
                    description:    "3 flood detectors",
                    label:          "漏水绳",
                    path:           "assets/IDC02/flood_detector.app2",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "flood_detector001",
                            description:   "",
                            label:         "漏水绳01"
                        }, {
                            name:         "flood_detector002",
                            description:   "",
                            label:         "漏水绳02"
                        }, {
                            name:         "flood_detector003",
                            description:   "",
                            label:         "漏水绳03"
                        }
                    ]
                }, {
                    name:           "smoke_detectors",
                    description:    "5 smoke detectors",
                    label:          "烟感",
                    path:           "assets/IDC02/smoke_detector.app2",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "smoke_detector001",
                            description:   "",
                            label:         "烟感01"
                        }, {
                            name:         "smoke_detector002",
                            description:   "",
                            label:         "烟感02"
                        }, {
                            name:         "smoke_detector003",
                            description:   "",
                            label:         "烟感03"
                        }, {
                            name:         "smoke_detector004",
                            description:   "",
                            label:         "烟感04"
                        }, {
                            name:         "smoke_detector005",
                            description:   "",
                            label:         "烟感05"
                        }
                    ]
                }, {
                    name:           "temperature_humidity_detectors",
                    description:    "3 temperture & humidity monitors",
                    label:          "温湿度传感器",
                    path:           "assets/IDC02/temp_humidity_monitor.app4",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "temp_humidity_monitor001",
                            description:   "",
                            label:         "温湿度传感器01"
                        }, {
                            name:         "temp_humidity_monitor002",
                            description:   "",
                            label:         "温湿度传感器02"
                        }, {
                            name:         "temp_humidity_monitor003",
                            description:   "",
                            label:         "温湿度传感器03"
                        }
                    ]
                }, {
                    name:           "ups_room",
                    description:    "4 UPS and 4 distribution cabinets",
                    label:          "UPS室",
                    path:           "assets/IDC02/UPS_room.app4",
                    type:           "object",
                    selectableObjectExp: [
                        {
                            name:         "UPS001",
                            description:   "",
                            label:         "UPS室-UPS001"
                        }, {
                            name:         "UPS002",
                            description:   "",
                            label:         "UPS室-UPS002"
                        }, {
                            name:         "UPS003",
                            description:   "",
                            label:         "UPS室-UPS003"
                        }, {
                            name:         "UPS004",
                            description:   "",
                            label:         "UPS室-UPS004"
                        }, {
                            name:         "distribution_cabinet001",
                            description:   "",
                            label:         "UPS室-配电柜001"
                        }, {
                            name:         "distribution_cabinet002",
                            description:   "",
                            label:         "UPS室-配电柜002"
                        }, {
                            name:         "distribution_cabinet003",
                            description:   "",
                            label:         "UPS室-配电柜003"
                        }, {
                            name:         "distribution_cabinet004",
                            description:   "",
                            label:         "UPS室-配电柜004"
                        }
                    ]
                }, {
                    name:           "green_server",
                    description:    "Placeholder while we wait for connector cable model",
                    label:          "链路",
                    path:           "assets/IDC02/server_blocks.app4",
                    type:           "object",
                    loadHidden:     true
                }, {
                    name:           "conn_cable_1",
                    description:    "Connector cable model",
                    label:          "链路",
                    path:           "assets/IDC02/cable01.app4",
                    type:           "object",
                    loadHidden:     true
                },
                {
                    name:           "floor_2",
                    description:    "Floor 2",
                    label:          "2楼",
                    path:           "assets/IDC02/base_floor.app4",
                    type:           "ground",
                    floorId:        1,
                    selectableObjectExp: [
                        {
                            name:         "floor001",
                            label:         "Floor 1"
                        }, {
                            name:         "floor002",
                            label:         "Floor 2"
                        }, {
                            name:         "floor003",
                            label:         "Floor 3"
                        }, {
                            name:         "floor004",
                            label:         "Floor 4"
                        }, {
                            name:         "floor005",
                            label:         "Floor 5"
                        }

                    ],
                    subObjects: [
                        "cabinet_1",
                        "cabinet_2",
                        "cabinets",
                        "batteries",
                        "cameras",
                        "flood_detectors",
                        "smoke_detectors",
                        "temperature_humidity_detectors",
                        "ups_room",
                        "conn_cable_1",
                        "green_server"
                    ]

                }
            ]
        }
    ]
};


