const {Command, flags} = require('@oclif/command')

class InstallCommand extends Command {
  async run() {
    const {flags} = this.parse(InstallCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\slavk\\V.Tools-DevSetup\\src\\commands\\install.js`)
  }
}

InstallCommand.description = `Describe the command here
...
Extra documentation goes here
`

InstallCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InstallCommand
