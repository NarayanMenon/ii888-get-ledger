const fs = require('fs')
const getToken = require('./utils/token')
const getParms = require('./utils/getParms')
const getLedger = require('./utils/getLedger')


const parms = getParms()
const token = getToken()

console.log(parms)
//console.log(token)

getLedger(token).then(json => {
    console.log(JSON.stringify(json))
})

