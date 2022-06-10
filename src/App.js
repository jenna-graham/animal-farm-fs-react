import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { animals } from './animal-data.js';


import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Header welcome={'Animal Farm'}/>
      <Main animals={animals}/>
      <Footer email={'jclayto2@gmail.com'}/> 
    </div>
  );
}
