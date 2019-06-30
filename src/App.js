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

    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Name} class="categorical">
        <div className="itemm-border-4">
        <div className="itemm-border-3">
        <div className="itemm-border-2">
        <div className="itemm-border-1">
        <div className="itemm-layout itemm-card-back">
          <img src={require('./img/'+item.ImageSrc+'.png')} className="item-border" />
          <div className="rowed">
            <h2>{item.Name}</h2>
            <h4>{item.Type}</h4>
          </div>
          <h4>{item.SellPrice}</h4>
          <div>{item.UsedIn}</div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </li>
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
        <section >
         <ul className="App-body">
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default App;
