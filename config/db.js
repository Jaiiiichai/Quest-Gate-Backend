const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    pool: {
        max: 1000,       // maximum number of connections in pool
        min: 0,       // minimum number of connections in pool
        acquire: 30000, // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000   // maximum time, in milliseconds, that pool will try to get a connection before throwing error
    },
    logging: console.log // log SQL queries for debugging
});

// Test the connection to make sure everything is set up correctly
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the database using Sequelize');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err.message);
    });

module.exports = sequelize;
