import React, { useState } from 'react';

import './game-page.styles.scss';

import CustomButton from '../../component/search-button/button.component';
import SearchBox from '../../component/search-box/search-box.component';
import CardData from '../../component/card-data/card-data.component';
import SaveButton from '../../component/save-button/save-button.component';
import DeleteButton from '../../component/delete-button/delete-button.component';

import { firestore, auth } from '../../firebase/firebase.utils';


const GamePage = () => {
    const [savedData, setSavedData] = useState('');
    const [savedPokemonData, setSavedPokemonData] = useState('');

    const savedPokemon = async () => {
        const pokemon = await firestore.doc(`savedPokeData/${auth.currentUser.uid}`).get();
        try {
            if (pokemon.exists) {
                const savedData = 1;
                setSavedData(savedData);
    
                const savedPokemonData = pokemon.data();
                setSavedPokemonData(savedPokemonData);
            } else {
                const savedData = 0;
                setSavedData(savedData);
            }
        } catch (error) {
            console.error(error);
        }
    }

    savedPokemon();

        const [searchField, setSearchField] = useState('');
        const [toggleSearchPokeData, setToggleSearchPokeData] = useState('');

        const handleChange = event => {
            const searchField = event.target.value;
            setSearchField(searchField);
        }
        
        const [pokeData, setPokeData] = useState('');
        const [togglePokeData, setTogglePokeData] = useState('');

        const getPokemon = async () => {

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchField}`);
                const jsonResponse = await response.json();
                const pokeData = {
                    name: jsonResponse.name, 
                    id: jsonResponse.id, 
                    sprites: jsonResponse.sprites.front_default
                };

                setPokeData(pokeData);
            } catch (e) {
                alert('Pokemon does not exist! Try again.');
                return;
            }
            
            const togglePokeData = true;
            const toggleSavePokeData = false;
            setTogglePokeData(togglePokeData);
            setToggleSavePokeData(toggleSavePokeData);
        }

        const [toggleSavePokeData, setToggleSavePokeData] = useState('');

        const storePokemon = async () => {
            const toggleSearchPokeData = true;
            const togglePokeData = false;
            const toggleSavePokeData = true;
            setToggleSearchPokeData(toggleSearchPokeData);
            setTogglePokeData(togglePokeData);
            setToggleSavePokeData(toggleSavePokeData);

            try {
                await firestore.doc(`savedPokeData/${auth.currentUser.uid}`).set({
                    name: pokeData.name,
                    id: pokeData.id,
                    sprites: pokeData.sprites
                });
            } catch (error) {
                console.error(error);
            }
        }

        const deletePokemon = async () => {
            const toggleSearchPokeData = false;
            const toggleSavePokeData = false;
            setToggleSearchPokeData(toggleSearchPokeData);
            setToggleSavePokeData(toggleSavePokeData);

            try {
                firestore.doc(`savedPokeData/${auth.currentUser.uid}`).delete();
            } catch (error) {
                console.error(error);
            }
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
                        (toggleSavePokeData || savedData) ? (<div className='saved-pokemon'>
                            <CardData pokeData={savedPokemonData || pokeData} />
                            <DeleteButton deletePokemon={deletePokemon}>DELETE</DeleteButton>
                        </div>) : null
                    }
                </div>
            </div>
        );
}

export default GamePage;