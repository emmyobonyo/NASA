const launches = new Map();

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

module.exports = {
  launches,
}