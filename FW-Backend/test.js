var dataStore = require('./classCreation')
var input = new dataStore('./file-store/',120,{"name": "Ram","age": "22","contact": "8524945848"})

//input.create()
async function execute(){
    await input.create()
    await input.read().then((res)=>console.log(res,'Completed read operation'))
  //  await input.delete().then(()=>console.log('Completed delete operation'))
}

execute()