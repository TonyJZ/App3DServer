// Input = "flowObj.js"

function FlowingLineFeature(flowObj) {
    this.lineStyles = flowObj.lineStyles;
    this.pipelinePath = flowObj.pipelinePath;
}

FlowingLineFeature.prototype.create = function (scene) {
    var scope = this;
    this.pipelinePath.forEach(function (line) {
        let shaderEffect = "FlowingLineEffectPipe";
        let parameters = {
            meshName: line.name,
            restore: false,
            closed: false,
            path: line.routeArray[0].route,
            shaderStyle: scope.lineStyles[line.name],
            style: line.routeArray[0].segStyle,
        };
        let effect = new APP3D.ShaderFactory(shaderEffect, parameters);
        scene.add(effect.getBaseObject());
    });
}