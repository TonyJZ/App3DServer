function PipelineFeature(scene) {
    this.scene = scene;
    this.pipelines = [];
}

// The 'config' argument below has the following format:
//
//     config = [{
//         name:    "",
//         route:   {},
//         style:   {},
//     }];
PipelineFeature.prototype.init = function(config, hidingObjectNames) {
    this.pipelines = [];
    for (var i = 0; i < config.length; ++i) {
        var pipe = new APP3D.Pipeline();
        pipe.create(config[i].name, config[i].label, config[i].pipeStyle, config[i].routeArray);
        this.pipelines.push(pipe);
        this.scene.add(pipe, true);
    }
    this.hidingObjects = [];
    if (hidingObjectNames !== undefined && hidingObjectNames !== null) {
        hidingObjectNames.forEach((name) => {
            this.hidingObjects = this.hidingObjects.concat(this.scene.queryForObject(name));
        });
    }
};

PipelineFeature.prototype.showPipes = function(names) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.visible = true;
        });
    } else {
        this.hidePipes();
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.visible = true;
                }
            });
        });
    }
    this.hidingObjects.forEach((object) => {
        object.setOpacity(0.25);
        object.setSelectable(false);
    });
};

PipelineFeature.prototype.hidePipes = function(names) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.visible = false;
        });
    } else {
        this.showPipes();
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.visible = false;
                }
            });
        });
    }
    this.hidingObjects.forEach((object) => {
        object.setOpacity(object.preOpacity);
        object.setSelectable(true);
    });
};

PipelineFeature.prototype.playAnimation = function(names) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.startAnimation();
        });
    } else {
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.startAnimation();
                }
            });
        });
    }
};

PipelineFeature.prototype.pauseAnimation = function(names) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.pauseAnimation();
        });
    } else {
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.pauseAnimation();
                }
            });
        });
    }
};

PipelineFeature.prototype.updateSpeed = function(names, speed) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.setAnimationSpeed(speed);
        });
    } else {
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.setAnimationSpeed(speed);
                }
            });
        });
    }
};

PipelineFeature.prototype.getPipelines = function() {
    return this.pipelines;
};

PipelineFeature.prototype.onEvent = function(event, callback, names) {
    if (names === undefined) {
        this.pipelines.forEach((pipe) => {
            pipe.onEvent(event, callback);
        });
    } else {
        names.forEach((name) => {
            this.pipelines.forEach((pipe) => {
                if (pipe.name === name) {
                    pipe.onEvent(event, callback);
                }
            });
        });
    }
};

PipelineFeature.prototype.query = function(name) {
    let result = null;
    this.pipelines.forEach((pipe) => {
        if(pipe.name === name)
            result = pipe;
    });
    return result;
};
