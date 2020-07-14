import './index.scss';

import React, { useState } from 'react';

import Button from '../base/Button';
import { getEmailData } from '../../middlewares';

const WhatsMyEmailButton = () => {

    const [email, setEmail] = useState(null);

    return(
        <div className="whats-my-email">
        <div className="whats-my-email--label">
            {email && <label data-testid="email-label">{email}</label>}
        </div>
            <Button type="button" label="Forgot your email?" onClick={() => getEmailData(setEmail)} dataTestID="email-button" />
    </div>
    )
}

export default WhatsMyEmailButton;