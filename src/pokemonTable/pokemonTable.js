import Pokerow from "../pokemonTableRow/pokemonTableRow";
import "./pokemonTable.css"
import React from "react";

export default function PokemonTable({pokemonList, selectedPokemon, setSelectedPokemon})
{

    

    return(
    <table>
        <thead>
                <th>Name</th>
                <th colSpan={2}>Type</th>
                <th>Level</th>
                <th>Trainer Name</th>

        </thead>
        <tbody>
            {
                pokemonList.map((pokemon, index) => 
                <Pokerow key={"pokemon" + index} pokemon={pokemon} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}></Pokerow>
                )
            }
        </tbody>
    </table>
    )
}