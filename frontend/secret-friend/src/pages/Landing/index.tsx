import React from 'react';
import { Link } from 'react-router-dom'; // Aplicando SPA

import logoImg from '../../assets/img/logo.png';
import landingImg from '../../assets/img/landing.jpg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Secret Friend" />
          <h2>Organize uma festa de Amigo Secreto com seus amigos, sua família ou até com seus colegas de trabalho. Sem sair de casa!</h2>
        </div>

        <img src={landingImg} alt="Friends" className="hero-image" />

        <div className="button-container">
          <Link to="/friend-list" className="start"> Começar </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;