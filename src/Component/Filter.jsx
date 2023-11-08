import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div className="flex flex-col ">
      <input
      className=''
        type="text"
        placeholder="Filter by title"
        onChange={e => onFilter('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={e => onFilter('rating', parseFloat(e.target.value))}
      />
    </div>
  );
};

export default Filter;