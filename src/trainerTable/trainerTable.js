import React from "react";
import TrainerRow from "../trainerRow/trainerRow";
import "./trainerTable.css";

export default function TrainerTable({trainerList, selectedTrainer, setSelectedTrainer})
{


    return(
    <table>
        <thead>
                <th>Name</th>
                <th>Number of Pokemon</th>
                <th>Maximum Level</th>

        </thead>
        <tbody>
            {
                trainerList.map((trainer, index) => 
                <TrainerRow key={"trainer" + index} trainer={trainer} selectedTrainer={selectedTrainer} setSelectedTrainer={setSelectedTrainer}></TrainerRow>
                )
            }
        </tbody>
    </table>
    )
}