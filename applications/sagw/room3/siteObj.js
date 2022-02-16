/* Description of the site */
let siteObj = {
    scenes: [
        {
            name:       "sagw",
            isPrimary:  true,
            camera: {
                initialPosition: {
                    x: 4.216031405803451,
                    y: 87.46017701980833,
                    z: 43.650384449086204
                },
                initialFocalPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                homePosition: {
                    x: 167.0,
                    y: 206.0,
                    z: -148.0
                },
                homeFocalPoint: {
                    x: 20,
                    y: 0,
                    z: -15
                }
            },
            objects: [
                {
                    name:   "floor",
                    path:   "./assets/models/room03/floor.app3",
                    type:   "ground",
                    label:  strings.floor()
                }, {
                    name:   "set01",
                    path:   "./assets/models/room03/machine_ac_tower.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "ac_tower",
                            label: strings.ac(1)
                        }, {
                            name: "ac_tower001",
                            label: strings.ac(2)
                        }
                    ]
                }, {
                    name:   "set02",
                    path:   "./assets/models/room03/machine_air_pressure_set.app3",
                    type:   "object",
                    label:  "set02",
                    selectableObjectExp: [
                        {
                            name: "air_pressure_set",
                            label: strings.air_pressure(1)
                        }, {
                            name: "air_pressure_set001",
                            label: strings.air_pressure(2)
                        }, {
                            name: "air_pressure_set002",
                            label: strings.air_pressure(3)
                        }, {
                            name: "air_pressure_set003",
                            label: strings.air_pressure(4)
                        }, {
                            name: "air_pressure_set004",
                            label: strings.air_pressure(5)
                        }, {
                            name: "air_pressure_set005",
                            label: strings.air_pressure(6)
                        }
                    ]
                }, {
                    name:   "set03",
                    path:   "./assets/models/room03/machine_tank.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "tank",
                            label: strings.tank(1)
                        }, {
                            name: "tank001",
                            label: strings.tank(2)
                        }, {
                            name: "tank002",
                            label: strings.tank(3)
                        }, {
                            name: "tank003",
                            label: strings.tank(4)
                        }
                    ]
                }, {
                    name:   "set04",
                    path:   "./assets/models/room03/machine_dryer.app3",
                    type:   "object",
                    label:  "set04",
                    selectableObjectExp: [
                        {
                            name: "dryer",
                            label: strings.drayer(1)
                        }, {
                            name: "dryer001",
                            label: strings.drayer(2)
                        }, {
                            name: "dryer002",
                            label: strings.drayer(3)
                        }, {
                            name: "dryer003",
                            label: strings.drayer(4)
                        }, {
                            name: "dryer004",
                            label: strings.drayer(5)
                        }
                    ]
                }, {
                    name:   "set05",
                    path:   "./assets/models/room03/machine_recycle_pump.app3",
                    type:   "object",
                    label:  "set05",
                    selectableObjectExp: [
                        {
                            name: "recycle_pump",
                            label: strings.recycle_pump(1)
                        }, {
                            name: "recycle_pump001",
                            label: strings.recycle_pump(2)
                        }, {
                            name: "recycle_pump002",
                            label: strings.recycle_pump(3)
                        }, {
                            name: "recycle_pump003",
                            label: strings.recycle_pump(4)
                        }
                    ]
                }
            ]
        }
    ]
};
