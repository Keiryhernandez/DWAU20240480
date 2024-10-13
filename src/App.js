import React from 'react';
import Encabezado from './Encabezado';    
import Contador from './Contador';        
import Saludo from './Saludo';            
import BotonEvento from './BotonEvento'; 



function App() {
  return (
    <div>
      <Encabezado />   {/* Mostrando el componente Encabezado */}
      <Contador />     {/* Mostrando el componente Contador */}
      <Saludo nombre="Keiry" /> {/* Pasando una prop al componente Saludo */}
      <BotonEvento />  {/* Mostrando el botón que maneja eventos */}
    </div>
  );
}

export default App;

