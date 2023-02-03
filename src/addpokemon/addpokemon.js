import React from "react";
import TrainerTable from "../trainerTable/trainerTable";
import axios from "axios";

export default function AddPokemonPage()
{
    const handleAdd = () => {
        const Pokemon = JSON.stringify({
            name: input1,
            primaryType: input2,
            secondaryType: input3,
            level: input4,
            trainer: selectedTrainer
        })
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        console.log(Pokemon)
        axios.post("http://localhost:8080/pokemon", Pokemon, customConfig);
          //window.location.pathname = "/pokemon";
    }


    const [input1, setInput1] = React.useState('');
    const [input2, setInput2] = React.useState('');
    const [input3, setInput3] = React.useState(null);
    const [input4, setInput4] = React.useState('');



    let [trainerList,setTrainerList] = React.useState([]);
    const [selectedTrainer, setSelectedTrainer] = React.useState(null);

    const shouldShow = input1!==null && input2!==null && input4!== null && selectedTrainer!==null;

    React.useEffect(() => {
    axios.get("http://localhost:8080/trainers")
        .then((response) => {
            setTrainerList(response.data);
        })
    },[]);

    return(
        <>
        <div>
        <label>Name:</label>
        <input
            type="text"
            value={input1}
            onChange={e => setInput1(e.target.value)}
        />
        <br />
        <label>Primary Type</label>
        <input
            type="text"
            value={input2}
            onChange={e => setInput2(e.target.value)}
        />
        <br />
        <label>Secondary Type:</label>
        <input
            type="text"
            value={input3}
            onChange={e => setInput3(e.target.value)}
        />
        <br />
        <label>Level:</label>
        <input
            type="text"
            value={input4}
            onChange={e => setInput4(e.target.value)}
        />
        <TrainerTable trainerList={trainerList} selectedTrainer = {selectedTrainer} setSelectedTrainer={setSelectedTrainer}/>
        <br />
        {shouldShow && <button onClick={() => handleAdd()}>Submit</button>}
        </div>
        </>
    )
}