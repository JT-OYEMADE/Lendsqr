import React from 'react';
// import './index.scss';
import loan from '../assests/image/laon.png'
import user from '../assests/image/user.png'
import saving from '../assests/image/sav.png'
import active from '../assests/image/active.png'
import {Card} from './card'

interface Props {
  image1?: string;
  title?: string;
  number?: string;
}

const Lists: React.FC<Props> = () => {
  const cards = [
    { id: 1, image1: user, title: 'Users', number: '2,453' },
    { id: 2, image1: active, title: 'Active Users', number: '2,453' },
    { id: 3, image1: loan, title: 'Users with Loans', number: '12,453' },
    { id: 4, image1: saving, title: 'Users with Savings', number: '102,453' },
  ];

  return (
    <div className='card-main-body'>
      {cards.map((card, index) => {

        return (
          <div

            key={index}
          >
            <Card {...card} key={index}/>
          </div>
        );

      })}
    </div>
  );
}

export default Lists