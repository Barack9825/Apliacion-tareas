import React, { useState } from "react";
import TareaFormulario from "./Formulario";
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tareas";

function ListaDeTareas(){

    const [tareas,setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
    }

    return(
        <>
            <TareaFormulario />
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea) =>
                    <Tarea 
                        texto={tarea.texto}
                        completada={tarea.completada}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;