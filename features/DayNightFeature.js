function DayNightFeature(app, dayNighConfig) {
    this.app3dApp = app;
    this.dayNightConfig = dayNighConfig;
}

DayNightFeature.prototype.toggleDayNightAnimation = function() {
    if (this.dayNightConfig === undefined) {
        console.error("Error in retrieving dayNightConfig configuration. Please double check " +
                      "your featuresConfig and refer to the documentation");
        return;
    }
    if (!this.dayNightFlag) {
        this.app3dApp.showShadow(true);
        this.app3dApp.getCurrentScene().createDayNightAnimation(this.dayNightConfig);
        this.dayNightFlag = true;
    } else {
        this.app3dApp.getCurrentScene().stopDayNightAnimation();
        this.app3dApp.showShadow(false);
        this.dayNightFlag = false;
    }
};
