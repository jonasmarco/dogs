import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container mainContainer animeLeft'>
      <h1 className='title'>Erro: 404</h1>
      <p>Página não encontrada.</p>
      <Link to='/' className='back'>Voltar para o início</Link>
    </div>
  )
}

export default NotFound;
