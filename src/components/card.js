import React, { Component } from 'react';

class Card extends Component {
  render() { 
    const  { img, nome, descricao, nota } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src={img} alt='primeiro projeto lessons learn'/>
          </div>
          <div className="card-body">
            <span className="tag"> {descricao}</span>
            <h4>{nome}</h4>
            <p>{nota}</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Card;