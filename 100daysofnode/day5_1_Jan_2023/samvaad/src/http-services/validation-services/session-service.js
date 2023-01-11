const jwt = require('jsonwebtoken');
const config = require('./../../meta-data/config');

sessionService = function (username, expireAt) {
    this.username = username;
    this.expireAt = expireAt;
    this.isExpired = () => {
        return this.expireAt < new Date();
    }
    this.getSessionToken = () => {
        let token = '';
        try {
            token = jwt.sign({
                name: username,
                type: config.jwt.type,
            }, config.jwt.clientSecret, {
                expiresIn: config.jwt.validity
            }
            )
        } catch (err) {
            console.log('token generation failed', err)
        }
        return token;
    }
    this.refreshToken = () => {
        let token = '';
        try {
            token = jwt.sign({
                name: username,
                type: config.refresh.type
            }, config.refresh.refreshSecret, {
                noTimestamp: true
            }
            )
        } catch (err) {
            console.log('token generation failed')
        }
        return token;
    }
}

module.exports = sessionService