import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona'

// React se basa en crear componentes
class App extends Component {
  // state solo esta disponible al extender de la clase "Component"
  state = {
    personas: [
      {
        nombre: 'Jose', edad: 23
      },
      {
        nombre: 'Alberto', edad: 28
      },
      {
        nombre: 'Diana', edad: 19
      }
    
    ]
  }

  cambiaNombreHandler = () => {
    console.log("Hola")
    // ESTO NO SE DEBE HACER
    /// this.state.personas[0].nombre = 'Alejandro'

    // Asi se actualizan la info. en el parametro "state"
    this.setState({personas: [
      {
        nombre: 'Alejandro', edad: 22
      },
      {
        nombre: 'Rodrigo', edad: 34
      },
      {
        nombre: 'Borgia', edad: 31
      }
    
    ]})
  }

  render() {
    // Se llama al parametro this y state para obtener los datos a ingresar 
    return (
      <div className="App">
        <h1> Ejemplo React </h1>
        <p> Funcionamiento de parrafo </p>
        <button onClick = {this.cambiaNombreHandler}>Cambiar nombre </button>
        <Persona nombre = {this.state.personas[0].nombre} edad = {this.state.personas[0].edad}/>
        <Persona nombre = {this.state.personas[1].nombre} edad = {this.state.personas[1].edad} > Tengo informacion adicional </Persona>
        <Persona nombre = {this.state.personas[2].nombre} edad = {this.state.personas[2].edad}/>
      </div>
    );

    // Genera elementos. 
    // Equivale al codigo JSX representado en la parte superior.
    // El primer parametro es el componente que se desea generar, el segundo parametro es la configuracion y, el tercero, es un elemento extra
    // anidado al elemento principal <div>
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Aplicacion React!"));
  }
}

export default App;
