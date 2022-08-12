const axios = require("axios");
const {IntegrationModel} = require("../models/models");

async function getIntegration(name) {
    let integration = await IntegrationModel.findOne({where: {name}});
    return integration;
}

const API_URL = 'https://pitertours.amocrm.ru/'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

$api.interceptors.request.use(async (config) => {
    const integration = await IntegrationModel.findOne({where: {name: "pitertours"}});
    config.headers.Authorization = `Bearer ${integration.access_token}`;
    return config;
})

// $api.interceptors.response.use((config) => {
//     return config;
// },  (async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const integration = getIntegration('pitertours');
//
//             const response = await axios.post(`${API_URL}oauth2/access_token`, {
//                 "client_id": integration.client_id,
//                 "client_secret": integration.client_secret,
//                 "grant_type": "refresh_token",
//                 "refresh_token": integration.refresh_token,
//                 "redirect_uri": integration.redirect_uri
//             });
//
//             integration.access_token = response.data.access_token;
//             integration.refresh_token = response.data.refresh_token;
//
//             await integration.save();
//
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН');
//         }
//     }
//     throw error;
// }))

module.exports = $api;