import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {

  return(
    <header className={ styles.container_header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/make_grid">Make Grid</NavLink>
        <NavLink to="/implied_grid">Grid Implicito</NavLink>
      </nav>
    </header>
  )
}


// Por padrão, uma classe ativa é adicionada a um componente <NavLink>
// quando ele está ativo para que você possa usar CSS para estilizá-lo.
// porém ela NÃO FUNCIONA com o CSS modules
// Por esse motivo aqui usei o css normal