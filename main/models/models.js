const sequelize = require("../config/db-config");
const {DataTypes} = require("sequelize");

const IntegrationModel = sequelize.define("integration", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, required: true},
    client_id: {type: DataTypes.STRING, required: true},
    client_secret: {type: DataTypes.STRING, required: true},
    redirect_uri: {type: DataTypes.STRING, required: true},
    access_token: {type: DataTypes.STRING(1000), required: true},
    refresh_token: {type: DataTypes.STRING(1000), required: true},
})

module.exports = {IntegrationModel}