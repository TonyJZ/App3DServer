function TransformFeature(app, application) {
    this.app = app;
    this.application = application;
    this.tc = null;
    this.mode = null;
    this.isVisible = false;
    this.objectVisibility = false;
    this.newCabinetId = 3;
    this.allowedNameExp = "cabinet_";
}

TransformFeature.prototype.init = function() {
    this.tc = this.app.queryForObject("cabinet_moveable")[0];

};

TransformFeature.prototype.removeObject = function() {
    this.tc.setVisibility(false);
    if (this.isVisible) {
        this.toggleTransform(null);
    }
    this.objectVisibility = false;
};
TransformFeature.prototype.showObject = function() {
    this.tc.setVisibility(true);
    this.objectVisibility = true;
};

TransformFeature.prototype.addCabinet = function() {
    let cabinet =  {
        name:           "cabinet_" + this.newCabinetId,
        description:    "Cabinet that can move",
        label:          "机房-A组列头柜0" + this.newCabinetId,
        path:           "assets/IDC02/cab01.app4",
        type:           "object",
        labelMode:      "boundingBox",
        matrix: {
            elements: [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                -6.2366115828114195,
                0.49999999999999667,
                1.7474453445874296,
                1
            ],
        },
        loadHidden:     false,
        startPaused:    true,
        selectableObjectExp: [
            {
                name:         "server_1u",
                description:   "",
                label:         "DELL PowerEdge 1U"
            }, {
                name:         "server_2u",
                description:   "",
                label:         "DELL PowerEdge 2U"
            }, {
                name:         "server_4u",
                description:   "",
                label:         "DELL PowerEdge 4U"
            },
        ]
    };
    this.newCabinetId += 1;
    let scope = this;
    let floor = this.app.queryForObject("floor_2")[0];
    this.app.addObject(cabinet, floor, function() {
        let new_objects = cabinet.model.getChildrenObjects();
        new_objects.forEach((object) => {
            scope.application.addSelectableObject(object);
            scope.application.addToFlyToList(object);
        });
        scope.application.onObjectClick({object: cabinet.model});
        scope.app.addTransformController(cabinet.model, "translate");
        scope.isVisible = true;
        scope.mode = "translate";
        scope.application.cabinetFeature.addCabinet(cabinet.model);
    });
};
TransformFeature.prototype.removeControl = function(object) {
    if (object !== null && this.isVisible) {
        this.app.removeTransformController(object);
        this.isVisible = false;
        return true;
    }
    return false;
};
TransformFeature.prototype.toggleTransform = function(object, mode) {
    if (object !== null) {
        if (this.mode  == mode && this.isVisible) {
            this.removeControl(object);
        } else if (object.name.search("^cabinet_") !== -1) {
            this.app.removeTransformController(object);
            this.app.addTransformController(object, mode);
            object.setVisibility(true);
            this.mode = mode;
            this.isVisible = true;
        }
    }
};
