import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  
      <div className='app'>
        <Navbar />
        <Header />
        <Project />
        <Footer />
      </div>
    
  );
   
}

export default App;
