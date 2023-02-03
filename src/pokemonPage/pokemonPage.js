
import PokemonTable from '../pokemonTable/pokemonTable';
import './pokemonPage.css';
import React from 'react';
import axios from 'axios';


export default function PokemonPage()
{
    let [pokemonList,setPokemonList] = React.useState([]);
    const [selectedPokemon, setSelectedPokemon] = React.useState(null);
    let [call, setCall] = React.useState(0);
    const [input1, setInput1] =  React.useState("");
    const [input2, setInput2] =  React.useState("");

    const handleClick1 = () => {
        axios.get("http://localhost:8080/pokemon/level/" + input1)
        .then((response) => {
          setPokemonList(response.data);
      })
    };

    const handleClick2 = () => {
        axios.get("http://localhost:8080/pokemon/type/" + input2)
        .then((response) => {
          setPokemonList(response.data);
      })
    };

    const handleAdd = () => {
        window.location.pathname = "/add-pokemon";
    }

    const handleDelete = () => {
        console.log(selectedPokemon);
        axios.delete("http://localhost:8080/pokemon", {
            data: {
              ...selectedPokemon
            }
          });
        setCall(call + 1);
    }

  React.useEffect(() => {
    axios.get("http://localhost:8080/pokemon")
        .then((response) => {
          setPokemonList(response.data);
      })
    },[call]);

  return (
    <>
    <div className='topright'>
        <button onClick={handleAdd}>Add Pokemon</button>
        {selectedPokemon && <button onClick={handleDelete}>Update Pokemon</button>}
        {selectedPokemon && <button onClick={handleDelete}>Delete Pokemon</button>}
    </div>
    <div className='height container'>
        <div className='vertical'>
            <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
            />
            <button onClick={handleClick1}>Filter By Level</button>
        </div>
        <div className='vertical'>
            <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
            />
            <button onClick={handleClick2}>Filter by  type</button>
        </div>
    </div>
    <PokemonTable pokemonList = {pokemonList} selectedPokemon = {selectedPokemon} setSelectedPokemon={setSelectedPokemon}></PokemonTable>
    </>
  );
}