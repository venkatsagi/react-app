import React from 'react';
import classNames from 'classnames';

const TextInput = ({value, onChange, placeholder, type, labelName, className}) => {

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
    )
};

export default TextInput;