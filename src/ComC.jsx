import React from "react";
import { Firstname, Lastname } from './App';

const ComC = () => {
    return (
        <>
            <Firstname.Consumer>
                {(fname) => {
                    return (
                        <Lastname.Consumer>
                            {(lname) => {
                                 return <h1>Vinay Chauhan {fname} {lname}</h1> 
                            }}
                        </Lastname.Consumer>
                    )
                }}

            </Firstname.Consumer>
        </>);

}

export default ComC;