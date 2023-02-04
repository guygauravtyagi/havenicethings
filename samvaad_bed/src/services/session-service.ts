import * as jwt from 'jsonwebtoken';
import type { RefreshTokenData, SessionTokenData } from './../models/meta-data';

export class SessionService {
    private static sessionService: SessionService;
    private constructor() { }

    static getInstance() {
        if (!this.sessionService)
            this.sessionService = new SessionService();
        return this.sessionService;
    }

    getSessionToken = (data: SessionTokenData) => {
        let token = '';
        try {
            token = jwt.sign({
                name: data.username,
                type: data.jwt.type,
            }, data.jwt.secret, {
                expiresIn: data.jwt.validity
            })
        } catch (err) {
            console.log('token generation failed', err)
        }
        return token;
    }

    refreshToken = (data: RefreshTokenData) => {
        let token = '';
        try {
            token = jwt.sign({
                name: data.username,
                type: data.jwt.type
            }, data.jwt.secret, {
                noTimestamp: true
            })
        } catch (err) {
            console.log('token generation failed')
        }
        return token;
    }
}