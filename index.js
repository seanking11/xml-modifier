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
  const path = '///Applications/Adobe Illustrator CC 2017/Support Files/AMT/AI/AMT/application.xml'
  fs.readFile(path, function(err, xml) {
    if(err) throw err

    console.log('File read.')
    cb(xml.toString(), writeFile)
  })
}

function modifyFile(oldXML, cb) {
  const myRegexp = /(TrialSerialNumber">)\d+/
  const match = oldXML.replace(myRegexp, function(m, p1, p2) {
    console.log(`Old serial number: ${m}`)
    const newNum = generateNewNumber()
    console.log(`New serial number: ${newNum}`)
    return `${p1}${newNum}`
  })
  cb(match)
}

function generateNewNumber() {
  return (Math.random().toString() + Math.random().toString()).split('.').join('').substring(1, 25)
}

function writeFile(contents) {
  fs.writeFile(path, contents)
  console.log('Trial cracked. If not, run the program again.')
}
