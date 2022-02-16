function SelectionFeature(app3dApp, selectionConfig) {
  this.app3dApp = app3dApp;
  this.selectedObject = null;
  this.selectableObjects = [];
  this.isHoverEnabled = selectionConfig.enableHover === undefined ? false : selectionConfig.enableHover;
  this.enableHover(this.isHoverEnabled);
  this.showAttributeBox = selectionConfig.showAttributeBox === undefined ? false : selectionConfig.showAttributeBox;
  this.defaultIconPath = selectionConfig.defaultIconPath === undefined ? null : selectionConfig.defaultIconPath;
  this.selectionColour = selectionConfig.selectionColour === undefined ? null : selectionConfig.selectionColour;
  this.hoverColour = selectionConfig.hoverColour === undefined ? 0x0061ff : selectionConfig.hoverColour;
}

SelectionFeature.prototype.init = function (selectableObjects) {
  this.selectableObjects = selectableObjects;
};

SelectionFeature.prototype.deselectAll = function () {
  $('.chart-box').hide();
  if (this.selectedObject !== null) {
    this.app3dApp.showOutline([]);
    this.selectedObject.hideLabel();
    // this.app3dApp.hideAttributesBox("objectAttrBox");

    // toggle off transformation control
    // if (this.transformationControlAdded) {
    //    this.app3dApp.removeTransformController(this.selectedObject);
    //    this.transformationControlAdded = false;
    //    toggleButtonColour(3, true);
    // activeModeNumbers.splice(activeModeNumbers.indexOf(3), 1);
    // }
    this.selectedObject = null;
  }
};
//点击需要显示图表面板的列表
/* var showPanelList = ['heat_treatment_plant', 'forge_factory', 'joint_factory', 'dct_factory', 'business_building', //行政大楼
'test_center']; */

SelectionFeature.prototype.select = function (event) {
  var lableOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _this = this;

  var imgPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var attributeBoxImgPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (event.object.visible === false) return;

  imgPath = imgPath === null ? this.defaultIconPath : imgPath;
  this.deselectAll();
  this.selectedObject = event.object;
  this.app3dApp.showOutline([this.selectedObject], this.selectionColour);

  if (this.selectedObject.objectLabels === null || this.selectedObject.objectLabels.length === 0) {
    this.selectedObject.addLabel({imgPath: imgPath}, function () {
      if (!_this.app3dApp.isAttributeBoxVisible() && _this.selectedObject.info.type !== "district" && _this.selectedObject.info.type !== "pipeline") {
        _this.app3dApp.showAttributesBox("objectAttrBox");
      } else {

        _this.app3dApp.hideAttributesBox("objectAttrBox");
      }
    });
  }
  //判断选中的建筑是否为需要弹出图表面板的建筑


  var label = strings[this.selectedObject.name];
  $('.chart-box .title').text(label);
  this.selectedObject.showLabel();
  if (this.showAttributeBox && this.selectedObject.info.type !== "district" && this.selectedObject.name !== "elevator" && this.selectedObject.info.type !== "pipeline") {
    var attributesContents = document.createElement("img");
    attributesContents.style["margin-top"] = "20px";
    attributesContents.setAttribute("src", attributeBoxImgPath);
    this.app3dApp.setAttributesBoxContents("objectAttrBox", attributesContents);
    this.app3dApp.showAttributesBox("objectAttrBox");
  }
};

SelectionFeature.prototype.onHover = function (event) {
  this.app3dApp.showOutline2([event.object], this.hoverColour);
};
SelectionFeature.prototype.onHoverOff = function () {
  this.app3dApp.showOutline2([]);
};

SelectionFeature.prototype.getSelectedObject = function () {
  return this.selectedObject;
};

SelectionFeature.prototype.enableHover = function (bHover) {
  this.app3dApp.showOutline2([]);
  this.app3dApp.eventDispacher.enableHover(bHover);
  this.isHoverEnabled = bHover;
};