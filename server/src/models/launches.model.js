let launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explore IS1',
  launchDate: new Date('December 27, 2030'),
  Destination: 'Kepler-442 b',
  Customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch)

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
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
}