const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }
    
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, function(error, serverResponse, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (serverResponse.statusCode !== 200) {
      const msg = `Status code ${serverResponse.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }
    const { response } = JSON.parse(body);
    callback(null, { response });
  });
};

module.exports = {
  fetchCoordsByIP,
  fetchMyIP,
  fetchISSFlyOverTimes
};