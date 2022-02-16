var strings = function() {
    function addNum(text, num){
        if(num === undefined){
            return text;
        }
        return text + " " + num;
    }
    return {
        ac                  : (num) => addNum("AC", num),
        floor               : (num) => addNum("Floor", num),
        cooling_pump        : (num) => addNum("Cooling pump", num),
        cooler              : (num) => addNum("Cooler", num),
        frozen_pump         : (num) => addNum("Frozen pump", num),
        water_treatment     : (num) => addNum("Water treatment", num),
        hotwater_recycle    : (num) => addNum("Hotwater recycle pump", num),
        water_supply        : (num) => addNum("Water supply pumps", num),
        air_pressure        : (num) => addNum("Air pressure", num),
        tank                : (num) => addNum("Tank", num),
        drayer              : (num) => addNum("Drayer", num),
        recycle_pump        : (num) => addNum("Recycle pump", num),
        air_coolant_pump    : (num) => addNum("Air coolant pump", num),
        machine_boiler      : (num) => addNum("Machine boiler", num),
        supply_pump         : (num) => addNum("Supply pump", num),
        pipe                : (num) => addNum("Pipe",num),
        // outdoors
        dct_factory             : "DCT factory",
        power_station           : (num) => addNum("Power station", num),
        joint_factory           : "Joint factory",
        heat_treatment_plant    : "Heat treatment plant",
        forge_factory           : "Forge factory",
        business_building       : "Business building",
        security_center         : "Security Center",
        test_center             : "Test center",
        transformer_station     : "Transformer station",
        fences                  : "Fences",
        ground                  : "Ground",
        stree_light_power_lines : "Streelight power lines",
        //general
        loading                 : "Loading : ",
    }
}();
