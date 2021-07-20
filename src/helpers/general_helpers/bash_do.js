//bash_do.js
const { exec } = require('child_process')

exports.tryto = function (inputCommand = '') {
  exec(inputCommand, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
      return false
    } else {
      // the *entire* stdout and stderr (buffered)
      if (stdout !== "") {
        console.log(stdout) 
      } else { 
        //console.log(`stdout is empty`) 
      }
      if (stderr !== ""){
        console.log(`stderr: ${stderr}`)
      }else{
        //console.log(`stderr is empty`)
      }
      return true
    }
  })
}

