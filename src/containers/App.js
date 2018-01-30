import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Akshay', age: 22 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      switchthestate: true,
      showPersons: false
    }
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("UPDATE App.js Inside Componentwillreceiveprops");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside shouldComponentUpdate');
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] ')
  }

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    })
  }

  togglePersonsHandler = () => {
    if (!this.state.showPersons) {
      this.setState({ showPersons: true })
    }
    else {
      this.setState({ showPersons: false })
    }
  }
  render() {
    console.log("[App.js] inside render.")

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
      );
    }


    return (
      <WithClass classes={styles.App}>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </WithClass>
    );
  }
}

export default App;
