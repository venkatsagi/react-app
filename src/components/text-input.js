import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TextInput = ({
  value, onChange, placeholder, type, labelName, className, icon, iconName, size
}) => {
  return (
    <div>
      <label>
        {icon
          && <React.Fragment>
               <FontAwesomeIcon icon={iconName} size={size} />
             {' '}
             </React.Fragment>
        }
        <b>{labelName}</b>
      </label>
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
  className: PropTypes.string,
  icon: PropTypes.bool,
  iconName: PropTypes.string,
  size: PropTypes.string
};

export default TextInput;
