import * as service from './service';

export const UPDATE_DATA = 'UPDATE_DATA';

const updateData = (payload) => ({
    type: UPDATE_DATA,
    payload
});

const fetchData = () => async dispatch => {
    const data = await service
    .fetchData().then(res => {
        const data = res.data;
        dispatch(updateData(data));
    }).catch(error => {
        // need to handle error
    });
};

export const dashboardActions = {
    fetchData,
    updateData
};
