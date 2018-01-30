import React from 'react';
import styles from './Cockpit.css';
const cockpit = (props) => {
    let classes = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2){
      classes.push(styles.red);
    }
    if (props.persons.length <= 1){
      classes.push(styles.bold);
    }

    classes = classes.join(' ');
    return (
        <div className={styles.Cockpit}>
            <h1 className={classes}>Hi, I'm a react app.</h1>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    ); 
};

export default cockpit;