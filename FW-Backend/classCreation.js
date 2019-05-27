var kfs = require('./script')

class dataStore {
    constructor(path, key, value) {
        this.path = path
        this.key = key
        this.value = value
    }
    async create() {
        return await kfs.createFile(this.path,this.key,this.value)
    }
    async read() {
        return  await kfs.readFile(this.path,this.key)
    }
    async delete() {
        return await kfs.deleteFile(this.path,this.key)
    }
}

module.exports = dataStore