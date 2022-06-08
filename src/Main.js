import React from 'react';
import AnimalList from './animal-list.js';
import backgroundImg from './background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div>
        <AnimalList animals={animals} />
      </div>

    </main>
    
  );
}


