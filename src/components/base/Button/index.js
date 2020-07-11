import './index.scss';

import React from 'react';

const Button = ({ type, label, onClick }) => (
    <button className="button-base" type={type} onClick={onClick} >
        {label}
    </button>
)

export default Button;