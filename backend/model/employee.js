// const sequelize = require('../db/connectTodb');
// const {DataTypes} = require(sequelize);

const { DataTypes } = require("sequelize"); // Import DataTypes from sequelize package
const sequelize = require("../db/connectTodb"); // Import the configured instance

const Employee = sequelize.define("Employee",
{
    emp_id : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    emp_name : {
        type : DataTypes.STRING(150),
        allowNull: false
       
    },
    email : {
        type : DataTypes.STRING(150),
        allowNull: false
    },
    phone_no : {
        type : DataTypes.BIGINT,
        allowNull: false
    },
    alt_phone_no : {
        type : DataTypes.BIGINT,
        allowNull: true
    },
    address : {
        type : DataTypes.STRING(500),
        allowNull: false,
    },
    blood_group : {
        type : DataTypes.STRING(20),
        allowNull: false,
    },
    city : {
        type : DataTypes.STRING(50),
        allowNull: false,
    },
    state : {
        type : DataTypes.STRING(50),
        allowNull: false,
    },
    country : {
        type : DataTypes.STRING(50),
        allowNull: false,
      
    },
    emergency_contact_name : {
        type : DataTypes.STRING(100),
        allowNull: false,
      
    },
    emergency_contact_phno : {
        type : DataTypes.BIGINT,
        allowNull: false,
      
    },
    emergency_contact_relation : {
        type : DataTypes.STRING(100),
        allowNull: false,
      
    },
    aadhar_no : {
        type : DataTypes.STRING(12),
        allowNull: false,
      
    },
    pan_no : {
        type : DataTypes.STRING(20),
        allowNull: false,
      
    },
    status : {
        type : DataTypes.TINYINT,
        allowNull: false,
      
    },
    },{
    tablename : "employees",
    timestamps : true
}

);

module.exports = Employee;