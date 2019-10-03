import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      currentPage: null,
      currentPageHeaderImage: HomeImage,
      data: {
        accountID: null,
        id: null,
        lastUpdated: null,
        profileIconId: null,
        summonerLevel: null, 
        userName: null,
      },
    }

    this.inputSummonerName = this.inputSummonerName.bind(this);
    this.updateStateData = this.updateStateData.bind(this);
  }

  componentDidMount() {
    // console.log('component did mount state: ', this.state);
  }

  inputSummonerName(userName) {
    let res = {...this.state.data};
    if (userName) {  
      const baseURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
      const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
      const apiKey = 'RGAPI-91e93f23-918f-422b-9851-ebfced6684c6';
      const summonerByName = corsAnywhere + baseURL + apiKey;
      const that = this
  
      axios.get(summonerByName)
        .then(function (response) {
          console.log('Axios response: ', response.status)
          if (response.status === 200){
            console.log('Axios response is a 200!')

            res = ({
              accountID: response.data.accountID,
              id: response.data.id,
              lastUpdated: response.data.revisionDate,
              profileIconId: response.data.profileIconId,
              summonerLevel: response.data.summonerLevel,
              userName: response.data.name,
            })

            that.setState({data:res})
          }
          console.log('this is res', res, that.state)

        })
        .catch (function(err) {
          console.log(err)
        });
      }
  }

  updateStateData(data){
    this.setState({data},()=> console.log('New State', this.state))
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
            headlineText={`Welcome ${this.state.data.userName}`}
          />
          <Dashboard
            inputSummonerName={(data)=>this.inputSummonerName(data)}
            summonerData={this.state.data}
            userName={this.state.userName}
          />
        </>
      </div>
    );
  }
}