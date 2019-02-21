import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import TableComponent from '../components/simple-table';

const columns = ['Service', 'Cost/Unit', 'Unit', 'Units Requested'];
@connect(
    state => ({
        data: state.dashboard.data
    })
)
class Dashboard extends PureComponent {
    navigateToLogin = () => {
        this.props.history.push('./login');
    }

    render() {
        const {data} = this.props;
        return (
            <React.Fragment>
                <TableComponent 
                    columns={columns}
                    data={data}
                />
                <button onClick={this.navigateToLogin}>Back to Login</button>
            </React.Fragment>
        );
    }; 
}

export default Dashboard; 
