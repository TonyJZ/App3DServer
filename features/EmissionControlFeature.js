// config = {
//     objList: [
//         { name: "intensity_group01", iniIntensity: 0.0 },
//         { name: "intensity_group02", iniIntensity: 0.1 },
//         { name: "intensity_group03", iniIntensity: 0.45 },
//         { name: "intensity_group04", iniIntensity: 0.3 },
//     ],
//     params: {
//         intensityMin: 0.0,
//         intensityMax: 1.0,
//         step: 0.02,
//         initialIntensity: 0.0,
//     }
// }

function EmissionControlFeature(config) {
    this.emissionObjects = [];
    
    this.intensityMin = config.params.intensityMin === undefined ? 0.0 : config.params.intensityMin;
    this.intensityMax = config.params.intensityMax === undefined ? 1.0 : config.params.intensityMax;
    this.speed = config.params.speed === undefined ? 0.02 : config.params.speed;
}

EmissionControlFeature.prototype.initialize = function (objectList, initialIntensity) {
    this.emissionObjects = objectList;
    this.emissionObjects.forEach(object => {
        object.traverse((child) => {
            if (child.isMesh && child.material.emissiveIntensity != null) {
                child.material.emissiveIntensity = initialIntensity;
                child.material.emissiveTime = Math.asin((initialIntensity - this.intensityMin) / (this.intensityMax - this.intensityMin) - 1);
            }
        });
    });
};

EmissionControlFeature.prototype.start = function (objectList, initialIntensity) {
    var iniInt = initialIntensity === undefined ? 0.0 : initialIntensity;
    this.initialize(objectList, iniInt);
    // this.emissionObjects = objectList;
    var scope = this;
    var updateIntensity = function (object, delta) {
        object.traverse((child) => {
            if (child.isMesh && child.material.emissiveIntensity != null) {
                child.material.emissiveTime += delta;
                child.material.emissiveIntensity = (scope.intensityMax - scope.intensityMin) * (Math.sin(scope.speed * child.material.emissiveTime) + 1) + scope.intensityMin;
            }
        });
    }
    this.emissionObjects.forEach(object => {
        let intensityAnimation = new APP3D.Animation("updateIntensity", updateIntensity, [object]);
        object.animations.addWithReplace(intensityAnimation);
    });
};

EmissionControlFeature.prototype.pause = function (objectList) {
    this.emissionObjects = objectList;
    this.emissionObjects.forEach(object => {
        object.animations.removeAll();
    });
}