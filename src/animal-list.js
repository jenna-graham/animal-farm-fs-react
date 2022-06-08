import React from 'react';
import AnimalDiv from './animal.js';
import './App.css';

export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <AnimalDiv{...animal} key={animal.name + i} />)
      }
    </div>
  );
}