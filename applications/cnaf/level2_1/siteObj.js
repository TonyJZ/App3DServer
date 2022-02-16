/* Description of the site */
var siteObj = {
  scenes: [
    {
      name: "cnaf",
      isPrimary: true,
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
          name: "ground",
          path: "./assets/models/room01/scene02_airport_model_ground.app2",
          type: "ground",
          label: strings.airport_ground
        },
        {
          name: "airport_building_lowpoly",
          path:
            "./assets/models/room01/scene02_airport_model_building_lowpoly.app2",
          selectableObjectExp: [
            {
              name: "model_building_lowpoly01",
              label: strings.building_lowpoly(1)
            },
            {
              name: "model_building_lowpoly02",
              label: strings.building_lowpoly(2)
            },
            {
              name: "model_building_lowpoly03",
              label: strings.building_lowpoly(3)
            }
          ]
        },
        {
          name: "airport_building_office",
          path:
            "./assets/models/room01/scene02_airport_model_building_office.app2",
          selectableObjectExp: [
            {
              name: "model_building_office01",
              label: strings.building_office(1)
            },
            {
              name: "model_building_office02",
              label: strings.building_office(2)
            },
            {
              name: "model_building_office03",
              label: strings.building_office(3)
            },
            {
              name: "model_building_office03_plane01",
              label: strings.plane(1)
            },
            {
              name: "model_building_office03_plane02",
              label: strings.plane(2)
            },
            {
              name: "model_building_office03_plane03",
              label: strings.plane(3)
            }
          ]
        },
        {
          name: "airport_cameras",
          path: "./assets/models/room01/scene02_airport_model_cam.app2",
          type: "object",
          selectableObjectExp: [
            {
              name: "model_cam001",
              label: strings.camera(1)
            },
            {
              name: "model_cam002",
              label: strings.camera(2)
            },
            {
              name: "model_cam003",
              label: strings.camera(3)
            }
          ]
        },
        {
          name: "airport_pipelines",
          path:
            "./assets/models/room01/scene02_airport_model_oil_particle_anim.app2",
          type: "object",
          timeScale: 1,
          startPaused: false,
          selectableObjectExp: [
            // {
            //   name: "model_oil_particle_in",
            //   label: strings.airport_oil_flow_in
            // },
            // {
            //   name: "model_oil_particle_out",
            //   label: strings.airport_oil_flow_out
            // },
            {
              name: "model_oilPipeline01",
              label: strings.airport_oil_pipes(1)
            },
            {
              name: "model_oilPipeline02",
              label: strings.airport_oil_pipes(2)
            },
            {
              name: "model_oilPipeline03",
              label: strings.airport_oil_pipes(3)
            },
            {
              name: "model_oilPipeline04",
              label: strings.airport_oil_pipes(4)
            }
          ]
        },
        {
          name: "airport_oil_tanks",
          path: "./assets/models/room01/scene02_airport_model_oilTank.app2",
          type: "object",
          selectableObjectExp: [
            {
              name: "model_oilTankA00",
              label: strings.airport_oil_tanks("A00")
            },
            {
              name: "model_oilTankA01",
              label: strings.airport_oil_tanks("A01")
            },
            {
              name: "model_oilTankA02",
              label: strings.airport_oil_tanks("A02")
            },
            {
              name: "model_oilTankA03",
              label: strings.airport_oil_tanks("A03")
            },
            {
              name: "model_oilTankA04",
              label: strings.airport_oil_tanks("A04")
            },
            {
              name: "model_oilTankA05",
              label: strings.airport_oil_tanks("A05")
            },
            {
              name: "model_oilTankB00",
              label: strings.airport_oil_tanks("B00")
            },
            {
              name: "model_oilTankB01",
              label: strings.airport_oil_tanks("B01")
            },
            {
              name: "model_oilTankB02",
              label: strings.airport_oil_tanks("B02")
            },
            {
              name: "model_oilTankB03",
              label: strings.airport_oil_tanks("B03")
            },
            {
              name: "model_oilTankB04",
              label: strings.airport_oil_tanks("B04")
            },
            {
              name: "model_oilTankB05",
              label: strings.airport_oil_tanks("B05")
            },
            {
              name: "model_oilTank_TK-A",
              label: strings.airport_oil_tanks("TK-A")
            },
            {
              name: "model_oilTank_TK-B",
              label: strings.airport_oil_tanks("TK-B")
            },
            {
              name: "model_oilTank_TK-C",
              label: strings.airport_oil_tanks("TK-C")
            },
            {
              name: "model_oilTank_TK-D",
              label: strings.airport_oil_tanks("TK-D")
            },
            {
              name: "model_oilTank_TK-E",
              label: strings.airport_oil_tanks("TK-E")
            },
            {
              name: "model_oilTank_TK-F",
              label: strings.airport_oil_tanks("TK-F")
            },
            {
              name: "model_oilTank_TK-G",
              label: strings.airport_oil_tanks("TK-G")
            },
            {
              name: "model_oilTank_TK-H",
              label: strings.airport_oil_tanks("TK-H")
            },
            {
              name: "model_oilTank_TK-I",
              label: strings.airport_oil_tanks("TK-I")
            },
            {
              name: "model_oilTank_TK-J",
              label: strings.airport_oil_tanks("TK-J")
            },
            {
              name: "model_oilTank_TK-K",
              label: strings.airport_oil_tanks("TK-K")
            },
            {
              name: "model_oilTank_TK-L",
              label: strings.airport_oil_tanks("TK-L")
            },
            {
              name: "model_oilTank_TK-M",
              label: strings.airport_oil_tanks("TK-M")
            },
            {
              name: "model_oilTank_TK-N",
              label: strings.airport_oil_tanks("TK-N")
            },
            {
              name: "model_oilTank_TK-O",
              label: strings.airport_oil_tanks("TK-O")
            },
            {
              name: "model_oilTank_TK-P",
              label: strings.airport_oil_tanks("TK-P")
            },
            {
              name: "model_oilTank_TK-Q",
              label: strings.airport_oil_tanks("TK-Q")
            },
            {
              name: "model_oilTank_TK-R",
              label: strings.airport_oil_tanks("TK-R")
            },
            {
              name: "model_oilTank_TK-S",
              label: strings.airport_oil_tanks("TK-S")
            },
            {
              name: "model_oilTank_TK-T",
              label: strings.airport_oil_tanks("TK-T")
            },
            {
              name: "model_oilTank_TK-U",
              label: strings.airport_oil_tanks("TK-U")
            },
            {
              name: "model_oilTank_TK-V",
              label: strings.airport_oil_tanks("TK-V")
            },
            {
              name: "model_oilTank_TK-W",
              label: strings.airport_oil_tanks("TK-W")
            }
          ]
        },
        {
          name: "airport_oil_tanks_volume",
          path:
            "./assets/models/room01/scene02_airport_model_oilTank_volume.app2",
          type: "object",
          selectableObjectExp: [
            {
              name: "model_oilTankA00",
              label: strings.airport_oil_tanks("A00")
            },
            {
              name: "model_oilTankA01",
              label: strings.airport_oil_tanks("A01")
            },
            {
              name: "model_oilTankA02",
              label: strings.airport_oil_tanks("A02")
            },
            {
              name: "model_oilTankA03",
              label: strings.airport_oil_tanks("A03")
            },
            {
              name: "model_oilTankA04",
              label: strings.airport_oil_tanks("A04")
            },
            {
              name: "model_oilTankA05",
              label: strings.airport_oil_tanks("A05")
            },
            {
              name: "model_oilTankB00",
              label: strings.airport_oil_tanks("B00")
            },
            {
              name: "model_oilTankB01",
              label: strings.airport_oil_tanks("B01")
            },
            {
              name: "model_oilTankB02",
              label: strings.airport_oil_tanks("B02")
            },
            {
              name: "model_oilTankB03",
              label: strings.airport_oil_tanks("B03")
            },
            {
              name: "model_oilTankB04",
              label: strings.airport_oil_tanks("B04")
            },
            {
              name: "model_oilTankB05",
              label: strings.airport_oil_tanks("B05")
            },
            {
              name: "model_oilTank_TK-A",
              label: strings.airport_oil_tanks("TK-A")
            },
            {
              name: "model_oilTank_TK-B",
              label: strings.airport_oil_tanks("TK-B")
            },
            {
              name: "model_oilTank_TK-C",
              label: strings.airport_oil_tanks("TK-C")
            },
            {
              name: "model_oilTank_TK-D",
              label: strings.airport_oil_tanks("TK-D")
            },
            {
              name: "model_oilTank_TK-E",
              label: strings.airport_oil_tanks("TK-E")
            },
            {
              name: "model_oilTank_TK-F",
              label: strings.airport_oil_tanks("TK-F")
            },
            {
              name: "model_oilTank_TK-G",
              label: strings.airport_oil_tanks("TK-G")
            },
            {
              name: "model_oilTank_TK-H",
              label: strings.airport_oil_tanks("TK-H")
            },
            {
              name: "model_oilTank_TK-I",
              label: strings.airport_oil_tanks("TK-I")
            },
            {
              name: "model_oilTank_TK-J",
              label: strings.airport_oil_tanks("TK-J")
            },
            {
              name: "model_oilTank_TK-K",
              label: strings.airport_oil_tanks("TK-K")
            },
            {
              name: "model_oilTank_TK-L",
              label: strings.airport_oil_tanks("TK-L")
            },
            {
              name: "model_oilTank_TK-M",
              label: strings.airport_oil_tanks("TK-M")
            },
            {
              name: "model_oilTank_TK-N",
              label: strings.airport_oil_tanks("TK-N")
            },
            {
              name: "model_oilTank_TK-O",
              label: strings.airport_oil_tanks("TK-O")
            },
            {
              name: "model_oilTank_TK-P",
              label: strings.airport_oil_tanks("TK-P")
            },
            {
              name: "model_oilTank_TK-Q",
              label: strings.airport_oil_tanks("TK-Q")
            },
            {
              name: "model_oilTank_TK-R",
              label: strings.airport_oil_tanks("TK-R")
            },
            {
              name: "model_oilTank_TK-S",
              label: strings.airport_oil_tanks("TK-S")
            },
            {
              name: "model_oilTank_TK-T",
              label: strings.airport_oil_tanks("TK-T")
            },
            {
              name: "model_oilTank_TK-U",
              label: strings.airport_oil_tanks("TK-U")
            },
            {
              name: "model_oilTank_TK-V",
              label: strings.airport_oil_tanks("TK-V")
            },
            {
              name: "model_oilTank_TK-W",
              label: strings.airport_oil_tanks("TK-W")
            }
          ]
        },
        {
          name: "airport_pumps",
          path: "./assets/models/room01/scene02_airport_model_pump.app2",
          type: "object",
          selectableObjectExp: [
            {
              name: "model_pump_PU-A",
              label: strings.airport_pumps("A")
            },
            {
              name: "model_pump_PU-B",
              label: strings.airport_pumps("B")
            },
            {
              name: "model_pump_PU-C",
              label: strings.airport_pumps("C")
            },
            {
              name: "model_pump_PU-D",
              label: strings.airport_pumps("D")
            },
            {
              name: "model_pump_PU-E",
              label: strings.airport_pumps("E")
            },
            {
              name: "model_pump_PU-F",
              label: strings.airport_pumps("F")
            },
            {
              name: "model_pump_PU-G",
              label: strings.airport_pumps("G")
            },
            {
              name: "model_pump_PU-H",
              label: strings.airport_pumps("H")
            },
            {
              name: "model_pump_PU-I",
              label: strings.airport_pumps("I")
            },
            {
              name: "model_pump_PU-J",
              label: strings.airport_pumps("J")
            },
            {
              name: "model_pump_PU-K",
              label: strings.airport_pumps("K")
            },
            {
              name: "model_pump_PU-L",
              label: strings.airport_pumps("L")
            },
            {
              name: "model_pump_PU-M",
              label: strings.airport_pumps("M")
            },
            {
              name: "model_pump_PU-N",
              label: strings.airport_pumps("N")
            },
            {
              name: "model_pump_PU-O",
              label: strings.airport_pumps("O")
            },
            {
              name: "model_pump_PU-P",
              label: strings.airport_pumps("P")
            },
            {
              name: "model_pump_PU-Q",
              label: strings.airport_pumps("Q")
            },
            {
              name: "model_pump_PU-R",
              label: strings.airport_pumps("R")
            },
            {
              name: "model_pump_PU-S",
              label: strings.airport_pumps("S")
            }
          ]
        },
        {
          name: "trees",
          path: "./assets/models/room01/scene02_airport_model_trees.app2",
          type: "object",
          label: "airport_trees"
        },
        {
          name: "airport_valves",
          path: "./assets/models/room01/scene02_airport_model_valve.app2",
          type: "object",
          selectableObjectExp: [
            {
              name: "model_valve_DA01",
              label: strings.airport_valves("DA01")
            },
            {
              name: "model_valve_DA02",
              label: strings.airport_valves("DA02")
            },
            {
              name: "model_valve_DB01",
              label: strings.airport_valves("DB01")
            },
            {
              name: "model_valve_DB02",
              label: strings.airport_valves("DB02")
            },
            {
              name: "model_valve_DC01",
              label: strings.airport_valves("DC01")
            },
            {
              name: "model_valve_DC02",
              label: strings.airport_valves("DC02")
            },
            {
              name: "model_valve_DD01",
              label: strings.airport_valves("DD01")
            },
            {
              name: "model_valve_DD02",
              label: strings.airport_valves("DD02")
            },
            {
              name: "model_valve_DE01",
              label: strings.airport_valves("DE01")
            },
            {
              name: "model_valve_DE02",
              label: strings.airport_valves("DE02")
            },
            {
              name: "model_valve_DF01",
              label: strings.airport_valves("DF01")
            },
            {
              name: "model_valve_DF02",
              label: strings.airport_valves("DF02")
            },
            {
              name: "model_valve_DG01",
              label: strings.airport_valves("DG01")
            },
            {
              name: "model_valve_DG02",
              label: strings.airport_valves("DG02")
            },
            {
              name: "model_valve_DH01",
              label: strings.airport_valves("DH01")
            },
            {
              name: "model_valve_DH02",
              label: strings.airport_valves("DH02")
            },
            {
              name: "model_valve_DM01",
              label: strings.airport_valves("DM01")
            },
            {
              name: "model_valve_DM04",
              label: strings.airport_valves("DM04")
            },
            {
              name: "model_valve_DU02",
              label: strings.airport_valves("DU02")
            },
            {
              name: "model_valve_DU04",
              label: strings.airport_valves("DU04")
            },
            {
              name: "model_valve_DV01",
              label: strings.airport_valves("DV01")
            },
            {
              name: "model_valve_DV04",
              label: strings.airport_valves("DV04")
            },
            {
              name: "model_valve_DW02",
              label: strings.airport_valves("DW02")
            },
            {
              name: "model_valve_DW04",
              label: strings.airport_valves("DW04")
            },
            {
              name: "model_valve_VM-XI01",
              label: strings.airport_valves("XI01")
            },
            {
              name: "model_valve_VM-XI02",
              label: strings.airport_valves("XI02")
            },
            {
              name: "model_valve_VM-XJ01",
              label: strings.airport_valves("XJ01")
            },
            {
              name: "model_valve_VM-XJ02",
              label: strings.airport_valves("XJ02")
            },
            {
              name: "model_valve_VM-XK01",
              label: strings.airport_valves("XK01")
            },
            {
              name: "model_valve_VM-XK02",
              label: strings.airport_valves("XK02")
            },
            {
              name: "model_valve_VM-XK05",
              label: strings.airport_valves("XK05")
            },
            {
              name: "model_valve_VM-XK06",
              label: strings.airport_valves("XK06")
            },
            {
              name: "model_valve_VM-XK07",
              label: strings.airport_valves("XK07")
            },
            {
              name: "model_valve_VM-XK08",
              label: strings.airport_valves("XK08")
            },
            {
              name: "model_valve_VM-XK09",
              label: strings.airport_valves("XK09")
            },
            {
              name: "model_valve_VM-XK10",
              label: strings.airport_valves("XK10")
            },
            {
              name: "model_valve_VM-XK11",
              label: strings.airport_valves("XK11")
            },
            {
              name: "model_valve_VM-XK12",
              label: strings.airport_valves("XK12")
            },
            {
              name: "model_valve_VM-XK13",
              label: strings.airport_valves("XK13")
            },
            {
              name: "model_valve_VM-XK14",
              label: strings.airport_valves("XK14")
            },
            {
              name: "model_valve_VM-XK15",
              label: strings.airport_valves("XK15")
            },
            {
              name: "model_valve_VM-XK16",
              label: strings.airport_valves("XK16")
            },
            {
              name: "model_valve_VM-XK17",
              label: strings.airport_valves("XK17")
            },
            {
              name: "model_valve_VM-XL01",
              label: strings.airport_valves("XL01")
            },
            {
              name: "model_valve_VM-XL02",
              label: strings.airport_valves("XL02")
            }
          ]
        }
      ]
    }
  ]
};
