const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org/?format=json')
}
const fetchCoordsByIP = function(body) {
  const ipAddress = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ipAddress}`)

}


module.exports = {
  fetchMyIp,
  fetchCoordsByIP
}