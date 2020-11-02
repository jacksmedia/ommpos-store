import React, { Component } from 'react';
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
  }

  render(){

    // const items = this.state.categoricals.map((item, key ) =>
    //   <li key={item.Key} className="categorical">
    //     OK
    //   </li>
    // );

    return (
      <div className="App">
        {/* HEADER component, includes sorting of BODY content */}
        <header className="App-header rowed">
          <div className="coled">
            <img src={logo} className="App-logo pulse" alt="logo" />
          </div>
          <div className="coled">
            <h2>
              Your Local Store
            </h2>
            <h3>
              Open Settings Menu (⠇) & Add To Your Home Screen
            </h3>
          </div>
        </header>
          <div className="">
            <SortyTable />
          </div>
      {/* BODY component, content sorted by HEADER */}
        <section >
          <h4><span role="img" aria-label="construction-emoji">🚧</span> Thank You for Choosing Your Local Store; this app is a Work In Progress <span role="img" aria-label="construction-emoji">🚧</span></h4>
        </section>

      </div>
    );
  }
}

export default App;
