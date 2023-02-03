import logo from './logo.svg';
import './App.css';
import Pokerow from './pokemonTableRow/pokemonTableRow';
import PokemonTable from './pokemonTable/pokemonTable';
import React from 'react';
import PokemonPage from './pokemonPage/pokemonPage';
import Navbar from './navbar/navbar';
import TrainerPage from './trainerPage/trainerPage';
import AddPokemonPage from './addpokemon/addpokemon';

function App() {  
  let component;
  switch(window.location.pathname){
    case "/pokemon":
      component = <PokemonPage />
      break
    case "/trainers":
      component = <TrainerPage />
      break
    case "/add-pokemon":
      component = <AddPokemonPage />
      break
  }

  return(
    <>
      <Navbar/>
      {component}

    </>
    
  
  )
}

export default App;
