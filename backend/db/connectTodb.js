const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hrmsdemo', 'root', 'jothi@2114', {
  host: 'localhost',   // or 127.0.0.1
  port: 3306,          // default MySQL port
  dialect: 'mysql'
});

// const sequelize = new Sequelize('mysql://root:jothi%402114:3306/hrmsdemo') 

sequelize.authenticate()
.then(() => console.log(" Database connected"))
  .catch(err => console.log(" DB connection error: " + err));

  module.exports = sequelize;