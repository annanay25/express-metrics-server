// server.js : Web API Server entrypoint
var apiServer = require('express-api-server');

var options = {
    baseUrlPath: '/api',
    cors: {},
    sslKeyFile:  './keys/my-domain.key',
    sslCertFile: './keys/my-domain.crt',
};

var initRoutes = function(app, options) {
  console.log("Initiating routes \n");
    // Set up routes off of base URL path
    app.use(options.baseUrlPath, [
        require('./route-handler')
    ]);
};

apiServer.start(initRoutes, options);
