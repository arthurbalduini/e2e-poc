import './index.scss';

import React from 'react';
import {useForm} from 'react-hook-form'

const MyForm = () => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return(
        <div className="my-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" name="email" ref={register} />
                <input type="password" placeholder="Password" name="password" ref={register} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default MyForm;