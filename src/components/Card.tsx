import React, {useEffect, useState} from 'react'
import card from '../images/card.jpg'
import styled from 'styled-components'

// const CardFront = styled.img`
// width: 120px;
// height: 200px; 
// border-radius: 10px;
// border: 1px solid gray;
// margin: 100px;
// box-shadow: 5px 5px 5px gray;
// transform: rotateY(180deg);
// &:hover {
//   transform: rotateY( 180deg ) ;
// transition: transform 0.5s;
// }
// `;

// type Props = {
//     cardId: number,
//     setCards: React.Dispatch<React.SetStateAction<CardType[]>>,
//     cardAdd: (newCard: string, id: number) => void,
//     cardFrontImg: string,
//     cardBackImg: string,
//     flip: boolean
// }

// const Card: React.FC<Props> = (props) => {
//   const [cardFlip, setCardFlip] = useState(false);

//   const [cardsrc, setCardSrc] = useState('./images/card.jpg')
  
//   const changeCardImage = (img: string) => {
//     setCardSrc(img)
//   }

//   useEffect(() => {
//     setCardSrc(card)
// },[])
// if(!props.flip) {
//     return (
//         <CardFront 
//             onClick={() => {
//             changeCardImage(props.cardBackImg);
//             props.cardAdd(props.cardFrontImg, props.cardId)
//           }} 
//           src={cardsrc}
//           />)
// } else {
//     return (
//         <CardFront 
//           src={props.cardFrontImg}
//           />)
// }
    
// }

// export default Card

function Card() {
    return <div></div>
}

export default Card