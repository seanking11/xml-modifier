const fs = require('fs')

program()

function program() {
  // Read file, store in string
  const xml = readFile()
  modifyFile(xml)
  // Alter string
  // Delete old file
  // Paste/make new file called application.xml
}

function readFile() {
  fs.readFile('application.xml', function(err, xml) {
    if(err)
      console.log('Something went wrong with reading the file.', err)
      else {
        console.log('File read.')
        // modifyFile(xml.toString())
        return xml.toString()
      }
    })
}

function modifyFile(oldXML) {
  // console.log(oldXML)
  const myRegexp = new RegExp('TrialSerialNumber">(\d+)');
  const match = myRegexp.exec(oldXML)
  // const match = myRegexp.test(oldXML)
  // const newXML = regexp(oldXML, '(?:TrialSerialNumber">)\d+')
  console.log(match)
}
