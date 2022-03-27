import React from 'react';
//import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  return (
    <main className="content">
      <section className="elements">
        <ul className="card-list">
          {props.cards.map(card => {
            return (
              <Card
                key={card.id}
                cardName={card.title}
                cardLink={card.url}
                card={card}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );
}
export default Main;