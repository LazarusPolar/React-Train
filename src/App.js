import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona'

// React se basa en crear componentes
class App extends Component {
  // state solo esta disponible al extender de la clase "Component"
  state = {
    personas: [
      {
        id: 'asasda', nombre: 'Jose', edad: 23
      },
      {
        id: 'asdas23', nombre: 'Alberto', edad: 28
      },
      {
        id: 'sa2321', nombre: 'Diana', edad: 19
      }
    
    ], mostarPersonas: false
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

  nombreCambiadoHandler = (event, id) => {
    const personaIndice = this.state.personas.findIndex(p => {
      return p.id === id;
    });

    // Se hace la copia del arreglo ya que, trabajar directamente con el, es una mala practica
    const persona = {...this.state.personas[personaIndice]};

    persona.nombre = event.target.value;

    const personas = [...this.state.personas]

    personas[personaIndice] = persona;

    this.setState({
    personas: personas
  })}

  borraPersonasHandler = (indicePersona) => {
    // Copia el arreglo completo a la variable. En este caso a const peronas
    //const personas = this.state.personas.slice();
    //Opcional! Mismo comportamiento que la aproximacion anterior
    const personas = [...this.state.personas]

    // Borra un solo valor del indice enviado en el parametro de la funcion
    personas.splice(indicePersona, 1)
    this.setState({personas: personas})
  }

    mostrarPersonasHandler= () => {
      const muestra = this.state.mostarPersonas;
      this.setState({mostarPersonas: !muestra})
    }
  

  render() {

    //Solucion alternativa de estilos CSS con Javascript 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

   let personas = null;

   // Manera elegante de renderizado para condicionales
   // Se utiliza map para poder convertir el JSON a un arreglo JS y poder utilizar la informacion
   // persona es el elemento del array, index el indice seleccionado del mismo
   if(this.state.mostarPersonas){
      personas = (
        <div>
        {this.state.personas.map((persona, index) => {
          return <Persona nombre = {persona.nombre} edad = {persona.edad} click = {() => this.borraPersonasHandler(index)} key ={persona.id} cambio = {(event) => this.nombreCambiadoHandler(event, persona.id)}/>
        })}
        </div>
      )
   }

    // Se llama al parametro this y state para obtener los datos a ingresar 
    // Se pueden pasar handler de onClick a traves de las propiedades de parametros 
    // Es recomendable usar siempre el "bind()"
    return (
      <div className="App">
        <h1> Ejemplo React </h1>
        <p> Funcionamiento de parrafo </p>
        <button style={style} onClick = {this.mostrarPersonasHandler}>Muestra personas </button>
        {personas}
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
