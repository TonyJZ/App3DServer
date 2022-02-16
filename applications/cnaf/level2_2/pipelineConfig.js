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
  connectionRadius: 0.6,
  tubularSegments: 6
};

var style_blue1 = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_blue1.png",
  textureRotation: 0,
  speed: 3,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_yellow1 = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_yellow1.png",
  textureRotation: 0,
  speed: 3,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_yellow2 = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_yellow2.png",
  textureRotation: 0,
  speed: 3,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};

var style_green1 = {
  color: 0xffffff,
  textureUrl: "./assets/pipeTextures/arrows_green1.png",
  textureRotation: 0,
  speed: 10,
  radius: 0.2,
  textureUnitS: 2,
  textureUnitT: 2
};



var PipelineParams = [
  {
    name: "Line001",
    pipeStyle: style_yellow1,
    routeArray: [
      {
        route: [
		[-30.538, 2.113, 8.0], 
		[-30.538, 2.113, 7.0]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[-30.538, 2.113, 7.0], 
		[-30.538, 2.113, 6.0],
		[-29.538, 2.113, 6.0], 
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[-29.538, 2.113, 6.0],
		[28.161, 2.113, 6.0],
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[28.161, 2.113, 6.0], 
		[29.161, 2.113, 6.0],
		[29.161, 1.113, 6.0],
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[29.161, 1.113, 6.0],
		[29.161, 1.113, 6.0],
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[29.161, 1.113, 6.0], 
		[29.161, 0.113, 6.0],
		[29.161, 0.113, 5.0],
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[29.161, 0.113, 5.0], 
		[29.161, 0.113, 3.5],
		],
        segStyle: style_segment_zero
      },
    ]
  },
    {
    name: "Line002",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-26.538, -0.903, 1.541], 
		[-25.538, -0.903, 1.541],
		[-25.538, -1.887, 1.541],
		[-25.538, -1.887, 6.007]
		
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line003",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-25.538, 2.113, 5.997], 
		[-25.538, 2.113, 0.64],
		[-25.538, 0.897, 0.64],
		[-26.538, 0.897, 0.64]
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line004",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-18.538, 4.113, 8.0], 
		[-18.538, 4.113, 3.0],
		[-18.538, 0.897, 3.0],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line005",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-18.538, 2.113, 6.0], 
		[-18.538, 2.113, 3.0],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line006",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-18.538, -0.903, 1.193], 
		[-18.538, -1.887, 1.193],
		[-10.354, -1.887, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
    name: "Line007",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-7.536, -1.887, 1.193], 
		[-4.051, -1.887, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line008",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-13.538, -1.887, 1.193], 
		[-13.538, 2.113, 1.193],
		[-10.354, 2.113, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line009",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-7.536, 2.113, 1.193], 
		[-4.051, 2.113, 1.193],
		[-4.051, -3.887, 1.193],
		[-4.051, -3.887, 8.0],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line010",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[-4.051, -1.887, 6.0], 
		[-4.051, -1.887, 4.0],
		[-4.051, -3.887, 4.0],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line011",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[12.829, -1.887, 6.0], 
		[12.829, -1.887, 1.193],
		[10.385, -1.887, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line012",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[7.36, -1.887, 1.193], 
		[-0.116, -1.887, 1.193],
		[-0.116, -1.887, 0.493],
		[-0.116, -0.487, 0.493],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line013",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[11.385, -1.887, 1.193], 
		[11.385, 2.113, 1.193],
		[10.385, 2.113, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line014",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[7.36, 2.113, 1.193], 
		[1.884, 2.113, 1.193],
		[1.884, -1.887, 1.193],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
      name: "Line015",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[15.082, 2.113, 6.0], 
		[15.082, 2.113, 5.0],
		[15.082, -1.887, 5.0],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
        name: "Line016",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[23.05, -1.887, 1.509], 
		[23.05, 2.113, 1.509],
		[23.05, 2.113, 1.509],
		[21.55, 2.113, 1.509],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
        name: "Line017",
    pipeStyle: style_blue1,
    routeArray: [
      {
        route: [
		[18.005, 2.113, 1.509], 
		[16.082, 2.113, 1.509],
		[16.082, -1.887, 1.509],
		],
        segStyle: style_segment_zero
      }
    ]
  },
  {
        name: "Line018",
    pipeStyle: style_yellow1,
    routeArray: [
      {
        route: [
		[27.161, 0.113, 3.5], 
		[27.161, 0.113, 5.0]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[27.161, 0.113, 5.0],
		[27.161, 0.113, 6.0],
		[27.161, -0.887, 6.0]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[27.161, -0.887, 6.0],
		[27.161, -1.887, 6.0],
		[26.161, -1.887, 6.0]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[26.161, -1.887, 6.0],
		[25.05, -1.887, 6.0]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[25.05, -1.887, 6.0],
		[24.05, -1.887, 6.0],
		[24.05, -1.887, 5.0]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[24.05, -1.887, 5.0],
		[24.05, -1.887, 2.509]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[24.05, -1.887, 2.509],
		[24.05, -1.887, 1.509],
		[23.05, -1.887, 1.509],
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[23.05, -1.887, 1.509],
		[21.55, -1.887, 1.509]
		],
        segStyle: style_segment_long
      }
    ]
  },
  {
        name: "Line019",
    pipeStyle: style_yellow1,
    routeArray: [
      {
        route: [
		[18.005, -1.887, 1.509], 
		[16.082, -1.887, 1.509]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[16.082, -1.887, 1.509],
		[15.082, -1.887, 1.509],
		[15.082, -1.887, 2.509],
		],
        segStyle: style_segment_turn
      },
	   {
        route: [
		[15.082, -1.887, 2.509], 
		[15.082, -1.887, 5.0]
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[15.082, -1.887, 5.0],
		[15.082, -1.887, 6.0],
		[14.082, -1.887, 6.0]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[14.082, -1.887, 6.0],
		[-29.538, -1.887, 6.0],
		],
        segStyle: style_segment_long
      },
	  {
        route: [
		[-29.538, -1.887, 6.0],
		[-30.538, -1.887, 6.0],
		[-30.538, -1.887, 7.0]
		],
        segStyle: style_segment_turn
      },
	  {
        route: [
		[-30.538, -1.887, 7.0],
		[-30.538, -1.887, 8.0]
		],
        segStyle: style_segment_long
      }
    ]
  },
  
];
