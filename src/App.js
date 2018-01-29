import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Akshay', age: 22},
      {id: '3', name: 'Stephanie', age: 26}
    ],
    switchthestate: true,
    showPersons: false
  }

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons:persons});

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
    if (!this.state.showPersons){
      this.setState({showPersons: true})
    }
    else{
      this.setState({showPersons: false})
    }
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursos: 'pointer',
    };

    let persons = null;

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    classes = classes.join(' ');
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return(<Person name={persons.name} age={persons.age} 
              click={() => this.deletePersonHandler(index)} 
              key={persons.id} 
              change={(event) => this.nameChangedHandler(event, persons.id)}
              />)
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }


    return (
      <div className="App">
        <h1 className={classes}>Hi, I'm a react app.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}
      </div>
    );
  }
}

export default App;
