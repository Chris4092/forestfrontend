import './trainerRow.css'


export default function TrainerRow({trainer, selectedTrainer, setSelectedTrainer})
{

    const handleClick = () => {
        if(selectedTrainer === trainer)
        {
            setSelectedTrainer(null);
        }
        else
        {
            setSelectedTrainer(trainer);
        }
    }
    let highestlevel = 0;
    let numberOfPokemon = 0;
    trainer.pokemonList.forEach(element => {
        numberOfPokemon += 1;
        if(element.level > highestlevel)
        {
            highestlevel = element.level;
        }
    });

    return(
    <tr 
        onClick={() => handleClick()}
        className={selectedTrainer === trainer ? 'selected' : ''}
    >
        <td>{trainer.name}</td>
        <td>{numberOfPokemon}</td>
        <td>{highestlevel}</td>
    </tr>
    )  
}