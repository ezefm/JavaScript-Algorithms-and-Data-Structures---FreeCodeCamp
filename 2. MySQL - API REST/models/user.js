const { DataTypes } = require('sequelize');
const db = require('./index');

const userModel = db.define('User', {
    //id: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    lastName: DataTypes.INTEGER,
    address: DataTypes.STRING,
});

module.exports = userModel;