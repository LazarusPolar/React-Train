import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona'

// React se basa en crear componentes
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Ejemplo React </h1>
        <p> Funcionamiento de parrafo </p>
        <Persona nombre = "Jose" edad = "23"/>
        <Persona nombre = "Alberto" edad = "25" >Tengo informacion adicional</Persona>
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
