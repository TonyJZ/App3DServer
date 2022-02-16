/* Description of the site */
var siteObj = {
  scenes: [
    {
      name: "cnaf",
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
          name: "sence01_map",
          path: "./assets/models/outdoors/sence01_map.app2",
          selectableObjectExp: [
            {
              name: "model_map",
              label: strings.map_ground,
              type: "ground"
            },
            {
              name: "model_location001",
              label: strings.location_mark(1)
            },
            {
              name: "model_location002",
              label: strings.location_mark(2)
            },
            {
              name: "model_location003",
              label: strings.location_mark(3)
            },
            {
              name: "model_plane",
              label: strings.air_plane
            },
            {
              name: "model_oilTank001",
              label: strings.oilTank001
            },
            {
              name: "model_oilTank002",
              label: strings.oilTank002
            },
            {
              name: "model_line001",
              label: strings.model_line001
            },
            {
              name: "model_line002",
              label: strings.model_line002
            },
            {
              name: "model_oil_particle",
              label: strings.oil_flow
            }
          ]
        }
      ]
    }
  ]
};
