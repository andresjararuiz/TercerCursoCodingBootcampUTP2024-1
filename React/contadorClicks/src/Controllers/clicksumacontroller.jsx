

export function Button({texto, claseBoton}){
    
    return(
       <button className={claseBoton ? "boton-click" : "boton-reiniciar"}>{texto}</button>
    )

}