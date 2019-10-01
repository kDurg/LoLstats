import React, { Component } from 'react';
import './App.css';

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';
import API from './utilities/API';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';
import SummonerNameSearch from './Components/SummonerNameSearch';

class App extends Component {
  
  state = {
    currentPage: null,
    currentPageHeaderImage: HomeImage,
    data: {
      userName: null,
      accountID: null,
      id: null,
      profileIconId: null,
      userLevel: null, 
      lastUpdated: null,
    },
  }

  componentDidMount() {
    // console.log('component did mount state: ', this.state);
  }

  async inputSummonerName() {

    let updatedUserName = document.getElementById('inputSummonerName').value;
    const apiCall = await API.getSummonerID(updatedUserName);
        
    console.log('this is the api call', apiCall)

    // this.setState({
    //   userName: updatedUserName
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <>
          <NavBar 
            userName= {this.state.userName}
          />
          <HeaderJumbotron
            imgSrc={this.state.currentPageHeaderImage}
            alt="HeaderImage"
            headlineText={`Welcome ${this.state.userName}`}
          />
          <SummonerNameSearch
            id='inputSummonerName'
            onClick = {this.inputSummonerName}
            placeholder='Summoner Name'
            type='text'
          />
          <Dashboard
            userName={this.state.userName}
          />
        </>
      </div>
    );
  }
}

export default App;
