import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash';

class TableComponent extends PureComponent {
  render() {
    const {data, columns} = this.props;
    return (
     <table className="table">
      <thead>
        <tr>
          {columns && columns.map(column => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
      {!isEmpty(data) && map(data, (row) => {
        return (
          <tr>
            {columns.map(column => <td>{row[column]}</td>)}
          </tr>
        );
      })
      }
      </tbody>
    </table>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
};

export default TableComponent;
