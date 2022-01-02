import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {

    const [infoData, setInfoData] = useState({email:'', password:'', confirmPassword:'', displayName:''});

    const handleChange = event => {
        setInfoData({...infoData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        
        const { displayName, email, password, confirmPassword } = infoData;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setInfoData({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    label='display name'
                    value={infoData.displayName}
                    handleChange={handleChange}
                    required
                />
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