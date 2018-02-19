import React from 'react';

const persona = (props) => {
        // Children refiere a todos los elementos que se encuentren entre los tags 
        // de cualquier JSX (En este caso "Persona")
    return (
        <div>
            <h1>Soy una persona de nombre {props.nombre} y tengo {props.edad} de edad!</h1>
            <p>{props.children}</p>
        </div>)
}

export default persona;