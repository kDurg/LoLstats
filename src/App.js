import React from 'react';
import './App.css';

import HeaderJumbotron from './Components/HeaderJumbotron';
import NavBar from './Components/NavBar';

import HomeImage from './assets/dragonImage.jpg';
import Dashboard from './Pages/Dashboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      apiData: {
        apiKey: 'RGAPI-91e93f23-918f-422b-9851-ebfced6684c6',
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
          recentMatch: [],
        },
        profileIconId: null,
        summonerLevel: null, 
        userName: null,
      },
    }

    this.updateAppState = this.updateAppState.bind(this);
  }

  componentDidMount() {
    // console.log('component did mount state: ', this.state);
  }

  componentDidUpdate() {
    console.log('App State Updated: ', this.state)
  }

  updateAppState(state, updatedData) {
    // console.log('updateAppState: ', state, updatedData)

    switch(state) {

      case 'data':
        this.setState({data: updatedData})
      break;

      case 'recentMatch':
        let data = {...this.state.data};
        data.matches = updatedData;
        this.setState({data})
      break;

      default: break;
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
            updateAppState={this.updateAppState}
          />
        </>
      </div>
    );
  }
}