/* Description of the site */
let siteObj = {
    scenes: [
        {
            name:       "sagw",
            isPrimary:  true,
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
                    x: 20,
                    y: 0,
                    z: -15
                }
            },
            objects: [
                {
                    name:   "floor",
                    path:   "./assets/models/room01/floor.app3",
                    type:   "ground",
                    label:  strings.floor()
                }, {
                    name:   "set01",
                    path:   "./assets/models/room01/ac_tower.app3",
                    selectableObjectExp: [
                        {
                            name: "ac_tower001",
                            label: strings.ac(1)
                        }, {
                            name: "ac_tower002",
                            label: strings.ac(2)
                        }, {
                            name: "ac_tower003",
                            label: strings.ac(3)
                        }, {
                            name: "ac_tower004",
                            label: strings.ac(4)
                        }
                    ]
                }, {
                    name:   "set02",
                    path:   "./assets/models/room01/cooling_pump.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "cooling_pump005",
                            label: strings.cooling_pump(1)
                        }, {
                            name: "cooling_pump001",
                            label: strings.cooling_pump(2)
                        }, {
                            name: "cooling_pump002",
                            label: strings.cooling_pump(3)
                        }, {
                            name: "cooling_pump003",
                            label: strings.cooling_pump(4)
                        }, {
                            name: "cooling_pump004",
                            label: strings.cooling_pump(5)
                        }
                    ]
                }, {
                    name:   "set03",
                    path:   "./assets/models/room01/cooler_set.app3",
                    type:   "object",
                    label:  "set03",
                    selectableObjectExp: [
                        {
                            name: "cooler_set001",
                            label: strings.cooler(1)
                        }, {
                            name: "cooler_set002",
                            label: strings.cooler(2)
                        }, {
                            name: "cooler_set003",
                            label: strings.cooler(3)
                        }, {
                            name: "cooler_set004",
                            label: strings.cooler(4)
                        }
                    ]
                },  {
                    name:   "set04",
                    path:   "./assets/models/room01/frozen_pump.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "frozen_pump005",
                            label: strings.frozen_pump(1)
                        }, {
                            name: "frozen_pump001",
                            label: strings.frozen_pump(2)
                        }, {
                            name: "frozen_pump002",
                            label: strings.frozen_pump(3)
                        }, {
                            name: "frozen_pump003",
                            label: strings.frozen_pump(4)
                        }, {
                            name: "frozen_pump004",
                            label: strings.frozen_pump(5)
                        }
                    ]
                }, {
                    name:   "set05",
                    path:   "./assets/models/room01/water_treatment_set.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "water_treatment_set004",
                            label: strings.water_treatment(1)
                        }, {
                            name: "water_treatment_set001",
                            label: strings.water_treatment(2)
                        }, {
                            name: "water_treatment_set002",
                            label: strings.water_treatment(3)
                        }, {
                            name: "water_treatment_set003",
                            label: strings.water_treatment(4)
                        }
                    ]
                }, {
                    name:   "set06",
                    path:   "./assets/models/room01/hotwater_recycle_pump.app3",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "hotwater_recycle_pump003",
                            label: strings.hotwater_recycle(1)
                        }, {
                            name: "hotwater_recycle_pump001",
                            label: strings.hotwater_recycle(2)
                        }, {
                            name: "hotwater_recycle_pump002",
                            label: strings.hotwater_recycle(3)
                        },
                    ]
                }, {
                    name:   "set07",
                    path:   "./assets/models/room01/water_supply_pump.app3",
                    type:   "object",
                    label:  "set07",
                    selectableObjectExp: [
                        {
                            name: "water_supply_pump004",
                            label: strings.water_supply(1)
                        }, {
                            name: "water_supply_pump001",
                            label: strings.water_supply(2)
                        }, {
                            name: "water_supply_pump002",
                            label: strings.water_supply(3)
                        }, {
                            name: "water_supply_pump003",
                            label: strings.water_supply(4)
                        }
                    ]
                }
            ]
        }
    ]
};
