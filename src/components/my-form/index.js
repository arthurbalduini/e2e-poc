import './index.scss';

import Button from '../base/Button';
import { EmailContext } from '../../context/email';
import ErrorMessage from '../base/ErrorMessage';
import Input from '../base/Input';
import React from 'react';
import { postEmailData } from '../../service';
import { useForm } from 'react-hook-form';

const MyForm = () => {

    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        criteriaMode: "firstErrorDetected",
    });
    
    const onSubmit = data => postEmailData(data);

    return(
        <EmailContext.Consumer>
        {context => 
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
                
                        <Button type="submit" label="Submit" dataTestID='submit-button' />
                
                    </form>
            </div>
        }
        </EmailContext.Consumer>
    )
}

export default MyForm;