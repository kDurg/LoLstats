import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';

class App extends Component {
  state = {
    currentPage: null,
    currentPageHeaderImage: HomeImage,
    data: {
      userName: null,
      accountID: null,
      id: null,
      profileIconId: null,
      summonerLevel: null, 
      lastUpdated: null,
    },
  }

  componentDidMount() {
    // console.log('component did mount state: ', this.state);
  }

  inputSummonerName(userName) {

    const baseURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
    const apiKey = 'RGAPI-91e93f23-918f-422b-9851-ebfced6684c6';
    const summonerByName = corsAnywhere + baseURL + apiKey;

    axios.get(summonerByName)
      .then(function (response) {
        console.log('Axios response: ', response.status)
        if (response.status === 200){
          this.setState({
            accountID: response.data.accountID,
            id: response.data.id,
            userName: response.data.name,
            profileIconId: response.data.profileIconId,
            lastUpdated: response.data.revisionDate,
            summonerLevel: response.data.summonerLevel
          });
        }
      })
      .catch (function(err) {
        console.log(err)
      })
    
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header"></header>
        <>
          <NavBar
            userName= {this.state.userName}
          />
          <HeaderJumbotron
            imgSrc={this.state.currentPageHeaderImage}
            alt="HeaderImage"
            headlineText={`Welcome ${this.state.userName}`}
          />
          <Dashboard
            inputSummonerName={(data)=>this.inputSummonerName(data)}
            userName={this.state.userName}
          />
        </>
      </div>
    );
  }
}

export default App;
