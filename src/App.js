import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SimpleMenu from './SimpleMenu.js';
import stuff from './stuff.json';
import './App.css';



import logo from './img/logo.png';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categoricals: stuff,
    }
  }
  
  componentDidMount() {      
    console.log("@ p p   m 0 u n t   $ u c c e $ $");
  }

  render(){

    const images = this.state.categoricals.map((item, key) => 
      [{src: item.Name},]
    );

    const items = this.state.categoricals.map((item, key ) =>
        <li key={item.Name}><img src={require('./img/'+item.ImageSrc+'.png')} className="categorical-icon" /><h2>{item.Name}</h2>&nbsp;{item.SellPrice}</li>
    );

    return (
      <div className="App">
        

        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <SimpleMenu />
          <h2>
            Your Guide to Pelican Town
          </h2>
          <h3>
            Launching June 2019
          </h3>
          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1jkLAiVrR70-yla1GoG7snLOr5e2Lq6EMfVPYt1q1Ufo/edit#gid=869358655"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSV Worksheet 
          </a>
        </header>
        <section>
         <ul>
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default App;
