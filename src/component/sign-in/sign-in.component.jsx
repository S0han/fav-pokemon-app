import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const navigate = useNavigate();

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
        navigate('/game', {replace: true});
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
                <div className='btns'>
                    <FormButton id='btn1' type='submit'> SIGN IN </FormButton>
                    <FormButton id='btn2' type='submit' onClick={signInWithGoogle} > {' '}SIGN IN WITH GOOGLE{' '} </FormButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
