import React from 'react';

import './delete-button.styles.scss';

const DeleteButton = ({children, deletePokemon}) => (
    <button className='dButton' onClick={deletePokemon}>
        {children}
    </button>
);

export default DeleteButton;