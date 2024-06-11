import './App.css';
import ellogo from './imagenes/Apolo-Head.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          alt='Logo'
         src={ellogo} 
         className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
        
      </div>
    </div>
  );
}

export default App;
