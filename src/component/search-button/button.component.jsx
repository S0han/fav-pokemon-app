import React from 'react';

import './button.styles.scss';

const CustomButton = ({children, getPokemon}) => (
    <button className='custom-button' onClick={getPokemon}>
        {children}
    </button>
);

export default CustomButton;