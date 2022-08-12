const $api = require("../http/http");
const {IntegrationModel} = require("../models/models");
const {DataTypes} = require("sequelize");

class appController {
    async dealTransfer(req, res, next) {
        try {
            const {as, subject, nameex, data, catex, name, phone, email, polic} = req.body.data

            console.log(req.body)

            await $api.post('api/v4/leads', [{name: name}])
            res.end();
        } catch (e) {
            next(e);
        }
    }

    async getDeals(req, res, next) {
        try {
            let leads = await $api.get('api/v4/leads');
            console.log(leads);
            res.send("ok")
        } catch (e) {
            next(e);
        }
    }

    async addIntegration(req, res, next) {
        try {
            await IntegrationModel.create({
                name: req.body.name,
                client_id: req.body.client_id,
                client_secret: req.body.client_secret,
                redirect_uri: req.body.redirect_uri,
                access_token: req.body.access_token,
                refresh_token: req.body.refresh_token,
            });
            res.json("ok");
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new appController();