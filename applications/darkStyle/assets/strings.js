var strings = (function () {
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
    map_ground: "Ground",
    buildings: function buildings(num) {
      return addNum("Building ", num);
    }
  };
})();
