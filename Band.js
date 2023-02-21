const { db } = require('./db');
const { DataTypes } = require("sequelize");

// TODO - define the Band model
const Band = db.define("Band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};