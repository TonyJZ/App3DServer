// config = {
//     environment: { // choonse one from the below three
//         skybox: {path: '', ext: ''},
//         backgroundColor: color,
//         backgroundTexture: path,
//     },

//     alarmParams: {
//         alarmSound: path,
//         playSound: true/false,
//         alarmColor: color,
//         edgeStrength: 10.0,
//         edgeGlow: 1.0,
//         edgeThickness: 1.0,
//         pulsePeriod: 0.5,
//         visibleEdgeColor: 0xff0000,
//
//         renderToScreen: false,
//         bloomExposure: 2,
//         bloomThreshold: 0,
//         bloomStrength: 0.5,
//         bloomRadius: 0
//     }
// }


function EmergencyFeature(app, scene, config) {
    this.app3dApp = app;
    this.scene = scene;
    this.selectedObjects = [];

    this.skybox = config.environment.skybox;
    this.backgroundColor = config.environment.backgroundColor;
    this.backgroundTexture = config.environment.backgroundTexture;

    this.alarmSound = config.alarmParams.alarmSound;
    this.playAlarm = config.alarmParams.playSound || false;
    this.emergencyColor = config.alarmParams.alarmColor === undefined ? 0xff0000 : config.alarmParams.alarmColor;
    this.edgeStrength = config.alarmParams.edgeStrength === undefined ? 10.0 : config.alarmParams.edgeStrength;
    this.edgeGlow = config.alarmParams.edgeGlow === undefined ? 1.0 : config.alarmParams.edgeGlow;
    this.edgeThickness = config.alarmParams.edgeThickness === undefined ? 1.0 : config.alarmParams.edgeThickness;
    this.pulsePeriod = config.alarmParams.pulsePeriod === undefined ? 0.5 : config.alarmParams.pulsePeriod;
    this.visibleEdgeColor = config.alarmParams.visibleEdgeColor === undefined ? 0xff0000 : config.alarmParams.visibleEdgeColor;

    this.renderToScreen = config.alarmParams.renderToScreen === undefined ? false : config.alarmParams.renderToScreen;
    this.bloomExposure = config.alarmParams.bloomExposure === undefined ? 2 : config.alarmParams.bloomExposure;
    this.bloomThreshold = config.alarmParams.bloomThreshold === undefined ? 0 : config.alarmParams.bloomThreshold;
    this.bloomStrength = config.alarmParams.bloomStrength === undefined ? 0.5 : config.alarmParams.bloomStrength;
    this.bloomRadius = config.alarmParams.bloomRadius === undefined ? 0 : config.alarmParams.bloomRadius;

    this.backupLights = [];
    this.sceneBackground = null;
    // this.envMap = null;
}

EmergencyFeature.prototype.show = function(names) {
    let scene = this.scene;

    this.selectedObjects = [];
    for (var i = 0; i < names.length; ++i) {
        let name = names[i];
        scene.traverse((child) => {
            if (child.name === name && child.type === "BaseObject") {
                this.selectedObjects.push(child);
            }
        });
    }

    this.backupLights = [];
    scene.lights.forEach((light) => {
        this.backupLights.push({intensity: light.intensity, color: light.color});
    });

    for (var i = 2; i < scene.lights.length; ++i) {
        scene.lights[i].intensity = 0;
    }

    this.sceneBackground = scene.background;
    // this.envMap = scene.envMap;
    // var scope = this;
    var lowerSunIntensity = function(scene, scope, delta) {
        scene.sun.intensity -= 2 * delta;
        scene.ambientLight.intensity -= 0.2 * delta;
        if (scene.sun.intensity <= .01) {
            if (scope.skybox !== undefined) {
                scene.setSkyBoxImage(scope.skybox.ext, scope.skybox.path);
            } else if (scope.backgroundTexture !== undefined) {
                scene.setBackgroundTexture(scope.backgroundTexture);
            } else if (scope.backgroundColor !== undefined) {
                scene.setBackgroundColor(scope.backgroundColor);
            }

            scene.sun.intensity = 0;
            scene.ambientLight.intensity = 0.05;
            scene.ambientLight.color.setHex(0xaaaaaa); // 0xf59191
            scene.appParent.showShadow(false);

            scope.selectedObjects.forEach((object) => {
                // var fire = building.model.setOnFire();
                // fire.enableOutline = false;
                object.setOverlayColour(scope.emergencyColor);
            });

            scope.backupOutlineStyle = Object.assign({}, scope.app3dApp.OutlineParams);
            scope.backupBloomStyle = Object.assign({}, scope.app3dApp.BloomParams);

            scope.app3dApp.setBloomStyle({
                renderToScreen: scope.renderToScreen,
                exposure: scope.bloomExposure,
                bloomStrength: scope.bloomStrength,
                bloomThreshold: scope.bloomThreshold,
                bloomRadius: scene.bloomRadius
            });

            scope.app3dApp.setOutlineStyle({
                edgeStrength: scope.edgeStrength,
                edgeGlow: scope.edgeGlow,
                edgeThickness: scope.edgeThickness,
                pulsePeriod: scope.pulsePeriod,
                visibleEdgeColor: scope.visibleEdgeColor
            });
            scope.app3dApp.showOutline(scope.selectedObjects);

            return false;
        } else {
            return true;
        }

    };
    let animation = new APP3D.Animation("lowerSunIntensity", lowerSunIntensity, [this.scene, this]);
    this.scene.animations.addWithReplace(animation);

    if (this.playAlarm) {
        this.playSound(this.alarmSound);
    }
};

EmergencyFeature.prototype.restore = function() {
    let scene = this.scene;

    for (var i = 0; i < this.backupLights.length; ++i) {
        scene.lights[i].intensity = this.backupLights[i].intensity;
        scene.lights[i].color = this.backupLights[i].color;
    }

    scene.background = this.sceneBackground;
    // scene.envMap = this.envMap;

    this.selectedObjects.forEach((object) => {
        // building.model.removeFire();
        object.removeOverlayColour();
    });

    this.app3dApp.setBloomStyle(this.backupBloomStyle);
    this.app3dApp.setOutlineStyle(this.backupOutlineStyle);
    this.app3dApp.showOutline([]);

    if (this.playAlarm) {
        this.closeSound();
    }
};

EmergencyFeature.prototype.playSound = function(alarmSound) {
    var browser = window.navigator.userAgent.toLowerCase();
    if (browser.indexOf("ie") >= 0) {

    } else {
        var strAudio = "<audio id='audioPlay' src='"   + alarmSound +  "' loop='loop' hidden='true'></audio>";
        var ap =  document.getElementById("audioPlay");
        if (ap == null) {

        	let tr = document.createElement("div");
            tr.innerHTML = strAudio;
            document.getElementById("parent").appendChild(tr);
        }
        var audio = document.getElementById("audioPlay");

        audio.play();
    }
};

EmergencyFeature.prototype.closeSound = function() {
    var browser = window.navigator.userAgent.toLowerCase();
    if (browser.indexOf("ie") >= 0) {

    } else {
        var audio = document.getElementById("audioPlay");

        audio.pause();
    }
};
