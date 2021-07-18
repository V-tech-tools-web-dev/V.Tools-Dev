const {Command, flags} = require('@oclif/command')

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'guest'
    this.log(`hello ${name} from .\\src\\commands\\hello.js`)
  }
}

HelloCommand.description = `Will display intro "Welcome to V_Tool CLI!" 
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
