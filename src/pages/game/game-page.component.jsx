import React, { useState } from 'react';

import './game-page.styles.scss';

import CustomButton from '../../component/search-button/button.component';
import SearchBox from '../../component/search-box/search-box.component';
import CardData from '../../component/card-data/card-data.component';
import SaveButton from '../../component/save-button/save-button.component';
import DeleteButton from '../../component/delete-button/delete-button.component';


const GamePage = () => {
        const [searchField, setSearchField] = useState('');
        const [toggleSearchPokeData, setToggleSearchPokeData] = useState('');

        const handleChange = event => {
            const searchField = event.target.value;
            setSearchField(searchField);
        }
        
        const [pokeData, setPokeData] = useState('');
        const [togglePokeData, setTogglePokeData] = useState('');

        const getPokemon = async () => {
            const togglePokeData = true;
            const toggleSavePokeData = false;
            setTogglePokeData(togglePokeData);
            setToggleSavePokeData(toggleSavePokeData);

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

        const [toggleSavePokeData, setToggleSavePokeData] = useState('');

        /*
            CONTINUE HERE!!!

            -The 2 functions below store and delete the user data
            -Integrate these functions with firebase
        */

        const storePokemon = () => {
            const toggleSearchPokeData = true;
            const togglePokeData = false;
            const toggleSavePokeData = true;
            setToggleSearchPokeData(toggleSearchPokeData);
            setTogglePokeData(togglePokeData);
            setToggleSavePokeData(toggleSavePokeData);
        }

        const deletePokemon = () => {
            const toggleSearchPokeData = false;
            const toggleSavePokeData = false;
            setToggleSearchPokeData(toggleSearchPokeData);
            setToggleSavePokeData(toggleSavePokeData);
        }



        return (
            <div className='container'>
                <div>
                    {
                        (!toggleSearchPokeData) ? (
                            <div className='search-bar'>
                                <SearchBox className='search-box' placeholder={'Enter pokemon name...'} handleChange={handleChange} />
                                <CustomButton className='search-button' getPokemon={getPokemon}>Search!</CustomButton>
                            </div>
                        ) : null
                    }
                </div>      
                <div>
                    {
                        (togglePokeData) ? (<div className='display-data'>
                            <CardData pokeData={pokeData} />
                            <SaveButton storePokemon={storePokemon}>SAVE</SaveButton>
                        </div>) : null
                    }
                </div>
                <div>
                    {
                        (toggleSavePokeData) ? (<div className='saved-pokemon'>
                            <CardData pokeData={pokeData} />
                            <DeleteButton deletePokemon={deletePokemon}>DELETE</DeleteButton>
                        </div>) : null
                    }
                </div>
            </div>
        );
}


export default GamePage;