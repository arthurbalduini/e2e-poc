import './index.scss';

import React, { useEffect } from 'react';

import Button from '../base/Button';
import ErrorMessage from '../base/ErrorMessage';
import Input from '../base/Input';
import { postEmailData } from '../../service';
import { useForm } from 'react-hook-form';

const MyForm = () => {

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        criteriaMode: "firstErrorDetected",
    });
    
    const onSubmit = data => {
        postEmailData(data);
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
                    register={register({ required: "This is required" })} 
                    label="Email" 
                    dataTestID={'email-input'} 
                />
                
                {errors.email && <ErrorMessage msg='Este campo é obrigatório' />}
                
                <Input type="password" placeholder="Password" name="password" register={register} label="Password" />
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}

export default MyForm;