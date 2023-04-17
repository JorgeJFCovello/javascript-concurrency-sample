// como se maneja la concurrencia en javascript?
// Event loop
/*
index
inicio de loop
    setTimeout/SetInterval
    js
    network/disk/process
    js
    setImmediate
    js
    close events
    js
fin de loop
exit
*/

setTimeout(() => console.log('Hola'), 3000)
setTimeout(() => {
    console.log('1'), 1000
    setTimeout(() => {
        console.log('2')
        setTimeout(() => console.log('3'), 1000)
    }, 1000)
})
