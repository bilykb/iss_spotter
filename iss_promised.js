const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org/?format=json')
}
const fetchCoordsByIP = function(body) {
  const ipAddress = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ipAddress}`)
}

const fetchISSFlyOverTimes = function(body) {
  const flyOverTimes = JSON.parse(body)
  return request(`http://api.open-notify.org/iss-pass.json?lat=${flyOverTimes.latitude}&lon=${flyOverTimes.longitude}`)
}

const nextISSTimesForMyLocation = function(body) {
  return fetchmyIp()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    const { response } = JSON.parse(body);
    return response;
  });
}

module.exports = {
  nextISSTimesForMyLocation
}