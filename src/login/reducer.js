import {setIn} from 'immutable';
import {UPDATE_USERNAME, UPDATE_PASSWORD} from './actions';

const loginInitialState = {
  userName: '',
  password: ''
};

const loginReducer = (state = loginInitialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case UPDATE_USERNAME:
      return setIn(state, ['userName'], payload);

    case UPDATE_PASSWORD:
      return setIn(state, ['password'], payload);

    default:
      return state;
  }
};

export default loginReducer;
