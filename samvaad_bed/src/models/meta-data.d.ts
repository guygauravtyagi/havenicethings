export interface JwtDetail {
    type: string;
    secret: string;
    validity?: string;
}

export interface SessionTokenData {
    username: string;
    jwt: JwtDetail;
}

export interface RefreshTokenData {
    username: string;
    jwt: JwtDetail;
}