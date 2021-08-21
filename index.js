
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (const times of Object.values(passTimes.response)) {
    const dateConversation = new Date(0);
    dateConversation.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${dateConversation.toUTCString()} for ${times.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});