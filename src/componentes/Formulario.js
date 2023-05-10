import React, { useState } from "react";
import '../hojas-de-estilo/Formulario.css'

function TareaFormulario(props){
    
    const [input,setInput] = useState('');

    const ManejarCambio = e => {
        setInput(e.target.value)
    };

    const ManejarEnvio = e => {
        const tareaNueva ={
            id: '34545',
            texto:'Hola'
        };
    };

    return(
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name='texto'
                onChange={ManejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;