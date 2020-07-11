import './index.scss'

import React, { useState } from 'react';

import Button from '../base/Button';
import { labelOptions } from '../../constants'

const LabelChanger = () => {

    const [label, setLabel] = useState("I can be changed")
 
    const onClick = () => {
        setLabel(labelOptions[Math.floor(Math.random()*labelOptions.length)]);
    }

    return (
        <div className="label-changer">
            <div className="label-changer--label">
                <label>{label}</label>
            </div>
            <Button type="button" label="Click me!" onClick={onClick} />
        </div>
    )

}

export default LabelChanger;