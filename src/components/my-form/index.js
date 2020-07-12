import './index.scss';

import Button from '../base/Button';
import Input from '../base/Input'
import React from 'react';
import {useForm} from 'react-hook-form'

const MyForm = () => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return(
        <div className="my-form">
            <div className="my-form--header">
                <span>Meu formulário</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type="text" 
                    placeholder="Email" 
                    name="email" 
                    register={register} 
                    label="Email" 
                    dataTestID={'email-input'} 
                />
                <Input type="password" placeholder="Password" name="password" register={register} label="Password" />
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}

export default MyForm;