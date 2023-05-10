import Logo from './imagenes/descarga.jfif'
import './App.css';
import ListaDeTareas from './componentes/Lista-de-tareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      
      <div className='freecodecamp-logo-contenedor'>
      
        <img src = {Logo} 
        className='freecodecamplogo' 
        alt='logo de freeCodeCamp' />
      
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
     
    
    </div>
  );
}

export default App;
