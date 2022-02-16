function TransformControlFeature(app3dApp) {
    this.app3dApp = app3dApp;
    this.transformationControlAdded = false;
    this.selectedObject = null;
    this.allowedObjectExp = "";
    this.currentMode = "";
}

TransformControlFeature.prototype.init = function(allowedObjectExp) {
    this.allowedObjectExp = allowedObjectExp;

};
TransformControlFeature.prototype.removeTransformControl = function() {
    if (this.selectedObject !== null) {
        this.app3dApp.removeTransformController(this.selectedObject);
        this.currentMode = "";
        this.transformationControlAdded = false;
    }
};

TransformControlFeature.prototype.addTransformControl = function(selectedObject, mode) {
    if (this.isAllowed(selectedObject)) {
        this.removeTransformControl();
        this.app3dApp.addTransformController(selectedObject, mode);
        this.selectedObject = selectedObject;
        this.currentMode = mode;
        this.transformationControlAdded = true;
    }
};

// transformation controll
TransformControlFeature.prototype.toggleTransformControl = function(selectedObject, mode) {
    if (this.isAllowed(selectedObject)) {
        if (!this.transformationControlAdded) {
            this.addTransformControl(selectedObject, mode);
            this.transformationControlAdded = true;
        } else {
            this.removeTransformControl();
            this.transformationControlAdded = false;
        }
    }
};
TransformControlFeature.prototype.isAllowed = function(selectedObject) {
    if (selectedObject === null) {
        return false;
    }
    if (selectedObject.name.search(this.allowedObjectExp) === -1) {
        return false;
    }
    return true;
};
