import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log("[Persons.js] component will mount");
    }

    componentDidMount() {
        console.log("[Persons.js] component did mount");
    }
    componentWillReceiveProps(nextProps) {
        console.log("UPDATE Persons.js Inside Componentwillreceiveprops");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside shouldComponentUpdate');
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.changed !== this.props.clicked;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate');
    }
    render() {
        console.log("[Persons.js] component did render");
        return (this.props.persons.map((person, index) => {
            return (<Person name={person.name} age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
            />)
        }));
    }
}


export default Persons;