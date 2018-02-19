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

  cambiaNombreHandler = (nuevoNombre) => {
    console.log("Hola")
    // ESTO NO SE DEBE HACER
    /// this.state.personas[0].nombre = 'Alejandro'

    // Asi se actualizan la info. en el parametro "state"
    this.setState({personas: [
      {
        nombre: 'Alejandro', edad: 22
      },
      {
        nombre: nuevoNombre, edad: 34
      },
      {
        nombre: 'Borgia', edad: 31
      }
    
    ]})
  }

  // "Event" se encarga de revisar que el componente se este utilizando 
  nombreCambiadoHandler = (event) => {
    this.setState({
    personas: [
      {
        nombre: 'Alejandro', edad: 22
      },
      {
        nombre: event.target.value, edad: 34
      },
      {
        nombre: 'Borgia', edad: 31
      }
    ]})}
  

  render() {
    // Se llama al parametro this y state para obtener los datos a ingresar 
    // Se pueden pasar handler de onClick a traves de las propiedades de parametros 
    // Es recomendable usar siempre el "bind()"
    return (
      <div className="App">
        <h1> Ejemplo React </h1>
        <p> Funcionamiento de parrafo </p>

        <button onClick = {() => this.cambiaNombreHandler('Leopoldo')}>Cambiar nombre </button>
        <Persona nombre = {this.state.personas[0].nombre} edad = {this.state.personas[0].edad}/>

        <Persona nombre = {this.state.personas[1].nombre} 
        edad = {this.state.personas[1].edad} 
        click={this.cambiaNombreHandler.bind(this, "Marcos")} 
        cambio = {this.nombreCambiadoHandler}> 
        Tengo informacion adicional 
        </Persona>

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
