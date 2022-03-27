import '../index.css';
import React from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import api from '../utils/api.js';


function App() {
  
  const [cards, setCards] = React.useState([]);
  const [filtered, setFiltered] = React.useState(cards);
  const [isFiltered, setIsFiltered] = React.useState(true);

  React.useEffect(() => {
    api.getAllCards()
      .then(cards => { setCards(cards.map((cards) => 
        { return { title: cards.title, url: cards.url, isLiked: false, id: cards.id } })) 
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, []);
  console.log(cards)

  //React.useEffect(() => {
  //  setFiltered(cards)
  //}, []);
  
  function handleFilterClick() {
    if (isFiltered) {
      setFiltered(cards.filter(card =>  card.isLiked === true  ))
      setIsFiltered(false)
    } else {
      setFiltered(cards)
      setIsFiltered(true)
    }
  }

  function handleCardLike(id) {
      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, isLiked: !card.isLiked } : card
        )
      );
  };

  function handleCardDelete(card) {
    api.removeCard(card.id)
      .then(() => {
        setCards((state) => state.filter((c) => c.id !== card.id));
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
  }

  return (
      <div className="page">
        <div className="page__container">
          <Header onCardFilter={handleFilterClick} />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>
      </div>
  );
}
export default App;


