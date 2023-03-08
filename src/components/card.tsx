import React from 'react'
import '../style/card.scss'

interface IPropsCard {
  image1: string;
  title: string;
  number: string;
}

export const Card: React.FC<IPropsCard> = ({ image1, title, number }) => {

  return (
      <div className='cardContainer'>
        <img className='cardIamge' src={image1} alt="users" />
        <div className='cardTitle'>{title}</div>
        <div className='cardNumber'>{number}</div>
      </div>
  )
}
