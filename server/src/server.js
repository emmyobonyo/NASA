const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app)

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://komagumobonyo:G89uxVxOPI6Ag3u2@cluster0.p9gn28p.mongodb.net/';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log('listening on port 8000');
  });
}

startServer();
