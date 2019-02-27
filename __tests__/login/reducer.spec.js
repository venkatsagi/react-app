import loginReducer from '../../src/login/reducer';
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD
} from '../../src/login/actions';

describe('Login Reducer', () => {
  const intialState = {
    userName: '',
    password: ''
  };

  describe('UPDATE_USERNAME', () => {
    it('returns the correct state', () => {
      const action = {type: UPDATE_USERNAME, payload: 'Greg'};
      expect(loginReducer(intialState, action)).toMatchSnapshot();
    });
  });

  describe('UPDATE_PASSWORD', () => {
    it('returns the correct state', () => {
      const action = {type: UPDATE_PASSWORD, payload: '123456'};
      expect(loginReducer(intialState, action)).toMatchSnapshot();
    });
  });
});
