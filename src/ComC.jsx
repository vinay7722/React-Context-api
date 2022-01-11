import React from "react";
import {Firstname} from './App';

const  ComC = () => {
    return(
    <>
        <Firstname.Consumer>
            {(fname) => {
                return <h1>Vinay Chauhan {fname}</h1>
            }}
        </Firstname.Consumer>
    </>);
     
}

export default ComC;