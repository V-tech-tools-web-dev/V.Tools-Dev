var fs = require('fs');
const path = require('path');



const vGd_Cfg = { 
  name : "V_Guard_Config",
  description: fs.readFileSync( path.join(__dirname, './src/cfg/description.txt') ),
  mode : fs.readFileSync( path.join(__dirname, './src/cfg/mode.txt') ),
  version: fs.readFileSync( path.join(__dirname, './src/cfg/description.txt') ),
};

module.exports = vGd_Cfg;
