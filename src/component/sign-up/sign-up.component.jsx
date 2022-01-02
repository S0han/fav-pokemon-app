import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {

    const [infoData, setInfoData] = useState({email:'', password:'', confirmPassword:''});

    const handleChange = event => {
        setInfoData({...infoData, [event.target.name]: event.target.value});
        console.log(infoData);
    }

    const handleSubmit = event => {
        event.preventDefault();
        /*
            CONTINUE WORKING HERE AND CONNECT TO FIREBASE
        */
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    label='email'
                    value={infoData.email}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    name='password'
                    type='password'
                    label='password'
                    value={infoData.password}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    label='confirm password'
                    value={infoData.confirmPassword}
                    handleChange={handleChange}
                    required
                />
                <FormButton type='submit'> SUBMIT </FormButton>
            </form>
        </div>
    );
}

export default SignUp;