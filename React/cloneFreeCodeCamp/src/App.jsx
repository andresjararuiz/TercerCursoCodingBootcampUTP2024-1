
import { Testimonio } from "./controllers/appController"


function App() {

  return (
    
    <div className="Container">

      <h1>Las siguientes personas son personas de un gran exito en la vida</h1>

      <Testimonio
        imagen="emma"
        nombre="Emma Buitrago"
        pais="Colombia"
        cargo="Asesora"
        empresa="Postobon"
        text=" Trabajo en postobon yei" ></Testimonio>

      <Testimonio
        imagen="Javier"
        nombre="Javier Lopez"
        pais="Argentina"
        cargo="Dealer"
        empresa="Desconocida"
        text="Cuanto queres eh?" ></Testimonio>

      <Testimonio
        imagen="Raul"
        nombre="Raul Sarmiento"
        pais="Suiza"
        cargo="Desempleado"
        empresa="N/A"
        text="Estoy buscando empleo " ></Testimonio>
        </div>

      
  )
}

export default App  
