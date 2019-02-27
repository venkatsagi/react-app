import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SimpleTable from '../components/simple-table';
import {dashboardActions} from './actions';

const columns = ['Service', 'Cost/Unit', 'Unit', 'Units Requested'];
@connect(
  state => ({
    data: state.dashboard.data
  }),
  dashboardActions
)
class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }

  navigateToLogin = () => {
    this.props.history.push('./login');
  }

  render() {
    const {data} = this.props;
    return (
      <React.Fragment>
        <SimpleTable
          columns={columns}
          data={data}
        />
        <button onClick={this.navigateToLogin}>Back to Login</button>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.array,
  fetchData: PropTypes.func,
  history: PropTypes.object
};

export default Dashboard;
