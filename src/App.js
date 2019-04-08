import React, { Component } from 'react';
import './App.css';

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';
import API from './utilities/API';

import HomeImage from './assets/dragonImage.jpg'
import Dashboard from './Pages/Dashboard';


class App extends Component {
  state = {
    userName: 'kDurg',
    currentPage: null,
    currentPageHeaderImage: HomeImage,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <NavBar 
            userName= {this.state.userName}/>
          <HeaderJumbotron
            imgSrc={this.state.currentPageHeaderImage}
            alt="HeaderImage"
            headlineText={`Welcome ${this.state.userName}`}
          />
          <Dashboard 
            userName={this.state.userName}
          />
        </body>
      </div>
    );
  }
}

export default App;
