function FloorsFeature(app) {
    this.app = app;
    this.isSeparated = false;
    this.displacement = new APP3D.Vector3(0, 0, 8);
    this.direction = -1;
    this.speed = 50;
    this.isAnimationOngoing = false;
    this.fadeEffect = {radius: 20, dimB: .2};
    this.currentFloor = "all";
}
FloorsFeature.prototype.selectFloor = function(scope, floorName) {
    this.currentFloor = floorName;
    console.log("scope", scope);
    scope.deselectAll();
    scope.app.getCurrentCamera().zoomOutZoomInPoint(scope.floorZoomInPath[floorName].finalPoint, 2, 2, scope.floorZoomInPath[floorName].finalLookAtPoint, scope.floorZoomInPath[floorName].zoomInPoint);
    // scope.app.getCurrentCamera().fadeEffect(floor, scope.floorZoomInPath[floor.name].zoomInPoint, 50, scope.fadeEffect);
    scope.setOthersVisibility(floorName, false);
};

FloorsFeature.prototype.init = function(deselectAll) {
    let scope = this;
    this.deselectAll = deselectAll;
    this.floors = this.app.queryForObject("floor_");
    this.floors.forEach((floor) => {
        floor.onEvent(APP3D.Events.MOUSE_DOUBLE, function(event) {
            scope.selectFloor(scope, floor.name);
        });
    });
    this.floorZoomInPath = {
        "floor_1": {
            zoomInPoint: new APP3D.Vector3(-0.8602481989373683,  10.218031605810026,  12.166105757479583),
            finalPoint: new APP3D.Vector3(-7.094521428136561,  42.83977982285869,  18.354782516555275),
            finalLookAtPoint: new APP3D.Vector3(0.06951225503401398,  -0.9164451557960956,  -0.3940765443641076)
        },
        "floor_2": {
            zoomInPoint: new APP3D.Vector3(10.019454740028603063,  13.351619885235564, -2.049667428096269),
            finalPoint:  new APP3D.Vector3(-10.971105799828734, 43.461391093240024,  14.9162864081474),
            finalLookAtPoint: new APP3D.Vector3(0.1574863161130917,  -0.8670639185543445, -0.4726502103864043)
        },
        "floor_3": {
            zoomInPoint: new APP3D.Vector3(1.2097655002146772,  15.715694487196078,  -12.549222613165675),
            finalPoint:  new APP3D.Vector3(-17.380454628383028, 51.044497368401416, 8.425418241720138),
            finalLookAtPoint: new APP3D.Vector3(0.2501579501967415, -0.8370645933147913, -0.4865633222635133)
        },
        "floor_4": {
            zoomInPoint: new APP3D.Vector3(-2.1272498537410285, 14.518330017144384, -23.259792029506897),
            finalPoint: new APP3D.Vector3(-11.036361524455073, 60.25589333406145, -9.629056721769617),
            finalLookAtPoint: new APP3D.Vector3(0.15199787944572277, -0.95103084241758, -0.2691411923405852)
        }
    };
};
FloorsFeature.prototype.setOthersVisibility = function(floor_name, bVisible) {
    this.floors.forEach((floor) => {
        if (floor.name != floor_name) {
            floor.setVisibility(bVisible);
        } else {
            floor.setVisibility(!bVisible);
        }
    });
};
FloorsFeature.prototype.makeAllVisible = function() {
    this.floors.forEach((floor) => {
        floor.setVisibility(true);
    });
    this.currentFloor = "all";
};

FloorsFeature.prototype.getCurrentFloor = function() {
    return this.currentFloor;
};
FloorsFeature.prototype.collapseFloors = function() {
    if (this.direction === 1) {
        this.toggleFloorSeparation();
    }
};
FloorsFeature.prototype.toggleFloorSeparation = function() {
    if (!this.isAnimationOngoing) {
        this.isAnimationOngoing = true;
        this.displacement.z = Math.abs(this.displacement.z) * this.direction;
        this.moveFloors(this.floors, this.displacement, this.speed, () => {
            this.isAnimationOngoing = false;
        });
        this.direction = this.direction * (-1);
    }
};

FloorsFeature.prototype.separateFloors = function() {
    if (this.direction === -1) {
        this.toggleFloorSeparation();
    }
};

FloorsFeature.prototype.moveFloors = function(floors, displacement, speed, callback = null) {
    if (floors.length !== 0) {
        let animationCount = floors.length;
        for (let i = 0; i < floors.length; i++) {
            let floorId = floors[i].info.floorId;
            let finalPosition = new APP3D.Vector3();
            floors[i].getWorldPosition(finalPosition);

            finalPosition.x = finalPosition.x + floorId * displacement.x;
            finalPosition.y = finalPosition.y + floorId * displacement.y;
            finalPosition.z = finalPosition.z + floorId * displacement.z;

            let floorSpeed = speed + floorId * speed;
            floors[i].moveTo(finalPosition, floorSpeed, function() {
                animationCount -= 1;
                if (animationCount === 0) {
                    if (callback !== null) {
                        callback();
                    }
                }
            }, false);
        }
    }
};
