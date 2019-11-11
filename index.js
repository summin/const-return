var babel = require("@babel/core");
var server = require('./src/server.js')

babel.transform(server, null);