// Cards.jsx
import React from "react";
import '../styles/Card.css'

const Card = ({ characters, alterEgo, isAlive }) => {
  return (
    <div className='container'>
      {characters.map(character => (
        <div key={character.id} className='container-character'>
          <img src={character.image} alt={character.name} />
          <img src={alterEgo[character.id]} alt={`${character.name} alter ego`} />
          <div>
            <h2>{character.name}</h2>
            <p >{character.species}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Card;
