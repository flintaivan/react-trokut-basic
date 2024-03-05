import logo from './logo.svg';
import './App.css';
import React from 'react';
import Day3Component from './components/Day3/Day3Component';
import { PropComponent } from './components/Day3/PropComponent'; 
import Day4Component from './components/Day4/Day4Component';
import SlideshowComponent from './components/slideshow/SlideshowComponent';

// FUNCTION App
function App() {

  // START BUSINESS LOGIC


  // END BUSINESS LOGIC
  return (
    <div>
      {/* <Day3Component /> */}
      <Day4Component />        
      <SlideshowComponent />
    </div>
  );
}

export default App;
