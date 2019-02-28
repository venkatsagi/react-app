import React from 'react';
import {shallow} from 'enzyme';
import TextInput from '../../src/components/text-input';

describe('TextInput', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<TextInput />);

    expect(component).toMatchSnapshot();
  });

  it('should render text input correctly with given props', () => {
    const value = 'John';
    const placeholder = 'Enter username';
    const type = 'text';
    const labelName = 'User Name';
    const className = 'username-text-input';
    const icon = true;
    const iconName = 'envelope';
    const size = 'sm';

    const component = shallow(
      <TextInput
        value={value}
        onChange={() => null}
        placeholder={placeholder}
        type={type}
        labelName={labelName}
        className={className}
        icon={icon}
        iconName={iconName}
        size={size}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
