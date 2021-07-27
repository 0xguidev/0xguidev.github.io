import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
        <input type="text" placeholder="Nome completo" name="fullName" required />
        <input type="text" placeholder="Telefone para contatato" name="phoneNumber" required />
        <input type="email" placeholder="Email" name="email" required /> 
         <textarea name="message" placeholder="Mensagem" required />
         <button type='submit' >Enviar</button>
        </form>
      </div>
    );
  };
}

export default Contact;
