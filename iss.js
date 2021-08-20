const request = require('request');

const fetchMyIP = function() {
  request('https://api.ipify.org/?format=json', function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      console.log(body);
      callback(null, body);
    }
  });
}

module.exports = {
  fetchMyIP
}