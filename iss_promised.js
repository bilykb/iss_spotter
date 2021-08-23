const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org/?format=json')
}
const fetchCoordsByIP = function(body) {
  const ipAddress = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ipAddress}`)
}

const fetchISSFlyOverTimes = function(body) {
  const geoLocation = JSON.parse(body)
  return request(`http://api.open-notify.org/iss-pass.json?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation
}