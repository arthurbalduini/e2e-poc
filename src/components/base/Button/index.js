import './index.scss';

import React from 'react';

const Button = ({ type="button", label, onClick, dataTestID }) => (
    <button className="button-base" type={type} onClick={onClick} data-testid={dataTestID} >
        {label}
    </button>
)

export default Button;