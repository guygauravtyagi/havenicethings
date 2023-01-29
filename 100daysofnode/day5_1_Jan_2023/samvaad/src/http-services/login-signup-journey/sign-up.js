const mongodb = require('mongodb');
const config = require('../../meta-data/config');
const user = require('../../config/mongo/data-models-db/userModel').user;

module.exports = function (app) {
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