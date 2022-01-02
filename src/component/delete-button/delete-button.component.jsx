import React from 'react';

import './delete-button.styles.scss';

const DeleteButton = ({children, deletePokemon}) => (
    <button onClick={deletePokemon}>
        {children}
    </button>
);

export default DeleteButton;