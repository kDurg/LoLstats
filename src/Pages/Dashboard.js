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
        userName: this.props.userName,
      }
    };
  }

  render() {
    return (
      <FormControlCard
        games={this.state.games}
        player={this.state.player}
        type='quickRecentStats'
      />
    )
  }
  
}