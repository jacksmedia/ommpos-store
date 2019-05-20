import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      coins: []
    }
  }

  componentDidMount() {      
    console.log("m 0 u n t   $ u c c e $ $");
  }

  render(){
    
    axios.get("https://api.nomics.com/v1/prices?key=643698f1108812b938fe8a2d81983059&interval=1d,30d&quote-currency=USD")
      .then(res => {
        const coins = res.data;
        this.setState({coins})
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <p>
            Here's an API call that only works in Dev, breaks on <code>yarn build</code>
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
          <ul>
            { this.state.coins.map(
              coin => <li>{coin.currency}</li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}
