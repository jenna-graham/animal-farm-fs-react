import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { animalArray } from './animal-data.js';


import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Main animals={animalArray}/>
      <Footer /> 
    </div>
  );
}
