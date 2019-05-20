import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {   
    super(props)
    this.state = {
        coins: [],
    }
  }

  componentDidMount() {
        
    console.log("t 3 s t");
    
    require('axios')
      .get("https://api.nomics.com/v1/currencies/ticker?key=643698f1108812b938fe8a2d81983059&interval=1d,30d&quote-currency=USD")
      .then(response => console.log(response))
  }

  render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo pulse" alt="logo" />
            <p>
              This PWA shiz is nontrivial.
            </p>
            <a
              className="App-link"
              href="https://www.alexanderjacks.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built By AlexJacksApps
            </a>
          </header>
        </div>
      );
  }
}
