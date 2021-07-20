const {Command, flags} = require('@oclif/command')
var requiredNPMg = require('../config/global_node_items')
var installedNPMg = require('../helpers/status_checks/node')

class StatusCommand extends Command {
  async run() {
    const {flags} = this.parse(StatusCommand)
    const nodeFlag = flags.node || '_empty_value_'
        
    switch (nodeFlag) {
      case 'help':
        this.log('++++++++++++++++++++++++++++++++')
        this.log('')
        this.log('Available flag command triggers:')
        this.log('[ NPMgListInstalled ] - Will List Installed Global NPM Items')
        this.log('[ NPMgListRequired ]  - Will Show Required Global NPM Items for v_tool to use')
        this.log('[ NPMgVstatus ]  - Will Show Required Global NPM Items for v_tool to use')
        this.log('')
        this.log('Example use:')
        this.log('v_tool status -n NPMgListRequired')
        this.log('v_tool status --name=NPMgListInstalled')
        this.log('')
        this.log('++++++++++++++++++++++++++++++++')
        break;
      
      case 'NPMgListInstalled':
        this.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        this.log('NPM LIST INSTALLED GLOBALS')
        this.log('Listing installed node global items: ')
        this.log(installedNPMg.items)
        this.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        break;

      case 'NPMgListRequired':
        this.log('====================================')
        this.log('NPM Global List Of REQUIRED ITEMS')
        //checking required global npm items
        this.log('  ')
        this.log('Listing required node global items: ')
        this.log(requiredNPMg.items)
        this.log(' ')
        this.log('====================================')
        break;

      case 'NPMgVstatus':
        this.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        this.log('I WILL DO THE ACTUALL CHECKUP IF REQUIRED ITEMS ARE INSTALLED.')
        this.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        break;

      default:
        this.log(`Empty --node (-n) flag value [check if required items are installed]`)
        
        break;
    }

  }
}

StatusCommand.description = `Get v_tool status of things
...
Extra documentation goes here
`

StatusCommand.flags = {
  node: flags.string({char: 'n', description: 'node and npm status checkup, try --node=help for more info'}),
  os_info: flags.string({char: 'o', description: 'operating system informations'})
}

module.exports = StatusCommand
