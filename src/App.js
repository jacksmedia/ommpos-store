import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SimpleMenu from './SimpleMenu.js';
import FilterSwitches from './FilterSwitches.js';
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
      <li key={item.Name} className="categorical">
        <div className="itemm-border-4">
        <div className="itemm-border-3">
        <div className="itemm-border-2">
        <div className="itemm-border-1">
        <div className="itemm-layout itemm-card-back coled">
          <img src={require('./img/'+item.ImageSrc+'.png')} 
          className="item-border" 
          alt={item.Name}
          />
          <div className="rowed">
            <h2>{item.Name}</h2>
            <h4>{item.Type}</h4>
          </div>
          <h4>{item.SellPrice}</h4>
          <div className="lotta-text">{item.UsedIn}</div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </li>
    );

    return (
      <div className="App">
        

        <header className="App-header rowed">
          <div className="coled">
            <img src={logo} className="App-logo pulse" alt="logo" />
            <SimpleMenu />
          </div>
          <FilterSwitches />
          <div className="coled">
            <h2>
              Your Guide to Pelican Town
            </h2>
            <h3>
              Launching June 2019
            </h3>
          </div>
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
