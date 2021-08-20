// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//   }
//   console.log(`It worked! Returned IP ${ip}.`);
// })


// fetchCoordsByIP("209.89.80.154", (error, coordinates) => {
//   if(error) {
//     console.log(`It didn't work!, ${error}.`);
//     return;
//   }
//   console.log("It worked! Returned coordinates: ", coordinates);
// });

fetchISSFlyOverTimes({ latitude: 50.9157, longitude: -113.892 }, (error, times) => {
  if (error) {
    console.log(`It didn't work!: Error ${error}.`);
    return;
  }
  console.log("It worked! Returned times: ", times);
});