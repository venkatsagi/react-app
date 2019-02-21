import React, {PureComponent} from 'react';

class TableComponent extends PureComponent {
  render() {
    const {data, columns} = this.props;
    return (
     <table className="table">
      <thead>
        <tr>
          {columns.map(column => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
      {data.map((row, index) => {
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