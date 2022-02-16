/* Description of the site */
let siteObj = {
    scenes: [
        {
            name:       "sagw",
            isPrimary:  true,
            camera: {
                initialPosition: {
                    x: 2.9382875764765286,
                    y: 76.78809834195496,
                    z: -18.667799808137516
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
                    path:   "./assets/models/room05/floor.app4",
                    type:   "ground",
                    label:  strings.floor()
                }, {
                    name:   "set01",
                    path:   "./assets/models/room05/machine_air_pressure_set.app4",
                    type:   "object",
                    label:  strings.air_pressure()

                }, {
                    name:   "set02",
                    path:   "./assets/models/room05/machine_boiler.app4",
                    type:   "object",
                    label:  strings.machine_boiler()

                }, {
                    name:   "set03",
                    path:   "./assets/models/room05/machine_cooler_set.app4",
                    type:   "object",
                    label:  strings.cooler()

                },  {
                    name:   "set04",
                    path:   "./assets/models/room05/machine_recycle_pump.app4",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "recycle_pump",
                            label: strings.recycle_pump(1)
                        }, {
                            name: "recycle_pump001",
                            label: strings.recycle_pump(2)
                        }
                    ]
                }, {
                    name:   "set05",
                    path:   "./assets/models/room05/machine_supply_pump.app4",
                    type:   "object",
                    label:  "set05",
                    selectableObjectExp: [
                        {
                            name: "supply_pump",
                            label: strings.supply_pump(1)
                        }, {
                            name: "supply_pump001",
                            label: strings.supply_pump(2)
                        }, {
                            name: "supply_pump002",
                            label: strings.supply_pump(3)
                        }, {
                            name: "supply_pump003",
                            label: strings.supply_pump(4)
                        }
                    ]
                }, {
                    name:   "set06",
                    path:   "./assets/models/room05/machine_tank.app4",
                    type:   "object",
                    label:  strings.tank()
                }
            ]
        }
    ]
};
