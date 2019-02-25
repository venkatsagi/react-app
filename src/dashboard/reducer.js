import {setIn} from 'immutable';
import {UPDATE_DATA} from './actions';

const dashboardInitialState = {
  data: []
};

const dashboardReducer = (state = dashboardInitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_DATA:
      return setIn(state, ['data'], payload);
    default:
      return state;
  }
};

export default dashboardReducer;
