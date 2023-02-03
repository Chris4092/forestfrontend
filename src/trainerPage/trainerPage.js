import React from 'react';
import axios from 'axios';
import "./trainerPage.css";
import TrainerTable from '../trainerTable/trainerTable';

export default function TrainerPage()
{
    let [trainerList,setTrainerList] = React.useState([]);
    const [selectedTrainer, setSelectedTrainer] = React.useState(null);


    React.useEffect(() => {
    axios.get("http://localhost:8080/trainers")
        .then((response) => {
            setTrainerList(response.data);
        })
    },[]);

  return (
    <>
    <div className='height'>
    </div>
    <TrainerTable trainerList = {trainerList} selectedTrainer = {selectedTrainer} setSelectedTrainer={setSelectedTrainer}></TrainerTable>
    </>
  );
}