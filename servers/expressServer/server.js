reqFile = require.main.require; // eslint-disable-line no-unused-vars

// ---------------------------- TRACER LOGGING --------------------------------
// Need to declare this up front so other modules can use it
let clic = require("cli-color");
// "colors" is used by the 'tracer.js' module to format its output in various colours,
// as seen in the "<text>".colourName usages below.
require("colors");
let opts = {
    format: "{{timestamp}}".bold.cyan + " {{file}}:{{line}}".bold.blue + " {{message}}",
    dateformat: "yyyy-mm-dd - HH:MM:ss",
    filters: {
        // log:     clic.blue,
        trace: clic.magentaBright,
        debug: clic.cyanBright.bold.bgXterm(232),
        // info:   clic.greenBright,
        warn: clic.xterm(202),
        error: clic.red.bold
    },
    level: parseInt((process.argv[2]) ? process.argv[2] : 3)
};
logger = require("tracer").colorConsole(opts);

// "tracer" module logging levels. Setting your logging level to "N" will output every
// message that is "N" or higher. "debug" should be used whenever a piece of information
// would be useful for debugging but isn't relevant for regular operation. These can
// therefore be shown or hidden by setting the logging level to "2" or "3", respectively.
// logger.log("Level 0: log");       // Level 0
// logger.trace("Level 1: trace");   // Level 1
// logger.debug("Level 2: debug:");  // Level 2
// logger.info("Level 3: info");     // Level 3
// logger.warn("Level 4: warn");     // Level 4
// logger.error("Level 5: error");   // Level 5
// ----------------------------------------------------------------------------

reqModule = reqFile("./common/globalCustomizedRequire.js");
let config = reqModule("config");
let consts = reqModule("consts");
let errorResp = reqModule("errorResponse");

let express = require("express");
let path = require("path");
let https = require("https");
let http = require("http");
let compression = require("compression");
let favicon = require("serve-favicon");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let cors = require("cors");

let api = reqModule("router");

// --------------------------- EXPRESS APP SETUP ------------------------------
let app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(favicon(path.join(__dirname, "../assets", "favicon.ico")));

// // ---------------------------- MORGAN LOGGING ---------------------------------

// let morgan; // For logging
// // Custom formatting callback
// morgan = require("morgan");
// app.use(morgan((tokens, req, res) => {
//     let reqURL = "";
//     if (tokens.url(req, res) !== undefined && tokens.url !== null) {
//         reqURL = tokens.url(req, res).toString();
//     } else {
//         logger.error("Error: Morgan received tokens.url(req, res) = " + tokens.url(req, res));
//     }

//     // console.log("Remote IP: " + req.ip.toString().length, true);
//     // Format to IPv4 for now
//     let ipAddr = "";
//     if (req.ip !== undefined && req.ip !== null) {
//         ipAddr = req.ip.toString();
//         let doubleColon = ipAddr.indexOf("::");
//         if (doubleColon >= 0) {
//             ipAddr = ipAddr.substr(doubleColon + 2, ipAddr.length);
//             // console.log(ipAddr, true);
//             if (ipAddr.length == 1 && ipAddr == "1")
//                 ipAddr = "127.0.0.1";
//             else if (ipAddr.indexOf(":") > 0) {
//                 ipAddr = ipAddr.substr(ipAddr.indexOf(":") + 1, ipAddr.length);
//             } else {
//                 // Leave it as is
//             }
//         }
//     } else {
//         logger.error("Error: Morgan received req.ip = " + req.ip);
//     }


//     // Format response times
//     let redThreshold = 600;
//     let magentaThreshold = 100;
//     let respTime = parseInt(tokens["response-time"](req, res));
//     let respTimeStr = respTime + "ms";
//     let respTimeFmtd = (respTime >= redThreshold) ? respTimeStr.bold.red : ((respTime > magentaThreshold && respTime < redThreshold) ? respTimeStr.bold.magenta : respTimeStr);

//     let reqStatus = tokens.status(req, res) + "";
//     if (tokens.status(req, res) === undefined || tokens.status(req, res) === null) {
//         logger.error("Error: Morgan received tokens.status(req, res) = " + tokens.status(req, res));
//     }

//     return [
//         tokens.method(req, res),
//         ipAddr.bold.blue,
//         ((reqURL.length > 91 - ipAddr.length) ? reqURL.substr(0, 91 - ipAddr.length) + "...".bold : reqURL),
//         ((reqStatus.substr(0, 1) == "2" || reqStatus.substr(0, 1) == "3") ? reqStatus.green : reqStatus.red),
//         respTimeFmtd
//     ].join(" ");
// }));

app.use("/", api);

// Map all publicly-accessible directories to a set of logical endpoints:
app.use("/applications", express.static(path.join(__dirname, "../../applications")));
app.use("/libs", express.static(path.join(__dirname, "../../libs")));
app.use("/features", express.static(path.join(__dirname, "../../features")));
// Application-specific:
app.use("/sagw", express.static(path.join(__dirname, "../../applications/sagw")));
app.use("/demo2", express.static(path.join(__dirname, "../../applications/demo2")));
app.use("/chinaMobile", express.static(path.join(__dirname, "../../applications/chinaMobile")));
app.use("/cnaf", express.static(path.join(__dirname, "../../applications/cnaf")));
app.use("/darkStyle", express.static(path.join(__dirname, "../../applications/darkStyle")));

// Catch 404s and forward to the default error handler (below this function):
app.use((req, res, next) => {
    let err = new Error("Invalid URL");
    err.status = 404;
    next(err);
});

// Default error handler:
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    logger.error(err); // So we can get the full stack trace in the console
    errorResp.send(res, consts.error.serverErrorLabel, err.message, err.status || 500);
    next();
});

app.set("view engine", "ejs");

http.createServer(app).listen(config.expressPortNum, function () {
    logger.info("http server running at port: " + config.expressPortNum + "...");
});
logger.info("Starting web API server");
logger.info("Environment:", config.environment);

process.on("unhandledRejection", (reason, promise) => {
    logger.info("Unhandled Rejection at", promise);
});

module.exports = app;
