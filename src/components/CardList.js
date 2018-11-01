import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {

  return (
    <div>
      {
         cats.map((cat, i) => {
          return (
            <Card
              key={cats[i].id}
              id={cats[i].id}
              name={cats[i].name}
              loves={cats[i].loves}/>
          );
        })
      }
    </div>
  );
}

export default CardList;
