import './index.scss';

import React from 'react';

const Input = ({type, placeholder, name, register, label, dataTestID})  => {
    return (
        <div className="input-base">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} ref={register} data-testid={dataTestID} />
        </div>
    )
}

export default Input;