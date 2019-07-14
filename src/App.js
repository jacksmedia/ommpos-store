import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SortyTable from './SortyTable.js';

import stuff from './stuff.json';
import bundles from './bundles.json';
import './App.css';

import logo from './img/ommpos_logo.png';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categoricals: stuff,
    }
  }
  
  componentDidMount() {
    console.log(bundles);

    Promise.all([
            axios.get('https://ommposapi420.azurewebsites.net/api/inventory/')
            ])
            .then(([ response ]) => {
                this.setState({ inventory: response.data });

                console.log(this.state.inventory);
            });
  }

  render(){

    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
        OK
      </li>
    );

    return (
      <div className="App">
        {/* HEADER component, includes sorting of BODY content */}
        <header className="App-header rowed">
          <div className="coled">
            <img src={logo} className="App-logo pulse" alt="logo" />
          </div>
          <div className="coled">
            <h2>
              Your OMMPOS Store
            </h2>
            <h3>
              Open Settings Menu (⠇) & Add To Your Home Screen
            </h3>
          </div>
        </header>
          <div className="rowed">

            <SortyTable />
          </div>
      {/* BODY component, content sorted by HEADER */}
        <section >
          <h2>🚧 Thank You for Choosing OMMPOS; Work In Progress 🚧</h2>
        </section>

      </div>
    );
  }
}

export default App;
