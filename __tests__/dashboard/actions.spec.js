import configureStore from 'redux-mock-store';
import {dashboardActions} from '../../src/dashboard/actions';

const mockStore = configureStore();
const store = mockStore();

describe('Dashboard Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('updateData', () => {
    it('Dispatches the correct action and payload', () => {
      store.dispatch(dashboardActions.updateData([]));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
