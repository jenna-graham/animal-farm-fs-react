import React from 'react';
import './animals.css';
import './App.css';


export default function AnimalDiv({ name, says, top, left }) {
  return (
    <div className="animal" style={{ top, left }}>
      <h1>{name}</h1>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <p>{says}</p>
    </div>
  );
}