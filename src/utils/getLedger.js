const fetch = require('node-fetch')


getLedger = async (token) => {

    const response = await fetch('https://h4gxfk5yd8.execute-api.us-east-1.amazonaws.com/prod/ledger', {
      "method": 'POST',
      "body": JSON.stringify({ "owner": token }), 
      "headers": {
        "Content-Type": "text/plain"
      }
    });
    myJson = await response.json(); 
    
    return myJson;
  }

module.exports = getLedger
