let buttonsEnabled = false;
let activeModeNumbers = [];
let hideMainButtonsToggled = false;
let devicesModeAlreadyEnabled = false;
let allObjects;
let iconToRestore = null;
let isFlying = false;
let activateDevicesPanel = false;
let globalFadeEffect = {
    radius: 50,
    dimB:   .2
};
let bShowPiples = false;
let bShowEmergency = false;
let bShowEnergyUsage = false;

// Button click handling
var buttonClicked = function(buttonNumber) {
    // Buttons won't do anything until scene loads:
    if (!buttonsEnabled) {
        return;
    }
    // For any button, regardless of what's currently active and what's soon-to-be active,
    // we want to hide the object attributes panel.
    if (myApp.getSelectedObject() !== null) {
        myApp.app3dApp.hideAttributesBox("objectAttrBox");
    }
    // Something is getting turned off:
    if (activeModeNumbers.length !== 0) {
        // Find the thing to turn off:
        if (activeModeNumbers.includes(buttonNumber))  {
            // Turn off <buttonNumber>
            toggleButtonColour(buttonNumber);
            setFunctionalityActiveStatus(buttonNumber, false);
        } else {
            // Turn off <activeModeNumbers>
            activeModeNumbers.forEach((numToTurnOff, index) => {
                // We make an exception for mode 6, which is green vegetation (i.e.: we allow
                // it to stay when we turn other modes on)
                if (numToTurnOff !== 6 && buttonNumber !== 6) {
                    activeModeNumbers.splice(index, 1);
                    toggleButtonColour(numToTurnOff, true);
                    setFunctionalityActiveStatus(numToTurnOff, false);
                }
            });
        }
    }

    // Now, everything is off that needs to be off. But we're not finished. We need to check
    // if there's anything that needs to get turned on:
    //   - Either nothing was on and we're turning something on, or
    //   - We've clicked a different button than the one that was already on
    if (activeModeNumbers.length === 0 || (activeModeNumbers.length !== 0 && (!activeModeNumbers.includes(buttonNumber)))) {
        // This switch mechanism will allow some buttons to prevent themselves being pressed:
        switch (buttonNumber) {
            case 3:
                let selectedObject = myApp.selectionFeature.getSelectedObject();
                if (selectedObject === null || myApp.transformControlFeature.isAllowed(selectedObject) !== true) {
                    break;
                }
            default:
                activeModeNumbers.push(buttonNumber);
                toggleButtonColour(buttonNumber);
                setFunctionalityActiveStatus(buttonNumber, true);
        }
    } else {
        // Else we've only turned things off in this current function, so update the status:
        activeModeNumbers.splice(activeModeNumbers.indexOf(buttonNumber), 1);
    }
};

function setFunctionalityActiveStatus(functionalityNum, desiredStatus) {
    // Most of the functions below have their toggle functionality built in, so only
    // need to call the same function twice. Others like "Monitor" have separate
    // functions to turn off the feature.
    switch (functionalityNum) {
        case 1: // Monitor
            myApp.cameraFeature.flyingInspection(
                featuresConfig.cameraFeatureConfig,
                (desiredStatus === true) ? true : false,
                "anyue"
            );
            break;
        case 2: // Energy Usage
            toggleEnergyUsage();
            break;
        case 3: // Move Building
            myApp.toggleTransformControlByClickingButton("translate");
            break;
        case 4: // Show Pipelines
            togglePipeline();
            break;
        case 5: // Emergency Alarm
            toggleEmergency();
            break;
        case 6: // Green Vegetation
            let largeTree = myApp.app3dApp.queryForObject("a7_tree")[0];
            if (desiredStatus === true) {
                largeTree.scale.set(.1, .1, .1);
                largeTree.scaleTo({x: 10, y: 10, z: 10}, 30, () => {
                    toggleButtonColour(6, true);
                    activeModeNumbers.splice(activeModeNumbers.indexOf(6), 1);
                });
            } else {
                largeTree.cancelAllAnimations();
            }
            break;
        case 7: // Daylight Animation
            myApp.dayNightFeature.toggleDayNightAnimation();
            if (myApp.shadowsOn && myApp.dayNightFlag === false) {
                myApp.app3dApp.showShadow(!myApp.app3dApp.isShadowEnabled());
            }
            break;
        case 8: // Devices
            if (activateDevicesPanel) {
                toggleDevices(8);
            }
            break;
    }
}

