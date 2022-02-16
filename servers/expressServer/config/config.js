let config = {
    environment:    (process.argv[2] !== undefined) ? process.argv[2] : "local"
};

config.acceptedEnvironments = [
    "local",
    "test"
];

if (config.environment === "local") {
    config.serverHost =         "localhost";
    config.expressPortNum =     8000;
    config.displayedPortNum =   8000;
}
if (config.environment === "test") {
    config.serverHost =         "207.34.103.154";
    config.expressPortNum =     7000;
    config.displayedPortNum =   7000;
}

if (config.acceptedEnvironments.includes(config.environment) == false) {
    throw new Error("Error: Invalid environment name. Please check your config file.");
}

module.exports = config;
