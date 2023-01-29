const mongodb = require('mongodb');
const config = require('../../meta-data/config');
const sessionService = require('../validation-services/session-service');

validateLoginDetails = async (data) => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const session = new sessionService(data.username, tomorrow);
    let respose = {};
    await mongodb.MongoClient.connect(config.mongoUri).then(mongoData => {
        console.log('inside mongo client', data)
        mongoData.db(config.db_dev).collection('users').findOne({ 'userName': data.userName }).then(
            userData => {
                console.log('inside mongo client then', userData)
                if (data.password === userData.password) {
                    respose = {
                        status: 'success',
                        code: '200',
                        message: {
                            signIn: 'successful',
                            message: 'Signed in Successfully'
                        },
                        token: session.getSessionToken(),
                        refreshToken: session.refreshToken()
                    }
                } else {
                    respose = {
                        status: 'success',
                        code: '200',
                        message: {
                            signIn: 'failed',
                            message: 'Please check your username or password'
                        },
                        token: session.getSessionToken(),
                        refreshToken: session.refreshToken()
                    }
                }
            }
        )
    }).catch(err => {
        respose = {
            status: 'success',
            code: '200',
            message: {
                signIn: 'failed',
                message: 'Something went wrong',
                errorCode: 'e1000001'
            },
            token: session.getSessionToken(),
            refreshToken: session.refreshToken()
        }
    });
    return respose;
}

module.exports = function (app) {
    app.post('/login', async function (req, res) {
        validateLoginDetails(req.body).then(
            data => {
                console.log(data);
                res.json(validateLoginDetails(data));
            }
        ).catch(
            err => {
                res.json(validateLoginDetails({
                    status: 'failed',
                    code: '500',
                    message: {
                        signIn: 'failed',
                        message: 'Something went wrong',
                        errorCode: 'e1000003'
                    },
                    token: session.getSessionToken(),
                    refreshToken: session.refreshToken()
                }));
            })
    });
}
