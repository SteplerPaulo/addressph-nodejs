module.exports = function (app) {
    const api = require('../controller/api.controller.js');

    //Api Route
    app.get('/api/:model', api.findAllQuery);

}