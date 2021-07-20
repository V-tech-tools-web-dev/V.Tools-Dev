
var BashDo = require('../general_helpers/bash_do')

exports.items = function (){
    var output = BashDo.tryto('npm list -g --depth 0')
    this.log('yeaa')
    return output
}
