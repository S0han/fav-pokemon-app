import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import CustomButton from '../../component/button/button.component';

const HomePage = () => (
    <div className='home-page'>
        <Link to='/signin'>
            <CustomButton>
                PLAY! 
            </CustomButton>
        </Link>
    </div>
);

export default HomePage;
