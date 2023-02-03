import Pokemergetypes from './pokemonTypeCells';

export default function Pokerow({pokemon, selectedPokemon, setSelectedPokemon})
{

    const handleClick = () => {
        if(selectedPokemon === pokemon)
        {
            setSelectedPokemon(null);
        }
        else
        {
            setSelectedPokemon(pokemon);
        }
    }

  return(
    <tr 
        onClick={() => handleClick()}
        className={selectedPokemon === pokemon ? 'selected' : ''}
    >
        <td>{pokemon.name}</td>
        <Pokemergetypes primaryType = {pokemon.primaryType} secondaryType = {pokemon.secondaryType}></Pokemergetypes>
        <td>{pokemon.level}</td>
        <td>{pokemon.trainer.name}</td>
    </tr>
  )  
}