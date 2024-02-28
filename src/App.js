import logo from './logo.svg';
import './App.css';
import React from 'react';
import Day3Component from './components/Day3/Day3Component';
import { PropComponent } from './components/Day3/PropComponent'; 



// FUNCTION App
function App() {

  // START BUSINESS LOGIC
 
  // END BUSINESS LOGIC
   
  return (
    <div>
        <Day3Component />
        <PropComponent 
          itemObject={{
              title: 'Title', 
              subtitle: 'Subtitle', 
              username: 'user'
            }}
          title={'Title from props'} 
          subtitle={'Some subtitle'} 
          username={'user'}
        />

        <PropComponent
          title={'This is another title'}
          subtitle={'Another subtitle'}
          username={'Another username'}
        />
    </div>
  );
}

export default App;
