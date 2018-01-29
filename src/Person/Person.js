import React from 'react';
import './Person.css';
const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!! {props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
};

export default person;