const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://komagumobonyo:G89uxVxOPI6Ag3u2@cluster0.p9gn28p.mongodb.net/learn';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect(MONGO_URL);
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}