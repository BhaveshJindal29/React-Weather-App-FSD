import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadingSection from './components/Header/HeadingSection';
import SearchSection from './components/Search/SearchSection';
import { render } from '@testing-library/react';

class App extends Component {

  render(){
    return (
      <div className='mainSection'>
        <HeadingSection />
        <SearchSection />
      </div>
    );
  }
  
}

export default App;
