const { DataTypes } = require('sequelize');
const db = require('./index');

const roleModel = db.define('Role', {
    name: DataTypes.STRING,
    descrption: DataTypes.STRING
});

module.exports = roleModel;