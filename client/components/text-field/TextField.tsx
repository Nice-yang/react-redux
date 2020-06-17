import * as React from 'react';
import classnames from 'classnames';

interface TextFieldProps {
    id: string
    error: string
    label: string
    placeholder: string
    type: string 
    value: string
    handleChange(value: string): void
}

const TextField = (props: TextFieldProps) => {

    const { id, error, label, placeholder, type, value, handleChange } = props;

    return (
        <div className='form-group'>
            <label htmlFor={id} className={classnames('font-weight-bold', {'text-danger': error})}>{label}</label>
            <input 
                type={type} 
                className={classnames('form-control', {'is-invalid': error})}
                id={id} 
                aria-describedby='usernamehelp'
                placeholder={placeholder}
                value={value}
                onChange={e => {
                    const newValue = e.target.value;
                    handleChange(newValue);
                }}
            />
            {error && <span className='help-block text-danger'>{error}</span>}
        </div>
    );
}

export default TextField;

