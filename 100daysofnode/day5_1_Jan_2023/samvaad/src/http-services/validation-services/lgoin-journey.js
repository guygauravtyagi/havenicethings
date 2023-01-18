const sessionService = require('./session-service');
const mongodb = require('mongodb');
const config = require('./../../meta-data/config');
const user = require('./../../config/mongo/data-models-db/userModel').user;

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
        let userObj = user // JSON.parse(JSON.stringify(user));
        userObj.id = new mongodb.ObjectId(0);
        userObj.userName = req.body.userName;
        userObj.firstName = req.body.firstName;
        userObj.lastName = req.body.lastName;
        userObj.password = req.body.password;
        mongodb.MongoClient.connect(config.mongoUri).then(
            data => {
                data.db(config.db_dev).collection('users').insertOne(userObj).then(
                    db_data => {
                        console.log('user created')
                    }
                ).catch(
                    err => {
                        console.log(err);
                    }
                )
            }
        )
        res.json(validateLoginDetails(req.body));
    });
}