let zoomInOutParams = {
    "camera_1": {
        pullOutPosition: {x: 28.8471973515865, y: 65.179015580853, z: -143.9366766536914},
        stopDistance: 20,
    },
    "camera_2": {
        pullOutPosition: {x: 195.2747175049047, y: 58.014285019228474, z: 6.125450879506758},
        stopDistance: 20
    },
    "camera_3": {
        stopDistance: 20
    },
    "camera_4": {
        pullOutPosition: {x: -141.80568555547006, y: 67.45667001696411, z: 59.59287455581055},
        stopDistance: 20
    },
    "a12": {
        pullOutPosition: {x: -270.90197110128554, y: 196.59487840072114, z: 223.986242769875},
        stopDistance: 100
    },
    "a13": {
        pullOutPosition: {x: -270.90197110128554, y: 196.59487840072114, z: 223.986242769875},
        stopDistance: 100
    },
    "a14": {
        pullOutPosition: {x: -270.90197110128554, y: 196.59487840072114, z: 223.986242769875},
        stopDistance: 100
    }
};


function toggleMainButtonsPanel() {
    switch (hideMainButtonsToggled) {
        case true:
            document.getElementById("mainButtons").style.visibility = "visible";
            hideMainButtonsToggled = false;
            document.getElementById("buttonsPanelToggleIcon").setAttribute("src", "./assets/up.png");
            break;
        case false:
            document.getElementById("mainButtons").style.visibility = "hidden";
            hideMainButtonsToggled = true;
            document.getElementById("buttonsPanelToggleIcon").setAttribute("src", "./assets/down.png");
            break;
    }
}

function enteringHoverOverButton(num) {
    let div = document.getElementById("button" + num);
    if (div.style["background-color"] === "rgba(255, 255, 255, 0.95)") {
        div.style["background-color"] = "rgba(244, 244, 244, 0.95)";
    }
}

function leavingHoverOverButton(num) {
    let div = document.getElementById("button" + num);
    if (activeModeNumbers.includes(num)) {
        div.style["background-color"] = "rgba(230, 230, 230, 0.95)";
    } else {
        div.style["background-color"] = "rgba(255, 255, 255, 0.95)";
    }
}

function toggleButtonColour(num, noMouseOver) {
    let div = document.getElementById("button" + num);
    if (div.style["background-color"] === "rgba(244, 244, 244, 0.95)" ||
        div.style["background-color"] === "rgba(255, 255, 255, 0.95)") {
        div.style["background-color"] = "rgba(230, 230, 230, 0.95)";
    } else {
        if (noMouseOver) {
            div.style["background-color"] = "rgba(255, 255, 255, 0.95)";
        } else {
            div.style["background-color"] = "rgba(244, 244, 244, 0.95)";

        }
    }
}

function toggleDevices() {
    allObjects = myApp.app3dApp.queryForObject("^(?:(?!ground).)+$");
    let objectsOfInterest = allObjects.filter((ea) => {
        return ea.info.subType === "waterTank" || ea.info.subType === "securityCamera";
    });

    // Display the devices sub-panel:
    if (document.getElementById("devicePanelTop") === null) {
        createDevicesPanel();
    }
    if (devicesModeAlreadyEnabled) {
        removeDevicesPanel();
        devicesModeAlreadyEnabled = false;
        // Hide all object icons in the scene:
        objectsOfInterest.forEach((obj, index) => {
            obj.hideIcon();
        });
        iconToRestore = null;
    } else {
        showDevicesPanel();
        devicesModeAlreadyEnabled = true;
        if (myApp.getSelectedObject() !== null) {
            myApp.getSelectedObject().removeLabel();
        }
        // Display all object icons in the scene:
        objectsOfInterest.forEach((obj, index) => {
            // Display each object of interest's icon, then allow the user to click on the icon to
            // change it into an object label and reveal that object's attributes.
            let iconPath = getIconForSubType(obj.info.subType);
            obj.setIconContents(iconPath, null, () => {
                // flyTo the device
                myApp.cameraFeature.locate(obj.name);

                // myApp.selectedObject is a global, declared in the main.js file
                if (myApp.getSelectedObject() !== null) {
                    // The function below actually *removes* any label attached thereto
                    myApp.getSelectedObject().removeLabel();
                    myApp.app3dApp.hideAttributesBox("objectAttrBox");
                }
                // If we're clicking a new icon, there might already be an icon which was previously
                // hidden, so check for that first, and if found, restore it:
                if (iconToRestore !== null) {
                    iconToRestore.style.visibility = "visible";
                }
                myApp.onSelect({object: obj});
                // Set the visibility to hidden (as opposed to removing the element) to allow
                // toggling between it and the label
                obj.objectIcon.icon.element.style.visibility = "hidden";
                iconToRestore = obj.objectIcon.icon.element;
            });
            obj.showIcon(iconPath);
        });
    }
}

