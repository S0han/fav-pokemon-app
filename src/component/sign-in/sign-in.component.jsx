import React, { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



const SignIn = () => {

    const [infoData, setInfoData] = useState({email:'', password:''});

    const handleChange = event => {
        setInfoData({...infoData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = infoData;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setInfoData({
                email:'',
                password:''
            })
        } catch (error) {
            console.error(error);
        }
    }

    return(
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
                <FormButton type='submit'> SIGN IN </FormButton>
                <FormButton onClick={signInWithGoogle}> {' '}SIGN IN WITH GOOGLE{' '} </FormButton>
            </form>
        </div>
    );
}

export default SignIn;
