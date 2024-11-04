'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, Op } = require('sequelize');
const process = require('process');
const initModels = require('./init-models');
const basename = path.basename(__filename);
const env = 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

// initModels(db.sequelize);
// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Database is synchronized");
//     // Start your server
//   })
//   .catch(error => {
//     console.error("Error synchronizing the database:", error);
//   });

module.exports = db;