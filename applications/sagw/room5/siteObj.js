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
                    path:   "assets/models/room02/ground.app2",
                    type:   "ground"
                }, {
                    name:   "ac_tower",
                    path:   "assets/models/room02/ac_tower.app2",
                    type:   "object",
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
                        },

                    ]
                }, {
                    name:   "cooler_set",
                    path:   "assets/models/room02/cooler_set.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "cooler_set00",
                            label: strings.cooler(1)
                        }, {
                            name: "cooler_set01",
                            label: strings.cooler(2)
                        }, {
                            name: "cooler_set02",
                            label: strings.cooler(3)
                        }, {
                            name: "cooler_set03",
                            label: strings.cooler(4)
                        },
                    ]
                }, {
                    name:   "cooling_pump",
                    path:   "assets/models/room02/cooling_pump.app2",
                    type:   "object",
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
                        }, {
                            name: "cooling_pump03",
                            label: strings.cooling_pump(4)
                        }, {
                            name: "cooling_pump04",
                            label: strings.cooling_pump(5)
                        }, {
                            name: "cooling_pump05",
                            label: strings.cooling_pump(6)
                        }
                    ]
                }, {
                    name:   "water_treatment",
                    path:   "assets/models/room02/water_treatment_set.app2",
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
                }, {
                    name:   "frozen_pump",
                    path:   "assets/models/room02/frozen_pump.app2",
                    type:   "object",
                    selectableObjectExp: [
                        {
                            name: "frozen_pump00",
                            label: strings.frozen_pump(1)
                        }, {
                            name: "frozen_pump01",
                            label: strings.frozen_pump(2)
                        },
                        {
                            name: "frozen_pump02",
                            label: strings.frozen_pump(3)
                        },
                        {
                            name: "frozen_pump03",
                            label: strings.frozen_pump(4)
                        },
                        {
                            name: "frozen_pump04",
                            label: strings.frozen_pump(5)
                        },
                        {
                            name: "frozen_pump05",
                            label: strings.frozen_pump(6)
                        }, {
                            name: "frozen_pump06",
                            label: strings.frozen_pump(7)
                        },

                    ]
                },
            ]
        }
    ]
};
