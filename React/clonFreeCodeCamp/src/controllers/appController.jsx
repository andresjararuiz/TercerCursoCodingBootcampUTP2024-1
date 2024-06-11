

export function Testimonio(props) {

  return(
    <div className="container-testimonio">
      <img className="testimonioImg" 
      src={(`../../img/testimonioImg-${props.imagen}.jfif`)}/>
      <div className="containerTexto">
        <p className="nombre">{props.nombre} en {props.pais}</p>
        <p className="cargo"> {props.cargo} en {props.empresa}</p>
        <p className="testimonio">{props.text}</p>
      </div>  
    </div>
  )
}



