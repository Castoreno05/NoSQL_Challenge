const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { user, thoughts } = require('./data');

connection.on('Error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');

    await User.deleteMany({});
    await Thoughts.deleteMany({});

    await User.collection.insertMany(user);
    await Thoughts.collection.insertMany(thoughts);

    console.table(user);
    console.table(thoughts);
    console.info('Database has been seeded');
    process.exit(0);
});