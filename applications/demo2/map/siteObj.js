let siteObj = { // eslint-disable-line no-unused-vars
    scenes: [
        {
            name:           "map",
            description:    "Map View",
            camera: {
                initialPosition: {
                    x:  200,
                    y:  180,
                    z:  -50
                },
                initialFocalPoint: {
                    x:  20,
                    y:  0,
                    z:  -15
                },
                homePosition: {
                    x:  167.0,
                    y:  206.0,
                    z:  -148.0
                },
                homeFocalPoint: {
                    x:  20,
                    y:  0,
                    z:  -15
                }
            },

            objects: [
                {
                    name:           "Shanghai",
                    description:    "",
                    label:          "", // This object will never be clickable, so don't need a label
                    path:           "assets/models/map_shanghai/base.app2",
                    type:           "ground",
                    subObjects: [
                        "Baoshan",
                        "Changning",
                        "Chongming",
                        "Dianshan_Lake",
                        "Fengxian",
                        "Hongkou",
                        "Huangpu",
                        "Huangpu_River",
                        "Huayuanfang",
                        "Jiading",
                        "Jing'an",
                        "Jinshan",
                        "Minhang",
                        "Pudong",
                        "Putuo",
                        "Qingpu",
                        "Songjiang",
                        "Xuhui",
                        "Yangpu",
                        "Yangzi_River"
                    ]
                }, {
                    name:           "Baoshan",
                    description:    "",
                    label:          strings.baoshan,
                    path:           "assets/models/map_shanghai/Baoshan.app2",
                    type:           "district"
                }, {
                    name:           "Changning",
                    description:    "",
                    label:          strings.changning,
                    path:           "assets/models/map_shanghai/Changning.app2",
                    type:           "district"
                }, {
                    name:           "Chongming",
                    description:    "",
                    label:          strings.chongming,
                    path:           "assets/models/map_shanghai/Chongming.app2",
                    type:           "district"
                }, {
                    name:           "Dianshan_Lake",
                    description:    "",
                    label:          strings.dianshan_Lake,
                    path:           "assets/models/map_shanghai/Dianshan_Lake.app2",
                    type:           "district"
                }, {
                    name:           "Fengxian",
                    description:    "",
                    label:          strings.fengxian,
                    path:           "assets/models/map_shanghai/Fengxian.app2",
                    type:           "district"
                }, {
                    name:           "Hongkou",
                    description:    "",
                    label:          strings.hongkou,
                    path:           "assets/models/map_shanghai/Hongkou.app2",
                    type:           "district",
                    subObjects: [
                        "Huayuanfang"
                    ]
                }, {
                    name:           "Huangpu",
                    description:    "",
                    label:          strings.huangpu,
                    path:           "assets/models/map_shanghai/Huangpu.app2",
                    type:           "district"
                }, {
                    name:           "Huangpu_River",
                    description:    "",
                    label:          strings.huangpu_River,
                    path:           "assets/models/map_shanghai/Huangpu_River.app2",
                    type:           "district"
                },
                // Note: This is our "entry point" for the Anyue scene:
                {
                    name:           "Huayuanfang",
                    description:    "",
                    label:          strings.huayuanfang,
                    path:           "assets/models/map_shanghai/Huayuanfang.app2",
                    type:           "district"
                }, {
                    name:           "Jiading",
                    description:    "",
                    label:          strings.jiading,
                    path:           "assets/models/map_shanghai/Jiading.app2",
                    type:           "district"
                }, {
                    name:           "Jing'an",
                    description:    "",
                    label:          strings.jingan,
                    path:           "assets/models/map_shanghai/Jing'an.app2",
                    type:           "district"
                }, {
                    name:           "Jinshan",
                    description:    "",
                    label:          strings.jinshan,
                    path:           "assets/models/map_shanghai/Jinshan.app2",
                    type:           "district"
                }, {
                    name:           "Minhang",
                    description:    "",
                    label:          strings.minhang,
                    path:           "assets/models/map_shanghai/Minhang.app2",
                    type:           "district"
                }, {
                    name:           "Pudong",
                    description:    "",
                    label:          strings.pudong,
                    path:           "assets/models/map_shanghai/Pudong.app2",
                    type:           "district"
                }, {
                    name:           "Putuo",
                    description:    "",
                    label:          strings.putuo,
                    path:           "assets/models/map_shanghai/Putuo.app2",
                    type:           "district"
                }, {
                    name:           "Qingpu",
                    description:    "",
                    label:          strings.qingpu,
                    path:           "assets/models/map_shanghai/Qingpu.app2",
                    type:           "district"
                }, {
                    name:           "Songjiang",
                    description:    "",
                    label:          strings.songjiang,
                    path:           "assets/models/map_shanghai/Songjiang.app2",
                    type:           "district"
                }, {
                    name:           "Xuhui",
                    description:    "",
                    label:          strings.xuhui,
                    path:           "assets/models/map_shanghai/Xuhui.app2",
                    type:           "district"
                }, {
                    name:           "Yangpu",
                    description:    "",
                    label:          strings.yangpu,
                    path:           "assets/models/map_shanghai/Yangpu.app2",
                    type:           "district"
                }, {
                    name:           "Yangzi_River",
                    description:    "",
                    label:          strings.yangziRiver,
                    path:           "assets/models/map_shanghai/Yangzi_River.app2",
                    type:           "district"
                }
            ]
        }
    ]
};
