const sessionService = require('./session-service');

validateLoginDetails = (data) => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const session = new sessionService(data.username, tomorrow);
    let respose = {};
    if (true) {
        respose = {
            status: 'success',
            code: '200',
            token: session.getSessionToken(),
            refreshToken: session.refreshToken()
        }
    }
    return respose;
}

module.exports = function (app, dbClient) {
    app.post('/login', function (req, res) {
        console.log(validateLoginDetails(req.body));
        res.json(validateLoginDetails(req.body));
    });
}

module.exports = function (app, dbClient) {
    app.post('/signUp', function (req, res) {
        console.log(validateLoginDetails(req.body));
        console.log(dbClient);
        res.json(validateLoginDetails(req.body));
    });
}