import React from 'react';
import logo from './svw_logo.png';
import './App.css';

export default class App extends React.Component {
  
  
  componentDidMount() {      
    console.log("@ p p   m 0 u n t   $ u c c e $ $");
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <p>
            Your Guide to Pelican Town
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
        <section>
         <h1>How About Some Item, Person, Recipe, Bundle / Festival Data ? ? ?
         </h1>
        </section>
      </div>
    );
  }
}
