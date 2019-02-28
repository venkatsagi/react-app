import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextInput from '../components/text-input';
import {loginActions} from './actions';

@connect(
  state => ({
    userName: state.login.userName,
    password: state.login.password
  }),
  loginActions
)
class Login extends PureComponent {
  navigateToDashboard = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    const {
      userName, password, updateUserName, updatePassword
    } = this.props;

    return (
      <div className="container">
        <TextInput
          type="text"
          placeholder="Enter Username"
          labelName="Username"
          value={userName}
          onChange={updateUserName}
          icon
          iconName="envelope"
          size="sm"
        />
        <TextInput
          type="password"
          placeholder="Enter Password"
          labelName="password"
          value={password}
          onChange={updatePassword}
          icon
          iconName="key"
          size="sm"
        />
        <button type="submit" onClick={this.navigateToDashboard}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  updateUserName: PropTypes.func,
  updatePassword: PropTypes.func,
  history: PropTypes.object
};

export default Login;
