const request = require('request');

const fetchMyIP = function() {
  request('https://api.ipify.org/?format=json', function (error, response, body) {
  
  });
}

module.exports = {
  fetchMyIP
}