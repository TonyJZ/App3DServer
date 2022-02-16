var strings = (function() {
  function addNum(text, num) {
    if (num === undefined) {
      return text;
    }
    return text + " " + num;
  }
  return {
    //general
    loading: "Loading : ",
    // Map_Level
    map_ground: "Map Ground",
    location_mark: function location_mark(num) {
      return addNum("Location mark", num);
    },
    air_plane: "Baiyun Airport",
    oilTank001: "Oil Tank 01",
    oilTank002: "Oil Tank 02",
    model_line001: "Modle Line 01",
    model_line002: "Modle Line 02",
    oil_flow: "Oil Flow",
    // Baiyun_Airport
    airport_ground: "Baiyun Airport Ground",
    building_lowpoly: function building_lowpoly(num) {
      return addNum("Lowpoly building", num);
    },
    building_office: function building_office(num) {
      return addNum("Office building", num);
    },
    plane: function plane(num) {
      return addNum("Office03 plane", num);
    },
    camera: function camera(num) {
      return addNum("Camera", num);
    },
    // airport_oil_flow_in: "Airport oil flow IN",
    // airport_oil_flow_out: "Airport oil flow OUT",
    airport_oil_pipes: function airport_oil_pipes(num) {
      return addNum("Airport oil pipeline", num);
    },
    airport_oil_tanks: function airport_oil_tanks(num) {
      return addNum("Airport oil tank", num);
    },
    airport_pumps: function airport_pumps(num) {
      return addNum("Pump PU", num);
    },
    airport_valves: function airport_valves(num) {
      return addNum("Valve", num);
    }
  };
})();
