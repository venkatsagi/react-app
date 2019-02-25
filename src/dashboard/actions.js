import * as service from './service';

export const UPDATE_DATA = 'UPDATE_DATA';

const updateData = payload => ({
  type: UPDATE_DATA,
  payload
});

const fetchData = () => async (dispatch) => {
  const userData = await service
    .fetchData().then((res) => {
      const {data} = res;
      dispatch(updateData(data));
    }).catch((error) => {
      dispatch(updateData(error));
    });
  console.log(userData);
};

export const dashboardActions = {
  fetchData,
  updateData
};
