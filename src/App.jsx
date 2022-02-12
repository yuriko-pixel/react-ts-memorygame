import React, {useState, useEffect} from 'react';
import card from './images/card.jpg'
import styled from 'styled-components'
import card3 from './images/card3.jpg'
import card7 from './images/card7.jpg'

// export type CardType = {
//   id: number;
//   img: string;
//   flip: boolean;
// }

// const cardList:CardType[] = [
//   {id: 1, img: cardback, flip: false},
//   {id: 2, img: card3, flip: false},
//   {id: 3, img: cardback, flip: false},
// ]

// function App() {
//   const [flippedCard, setFlippedCard]: [
//     string,
//     React.Dispatch<React.SetStateAction<string>>
//   ] = useState<string>('');
//   const [score, setScore] = useState(0);
//   const [message, setMessage] = useState('');
//   const [cards, setCards]:[ 
//     CardType[],
//     React.Dispatch<React.SetStateAction<CardType[]>>
//   ] = useState(cardList);


//   function cardAdd(newCard: string, id: number) {
//     if(flippedCard.length !== 0 && flippedCard === newCard) {
//       let scorePoint = score;
//       setScore(++scorePoint);
//       setMessage('Hit!');
//       setFlippedCard('');
      
//       let cardsList = cards;
//       cardList.map(i => {
//         if(i.id === id) {
//           i.flip = true
//         }
//       })
//       setCards(cardsList)
//       return;
//     } else if(flippedCard.length !== 0 && flippedCard !== newCard) {
//       setMessage('Got wrong');
//       setFlippedCard('');
//       return;
//     } else {
//       setFlippedCard(newCard);
//     }
//   }

//   return (
//     <div className="App">
//       {message}
//       <div>
//         {cards.map( i => <Card
//           setCards={setCards}
//           cardAdd={cardAdd}
//           cardId={i.id}
//           cardFrontImg={i.img} 
//           cardBackImg={i.img} 
//           flip={i.flip} />)}
//       </div>
//     </div>
//   );
// }

// export default App;

const CardFront = styled.img`
  width: 120px;
  height: 200px; 
  border-radius: 10px;
  border: 1px solid gray;
  margin: 20px;
  box-shadow: 5px 5px 5px gray;
  transform: rotateY(180deg);
  &:hover {
    transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
  }
`;
const initdata = [
  { id: 1, img: card7, flipped: false },
  { id: 2, img: card7, flipped: false },
  { id: 3, img: card, flipped: false },
  { id: 4, img: card, flipped: false },
];

const Img = styled.img`
  width: 150px;
`;
const frontImg = "https://source.unsplash.com/WsSTP9mIgsE";
export default function App() {
  const [data, setData] = useState(initdata);
  const [message, setMessage] = useState('');
  const [pickedId, setPickedId] = useState(0);
  const [pickedImg, setPickedImg] = useState('');

  function changeData(id) {
    let datas = data.slice(0, data.length);
    if (!data.find((i) => i.id === id)) return;
    datas.map((i) => {
      if (i.id === id) {
        i.flipped = !i.flipped;
      }
    });
    console.log(datas === data)
    setData(datas);
  }

  function checkFlippedCard(id, img) {
   
    //1回目
    if(pickedId === 0) {
      setPickedId(id);
      setPickedImg(img)
      return;
    }
    //2回目は、1回目と同じカードだったか確認し、違ったら初期状態に戻す
    if(pickedImg === img) {
      setTimeout(() => {
        setMessage('Hit!');
        setPickedId(0);
        setPickedImg('');
      }, 1000)
      
      setTimeout(() => {
        setMessage('');
      }, 3000)
    } else {
      setTimeout(() => {
        setMessage('Wrong!');
      }, 500)
      setTimeout(() => {
        setPickedId(0);
        setPickedImg('');
        changeData(id);
        changeData(pickedId);
      }, 1000)
      setTimeout(() => {
        setMessage('');
      }, 1000)
    }
  }
  return (
    <div className="App">
      <h1>{message}</h1>
      {data.map((i) => (
        <CardFront
          src={i.flipped ? i.img : frontImg}
          onClick={() => {
            changeData(i.id);
            checkFlippedCard(i.id, i.img)
          }}
        />
      ))}
    </div>
  );
}
