import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './Navbar.module.css';

import './Navbar.css';
import ExternalLink from '../ ExternalLink/ExternalLink';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenuHome = () => {
    menuOpen ? setMenuOpen(false) : window.location.href = '/';
  };

  return(
    <header className="container_header">
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className='hamburger_animacao'></div>
      </div>

      <NavLink 
        to="/" 
        className="logo"
        onClick={toggleMenuHome}
      >
        CSS <strong>Grid Layout</strong>
      </NavLink>

      <nav className={`container_nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/make_grid" onClick={toggleMenu}>Make Grid</NavLink>
        <NavLink to="/implied_grid" onClick={toggleMenu}>Grid Implicito</NavLink>
        <NavLink to="/position" onClick={toggleMenu}>Posicionando no Grid</NavLink>
        <div className='info_author'>
          <p>Confira minhas redes para saber mais sobre mim e o que tenho feito.</p>
          <ul className='social_nav'>
            <li>
              <ExternalLink href={"https://www.linkedin.com/in/severidade/"} linkText={"Linkedin"} social_type={"linkedin"} />
            </li>
            <li>
              <ExternalLink href={"https://github.com/severidade"} linkText={"GitHub"} social_type={"github"} />
            </li>
            <li>
              <ExternalLink href={"https://codepen.io/severidade"} linkText={"Codepen"} social_type={"codepen"} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


// Por padrão, uma classe ativa é adicionada a um componente <NavLink>
// quando ele está ativo para que você possa usar CSS para estilizá-lo.
// porém ela NÃO FUNCIONA com o CSS modules
// Por esse motivo aqui usei o css normal