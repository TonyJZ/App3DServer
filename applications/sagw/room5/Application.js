function Application() {

    // Create app
    let app = new APP3D.App("parent", siteObj, {}, null);
    this.app3dApp = app;
    // Set Properties
    app.getCurrentScene().setSkyBoxImage("jpg", "./assets/blueSky/");
    app.showStatsInfo(false);

    // Tune the lights
    app.getCurrentScene().ambientLight.intensity = 0.5;
    app.getCurrentScene().ambientLight.color.setHex(0xaaaaaa);
    app.getCurrentScene().sun.position.set(40, 20, -10);
    let lightOpts = {
        skyColor:       0xffffbb,
        groundColor:    0x080820,
        intensity:      0.5
    };
    var hemiLight = app.getCurrentScene().addLight("HemisphereLight", lightOpts);
    hemiLight.position.set(20, 10, 10);

    // Initialize app Events
    app.onEvent(APP3D.Events.ONLOAD, this.onLoad.bind(this));
    app.onEvent(APP3D.Events.ONPROGRESS, this.onProgress.bind(this));

    // Leaving the following commented-out for now, until we add these features later:
    // // Create features
    // this.energyCubeFeature = new EnergyCubeFeature(app, energyUsageParams);
    // this.emergencyFeature = new EmergencyFeature(app);
    // this.pipelineFeature = new PipelineFeature(app);

    this.showEnergyCube = false;
    this.showAlarm = false;
    this.showPipelines = false;

    // Object selection;
    this.selectedObject = null;

    // FadeEffect
    this.flyToFadeEffect = {
        radius: 8,
        dimB:   .2
    };
}

Application.prototype.onLoad = function() {

};

Application.prototype.onProgress = function(count) {
    let text = "Loading" + Math.round(((count.total - count.remaining) / count.total) * 100) + "%";
    document.getElementById("progressbar").innerHTML = text;
    if (count.remaining === 0) {
        document.getElementById("progressbar").remove();
    }
};

Application.prototype.onKeyDown = function(event) {
    switch (event.code) {
        default:
            console.log(event);
            break;
    }
};

// Have to add document onload
var myApp = new Application();

