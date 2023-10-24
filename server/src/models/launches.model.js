const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNUmber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explore IS1',
  launchDate: new Date('December 27, 2030'),
  Destination: 'Kepler-442 b',
  Customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNUmber, launch)

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNUmber,
    Object.assign(launch, {
      upcoming: true,
      success: true,
      customers: [`ZTM`, 'NASA'],
      flightNUmber: latestFlightNumber,
  }));
}

module.exports = {
  launches,
  addNewLaunch,
}