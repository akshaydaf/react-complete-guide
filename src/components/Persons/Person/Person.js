import React, { Component } from 'react';
import styles from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component{


    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log("[Person.js] component will mount");
    }

    componentDidMount() {
        console.log("[Person.js] component did mount");
    }
    render() {
        console.log("[Person.js] component did render");
        return (
            <WithClass classes={styles.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!! {this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </WithClass>
        )
    }
}
export default Person;