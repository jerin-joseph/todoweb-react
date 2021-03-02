import React from 'react';
import {useParams} from 'react-router-dom'

export default function People(){

    let {id,}= useParams();
    id=id-1;
    let people=[[1,"Jerin Joseph"],[2,"Vishnu Viswanathan"],[3,"Ashams Mathew"]];
    return(
        <div>
        <h3>People [{id+1}/3]</h3>
        {people[id][0]}. {people[id][1]}
        </div>
    )
}