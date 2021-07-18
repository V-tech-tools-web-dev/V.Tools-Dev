const { Command, flags } = require('@oclif/command')
const { exec } = require('child_process')

function bashDo(inputCommand = '') {
  exec(inputCommand, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
    }
  })
}
class InstallCommand extends Command {
  async run() {
    const { flags } = this.parse(InstallCommand)
    const name = flags.name || 'world'
    this.log(
      `hello ${name} from C:\\Users\\slavk\\V.Tools-DevSetup\\src\\commands\\install.js`
    )
    bashDo('PWD')
    bashDo('echo "YEAAAA" ')
    bashDo('ls -al')
    bashDo('echo $PWD && cd .. && echo $PWD')
  }
}

InstallCommand.description = `Describe the command here
...
Extra documentation goes here
`

InstallCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = InstallCommand
