//manejo de asincronimo con Promises

const fs = require('fs')

const readFileWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile('magic.json', { encoding: 'utf8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
    promise.then((data) => {
        console.log('Termine de leer el archivo')
        const jsonFile = JSON.parse(data)
        console.log(jsonFile.name)
    }).catch(err => console.log('Error leyendo el archivo:', err))
}

readFileWithPromise()
