const { Command, flags } = require('@oclif/command')
const { exec } = require('child_process')

function bashDo(inputCommand = '') {
  exec(inputCommand, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
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
    }
  })
}
class InstallCommand extends Command {
  async run() {
    const { flags } = this.parse(InstallCommand)
    const name = flags.name || 'null'
    /*this.log(
      `hello ${name} from C:\\Users\\slavk\\V.Tools-DevSetup\\src\\commands\\install.js`
    )
    bashDo('PWD')
    bashDo('echo "YEAAAA" ')*/
    bashDo('start bash -c "echo $PWD; sleep 5s;"')
    //bashDo('start bash -c "echo $PWD && cd .. && echo $PWD"')
  }
}

InstallCommand.description = `Describe the command here
...
Extra documentation goes here
`

InstallCommand.flags = {
  tips: flags.string({ char: 't', description: 'print tips about install command' }),
}

module.exports = InstallCommand
