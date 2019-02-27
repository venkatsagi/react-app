import React from 'react';
import {shallow} from 'enzyme';
import SimpleTable from '../../src/components/simple-table';

describe('SimpleTable', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<SimpleTable />);

    expect(component).toMatchSnapshot();
  });

  it('should render simple table correctly with given props', () => {
    const data = [];
    const columns = [];

    const component = shallow(
      <SimpleTable
        data={data}
        columns={columns}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
