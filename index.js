const fs = require('fs')

program()

function program() {
  // Read file, store in string
  const xml = readFile(modifyFile)
  // Alter string
  // Delete old file
  // Paste/make new file called application.xml
}

function readFile(cb) {
  fs.readFile('application.xml', function(err, xml) {
    if(err) throw err

    console.log('File read.')
    cb(xml.toString())
  })
}

function modifyFile(oldXML) {
  const myRegexp = /(TrialSerialNumber">)\d+/
  const match = oldXML.replace(myRegexp, function(m, p1, p2) {
    console.log(`Old serial number: ${p2}`)
    return `${p1}${generateNewNumber()}`
  })
  console.log(match)
}

function generateNewNumber() {
  return '123456789012345678901234'
}
