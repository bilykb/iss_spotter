const printPassTimes = passTimes => {
  for (const times of Object.values(passTimes.response)) {
    const dateConversion = new Date(0);
    dateConversion.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${dateConversion} for ${times.duration} seconds!`);
  }
};

module.exports = {
  printPassTimes
}