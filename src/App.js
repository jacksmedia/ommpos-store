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
          <div className="itemm-border-5">
          <div className="itemm-border-4">
          <div className="itemm-border-3">
          <div className="itemm-border-2">
          <div className="itemm-border-1">
          <div className="itemm-layout">
            <li key={item.Name} class="itemm-card-back">
              <img src={require('./img/'+item.ImageSrc+'.png')} className="item-border" />
              <h2>{item.Name}</h2>
              <div>{item.SellPrice}</div>
            </li>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
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
        <section className="flex-grid">
         <ul>
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default App;
