var strings = function () {
  function addNum(text, num) {
    if (num === undefined) {
      return text;
    }
    return text + " " + num;
  }
  return {
    ac: function ac(num) {
      return addNum("空调冷却塔 CT -", num);
    },
    floor: function floor(num) {
      return addNum("地面", num);
    },
    cooling_pump: function cooling_pump(num) {
      return addNum("冷却水泵 CDWP-", num);
    },
    cooler: function cooler(num) {
      return addNum("冷却机组 CH -", num);
    },
    frozen_pump: function frozen_pump(num) {
      return addNum("冷冻水泵 CHWP -", num);
    },
    water_treatment: function water_treatment(num) {
      return addNum("水处理器", num);
    },
    hotwater_recycle: function hotwater_recycle(num) {
      return addNum("机组热回收泵 CHHRP -", num);
    },
    water_supply: function water_supply(num) {
      return addNum("补水泵", num);
    },
    air_pressure: function air_pressure(num) {
      return addNum("空气压缩机组", num);
    },
    tank: function tank(num) {
      return addNum("气罐", num);
    },
    drayer: function drayer(num) {
      return addNum("干燥机", num);
    },
    recycle_pump: function recycle_pump(num) {
      return addNum("水循环泵", num);
    },
    air_coolant_pump: function air_coolant_pump(num) {
      return addNum("空压冷却水泵", num);
    },
    machine_boiler: function machine_boiler(num) {
      return addNum("锅炉房", num);
    },
    supply_pump: function supply_pump(num) {
      return addNum("补水泵", num);
    },
    pipe: function pipe(num) {
      return addNum("管道", num);
    },
    // outdoors
    dct_factory: "DCT工厂",
    power_station: function power_station(num) {
      return addNum("动力站房", num);
    },
    joint_factory: "联合工厂",
    heat_treatment_plant: "热处理工厂",
    forge_factory: "锻造工厂",
    business_building: "行政大楼",
    security_center: "安全保障部",
    test_center: "测试中心",
    transformer_station: "变电站",
    fences: "围栏",
    ground: "园区",
    streelight_power_lines: "路灯照明",

    electric_power_lines: "电力管道",
    sewer_lines: "污水管道",
    rain_drain_lines: "雨水管道",
    compressed_air_lines: "压缩空气",
    water_supply_lines: "厂区给水",
    natural_gas_lines: "天然气管道",
    //general
    loading: "载入中："
  };
}();