const mongodb = require('mongodb');
const config = require('../../meta-data/config');
const sessionService = require('../validation-services/session-service');

findUser = async (data, res) => {
    await mongodb.MongoClient.connect(config.mongoUri).then(mongoData => {
        console.log(mongoData);
        mongoData.db(config.db_dev).collection('users').find(
            { $text: { $search: "gau" } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } }).then(
            users => {
                console.log(users)
            }
        )
    }).catch(err => {
        console.log(err)
        res.json({
            status: 'success',
            code: '200',
            message: {
                signIn: 'failed',
                message: 'Something went wrong',
                errorCode: 'e1000001'
            },
        })
    });
}

module.exports = function (app) {
    app.get('/search', async function (req, res) {
        await findUser(req.body, res);
    });
}
