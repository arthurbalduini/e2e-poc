import './index.scss';

import React from 'react';

const ErrorMessage = ({ msg }) => {
    return(
        <div className="error-message" data-testid="error-message">
            <span>
            {msg}
            </span>
        </div>
    )
}

export default ErrorMessage;