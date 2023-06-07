import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return(
    <header className="container_header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/make_grid">Make Grid</NavLink>
      </nav>
    </header>
  )
}


// Por padrão, uma classe ativa é adicionada a um componente <NavLink>
// quando ele está ativo para que você possa usar CSS para estilizá-lo.
// porém ela NÃO FUNCIONA com o CSS modules
// Por esse motivo aqui usei o css normal