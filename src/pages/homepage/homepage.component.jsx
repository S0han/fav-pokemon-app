import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import CustomButton from '../../component/search-button/button.component';
import homePic from '../../assets/pokegroup.png';
import titlePic from '../../assets/ptitle.png';

const HomePage = () => (
    <div className='home-page'>
        <img src={titlePic} />
        <img src={homePic} />
        <Link to='/signin'>
            <CustomButton className="play">
                PLAY! 
            </CustomButton>
        </Link>
    </div>
);

export default HomePage;
