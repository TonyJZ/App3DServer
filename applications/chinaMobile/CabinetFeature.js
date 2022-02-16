function CabinetFeature(application, app3dApp) {
    this.application = application;
    this.app3dApp = app3dApp;
    this.cabinets = [];
    // fadeEffect
    this.cabinetFadeEffect = {
        radius: 6,
        dimB: .5
    };
}

CabinetFeature.prototype.init = function() {

    this.cabinets = this.app3dApp.queryForObject("cabinet_[0-9]");
    this.cabinets.forEach((cabinet) => {
        this.addCabinet(cabinet);
    });
};
CabinetFeature.prototype.openCabinet = function(cabinet) {
    if (!cabinet.isOpen) {
        cabinet.mixers.forEach((mixer) => {
            mixer.playOnce(2);
            cabinet.isOpen = true;
        });
    }
};

CabinetFeature.prototype.onDoubleClick = function(event) {
    let distance = event.object.getCenter().distanceTo(this.app3dApp.getCurrentCamera().position);
    let cabinet = event.object;
    if (distance > 12) {
        if (this.application.showingStorageSpace) {
            this.application.toggleStorageSpace();
        }
        this.app3dApp.getCurrentCamera().flyTo(event.object, 1.2, 12, this.cabinetFadeEffect);
        this.openCabinet(cabinet);
    } else {

        cabinet.mixers.forEach((mixer) => {
            if (!cabinet.isOpen) {
                mixer.playOnce(2);
                cabinet.isOpen = true;
            } else {
                mixer.playOnce(-2);
                cabinet.isOpen = false;
            }
        });
    }
};

CabinetFeature.prototype.addCabinet = function(cabinet) {
    cabinet.isOpen = false;
    cabinet.onEvent(APP3D.Events.MOUSE_DOUBLE, this.onDoubleClick.bind(this));
};
