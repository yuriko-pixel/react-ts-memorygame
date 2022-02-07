import React, {useEffect, useState} from 'react'
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
    cardAdd: (newCard: string) => void,
    cardImg: string
}

const Card: React.FC<Props> = (props) => {

  const [cardsrc, setCardSrc] = useState('./images/card.jpg')
  
  const changeCardImage = () => {
    setCardSrc(props.cardImg)
  }

  useEffect(() => {
    setCardSrc(card)
},[])
    return (
        <CardFront 
            onClick={() => {
            changeCardImage();
            props.cardAdd(props.cardImg)
          }} 
          src={cardsrc}
          />)
}

export default Card