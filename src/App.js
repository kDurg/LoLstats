import React, { Component } from 'react';
import './App.css';

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';
import API from './utilities/API';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';
import SummonerNameSearch from './Components/SummonerNameSearch';

class App extends Component {
  
  componentDidMount() {
    console.log(this.state)
  }

  inputSummonerName() {
    let updatedUserName = document.getElementById('inputSummonerName').value;
    this.setState({ userName: updatedUserName },
      () => API.getSummonerID(updatedUserName)
    );
  }
  
  state = {
    userName: null,
    accountID: null,
    id: null,
    profileIconId: null,
    userLevel: null, 
    lastUpdated: null,
    currentPage: null,
    currentPageHeaderImage: HomeImage,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <>
          <NavBar 
            userName= {this.state.userName}/>
          <HeaderJumbotron
            imgSrc={this.state.currentPageHeaderImage}
            alt="HeaderImage"
            headlineText={`Welcome ${this.state.userName}`}
          />
          <SummonerNameSearch 
            type='text' 
            id='inputSummonerName' 
            placeholder='Summoner Name'
            onClick = {this.inputSummonerName.bind(this)}/>
          <Dashboard 
            userName={this.state.userName}
          />
        </>
      </div>
    );
  }
}

export default App;
