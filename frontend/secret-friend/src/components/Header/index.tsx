import React from 'react';
import { Link } from 'react-router-dom'; // Aplicando SPA

import logoImg from '../../assets/img/logo.png';
import backIcon from '../../assets/img/icons/back.svg';

import './styles.css';

function Header() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Secret Friend" />
      </div>
      <div className="header-content">
        <strong>Monte sua lista de Amigos.</strong>
      </div>

    </header>
  )
}

export default Header;