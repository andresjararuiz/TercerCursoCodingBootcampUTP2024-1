
import {Button} from "./Controllers/clicksumacontroller";
import {Contador} from "./Controllers/contador.jsx";
import "./App.css"
import { useState } from "react";

function App() {

  const [ numCLick, setnumbClick] = useState(0)

  const aumentarValor = () => {
    setnumbClick( numCLick + 1)
  }

  const reiniciarValor = () => {
    setnumbClick( numCLick * 0)
  }

  return (
    <div className="Container">
      <h1>CONTADOR DE CLICKS</h1>
      <Contador numCLick={numCLick}></Contador>
      <Button
      texto="Aumentar"
      claseBoton={true}
      manejarBoton={aumentarValor}></Button>
      <Button
      texto="Reiniciar"
      claseBoton={false}
      manejarBoton={reiniciarValor}></Button>
    </div>
  )
}

export default App;
