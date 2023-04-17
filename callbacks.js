//manejo de asincronimo con callbacks/continuaciones


const fs = require('fs')

fs.readFile('magic.json', { encoding: 'utf8' }, (err, data) => {
    console.log('Termine de leer el archivo')
    const jsonFile = JSON.parse(data)
    console.log(jsonFile.name)
})


