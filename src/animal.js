import React from 'react';
import './animals.css';
import './App.css';


export default function AnimalDiv({ name, type, says, top, left }) {
  return (
    <div className="animal" style={{ top, left }}>
      <h1>{name}</h1>
      <h2>the {type}</h2>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <p>{says}</p>
    </div>
  );
}