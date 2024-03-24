import * as Jwt from 'jsonwebtoken';

export interface IUserData {
    loggedUserId?: string;
}

export enum EJWTError {
    INVALID_TOKEN,
    SECRET_NOT_FOUND,
}

const jwtSecret = process.env.JWT_SECRET;

const sign = (data: IUserData): string => {
    if (!jwtSecret) throw new Jwt.JsonWebTokenError('Secret not found!');
    return Jwt.sign(data, jwtSecret, { expiresIn: '1h' });
};

const verify = (token: string): IUserData | EJWTError.INVALID_TOKEN => {
    if (!jwtSecret) throw new Jwt.JsonWebTokenError('Secret not found');
    try {
        const payload = Jwt.verify(token, jwtSecret);
        if (typeof payload === 'object') {
            return <IUserData>payload;
        }
        return EJWTError.INVALID_TOKEN;
    } catch (error) {
        return EJWTError.INVALID_TOKEN;
    }
};

export const JWTService = {
    sign,
    verify,
};
