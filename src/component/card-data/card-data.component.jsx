import React from 'react';

import './card-data.styles.scss';

const CardData = ({ pokeData }) => (
    <div className='card-container'>
        {
            <div className='cards' key={pokeData.id}>
                <img src={pokeData.sprites} />
                <h2>{pokeData.name}</h2>
            </div>
        }
    </div>
);

export default CardData;
