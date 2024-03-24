export const TABLE_NAMES = Object.freeze({
    users: 'users',
    contacts: 'contacts',
    refreshTokens: 'refresh_tokens',
});

export const REGEX = Object.freeze({
    db: {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phoneNumber: /^(\+258)?[28]\d{8}$/,
    },
});

export const USER_STATUS = Object.freeze({
    Active: 'Active',
    Inactive: 'Inactive',
});
