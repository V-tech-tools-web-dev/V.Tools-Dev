const { Command, flags } = require('@oclif/command')
var BashDo = require ('../helpers/general_helpers/bash_do')

class InstallCommand extends Command {
  async run() {
    const { flags } = this.parse(InstallCommand)
    const name = flags.name || ''
    /*this.log(
      `hello ${name} from C:\\Users\\slavk\\V.Tools-DevSetup\\src\\commands\\install.js`
    )
    bashDo('PWD')
    bashDo('echo "YEAAAA" ')*/
    BashDo.tryto('PWD')
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
