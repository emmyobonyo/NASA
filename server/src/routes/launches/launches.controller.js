const {
  launches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById
} = require('../../models/launches.model');

function getAllLaunches (req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLaunch(req, res) {
  const launch = req.body

  for (var i = 0; i < Array.from(launches.values()).length; i++) {
    if (Array.from(launches.values())[i].mission === launch.mission) {
      return res.status(400).json({
        error: 'The launch already exists'
      })
    }
  }

  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
    return res.status(400).json({
      error: 'Missing required launch property'
    })
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)){
    return res.status(404).json({
      error: 'Invalid date format'
    })
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;

  // if launch doesn't exist
  if(!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: 'Launch not found'
    })
  }

  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

module.exports = {
  getAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
}