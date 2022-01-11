import React, { useContext } from "react";
import ComC from "./ComC";
import { Firstname, Lastname } from './App';

const  ComB = () => {

    const fname = useContext(Firstname);
    const lname = useContext(Lastname);

    return (<h1>{fname} {lname}</h1>);//<ComC/>
}

export default ComB;