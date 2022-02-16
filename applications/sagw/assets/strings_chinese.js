var strings = (function() {
  function addNum(text, num) {
    if (num === undefined) {
      return text;
    }
    return text + " " + num;
  }
  return {
    ac: num => addNum("空调冷却塔 CT -", num),
    floor: num => addNum("地面", num),
    cooling_pump: num => addNum("冷却水泵 CDWP-", num),
    cooler: num => addNum("冷却机组 CH -", num),
    frozen_pump: num => addNum("冷冻水泵 CHWP -", num),
    water_treatment: num => addNum("水处理器", num),
    hotwater_recycle: num => addNum("机组热回收泵 CHHRP -", num),
    water_supply: num => addNum("补水泵", num),
    air_pressure: num => addNum("空气压缩机组", num),
    tank: num => addNum("气罐", num),
    drayer: num => addNum("干燥机", num),
    recycle_pump: num => addNum("水循环泵", num),
    air_coolant_pump: num => addNum("空压冷却水泵", num),
    machine_boiler: num => addNum("锅炉房", num),
    supply_pump: num => addNum("补水泵", num),
    pipe: num => addNum("管道", num),
    // outdoors
    dct_factory: "DCT工厂",
    power_station: num => addNum("动力厂房", num),
    joint_factory: "联合工厂",
    heat_treatment_plant: "热处理工厂",
    forge_factory: "锻压工厂",
    business_building: "办公楼",
    security_center: "安保处",
    test_center: "测试中心",
    transformer_station: "变电站",
    fences: "围栏",
    ground: "园区",
    streelight_power_lines: "路灯照明",
    rain_drain_pipes: "雨水管",
    electric_power_lines: "电力线",
    sewer_pipes: "污水管",
    natural_gas_pipes: "天然气管道",
    water_supply_pipes: "厂区给水",
    compressed_air_pipes: "压缩空气",
    //general
    loading: "载入中："
  };
})();
