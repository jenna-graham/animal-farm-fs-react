import React from 'react';
import AnimalDiv from './animal.js';
import backgroundImg from './background.png';

import './App.css';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => <AnimalDiv{...animal} key={animal.name + i} />)
      }
    </main>
  );
}


