import React from 'react';

const persona = (props) => {
        // Children refiere a todos los elementos que se encuentren entre los tags 
        // de cualquier JSX (En este caso "Persona")
    return (
        // onChange se ejecuta cuando algo cambia dentro del elemento
        <div>
            <h1 onClick={props.click}>Soy una persona de nombre {props.nombre} y tengo {props.edad} de edad!</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.cambio} value = {props.nombre} />
        </div>)
}

export default persona;