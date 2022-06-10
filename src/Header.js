import React from 'react';
import './App.css';

export default function Header({ welcome }) {
  return <header>
    <h1>Welcome to the {welcome}</h1> 
  </header>;
}