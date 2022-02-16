
var style_green = {
    color:              0xffffff,
    textureUrl:            "./assets/pipeTextures/arrows_green.png",
    textureRotation:    0,
    speed:              10,
    radius:             0.5,
    textureUnitS:  2,
    textureUnitT:  2,
    routeType:           1,
    connectionRadius:   0.5
};
var style_pink = {
    color:              0xffffff,
    textureUrl:            "./assets/pipeTextures/arrows_pink.png",
    textureRotation:    0,
    speed:              5,
    radius:             0.5,
    textureUnitS:  2,
    textureUnitT:  2,
    routeType:           1,
    connectionRadius:   0.5
};
var style_yellow = {
    color:              0xffffff,
    textureUrl:            "./assets/pipeTextures/color_yellow.png",
    textureRotation:    0,
    speed:              10,
    radius:             0.45,
    textureUnitS:  2,
    textureUnitT:  2,
    routeType:           1,
    connectionRadius:   0.5
};
var PipelineParams = [
    {
        name: "Line439",
        label: strings.pipe("439"),
        route: [
            [0.563, 1.247, 3.704],
            [0.563, 10.123, 3.704],
            [0.476, 12.261, 2.5],
            [0.476, 39.787, 2.5],
            [-60.568, 39.787, 2.5],
            [-60.568, 13.423, 2.5],
            [-60.568, 9.858, 3.853],
            [-60.312, 1.51, 3.853]
        ],
        style: style_pink
    },
    {
        name: "Line441",
        label: strings.pipe("441"),
        route: [
            [5.601, 1.264, 4.318],
            [5.601, 14.504, 4.318],
            [5.349, 17.572, 3.0],
            [5.349, 29.573, 3.0],
            [16.023, 29.573, 3.0],
            [16.023, 68.401, 3.0]
        ],
        style: style_pink
    },
    {
        name: "Line442",
        label: strings.pipe("442"),
        route: [
            [-50.938, -56.142, 4.5],
            [-60.66, -56.142, 4.5],
            [-60.66, -33.735, 4.5],
            [-60.624, -32.562, 2.724],
            [-60.624, -19.795, 2.724]

        ],
        style: style_green
    },
    {
        name: "Line443",
        label: strings.pipe("443"),
        route: [
            [-56.683, -66.859, 4.5],
            [-56.683, -56.142, 4.5]

        ],
        style: style_green
    },
    {
        name: "Line444",
        label: strings.pipe("444"),
        route: [
            [55.155, -65.599, 1.5],
            [27.969, -65.599, 1.5],
            [27.969, -97.06, 1.5],
            [-50.59, -97.06, 1.5],
            [-50.59, -75.24, 1.5],
            [-53.517, -75.24, 1.5]

        ],
        style: style_green
    },
    {
        name: "Line445",
        label: strings.pipe("445"),
        route: [
            [55.193, -45.731, 1.5],
            [18.241, -45.731, 1.5],
            [18.241, -86.003, 1.5],
            [7.811, -86.003, 1.5],
            [7.811, -75.222, 1.5],
            [5.936, -75.222, 1.5]

        ],
        style: style_green
    },
    {
        name: "Line446",
        label: strings.pipe("446"),
        route: [
            [54.679, -55.791, 1.5],
            [22.86, -55.791, 1.5],
            [22.86, -91.861, 1.5],
            [22.86, -91.861, 1.5],
            [-20.78, -91.861, 1.5],
            [-20.78, -75.126, 1.5],
            [-23.598, -75.126, 1.5]


        ],
        style: style_green
    },
    {
        name: "Line447",
        label: strings.pipe("447"),
        route: [
            [-33.773, 71.858, 2.8],
            [-33.773, 88.242, 2.8],
            [11.024, 88.242, 2.8],
            [11.024, 71.125, 2.8]

        ],
        style: style_yellow
    },
    {
        name: "Line448",
        label: strings.pipe("448"),
        route: [
            [-19.082, -56.136, 4.5],
            [-41.748, -56.136, 4.5]

        ],
        style: style_green
    },
    {
        name: "Line449",
        label: strings.pipe("449"),
        route: [
            [2.835, -67.249, 4.5],
            [2.835, -61.472, 4.5],
            [0.051, -61.472, 4.5],
            [0.051, -34.129, 4.5],
            [0.051, -32.2, 2.914],
            [0.051, -20.357, 2.914]

        ],
        style: style_green
    },
    {
        name: "Line450",
        label: strings.pipe("450"),
        route: [
            [0.037, -56.136, 4.5],
            [-10.09, -56.136, 4.5]

        ],
        style: style_green
    },
    {
        name: "Line451",
        label: strings.pipe("451"),
        route: [
            [-55.349, -20.713, 3.351],
            [-55.349, -25.453, 3.351],
            [-55.349, -27.437, 6],
            [-55.349, -27.437, 8],
            [-55.349, -49.918, 8],
            [12.679, -49.918, 8],
            [12.679, -49.918, 6],
            [12.679, -73.323, 6],
            [73.311, -73.323, 6],
            [73.205, 17.112, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line452",
        label: strings.pipe("452"),
        route: [
            [73.205, -61.308, 6.0],
            [63.205, -61.308, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line453",
        label: strings.pipe("453"),
        route: [
            [73.205, -49.948, 6.0],
            [63.205, -49.948, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line454",
        label: strings.pipe("454"),
        route: [
            [73.205, -39.149, 6.0],
            [63.205, -39.148, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line455",
        label: strings.pipe("455"),
        route: [
            [73.205, -28.138, 6.0],
            [63.205, -28.138, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line456",
        label: strings.pipe("456"),
        route: [
            [73.205, -16.914, 6.0],
            [63.205, -16.914, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line457",
        label: strings.pipe("457"),
        route: [
            [73.205, -5.828, 6.0],
            [63.205, -5.828, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line458",
        label: strings.pipe("458"),
        route: [
            [73.205, 5.405, 6.0],
            [63.205, 5.405, 6.0]

        ],
        style: style_green
    },
    {
        name: "Line459",
        label: strings.pipe("459"),
        route: [
            [-1.253, 50.71, 2.5],
            [-1.253, 39.785, 2.5]

        ],
        style: style_pink
    },
    {
        name: "Line460",
        label: strings.pipe("460"),
        route: [
            [-34.313, 70.239, 3.5],
            [-34.313, 63.25, 3.5],
            [-12.561, 63.25, 3.5],
            [-12.561, 55.179, 3.5],
            [-9.312, 55.179, 3.5]
        ],
        style: style_pink
    },
    {
        name: "Line461",
        label: strings.pipe("461"),
        route: [
            [-29.884, 50.799, 2.5],
            [-29.884, 39.824, 2.5]
        ],
        style: style_pink
    },
    {
        name: "Line462",
        label: strings.pipe("462"),
        route: [
            [-38.787, 70.239, 3.5],
            [-38.787, 60.741, 3.5],
            [-40.165, 60.741, 3.5],
            [-40.165, 55.278, 3.5],
            [-38.295, 55.278, 3.5]
        ],
        style: style_pink
    },
    {
        name: "Line463",
        label: strings.pipe("463"),
        route: [
            [-59.742, 50.702, 2.5],
            [-59.742, 39.727, 2.5]
        ],
        style: style_pink
    },
    {
        name: "Line464",
        label: strings.pipe("464"),
        route: [
            [-40.082, 71.452, 3.5],
            [-69.175, 71.452, 2.5],
            [-69.175, 55.241, 2.5],
            [-67.715, 55.241, 2.5]
        ],
        style: style_pink
    },
    {
        name: "Line465",
        label: strings.pipe("465"),
        route: [
            [-27.019, -67.242, 4.5],
            [-27.019, -56.071, 4.5]
        ],
        style: style_green
    },
    {
        name: "Line466",
        label: strings.pipe("466"),
        route: [
            [-35.091, 88.632, 2.0],
            [-35.091, 72.391, 2.0]
        ],
        style: style_pink
    },
    {
        name: "Line467",
        label: strings.pipe("467"),
        route: [
            [-38.004, 88.632, 2.0],
            [-38.004, 72.391, 2.0]
        ],
        style: style_pink
    },
    {
        name: "Line467",
        label: strings.pipe("467"),
        route: [
            [-39.633, 88.632, 2.0],
            [-39.633, 72.391, 2.0]
        ],
        style: style_pink
    },
    {
        name: "Line467",
        label: strings.pipe("467"),
        route: [
            [16.042, 72.391, 2.0],
            [16.042, 88.632, 2.0]
        ],
        style: style_pink
    },
    {
        name: "Line470",
        label: strings.pipe("470"),
        route: [
            [5.294, -20.255, 3.379],
            [5.294, -26.447, 3.379],
            [5.253, -31.105, 6.0],
            [5.253, -38.482, 6.0],
            [43.811, -38.482, 6.0],
            [43.811, 88.885, 6.0],
            [73.46, 88.885, 6.0],
            [73.205, 17.112, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line471",
        label: strings.pipe("471"),
        route: [
            [73.205, 17.112, 6.0],
            [63.205, 17.112, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line472",
        label: strings.pipe("472"),
        route: [
            [73.205, 27.767, 6.0],
            [63.205, 27.767, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line473",
        label: strings.pipe("473"),
        route: [
            [73.205, 38.98, 6.0],
            [63.205, 38.98, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line474",
        label: strings.pipe("474"),
        route: [
            [73.205, 50.058, 6.0],
            [63.205, 50.058, 6.0]
        ],
        style: style_green
    },

    {
        name: "Line475",
        label: strings.pipe("475"),
        route: [
            [73.205, 61.407, 6.0],
            [63.205, 61.407, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line476",
        label: strings.pipe("476"),
        route: [
            [73.205, 72.271, 6.0],
            [63.205, 72.271, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line477",
        label: strings.pipe("477"),
        route: [
            [73.205, 83.831, 6.0],
            [63.205, 83.831, 6.0]
        ],
        style: style_green
    },
    {
        name: "Line478",
        label: strings.pipe("478"),
        route: [
            [-55.196, 1.368, 4.406],
            [-55.196, 10.06, 4.406],
            [-55.196, 13.523, 6.0],
            [-55.196, 33.923, 6.0],
            [11.555, 33.923, 6.0],
            [11.555, 57.58, 6.0],
            [11.555, 62.198, 2.858],
            [11.512, 68.554, 3.0]
        ],
        style: style_pink
    }
];

