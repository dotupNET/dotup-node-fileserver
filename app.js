var express = require('express')
var serveIndex = require('serve-index')
var path = require("path");
var app = express()

let configDir = path.resolve(".");

if (process.env.NODE_ENV === 'production') {

  if (process.env.configFile) {
    configDir = process.env.configFile;
  } else {
    configDir = require('os').homedir();
  }
  
}
const configFile = path.join(configDir, ".dotup-node-fileserver.json");
var config = require(configFile);

// const dir = "C:/src/Beispiele/web/css";

// const filter = (filename, index, files, dir) => {
//   return true;
// }

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use(
  '/',
  express.static(config.dir),
  serveIndex(config.dir,
    {
      'icons': true
      // "filter": filter,
      // "template": "public/directory.html"
    }
  ))

// Listen
app.listen(config.port || 3000)
