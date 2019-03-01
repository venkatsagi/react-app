import * as service from './service';

export const UPDATE_DATA = 'UPDATE_DATA';

const updateData = payload => ({
  type: UPDATE_DATA,
  payload
});

const fetchData = () => async (dispatch) => {
  const userData = await service.fetchData();
  try {
    dispatch(updateData(userData));
  } catch {
    // Need to handle error case
  }
};

export const dashboardActions = {
  fetchData,
  updateData
};
