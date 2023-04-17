// manejo de asincronismo con async/await

const { promises: fs } = require('fs')

const readFileUsingAsync = async () => {
    try {
        const data = await fs.readFile('magic.json');
        console.log('Termine de leer el archivo')
        const jsonFile = JSON.parse(data)
        console.log(jsonFile.name)
    } catch (err) {
        console.log('Error leyendo el archivo:', err)
    }
}

readFileUsingAsync()