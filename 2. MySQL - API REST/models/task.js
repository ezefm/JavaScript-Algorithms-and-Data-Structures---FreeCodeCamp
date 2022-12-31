const { DataTypes } = require('sequelize');
const db = require('./index');

const taskModel = db.define('Task', {
    name: DataTypes.STRING,
    descrption: DataTypes.STRING
});

module.exports = taskModel;