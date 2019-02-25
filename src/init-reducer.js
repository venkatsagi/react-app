import {combineReducers} from 'redux';
import loginReducer from './login/reducer';
import dashboardReducer from './dashboard/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
