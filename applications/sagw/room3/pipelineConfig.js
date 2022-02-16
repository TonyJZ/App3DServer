var style_segment_zero = {
  routeType: 0,
  connectionRadius: 0,
  tubularSegments: 0
};

var style_segment_long = {
  routeType: 0,
  connectionRadius: 0,
  tubularSegments: 1
};

var style_segment_turn = {
  routeType: 1,
  connectionRadius: 1,
  tubularSegments: 6
};

var style_blue1 = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_blue1.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_red = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_red.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_orange = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_orange.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_green = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_green.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_aqua = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_aqua.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var PipelineParams = [
  {
    name: "Line001",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [[24.927, 5.03, -2.694], [23.541, 5.03, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [
          [23.541, 5.03, -2.694],
          [22.541, 5.03, -2.694],
          [22.541, 6.03, -2.694]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[22.541, 6.03, -2.694], [22.541, 17.376, -2.694]],
        segStyle: style_segment_long
      }
    ]
  },
  {
	name: "Line002",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [[25.26, 17.376, -2.694],[3.628, 17.376, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [
          [3.628, 17.376, -2.694],
          [2.628, 17.376, -2.694],
          [2.628, 16.376, -2.694]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[2.628, 16.376, -2.694], [2.628, -14.899, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [
          [2.628, -14.899, -2.694],
          [2.628, -15.899, -2.694],
          [1.628, -15.899, -2.694]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[1.628, -15.899, -2.694], [-2.0, -15.899, -2.694]],
        segStyle: style_segment_long
      }
    ]
  },
  {
	name: "Line003",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [[2.62764, 7.84934, -2.694],[-2, 7.84934, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [[2.62764, 1.8488, -2.694],[-6.8, 1.8488, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [[2.62764, -4.17809, -2.694],[-2, -4.17809, -2.694]],
        segStyle: style_segment_long
      }
    ]
  },
  {
	name: "Line004",
    pipeStyle: style_red,
    routeArray: [
      {
        route: [
		  [30, -13.5, -2.694],
		  [19.9887, -13.5, -2.694],
		  [19.996, -11.316, -2.694]
		],
        segStyle: style_segment_zero
      },
      {
        route: [
          [19.996, -11.316, -2.694],
          [19.996, -10.316, -2.694],
          [18.996, -10.316, -2.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[18.996, -10.316, -2.694],[16.329, -10.316, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line005",
    pipeStyle: style_red,
    routeArray: [
	  {
        route: [[13.159, -10.316, -2.694],[11.015, -10.316, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
          [11.015, -10.316, -2.694],
          [10.015, -10.316, -2.694],
          [10.015, -11.316, -2.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[10.015, -11.316, -2.694],[10.015, -13.5, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line005",
    pipeStyle: style_red,
    routeArray: [
      {
        route: [[19.996, -13.5, -2.694],[19.996, -15.611, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [
          [19.996, -15.611, -2.694],
          [19.996, -16.611, -2.694],
          [18.996, -16.611, -2.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[18.996, -16.611, -2.694],[16.329, -16.611, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line006",
    pipeStyle: style_red,
    routeArray: [
	  {
        route: [[13.159, -16.611, -2.694],[11.015, -16.611, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
          [11.015, -16.611, -2.694],
          [10.015, -16.611, -2.694],
          [10.015, -15.611, -2.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[10.015, -15.611, -2.694],[10.015, -13.5, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line007",
    pipeStyle: style_red,
    routeArray: [
      {
        route: [[10.015, -13.5, -2.694],[8.381, -13.5, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [
          [8.381, -13.5, -2.694],
          [7.381, -13.5, -2.694],
          [7.381, -13.5, -1.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [7.381, -13.5, -1.694],
		  [7.381, -13.5, -0.829],
		  [7.381, 5.662, -0.829]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
          [7.381, 5.662, -0.829],
          [7.381, 6.662, -0.829],
          [6.381, 6.662, -0.829]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[6.381, 6.662, -0.829],[-2.0, 6.662, -0.829]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line008",
    pipeStyle: style_red,
    routeArray: [
      {
        route: [[7.381, -13.5, -0.829],[7.381, -15.888, -0.829]],
        segStyle: style_segment_long
      },
      {
        route: [
          [7.381, -15.888, -0.829],
          [7.381, -16.888, -0.829],
          [6.381, -16.888, -0.829]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[6.381, -16.888, -0.829],[-2.0, -16.888, -0.829]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line009",
    pipeStyle: style_red,
    routeArray: [
      {
        route: [[7.381, -10.966, -0.829],[-6.8, -10.966, -0.829]],
        segStyle: style_segment_long
      },
      {
        route: [[7.381, -5.205, -0.829],[-2.0, -5.205, -0.829]],
        segStyle: style_segment_long
      },
	  {
        route: [[7.381, 0.77, -0.829],[-6.8, 0.77, -0.829]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line010",
    pipeStyle: style_orange,
    routeArray: [
	  {
        route: [
		  [30.0, -6.359, -1.816],
		  [5.456, -6.359, -1.816],
		  [5.481, -15.379, -1.816]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
          [5.481, -15.379, -1.816],
          [5.481, -16.379, -1.816],
          [4.481, -16.379, -1.816]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[4.481, -16.379, -1.816],[-2.0, -16.379, -1.816]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line011",
    pipeStyle: style_orange,
    routeArray: [
	  {
        route: [[5.481, -6.359, -1.816],[5.481, 6.254, -1.816]],
        segStyle: style_segment_long
      },
	  {
        route: [
          [5.481, 6.254, -1.816],
          [5.481, 7.254, -1.816],
          [4.481, 7.254, -1.816]
        ],
        segStyle: style_segment_turn
      },
      {
        route: [[4.481, 7.254, -1.816],[-2.0, 7.254, -1.816]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line012",
    pipeStyle: style_orange,
    routeArray: [
	  {
        route: [[5.481, -10.43, -1.816],[-6.8, -10.43, -1.816]],
        segStyle: style_segment_long
      },
	  {
        route: [[5.481, -4.585, -1.816],[-2.0, -4.585, -1.816]],
        segStyle: style_segment_long
      },
      {
        route: [[5.481, 1.376, -1.816],[-6.8, 1.376, -1.816]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line013",
    pipeStyle: style_green,
    routeArray: [
	  {
        route: [[-4.5, -16.263, -2.694],[-12.135, -16.263, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
          [-12.135, -16.263, -2.694],
          [-13.135, -16.263, -2.694],
          [-13.135, -15.263, -2.694]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[-13.135, -15.263, -2.694],[-13.135, -13.362, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line014",
    pipeStyle: style_green,
    routeArray: [
	  {
        route: [
          [-13.135, -13.362, -2.694],
          [-13.135, -13.362, -3.72],
          [-14.135, -13.362, -3.72]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [-14.135, -13.362, -3.72],
		  [-17.445, -13.362, -3.72],
		  [-17.445, -14.449, -3.72]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
          [-17.445, -14.449, -3.72],
          [-17.445, -15.449, -3.72],
          [-18.445, -15.449, -3.72]
        ],
        segStyle: style_segment_turn
      },
	  {
        route: [[-18.445, -15.449, -3.72],[-21.0, -15.449, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line015",
    pipeStyle: style_green,
    routeArray: [
	  {
        route: [[-17.445, -13.362, -3.72],[-17.445, -12.016, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-17.445, -12.016, -3.72],
		  [-17.445, -11.016, -3.72],
		  [-18.445, -11.016, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-18.445, -11.016, -3.72],[-21.0, -11.016, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line016",
    pipeStyle: style_green,
    routeArray: [
	  {
        route: [[-9.756, 13.479, -2.694],[-12.135, 13.479, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-12.135, 13.479, -2.694],
		  [-13.135, 13.479, -2.694],
		  [-13.135, 12.479, -2.694]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-13.135, 12.479, -2.694],[-13.135, -13.362, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line017",
    pipeStyle: style_green,
    routeArray: [
	  {
        route: [[-4.5, 7.512, -2.694],[-13.135, 7.512, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [[-9.756, 1.583, -2.694],[-13.135, 1.583, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [[-4.5, -4.363, -2.694],[-13.135, -4.363, -2.694]],
        segStyle: style_segment_long
      },
      {
        route: [[-9.756, -10.29, -2.694],[-13.135, -10.29, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line018",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [[-21.964, -15.449, -3.72],[-24.15, -15.449, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-24.15, -15.449, -3.72],
		  [-25.15, -15.449, -3.72],
		  [-25.15, -14.449, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-25.15, -14.449, -3.72],[-25.15, -13.361, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line019",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [[-21.964, -11.016, -3.72],[-24.15, -11.016, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-24.15, -11.016, -3.72],
		  [-25.15, -11.016, -3.72],
		  [-25.15, -12.016, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-25.15, -12.016, -3.72],[-25.15, -13.361, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line020",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [
		  [-25.19, -13.361, -3.72],
		  [-25.19, -13.361, -2.872],
		  [-26.19, -13.361, -2.872]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-26.19, -13.361, -2.872],[-30.131, -13.361, -2.872]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-30.131, -13.361, -2.872],
		  [-31.131, -13.361, -2.872],
		  [-31.131, -12.361, -2.872]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [-31.131, -12.361, -2.872],
		  [-31.131, -7.398, -2.872],
		  [-32.318, -7.398, -2.872]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-32.318, -7.398, -2.872],
		  [-33.318, -7.398, -2.872],
		  [-33.318, -6.398, -2.872]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-33.318, -6.398, -2.872],[-33.318, -4.995, -2.872]],
        segStyle: style_segment_long
      },
	  {
        route: [[-33.334, -1.355, -2.872],[-33.334, 0.125, -2.872]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-33.334, 0.125, -2.872],
		  [-33.334, 1.125, -2.872],
		  [-32.334, 1.125, -2.872]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-32.334, 1.125, -2.872],[-29.382, 1.125, -2.872]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line021",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [
		  [-31.131, -7.408, -2.872],
		  [-29.382, -7.408, -2.872],
		  [-29.382, -4.995, -2.872]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-29.382, -1.355, -2.872],
		  [-29.382, 1.125, -2.872],
		  [-25.431, 1.125, -2.872]
		],
        segStyle: style_segment_zero
      }
	]
  },
  {
	name: "Line022",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [
		  [-29.382, -7.408, -2.872],
		  [-25.431, -7.408, -2.872],
		  [-25.431, -4.995, -2.872]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-25.431, -1.355, -2.872],
		  [-25.431, 1.125, -2.872],
		  [-21.483, 1.125, -2.872]
		],
        segStyle: style_segment_zero
      }
	]
  },
  {
	name: "Line023",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [
		  [-25.431, -7.408, -2.872],
		  [-21.483, -7.408, -2.872],
		  [-21.483, -4.995, -2.872]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-21.483, -1.355, -2.872],
		  [-21.483, 1.125, -2.872],
		  [-17.528, 1.125, -2.872]
		],
        segStyle: style_segment_zero
      }
	]
  },
  {
	name: "Line024",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [[-21.479, -7.408, -2.872],[-18.528, -7.408, -2.872]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-18.528, -7.408, -2.872],
		  [-17.528, -7.408, -2.872],
		  [-17.528, -6.408, -2.872]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-17.528, -6.408, -2.872],[-17.528, -4.995, -2.872]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-17.528, -1.355, -2.872],
		  [-17.528, 1.125, -2.872],
		  [-17.258, 1.125, -2.872]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-17.258, 1.125, -2.872],
		  [-16.258, 1.125, -2.872],
		  [-16.258, 1.125, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-16.258, 1.125, -3.72],[-16.258, 9.168, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-16.258, 9.168, -3.72],
		  [-16.258, 10.168, -3.72],
		  [-17.258, 10.168, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-17.258, 10.168, -3.72],[-24.2, 10.168, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-24.2, 10.168, -3.72],
		  [-25.2, 10.168, -3.72],
		  [-25.2, 9.168, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [-25.2, 9.168, -3.72],
		  [-25.2, 7.898, -3.72],
		  [-27.422, 7.898, -3.72]
		],
        segStyle: style_segment_zero
      },
	  {
        route: [
		  [-27.422, 7.898, -3.72],
		  [-28.422, 7.898, -3.72],
		  [-28.422, 8.898, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-28.422, 8.898, -3.72],[-28.422, 10.143, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-28.422, 10.143, -3.72],
		  [-28.422, 11.143, -3.72],
		  [-29.422, 11.143, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-29.422, 11.143, -3.72],[-31.607, 11.143, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line025",
    pipeStyle: style_blue1,
    routeArray: [
	  {
        route: [[-16.258, 5.749, -3.72],[-24.2, 5.749, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [-24.2, 5.749, -3.72],
		  [-25.2, 5.749, -3.72],
		  [-25.2, 6.749, -3.72]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-25.2, 6.749, -3.72],[-25.2, 7.898, -3.72]],
        segStyle: style_segment_long
      },
	  {
        route: [[-28.422, 8.888, -3.72],[-31.607, 8.888, -3.72]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line026",
    pipeStyle: style_aqua,
    routeArray: [
	  {
        route: [[25.019, 12.003, -3.72],[20.99, 12.003, -3.754]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [20.99, 12.003, -3.754],
		  [19.99, 12.003, -3.754],
		  [19.99, 11.003, -3.754]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [19.996, 11.368, -3.754],
		  [19.996, 11.368, -2.754],
		  [18.996, 11.368, -2.754]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[18.996, 11.368, -2.754],[16.329, 11.368, -2.754]],
        segStyle: style_segment_long
      },
	  {
        route: [[13.159, 11.368, -2.694],[11.159, 11.368, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [11.159, 11.368, -2.694],
		  [10.159, 11.368, -2.694],
		  [10.159, 10.157, -2.694]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [10.015, 10.157, -2.694],
		  [10.015, 10.157, -3.723],
		  [9.015, 10.157, -3.723]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[9.015, 10.157, -3.723],[1.702, 10.157, -3.723]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [1.702, 10.157, -3.723],
		  [0.702, 10.157, -3.723],
		  [0.702, 9.157, -3.723]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		  [0.702, 9.157, -3.723],
		  [0.702, 8.554, -3.723],
		  [-2.0, 8.554, -3.723]
		],
        segStyle: style_segment_zero
      }
	]
  },
  {
	name: "Line027",
    pipeStyle: style_aqua,
    routeArray: [
	  {
        route: [[24.995, 0.804, -3.754],[22.315, 0.804, -3.754]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [22.315, 0.804, -3.754],
		  [21.315, 0.804, -3.754],
		  [21.315, 1.804, -3.754]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[21.315, 1.804, -3.754],[21.315, 12.003, -3.754]],
        segStyle: style_segment_long
      },
	]
  },
  {
	name: "Line028",
    pipeStyle: style_aqua,
    routeArray: [
	  {
        route: [[19.996, 11.003, -3.754],[19.996, 5.071, -3.754]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [19.996, 5.071, -3.754],
		  [19.996, 5.071, -2.694],
		  [18.996, 5.071, -2.694]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[18.996, 5.071, -2.694],[16.329, 5.071, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line029",
    pipeStyle: style_aqua,
    routeArray: [
	  {
        route: [[13.159, 5.071, -2.694],[11.015, 5.071, -2.694]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [11.015, 5.071, -2.694],
		  [10.015, 5.071, -2.694],
		  [10.015, 6.071, -2.694]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[10.015, 6.071, -2.694],[10.015, 10.157, -2.694]],
        segStyle: style_segment_long
      }
	]
  },
  {
	name: "Line030",
    pipeStyle: style_aqua,
    routeArray: [
	  {
        route: [[0.702, 8.554, -3.723],[0.702, -14.412, -3.723]],
        segStyle: style_segment_long
      },
	  {
        route: [
		  [0.702, -14.412, -3.723],
		  [0.702, -15.412, -3.723],
		  [-0.301, -15.251, -3.723]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [[-0.301, -15.251, -3.723],[-1.204, -15.251, -3.723]],
        segStyle: style_segment_long
      },
	  {
        route: [[0.702, 2.503, -3.723],[-6.8, 2.503, -3.723]],
        segStyle: style_segment_long
      },
	  {
        route: [[0.699, -3.493, -3.723],[-2.0, -3.493, -3.723]],
        segStyle: style_segment_long
      },
	  {
        route: [[0.699, -9.273, -3.723],[-6.8, -9.273, -3.723]],
	  } 
	]
  }
];
