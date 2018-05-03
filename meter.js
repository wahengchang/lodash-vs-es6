const fs = require('fs')
const jm = require('js-meter')
const m = new jm({isPrint: false})

const fileName = process.argv[2]

if(fileName) require('./'+fileName)

const meter = m.stop({})

fs.writeFileSync('./report/'+fileName+'.json', JSON.stringify(meter), 'utf8')