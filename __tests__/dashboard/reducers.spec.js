import dashboardReducer from '../../src/dashboard/reducer';
import {
  UPDATE_DATA
} from '../../src/dashboard/actions';

describe('Dashboard Reducer', () => {
  const intialState = {
    data: []
  };

  describe('UPDATE_DATA', () => {
    it('returns the correct state', () => {
      const action = {type: UPDATE_DATA, payload: ['hello world']};
      expect(dashboardReducer(intialState, action)).toMatchSnapshot();
    });
  });
});