function getIconForSubType(subType) {
    switch (subType) {
        case "securityCamera":  return "assets/8a-grey.png";
        case "waterTank":       return "assets/8b-blue.png";
        default:                return "assets/fleur.png";
    }
}

function getWhiteIconForSubType(subType) {
    switch (subType) {
        case "waterTank":       return "./assets/8a-white.png";
        case "securityCamera":  return "./assets/8b-white.png";
        case "building":        return "./assets/8c-white.png";
        default:                return "./assets/fleur.png";
    }
}

function showDevicesPanel() {
    document.getElementById("devicePanelTop").style.visibility = "visible";
    document.getElementById("devicePanelBottom").style.visibility = "visible";
}

function removeDevicesPanel() {
    document.getElementById("devicePanelTop").remove();
    document.getElementById("devicePanelBottomWrapper").remove();
}

function createDevicesPanel() {
    // Top portion:
    let devicesPanelTop = document.createElement("div");
    devicesPanelTop.id =                "devicePanelTop";
    devicesPanelTop.style.position =    "absolute";
    devicesPanelTop.style.color =       "#000";
    devicesPanelTop.style.height =      "85px";
    devicesPanelTop.style.width =       "450px";
    devicesPanelTop.style.left =        "20px";
    // Below: Not sure why 40 px instead of 20 px is needed...
    devicesPanelTop.style.top =         (window.innerHeight - (85 + 220 + 40 + 50)) + "px";
    devicesPanelTop.style["border-radius"] =    "10px 10px 0 0";
    devicesPanelTop.style["font-family"] =      "Courier New";
    devicesPanelTop.style["text-align"] = "center";
    devicesPanelTop.style["margin-top"] = "auto";
    devicesPanelTop.style["margin-left"] = "auto";
    devicesPanelTop.style["margin-right"] = "auto";
    devicesPanelTop.style["background-color"] = "rgba(255, 255, 255, 0.95)";
    let decoration = document.createElement("div");
    decoration.setAttribute("style", "width: 100px; height: 4.5px; background-color: #39A5F7; position: absolute; margin-left: 175px; border-radius: 0 0 4.5px 4.5px;");
    let xButton = document.createElement("img");
    xButton.setAttribute("src", "./assets/xButton.png");
    xButton.style.height =      "20px";
    xButton.style.cursor =      "pointer";
    xButton.style["margin-top"] =  "15px";
    xButton.style["margin-left"] = "20px";
    xButton.setAttribute("onclick", "removeDevicesPanel()");

    // Add our 3 buttons:
    // ----------------------- Button 1: ----------------------------
    let btn1 = document.createElement("div");
    btn1.style.height = "75px";
    btn1.style.width =  "105px";
    btn1.style.float =  "left";
    btn1.style.cursor = "pointer";
    btn1.style["padding-top"] = "18px";
    btn1.style["margin-left"] = ((450 - (3 * 105)) / 2) + "px";
    let icon1 = document.createElement("img");
    icon1.setAttribute("src", "./assets/8a-blue.png");
    icon1.id =              "devicesPanelIcon1";
    icon1.style.display =   "block";
    icon1.style.height =    "30px";
    icon1.style["margin-left"] =    "auto";
    icon1.style["margin-right"] =   "auto";
    icon1.style["margin-bottom"] =  "10px";
    btn1.appendChild(icon1);
    let label1 = document.createElement("label");
    label1.id =             "devicesPanelLabel1";
    label1.innerHTML =      strings.cameras;
    label1.style.color =    "#39A5F7";
    label1.style["font-size"] = "16px";
    btn1.appendChild(label1);
    btn1.setAttribute("onclick", "switchToTableNumber(0)");
    devicesPanelTop.appendChild(btn1);
    // ----------------------- Button 2: ----------------------------
    let btn2 = document.createElement("div");
    btn2.style.height = "75px";
    btn2.style.width =  "105px";
    btn2.style.float =  "left";
    btn2.style.cursor = "pointer";
    btn2.style["padding-top"] = "18px";
    let icon2 = document.createElement("img");
    icon2.setAttribute("src", "./assets/8b-grey.png");
    icon2.id =              "devicesPanelIcon2";
    icon2.style.display =   "block";
    icon2.style.height =    "30px";
    icon2.style["margin-left"] =    "auto";
    icon2.style["margin-right"] =   "auto";
    icon2.style["margin-bottom"] =  "10px";
    btn2.appendChild(icon2);
    let label2 = document.createElement("label");
    label2.id =             "devicesPanelLabel2";
    label2.innerHTML =      strings.tanks;
    label2.style.color =    "#333";
    label2.style["font-size"] = "16px";
    btn2.appendChild(label2);
    btn2.setAttribute("onclick", "switchToTableNumber(1)");
    devicesPanelTop.appendChild(btn2);
    // ----------------------- Button 3: ----------------------------
    let btn3 = document.createElement("div");
    btn3.style.height = "75px";
    btn3.style.width =  "105px";
    btn3.style.float =  "left";
    btn3.style.cursor = "pointer";
    btn3.style["padding-top"] = "18px";
    let icon3 = document.createElement("img");
    icon3.setAttribute("src", "./assets/8c-grey.png");
    icon3.id =              "devicesPanelIcon3";
    icon3.style.display =   "block";
    icon3.style.height =    "30px";
    icon3.style["margin-left"] =    "auto";
    icon3.style["margin-right"] =   "auto";
    icon3.style["margin-bottom"] =  "10px";
    btn3.appendChild(icon3);
    let label3 = document.createElement("label");
    label3.id =             "devicesPanelLabel3";
    label3.innerHTML =      strings.buildings;
    label3.style.color =    "#333";
    btn3.appendChild(label3);
    btn3.setAttribute("onclick", "switchToTableNumber(2)");
    devicesPanelTop.appendChild(btn3);

    devicesPanelTop.appendChild(decoration);
    devicesPanelTop.appendChild(xButton);
    document.getElementById("parent").appendChild(devicesPanelTop);

    // Bottom portion:
    let devicesPanelBottom = document.createElement("div");
    devicesPanelBottom.id =             "devicePanelBottom";
    devicesPanelBottom.style.position = "absolute";
    devicesPanelBottom.style.color =    "#000";
    devicesPanelBottom.style.height =   "220px";
    devicesPanelBottom.style.width =    "450px";
    devicesPanelBottom.style["padding-top"] =       "20px";
    devicesPanelBottom.style["padding-bottom"] =    "20px";
    devicesPanelBottom.style["border-radius"] =     "0 0 10px 10px";
    devicesPanelBottom.style["font-family"] =       "Courier New";
    devicesPanelBottom.style["background-color"] =  "rgba(230, 230, 230, 0.95)";
    devicesPanelBottom.style["overflow-y"] =        "auto";
    // This is a hacky workaround to prevent the overflow scrollbar from breaking the rounded
    // corners of the child div:
    let wrapperDiv = document.createElement("div");
    wrapperDiv.id =             "devicePanelBottomWrapper";
    wrapperDiv.style.position = "absolute";
    wrapperDiv.style.color =    "#000";
    wrapperDiv.style.height =   "240px";
    wrapperDiv.style.width =    "450px";
    wrapperDiv.style.left =     "20px";
    // Below: Not sure why 40 px instead of 20 px is needed...
    wrapperDiv.style.top =      (window.innerHeight - (220 + 40 + 50)) + "px";
    wrapperDiv.style["border-radius"] =     "0 0 10px 10px";
    wrapperDiv.style["font-family"] =       "Courier New";
    wrapperDiv.style["background-color"] =  "rgba(230, 230, 230, 0.5)";
    wrapperDiv.style["overflow"] = "hidden";

    wrapperDiv.appendChild(devicesPanelBottom);
    document.getElementById("parent").appendChild(wrapperDiv);

    // Show the first table by default:
    switchToTableNumber(0);
}

