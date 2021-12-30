import React from 'react';

import './card-data.styles.scss';

const CardData = ({ pokeData }) => (
    <div className='card-container'>
        {
            <div key={pokeData.id}>
                <img src={pokeData.sprites} />
                <p>{pokeData.name}</p>
            </div>
        }
    </div>
);

export default CardData;
