import React from 'react';
import { Link } from 'react-router-dom';
import gui from '../img/guilherme.jpg'
import '../styles/about.css'
import Header from '../components/Header';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <container className="fotoEnome">
          <img src={gui} className="foto-perfil" alt="foto de perfil guilherme" />
          <span>Guilherme Vinícius de Paula</span>
        </container>
        <p>Uberabense, morador de florianópolis, no auge dos meus 26 anos tenho como atividade principal desenvolvimento web, fazendo uso de tecnologias como: </p>

        <ol>
          <li>REACTJS</li>
          <li>GITHUB</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT (vanila)</li>
          <li>HTML</li>
          <li>CSS</li>

        </ol>
      </div>

    );
  };
}

export default About;