let express = require("express");
let router = express.Router();

let config = require("../config/config.js");
let sagwStrings = require("../../../applications/sagw/assets/strings.js");
let demo2Strings = require("../../../applications/demo2/assets/strings.js");
let cnafStrings = require("../../../applications/cnaf/assets/strings.js");
let darkStrings = require("../../../applications/darkStyle/assets/strings.js");

// ----------------------- demo2 Project ------------------------------

router.get("/demo2/anyue", (req, res, next) => {
    res.render("../../../applications/demo2/views/anyue", {
        siteFilename: "anyue/siteObj.js",
        strings: demo2Strings
    });
});

router.get("/demo2/substation", (req, res, next) => {
    res.render("../../../applications/demo2/views/substation", {
        siteFilename: "substation/siteObj.js",
        strings: demo2Strings
    });
});

router.get("/demo2/map", (req, res, next) => {
    res.render("../../../applications/demo2/views/map", {
        siteFilename: "map/siteObj.js",
        strings: demo2Strings
    });
});

// ------------------------ SAGW Project ------------------------------

router.get("/sagw/room1", (req, res, next) => {
    res.render("../../../applications/sagw/views/room1", {
        siteDir: "room1",
        strings: sagwStrings
    });
});

router.get("/sagw/room2", (req, res, next) => {
    res.render("../../../applications/sagw/views/room2", {
        siteDir: "room2",
        strings: sagwStrings
    });
});

router.get("/sagw/room3", (req, res, next) => {
    res.render("../../../applications/sagw/views/room3", {
        siteDir: "room3",
        strings: sagwStrings
    });
});

router.get("/sagw/room4", (req, res, next) => {
    res.render("../../../applications/sagw/views/room4", {
        siteDir: "room4",
        strings: sagwStrings
    });
});

router.get("/sagw/room5", (req, res, next) => {
    res.render("../../../applications/sagw/views/room5", {
        siteDir: "room5",
        strings: sagwStrings
    });
});

router.get("/sagw/outdoors", (req, res, next) => {
    res.render("../../../applications/sagw/views/outdoors", {
        siteDir: "outdoors",
        strings: sagwStrings
    });
});

// ------------------------ ChinaMobilee Project ------------------------------

router.get("/chinamobile/idc1", (req, res, next) => {
    res.render("../../../applications/chinaMobile/views/chinaMobile", {
        siteFilename: "siteObj.js",
        strings: demo2Strings
    });
});

// ------------------------ CNAF Project ------------------------------

router.get("/cnaf/level2_1", (req, res, next) => {
    res.render("../../../applications/cnaf/views/level2_1", {
        siteDir: "level2_1",
        strings: cnafStrings
    });
});

router.get("/cnaf/level2_2", (req, res, next) => {
    res.render("../../../applications/cnaf/views/level2_2", {
        siteDir: "level2_1",
        strings: cnafStrings
    });
});

router.get("/cnaf/level2_3", (req, res, next) => {
    res.render("../../../applications/cnaf/views/level2_3", {
        siteDir: "level2_3",
        strings: cnafStrings
    });
});

router.get("/cnaf/level1", (req, res, next) => {
    res.render("../../../applications/cnaf/views/level1", {
        siteDir: "level1",
        strings: cnafStrings
    });
});

// ------------------------ Dark Style Project ------------------------------

router.get("/darkStyle/level1", (req, res, next) => {
    res.render("../../../applications/darkStyle/views/level1", {
        siteDir: "level1",
        strings: darkStrings
    });
});

module.exports = router;
