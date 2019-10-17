import React from 'react';
import './App.css';

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      apiData: {
        apiKey: 'RGAPI-4fa8714b-f7a4-4c9c-846f-0fbb0481bb05',
        baseURL: 'https://na1.api.riotgames.com/',
        corsAnywhere: 'https://cors-anywhere.herokuapp.com/',
      },
      currentPage: null,
      currentPageHeaderImage: HomeImage,
      data: {
        accountID: null,
        id: null,
        lastUpdated: null,
        matches: {
          allMatches: [],
          liveMatch: {
            liveStatus: false,
            liveData: [],
          },
          recentMatch: [],
        },
        profileIconId: null,
        summonerLevel: null, 
        userName: null,
      },
    }

    this.updateAppState = this.updateAppState.bind(this);
    this.updateLiveData = this.updateLiveData.bind(this);
  }

  componentDidMount() {

    // console.log('component did mount state: ', this.state);
  }

  componentDidUpdate() {

    // console.log('App State Updated: ', this.state)
    // if (this.state.data.userName !== null && !this.state.data.matches.liveMatch.liveStatus){
    //   this.updateLiveData();
    // }
  }

  updateAppState(state, updatedData) {

    console.log('updateAppState: ', state, updatedData)
    const data = {...this.state.data};

    switch(state) {

      case 'data':
        this.setState({data: updatedData})
      break;

      case 'liveData':
        data.matches.liveMatch = updatedData;
        this.setState({data})
      break;

      case 'recentMatch':
        data.matches = updatedData;
        this.setState({data})
      break;

      default: break;
    }
  }

  // IS THERE A LIVE GAME FOR THE CURRENT USER?
  // BUG?: POSSIBLE ISSUE WHEN SWITCHING BETWEEN A LIVE GAME AND NOT?
  updateLiveData(){
    // console.log('entered update Live data')

    const { apiKey, baseURL, corsAnywhere } = this.state.apiData;
    let axiosResponse;
    let responseData = {...this.state.data.matches.liveMatch};
    
    if (this.state.data.userName){
      const summonerID = this.state.data.id;
      const getLiveGameUrl = baseURL + 'lol/spectator/v4/active-games/by-summoner/' + summonerID + '?api_key=';
      const liveGameData = corsAnywhere + getLiveGameUrl + apiKey;

      // GET LIVE GAME DATA
      axios.get(liveGameData).then(res => {
        axiosResponse = res.status;
        console.log('Response: ', res, " and axiosResponse: ", axiosResponse)
        if (axiosResponse === 200) {
          console.log('Successful Live Game Response! ', res)
          responseData = ({
            liveStatus: true,
            liveData: {
              bannedChampions: res.data.bannedChampions,
              gameId: res.data.gameId,
              gameLength: res.data.gameLength,
              gameMode: res.data.gameMode,
              gameStartTime: res.data.gameStartTime,
              gameType: res.data.gameType,
              liveStatus: true,
              participants: res.data.participants,
            },
          });
          this.updateAppState('liveData', responseData);
        }
      }).catch(err => {
        if (err.response) {
          console.log('ERROR data: ', err.response.data);
          if (err.response.data.status.status_code == 404){
            console.log('No games currently happening for this user')
            responseData = ({liveStatus: false});
            this.updateAppState('liveData', responseData);
          }
        }
      });
    }
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
            userName={this.state.data.userName}
          />
          <Dashboard
            state={this.state}
            updateLiveData={this.updateLiveData}
            updateAppState={this.updateAppState}
          />
        </>
      </div>
    );
  }
}