function createDevicesTable(colNames, type) {
    let lowerHalfInnerTable = document.createElement("table");
    lowerHalfInnerTable.id = "devicesTable";
    lowerHalfInnerTable.style.width = "90%";
    lowerHalfInnerTable.style["border-collapse"] = "collapse";
    lowerHalfInnerTable.style["font-size"] = "16px";
    lowerHalfInnerTable.style["text-align"] = "center";
    lowerHalfInnerTable.style["margin-left"] = "auto";
    lowerHalfInnerTable.style["margin-right"] = "auto";
    // lowerHalfInnerTable.style["background-color"] = "green";
    let tBody = document.createElement("tbody");
    // Create lowerHalfInnerTable header:
    let tHead = document.createElement("thead");
    // tHead.style["text-align"] = "center";
    let thr = document.createElement("tr");
    thr.style.height = "42px";
    thr.style["color"] = "#AAA";
    let th1 = document.createElement("th");
    th1.style.width = "33%";
    th1.appendChild(document.createTextNode(colNames[0]));
    let th2 = document.createElement("th");
    th2.style.width = "33%";
    th2.appendChild(document.createTextNode(colNames[1]));
    let th3 = document.createElement("th");
    th3.appendChild(document.createTextNode(colNames[2]));
    thr.appendChild(th1);
    thr.appendChild(th2);
    thr.appendChild(th3);
    tHead.appendChild(thr);
    lowerHalfInnerTable.appendChild(tHead);
    // Create main lowerHalfInnerTable rows:
    // TODO: Replace this with real text later:
    let rowsJSON = [];
    // TODO: Remove hard-coded logic:
    switch (type) {
        case "securityCamera":
            let cameras = allObjects.filter(ea => ea.info.subType === "securityCamera");
            cameras.forEach((ea) => {
                let center = ea.getCenter();
                rowsJSON.push([
                    ea.info.label,
                    center.x.toFixed(2) + ", " + center.y.toFixed(2),
                    strings.locate,
                    ea.name
                ]);
            });
            break;
        case "waterTank":
            let waterTanks = allObjects.filter(ea => ea.info.subType === "waterTank");
            waterTanks.forEach((ea) => {
                let center = ea.getCenter();
                rowsJSON.push([
                    ea.info.label,
                    center.x.toFixed(2) + ", " + center.y.toFixed(2),
                    strings.locate,
                    ea.name
                ]);
            });
            break;
        case "building":
            let buildings = allObjects.filter(ea => ea.info.type === "building" && ea.name !== "water_tank");
            buildings.forEach((ea) => {
                let center = ea.getCenter();
                rowsJSON.push([
                    ea.info.label,
                    "---",
                    strings.locate,
                    ea.name
                ]);
            });
            break;
        default:
            break;
    }
    rowsJSON.sort((a, b) => {
        var aA = a[0].replace(/[^a-zA-Z]/g, "");
        var bA = b[0].replace(/[^a-zA-Z]/g, "");
        if (aA === bA) {
            var aN = parseInt(a[0].replace(/[^0-9]/g, ""), 10);
            var bN = parseInt(b[0].replace(/[^0-9]/g, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    });
    rowsJSON.forEach((row, index) => {
        let tr = document.createElement("tr");
        tr.style.height = "42px";
        let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(row[0]));
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(row[1]));
        let td3 = document.createElement("td");
        let td3Link = document.createElement("a");
        td3Link.href = "#";
        td3Link.innerHTML = row[2];
        td3Link.style.color = "#00F";
        td3Link.setAttribute("onclick", "myApp.cameraFeature.locate(\"" + row[3] + "\")");
        td3.appendChild(td3Link);

        if (index !== 0) {
            td1.style["border-top"] = "0.5px solid #CCC";
            td2.style["border-top"] = "0.5px solid #CCC";
            td3.style["border-top"] = "0.5px solid #CCC";
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tBody.appendChild(tr);
    });
    lowerHalfInnerTable.appendChild(tBody);
    return lowerHalfInnerTable;
}

function switchToTableNumber(num) {
    muteAllDevicePanelButtonsExceptFor(num);
    highlightButton(num);

    let existingTable = document.getElementById("devicesTable");
    let devicesTable;
    switch (num) {
        case 0:
            if (existingTable !== null) {
                existingTable.remove();
            }
            devicesTable = createDevicesTable([strings.device, strings.position, strings.operation], "securityCamera", allObjects);
            document.getElementById("devicePanelBottom").appendChild(devicesTable);
            break;
        case 1:
            if (existingTable !== null) {
                existingTable.remove();
            }
            devicesTable = createDevicesTable([strings.device, strings.position, strings.operation], "waterTank", allObjects);
            document.getElementById("devicePanelBottom").appendChild(devicesTable);
            break;
        case 2:
            if (existingTable !== null) {
                existingTable.remove();
            }
            devicesTable = createDevicesTable([strings.building, strings.admin, strings.operation], "building", allObjects);
            document.getElementById("devicePanelBottom").appendChild(devicesTable);
            break;
    }
}

function muteAllDevicePanelButtonsExceptFor(num) {
    let buttonIDs = [0, 1, 2];
    let buttonIDsToMute = buttonIDs.filter(ea => ea !== num); // eslint-disable-line arrow-parens
    buttonIDsToMute.forEach((id) => {
        let icon = document.getElementById("devicesPanelIcon" + (id + 1));
        icon.setAttribute("src", "./assets/" + getButtonsIconFilename(id, false) + ".png");
        let label = document.getElementById("devicesPanelLabel" + (id + 1));
        label.style.color = "#333";
    });
}

function highlightButton(num) {
    let icon = document.getElementById("devicesPanelIcon" + (num + 1));
    icon.setAttribute("src", "./assets/" + getButtonsIconFilename(num, true) + ".png");
    let label = document.getElementById("devicesPanelLabel" + (num + 1));
    label.style.color = "#39A5F7";
}

function getButtonsIconFilename(num, on) {
    switch (num) {
        case 0: return "8a-" + ((on) ? "blue" : "grey");
        case 1: return "8b-" + ((on) ? "blue" : "grey");
        case 2: return "8c-" + ((on) ? "blue" : "grey");
    }
}

function togglePipeline() {
    bShowPiples = !bShowPiples;

    if (!myApp.initPipelines) {
        config = [
            {
                name: "1",
                route: [
                    [91.317, 13.007, 1.805],
                    [89.58, 14.666, 1.805],
                    [89.58, 14.666, -8.195],
                    [-4.766, 114.341, -8.195],
                    [-4.766, 114.341, 1.805],
                    [-9.0, 118.5, 1.805],
                    [-108.5, 45.0, 1.805],
                    [-108.5, 45.0, -8.195],
                    [-93.0, 25.0, -8.195],
                    [-93.0, 25.0, 1.805],
                    [-92.0, 23.7, 1.805]
                ],
                style: {
                    color:              0xffffff,
                    textureUrl:            "./assets/arrows/arrows_red.png",
                    textureRotation:    0,
                    speed:              10,
                    radius:             1,
                    textureUnitS:  2,
                    textureUnitT:  2,
                    routeType:           1,
                    connectionRadius:   0.5
                }
            },
            {
                name: "2",
                route: [
                    [21.49, 86.601, -8.195],
                    [-8.65, 58.236, -8.195],
                    [-8.65, 58.236, 1.805],
                    [-9.324, 57.579, 1.805]
                ],
                style: {
                    color:              0xffffff,
                    textureUrl:            "./assets/arrows/arrows_green.png",
                    textureRotation:    0,
                    speed:              2,
                    radius:             1,
                    textureUnitS:  2,
                    textureUnitT:  2,
                    routeType:           1,
                    connectionRadius:   0.5,
                    tubularSegments: 2048
                }
            },
            {
                name: "3",
                route: [
                    [93.254, 14.705, 1.805],
                    [91.517, 16.364, 1.805],
                    [91.517, 16.364, -8.195],
                    [-2.83, 116.039, -8.195],
                    [-2.83, 116.039, 1.805],
                    [-8.5, 122.0, 1.805],
                    [-113.0, 45.0, 1.805],
                    [-113.0, 45.0, -8.195],
                    [-96.0, 23.0, -8.195],
                    [-96.0, 23.0, 1.805],
                    [-94.9, 21.6, 1.805]
                ],
                style: {
                    color:              0xffffff,
                    textureUrl:            "./assets/arrows/arrows_yellow.png",
                    textureRotation:    0,
                    speed:              5,
                    radius:             0.5,
                    textureUnitS:  2,
                    textureUnitT:  2,
                    routeType:           1,
                    connectionRadius:   0.5,
                    tubularSegments: 3000
                }
            }
        ];

        myApp.pipelineFeature.init(config, ["a4", "a8", "a9", "a10", "a11", "a12"]);
        myApp.pipelineFeature.onEvent(APP3D.Events.MOUSE_LEFT, myApp.onSelect.bind(myApp));
        myApp.initPipelines = true;
    }

    if (bShowPiples) {
        myApp.app3dApp.getCurrentCamera().cancelAllAnimations();
        myApp.pipelineFeature.showPipes();
        myApp.enableFlyto = false;
    } else {
        myApp.hidePipelines();
        myApp.enableFlyto = true;
    }
}

function toggleEmergency() {
    bShowEmergency = !bShowEmergency;

    var birdf = myApp.app3dApp.queryForObject("flamingo")[0];
    var birds = myApp.app3dApp.queryForObject("stork")[0];
    var car = myApp.app3dApp.queryForObject("car")[0];
    var lawnmower = myApp.app3dApp.queryForObject("lawnmower")[0];

    var buildings = [];
    var numToSetFire = 1;
    var flag = [];
    var toAlarmBuildings = [];

    buildings = myApp.app3dApp.queryForObject("^(a[0-9]*)$");
    buildings.forEach((element) => {
        flag.push(false);
    });

    if (bShowEmergency) {
        if (birdf !== undefined) {
            birdf.setVisibility(false);
        }
        if (birds !== undefined) {
            birds.setVisibility(false);
        }
        if (car !== undefined) {
            car.setVisibility(false);
        }
        if (lawnmower !== undefined) {
            lawnmower.setVisibility(false);
        }

        if (myApp.getSelectedObject() !== null) {
            myApp.app3dApp.showOutline();
            myApp.getSelectedObject().removeLabel();
            myApp.app3dApp.hideAttributesBox("objectAttrBox");
        }

        for (let i = 0; i < numToSetFire; i++) {
            while (true) {
                var pos = Math.floor(Math.random() * buildings.length);
                if (pos < 0 || pos > buildings.length - 1) {
                    console.log("error!");
                }
                if (!flag[pos]) {
                    toAlarmBuildings.push(buildings[pos].name);
                    flag[pos] = true;
                    break;
                }
            }
        }

        myApp.ignoreSelectionList = [];
        for (let i = 0; i < buildings.length; ++i) {
            if (!flag[i]) {
                myApp.ignoreSelectionList.push(buildings[i]);
            }
        }
        myApp.ignoreSelectionList = myApp.ignoreSelectionList.concat(myApp.app3dApp.queryForObject("^(elevator|a7_tree|tank1_a[0-9]*|camera_[0-9]*)$"));

        myApp.emergencyFeature.show(toAlarmBuildings);
    } else {
        if (birdf !== undefined) {
            birdf.setVisibility(true);
        }
        if (birds !== undefined) {
            birds.setVisibility(true);
        }
        if (car !== undefined) {
            car.setVisibility(true);
        }
        if (lawnmower !== undefined) {
            lawnmower.setVisibility(true);
        }

        myApp.ignoreSelectionList = [];

        myApp.emergencyFeature.restore();
    }
}

function toggleEnergyUsage() {
    bShowEnergyUsage = !bShowEnergyUsage;

    if (bShowEnergyUsage) {
        myApp.energyUsageFeature.showEnergyCube(bShowEnergyUsage);
        myApp.energyUsageFeature.energyCubes.forEach((energyBox) => {
            energyBox.scale.set(1, .1, 1);
            energyBox.scaleTo({x: 1, y: 1, z: 1}, 35, null);
        });

    } else {
        myApp.energyUsageFeature.showEnergyCube(bShowEnergyUsage);
    }
}
