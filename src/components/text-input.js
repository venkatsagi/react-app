import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInput = ({
  value, onChange, placeholder, type, labelName, className
}) => {
  return (
    <div>
      <label><b>{labelName}</b></label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        value={value}
        className={classNames(className, 'text-input')}
     />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  className: PropTypes.string
};

export default TextInput;
