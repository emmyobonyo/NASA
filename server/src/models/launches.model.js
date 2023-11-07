const launchesDatabase = require('./launches.mongo');

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 102,
  mission: 'Kepler Exploration X',
  rocket: 'Explore IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Another planet as well',
  Customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

saveLaunch(launch)

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

async function getAllLaunches() {
  return await launchesDatabase
    .find({}, { '_id': 0, '__v': 0 });
}


async function saveLaunch(launch) {
  await launchesDatabase.updateOne({
    flightNumber: launch.flightNumber,
  }, launch, {
    upsert: true,
  })
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      upcoming: true,
      success: true,
      customers: [`ZTM`, 'NASA'],
      flightNumber: latestFlightNumber,
  }));
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  launches,
  addNewLaunch,
  abortLaunchById,
  getAllLaunches,
}