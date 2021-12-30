import React, { useState } from 'react';

import './game-page.styles.scss';

import CustomButton from '../../component/button/button.component';
import SearchBox from '../../component/search-box/search-box.component';
import CardData from '../..//component/card-data/card-data.component';


const GamePage = () => {
    const [searchField, setSearchField] = useState('');

    const handleChange = event => {
        const searchField = event.target.value;
        setSearchField(searchField);
    }
        
        const [pokeData, setPokeData] = useState('');

        const getPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchField}`);
                const jsonResponse = await response.json();
                const pokeData = {
                    name: jsonResponse.name, 
                    id: jsonResponse.id, sprites: 
                    jsonResponse.sprites.front_default
                };

                setPokeData(pokeData);
            } catch (e) {
                alert('Pokemon does not exist! Try again.');
            }
        }

        return (
            <div className='container'>
                <div className='search-bar'>
                    <SearchBox className='search-box' placeholder={'Enter pokemon name...'} handleChange={handleChange} />
                    <CustomButton className='search-button' getPokemon={getPokemon}>Search!</CustomButton>
                </div>      
                <div className='display-data'>
                        <CardData pokeData={pokeData} />
                </div>
            </div>
        );
}


export default GamePage;