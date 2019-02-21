export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const FETCH_DATA = 'FETCH_DATA';

const updateUserName = (payload) => ({
    type: UPDATE_USERNAME,
    payload
});

const updatePassword = (payload) => ({
    type: UPDATE_PASSWORD,
    payload
});

export const loginActions = {
    updateUserName,
    updatePassword
};
