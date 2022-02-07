import React, {useState, useEffect} from 'react';
import card from './images/card.jpg'
import styled from 'styled-components'
import cardback from './images/cardback.jpg'
import Card from './components/Card'

const CardFront = styled.img`
  width: 120px;
  height: 200px; 
  border-radius: 10px;
  border: 1px solid gray;
  margin: 100px;
  box-shadow: 5px 5px 5px gray;
  transform: rotateY(180deg);
  &:hover {
    transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
  }
`;

const cardList = [
  cardback,
  card,
  cardback
]

function App() {
  const [flippedCard, setFlippedCard]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  function cardAdd(newCard: string) {
    if(flippedCard.length !== 0 && flippedCard === newCard) {
      let scorePoint = score;
      setScore(++scorePoint);
      setMessage('Hit!')
      return;
    }
    setFlippedCard(newCard);
  }

  return (
    <div className="App">
      {message}
      <div>
        {cardList.map( i => <Card cardAdd={cardAdd} cardImg={i}  />)}
      </div>
    </div>
  );
}

export default App;
