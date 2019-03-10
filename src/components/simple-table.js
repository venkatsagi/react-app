import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isEmpty, map} from 'lodash';

class SimpleTable extends PureComponent {
  render() {
    const {data, columns, className} = this.props;
    return (
     <table className={classNames(className, 'table')}>
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

SimpleTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  className: PropTypes.string
};

export default SimpleTable;
