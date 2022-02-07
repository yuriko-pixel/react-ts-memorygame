import React, {useEffect, useState} from 'react'
import cardback from '../images/cardback.jpg'
import card from '../images/card.jpg'
import styled from 'styled-components'

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

type Props = {
    cardAdd: (newCard: string) => void;
}

const Card: React.FC<Props> = (props) => {

  const [cardsrc, setCardSrc] = useState('./images/cardback.jpg')
  
  const changeCardImage = () => {
    setCardSrc(cardback)
  }

  useEffect(() => {
    setCardSrc(card)
},[])
    return (
        <CardFront 
            onClick={() => {
            changeCardImage();
            props.cardAdd('Card1')
          }} 
          src={cardsrc}
          />)
}

export default Card