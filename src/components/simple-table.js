import React, {PureComponent} from 'react';
import {isEmpty, map} from 'lodash';

class TableComponent extends PureComponent {
  render() {
    const {data, columns} = this.props;
    console.log(data, !isEmpty(data));
    return (
     <table className="table">
      <thead>
        <tr>
          {columns && columns.map(column => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
      {!isEmpty(data) && map(data, row => {
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

export default TableComponent;