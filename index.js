const fs = require('fs')
const inquirer = require('inquirer')

let path = ''

const ai = {
  name: 'Adobe Illustrator',
  value: '///Applications/Adobe Illustrator CC 2017/Support Files/AMT/AI/AMT/application.xml'
}

const ps = {
  name: 'Adobe Photoshop',
  value: '///Applications/Adobe Illustrator CC 2017/Support Files/AMT/AI/AMT/application.xml'
}

const question = {
  type: 'list',
  name: 'path',
  message: 'Which application do you want to crack?',
  choices: [ai, ps]
}

inquirer.prompt(question).then(function (answers) {
    console.log(answers)
    path = answers.path
    console.log(path)
    readFile(modifyFile)
})

function readFile(cb) {
  fs.readFile(path, function(err, xml) {
    if(err) throw err

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
  console.log('Trial cracked. If not, run the program again. Only cracks AI.')
}
