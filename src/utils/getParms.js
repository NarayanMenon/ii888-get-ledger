const fs = require('fs')

getParms = () => {
    try {
        const parms = fs.readFileSync('./config/parms.json', 'utf8')
        return JSON.parse(parms)
    } catch (err) {
        console.error(err)
        return
    }
}

module.exports = getParms