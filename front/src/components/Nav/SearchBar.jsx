import React, { useState } from 'react';

export default function SearchBar(props) {
  const [character, setCharacter] = useState('');

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div>
      <input type='search' onChange={handleInputChange} />
      <button
        onClick={() => {
          props.onSearch(character);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
