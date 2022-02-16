// This module is a wrapper of the nodejs require() function.
// It defines the relative paths and names for each customized
// module used by this project.

module.exports = function(moduleName) {
    switch (moduleName) {
        // ------- Common modules --------------------
        case "config":              return reqFile("./config/config.js");
        case "consts":              return reqFile("./config/constants.js");
        case "errorResponse":       return reqFile("./common/errorResponse.js");
        case "logger":              return reqFile("./common/tracer.js");
            // -------- Modules used by app.js --
        case "router":              return reqFile("./routes/router.js");

        default: throw new Error(moduleName + " module not found.");
    }
};
