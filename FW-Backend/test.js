var process = require('process')
var dataStore = require('./classCreation')

if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
    console.error('Commond doesnot exists')
} else {
     (async() => {
        var input = new dataStore(process.argv[3], process.argv[4], process.argv[5])
        if(process.argv[2] === 'create') await input.create() // To run the code use the command "npm test create path key value"
        if(process.argv[2] === 'read') await input.read().then((res) => console.log(res))// To run the code use the command "npm test read path key"
        if(process.argv[2] === 'delete')await input.delete().then(()=>console.log('Completed delete operation'))// To run the code use the command "npm test delete path key"
    })()
}  
