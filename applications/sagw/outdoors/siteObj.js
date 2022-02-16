/* Description of the site */
var siteObj = {
    scenes: [{
        name: "sagw",
        isPrimary: true,
        camera: {
            initialPosition: {
                x: 1754.005990666527,
                y: 1137.8109204690675,
                z: 765.2220562008587

            },
            initialFocalPoint: {
                x: 462.5,
                y: 0,
                z: -750
            },
            homePosition: {
                x: 1754.005990666527,
                y: 1137.8109204690675,
                z: -765.2220562008587
            },
            homeFocalPoint: {
                 x: 462.5,
                y: 0,
                z: -750
            }
        },
        objects: [
            {
            name: "dct_factory",
            path: "assets/models/outdoors/1_DCTFactory.app2",
            label: strings.dct_factory
        }, 
        {
            name: "power_station_1",
            path: "assets/models/outdoors/2_PowerStation1.app2",
            label: strings.power_station(1)
        }, 
        {
            name: "joint_factory",
            path: "assets/models/outdoors/3_JointFactory.app2",
            label: strings.joint_factory,
        }, 
        {
            name: "heat_treatment_plant",
            path: "assets/models/outdoors/4_HeatTreatmentPlant.app2",
            label: strings.heat_treatment_plant
        }, 
        {
            name: "power_station_2",
            path: "assets/models/outdoors/5_PowerStation2.app2",
            label: strings.power_station(2)
        }, 
        {
            name: "forge_factory",
            path: "assets/models/outdoors/6_ForgeFactory.app2",
            label: strings.forge_factory
        }, 
        {
            name: "business_building",
            path: "assets/models/outdoors/7_BusinessBuilding.app2",
            label: strings.business_building,
        }, 
        {
            name: "power_station_3",
            path: "assets/models/outdoors/8_PowerStation3.app2",
            label: strings.power_station(3)
        }, 
        {
            name: "security_center",
            path: "assets/models/outdoors/9_SecurityCenter.app4",
            label: strings.security_center
        }, 
        {
            name: "test_center",
            path: "assets/models/outdoors/10_TestCenter.app2",
            label: strings.test_center
        }, 
        {
            name: "transformer_station",
            path: "assets/models/outdoors/11_TransformerStation.app2",
            label: strings.transformer_station
        }, 
        {
            name:       "fences_pavilion",
            path:       "assets/models/outdoors/fences_pavilions.app2",
            label:      strings.fences,
            loadHidden: true
        },{
            name:       "trees",
            path:       "assets/models/outdoors/trees.app2",
            label:      strings.fences,
            loadHidden: true
        },{
            name: "ground",
            path: "assets/models/outdoors/grounds.app2",
            type: "ground",
            label: strings.ground,
        }
    ]
    }]
};