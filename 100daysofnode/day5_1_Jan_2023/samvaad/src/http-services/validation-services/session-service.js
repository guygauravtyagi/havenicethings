const jwt = require('jsonwebtoken');

sessionService = function (username, expireAt) {
    this.username = username;
    this.expireAt = expireAt;

    this.isExpired = function () {
        return this.expireAt < new Date();
    }
    this.getToken = function () {
        let token = '';
        try {
            token = jwt.sign({
                name: username
            }, 'hello', {
                expiresIn: '24h',
            })
        } catch (err) {
            console.log('token generation failed')
        }
        return token;
    }
}

module.exports = sessionService