import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {

  render() {
    
    return (
      <nav className="Navbar">
            <button type='button'><Link to="/">Home</Link></button>
            <button type='button'><Link to="/contact">Contato</Link></button>
            <button type='button'><Link to="/projects">Projetos</Link></button>
            <button type='button'><Link to="/about">Sobre</Link></button>
      </nav>
    );
  }
}

export default Header;