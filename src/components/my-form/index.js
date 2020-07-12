import './index.scss';

import React, { useContext } from 'react';

import Button from '../base/Button';
import Input from '../base/Input'
import { emailContext } from '../../context/email'
import { useForm } from 'react-hook-form'

const MyForm = () => {

    const test = useContext(emailContext)

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(test);
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