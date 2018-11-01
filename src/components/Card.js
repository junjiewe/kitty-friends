import React from 'react';

const Card = ({ name, loves, id}) => {
  // const { name, loves, id} = props; //destructure
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='cat' src={`https://robohash.org/${id}?set=set4`}/>
      <div>
        <h2>{name}</h2>
        <p>{loves}</p>
      </div>
    </div>
  );
}

export default Card;
