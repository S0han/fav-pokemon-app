import React from 'react';

import './save-button.styles.scss';

const SaveButton = ({children, storePokemon}) => (
    <button onClick={storePokemon}>
        {children}
    </button>
);

export default SaveButton;