import './index.scss';

import React from 'react';

const Input = ({type, placeholder, name, register, label})  => {
    return (
        <div className="input-base">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} ref={register} />
        </div>
    )
}

export default Input;