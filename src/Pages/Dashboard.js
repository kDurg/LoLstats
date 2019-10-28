import React from 'react';
import axios from "axios";

import { Container, Row, Col } from 'reactstrap';

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
    let responseData = {...this.props.state.data};
    let axiosResponse;

    if (userName) {  
      const that = this
      const getSummonerUrl = baseURL + 'lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
      const summonerByNameData = corsAnywhere + getSummonerUrl + apiKey;
  
      // GET SUMMONER ID AND DATA
      axios.get(summonerByNameData).then(response => {
        axiosResponse = response.status;
        if (response.status === 200){
          responseData = ({
            accountID: response.data.accountId,
            characterData: this.props.state.data.characterData,
            id: response.data.id,
            lastUpdated: response.data.revisionDate,
            matches: {
              allMatches: [],
              liveMatch: {
                liveData: this.props.state.data.matches.liveMatch.liveData,
                liveStatus: this.props.state.data.matches.liveMatch.liveStatus
              }
            },
            profileIconId: response.data.profileIconId,
            summonerLevel: response.data.summonerLevel,
            userName: response.data.name,
          })
          
          // GET LAST 100 MATCHES
          const getMatchUrl = baseURL + 'lol/match/v4/matchlists/by-account/' + responseData.accountID + '?api_key='
          const summonerMatchData = corsAnywhere + getMatchUrl + apiKey;
          axios.get(summonerMatchData).then(response => {
            axiosResponse = response.status;
            if (response.status === 200){
              responseData.matches.allMatches = response.data.matches
              that.props.updateAppState('data', responseData);
              that.getMostRecentMatchData(responseData.matches.allMatches[0].gameId);
            }
            // this.props.updateLiveData();
          // }).catch(err => console.log(`HTTP Response :${axiosResponse} | Error: `, err.response.status));
        }).catch(err => console.log(err));

        }

      }).catch(err => console.log(`HTTP Response :${axiosResponse} | Error: `, err));

      }
  }

  getMostRecentCharacterData(){
    
    let championID = this.props.state.data.matches.allMatches[0].champion;
    let championArray = {...this.props.state.data.characterData};
    
    if (championID){
      let recentChampData;
      Object.values(championArray).forEach(character => {
        if (parseInt(character.key) === championID){
          recentChampData = ({
            name: character.name,
            tags: character.tags,
            image: character.image
          });
          console.log('recentChampData', recentChampData)
          return recentChampData;
        } 
      })
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
            liveMatch: {
              liveData: this.props.state.data.matches.liveMatch.liveData,
              liveStatus: this.props.state.data.matches.liveMatch.liveStatus
            },
            recentMatch: [],
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
          
          // GET CHARACTER DATA FOR QUICK STATS
          // if (this.state.data.characterData && this.state.data.recentMatch){
            let mostRecentCharacterData = this.getMostRecentCharacterData()
            // if (mostRecentCharacterData !== false) {
              console.log('mostRecentCharacterData', mostRecentCharacterData)
            // } else {console.log('mostRecentCharacterData NOT FOUND')}
          // }
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
    // console.log('here is our state in Dashboard Render: ', this.state, this.props.state)
    return(
      <>
        <div className= 'dashboardContainer'>
          <Container>
            <Row>
              <Col md-5>
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
              </Col>
            </Row>
            <Row>
              <Col md-5>
                <div className= 'liveQuickStats'>
                  <FormControlCard
                    formControl= 'quickLiveStats'
                    liveData= {this.props.state.data.matches.liveMatch}
                    // liveStatus= {this.props.state.data.matches.liveMatch.liveStatus}
                  /> 
                </div>
              </Col>
              <Col md-5>
                <div className= 'recentQuickStats'>
                  <FormControlCard
                    formControl='quickRecentStats'
                    games={this.props.state.data.matches}
                    player={this.state.player}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md-10>
                <div className= 'trendsQuickStats'>

                </div>
              </Col>
            </Row>

          </Container>
        </div>

      </>
    )
  }
  
}