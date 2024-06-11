import React from "react";
import "../Hoja-de-estilos/Tarea.css"
import { TiBackspace } from "react-icons/ti";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea }) {

return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
        </div>
        <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
            <TiBackspace className="tarea-icono" />
        </div>
    </div>
    )
}
export default Tarea;