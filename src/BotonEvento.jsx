import React from 'react';

function BotonEvento() {
  const manejarClick = () => {
    alert('¡Has Hecho clicc!');
  };

  return <button onClick={manejarClick}>Haz clic aquí</button>;
}

export default BotonEvento;