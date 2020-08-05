const fs = require('fs')

getToken = () => {
    try {
        const token = fs.readFileSync('./config/token', 'utf8')
        return token
    } catch (err) {
        console.error(err)
        return
    }
}

module.exports = getToken
