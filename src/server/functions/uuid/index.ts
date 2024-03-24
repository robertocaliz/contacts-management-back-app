import crypto from 'crypto';

export const getRandomUUID = () => {
    return crypto.randomUUID();
};
