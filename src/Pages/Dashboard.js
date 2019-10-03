import React from 'react';
import axios from "axios";

import FormControlCard from '../Components/FormControlCard'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        player: {
          searchName: '',
          userName: this.props.state.data.userName,
        },
      };

      // BIND THIS ACROSS FUNCTIONS
      this.getSummonerData = this.getSummonerData.bind(this);
      this.getMostRecentMatchData = this.getMostRecentMatchData.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  getSummonerData(userName) {
    const { apiKey, baseURL, corsAnywhere } = this.props.state.apiData;
    let res = {...this.props.state.data};
    let axiosResponse;

    if (userName) {  
      const that = this
      const getSummonerUrl = baseURL + 'lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
      const summonerByNameData = corsAnywhere + getSummonerUrl + apiKey;
  
      // GET SUMMONER ID AND DATA
      axios.get(summonerByNameData).then(response => {
        axiosResponse = response.status;
        if (response.status === 200){
          res = ({
            accountID: response.data.accountId,
            id: response.data.id,
            lastUpdated: response.data.revisionDate,
            matches: {
              allMatches: [],
            },
            profileIconId: response.data.profileIconId,
            summonerLevel: response.data.summonerLevel,
            userName: response.data.name,
          })

          // GET LAST 100 MATCHES
          const getMatchUrl = baseURL + 'lol/match/v4/matchlists/by-account/' + res.accountID + '?api_key='
          const summonerMatchData = corsAnywhere + getMatchUrl + apiKey;
          axios.get(summonerMatchData).then(response => {
            axiosResponse = response.status;
            if (response.status === 200){
              res.matches.allMatches = response.data.matches
              that.props.updateAppState('data', res);
              that.getMostRecentMatchData(res.matches.allMatches[0].gameId);
            }
          }).catch(err => console.log(`HTTP Response :${axiosResponse} | Error: `, err));
        }

      }).catch(err => console.log(`HTTP Response :${axiosResponse} | Error: `, err));

      }
  }

  getMostRecentMatchData(gameId) {
    const { apiKey, baseURL, corsAnywhere } = this.props.state.apiData;
    const getRecentMatchUrl = baseURL + `lol/match/v4/matches/${gameId}?api_key=`;
    const mostRecentMatch = corsAnywhere + getRecentMatchUrl + apiKey;
    let axiosResponse;
    let participantId;
    let recentMatchPlayerStats = {...this.props.state.data.matches};

    if (gameId){
      axios.get(mostRecentMatch).then(response => {
        axiosResponse = response.status;
        if (response.status === 200){
          recentMatchPlayerStats=({
            allMatches: this.props.state.data.matches.allMatches,
            recentMatch: []
          });
  
          // LOOP THROUGH PLAYERS TO FIND OUR SEARCHED PLAYER AND RETURN PARTICIPANT-ID
          response.data.participantIdentities.forEach(player => {
            if (player.player.accountId === this.props.state.data.accountID) {
              participantId = player.participantId;
            }
          });
  
          // USE PARTICIPANT-ID TO GET STATS
          response.data.participants.forEach(participant => {
            if (participant.participantId === participantId) {
              recentMatchPlayerStats.recentMatch = participant.stats
            }
          })
  
          this.props.updateAppState('recentMatch', recentMatchPlayerStats)
        }
        
      }).catch(err => console.log(`HTTP Response :${axiosResponse} | Error: `, err));

    }
  }

  handleChange(event) {
    let player = {...this.state.player};
    player.searchName = event.target.value;
    this.setState({player});
  }

  handleSubmit(event){
    event.preventDefault();
    this.getSummonerData(this.state.player.searchName)
  }

  render() {

    return(
      <>
        <FormControlCard
          buttonName='Submit'
          formControl='inputAndSubmit'
          id='searchSummonerName'
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          placeholder='Summoner Name'
          searchName = {this.state.player.searchName}
          type='text'
        />
        <FormControlCard
          formControl='quickRecentStats'
          games={this.props.state.data.matches}
          player={this.state.player}
        />
      </>
    )
  }
  
}