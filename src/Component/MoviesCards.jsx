import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center px-5 w-[20rem] ">
      <img className='flex flex-col items-center justify-center  h-36 w-auto object-cover' src={posterURL} alt={title} />
      <h3 className='text-xl text-bold'>{title}</h3>
      <p className='text-sm'>{description}</p>
      <p className='text-sm'>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;