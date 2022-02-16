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
                    path:   "./assets/models/room04/ground.app2",
                    type:   "ground",
                    label:  strings.floor()
                }, {
                    name:   "ac_tower",
                    path:   "./assets/models/room04/ac_tower.app2",
                    type:   "object",
                    label:  "AC Tower",
                    selectableObjectExp: [
                        {
                            name: "ac_tower00",
                            label: strings.ac(1)
                        }, {
                            name: "ac_tower01",
                            label: strings.ac(2)
                        }, {
                            name: "ac_tower02",
                            label: strings.ac(3)
                        }, {
                            name: "ac_tower03",
                            label: strings.ac(4)
                        }, {
                            name: "ac_tower04",
                            label: strings.ac(5)
                        }, {
                            name: "ac_tower05",
                            label: strings.ac(6)
                        }, {
                            name: "ac_tower06",
                            label: strings.ac(7)
                        }, {
                            name: "ac_tower07",
                            label: strings.ac(8)
                        }, {
                            name: "ac_tower08",
                            label: strings.ac(9)
                        }, {
                            name: "ac_tower09",
                            label: strings.ac(10)
                        }, {
                            name: "ac_tower10",
                            label: strings.ac(11)
                        }, {
                            name:  "ac_tower11",
                            label: strings.ac(12)
                        }, {
                            name: "ac_tower12",
                            label: strings.ac(13)
                        }, {
                            name: "ac_tower13",
                            label: strings.ac(14)
                        }
                    ]
                }, {
                    name:   "air_coolent",
                    path:   "./assets/models/room04/air_coolent_pump.app2",
                    type:   "object",
                    label:  strings.air_coolant_pump()

                }, {
                    name:   "cooler_set",
                    path:   "./assets/models/room04/cooler_set.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "cooler_set00",
                            label: strings.cooler(1)
                        }, {
                            name: "cooler_set01",
                            label: strings.cooler(2)
                        }
                    ]
                }, {
                    name:   "cooling_pump",
                    path:   "./assets/models/room04/cooling_pump.app2",
                    type:   "object",
                    label:  "Cooler",
                    selectableObjectExp: [
                        {
                            name: "cooling_pump00",
                            label: strings.cooling_pump(1)
                        }, {
                            name: "cooling_pump01",
                            label: strings.cooling_pump(2)
                        }, {
                            name: "cooling_pump02",
                            label: strings.cooling_pump(3)
                        }
                    ]
                }, {
                    name:   "frozen_pump",
                    path:   "./assets/models/room04/frozen_pump.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "frozen_pump00",
                            label: strings.frozen_pump(1)
                        }, {
                            name: "frozen_pump01",
                            label: strings.frozen_pump(2)
                        }, {
                            name: "frozen_pump02",
                            label: strings.frozen_pump(3)
                        }
                    ]
                }, {
                    name:   "hotwater_recycle_pump",
                    path:   "./assets/models/room04/hotwater_recycle_pump.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "hotwater_recycle_pump00",
                            label: strings.hotwater_recycle(1)
                        }, {
                            name: "hotwater_recycle_pump01",
                            label: strings.hotwater_recycle(2)
                        }
                    ]
                }, {
                    name:   "water_treatment_set",
                    path:   "./assets/models/room04/water_treatment_set.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "water_treatment_set00",
                            label: strings.water_treatment(1)
                        }, {
                            name: "water_treatment_set01",
                            label: strings.water_treatment(2)
                        }
                    ]
                }
            ]
        }
    ]
};
