import Logo from './imagenes/descarga.jfif'
import './App.css';

function App() {
  return (
    <div className='aplicacion-tareas'>
      
      <div className='freecodecamp-logo-contenedor'>
      
        <img src = {Logo} 
        className='freecodecamplogo' 
        alt='logo de freeCodeCamp' />
      
      </div>
    
    </div>
  );
}

export default App;
