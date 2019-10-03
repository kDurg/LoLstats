import React from 'react';

import FormControlCard from '../Components/FormControlCard'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        games: {
          lastGame: {
            character: null,
            lastGameAssists: null,
            lastGameDeaths: null,
            lastGameKills: null,
          }
        },
        player: {
          searchName: '',
          userName: this.props.userName,
        }
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let player = {...this.state.player};
    player.searchName = event.target.value;
    this.setState({player});
  }

  handleSubmit(event){
    console.log('Searching for: ', this.state.player.searchName);
    event.preventDefault();
    this.props.inputSummonerName(this.state.player.searchName)
  }

  render() {

    return(
      <>
        <FormControlCard
          buttonName='Submit'
          formControl='inputAndSubmit'
          id='searchSummonerName'
          type='text'
          placeholder='Summoner Name'
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          searchName = {this.state.player.searchName}
        />
        <FormControlCard
          games={this.state.games}
          player={this.state.player}
          formControl='quickRecentStats'
        />
      </>
    )
  }
  
}