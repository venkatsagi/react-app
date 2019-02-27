import configureStore from 'redux-mock-store';
import {loginActions} from '../../src/login/actions';

const mockStore = configureStore();
const store = mockStore();

describe('Login Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('updateUserName', () => {
    it('Dispatches the correct action and payload', () => {
      store.dispatch(loginActions.updateUserName('Greg'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('updatePassword', () => {
    it('Dispatches the correct action and payload', () => {
      store.dispatch(loginActions.updatePassword('123456'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
