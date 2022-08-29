// Requrire mongoose 
const { connect, connection } = require('mongoose');

// Search/Create database after using localhost 
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialNetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
