import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
      lastGame: {
        character: null,
        lastGameKills: null,
        lastGameDeaths: null,
        lastGameAssists: null,
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Most recent Game</h1>
        <h3>Character</h3>
          <h6>Character: </h6>
          <h6>KDA: 
            Kills: {this.state.lastGame.lastGameKills}
            Deaths: {this.state.lastGame.lastGameDeaths} 
            Assists: {this.state.lastGame.lastGameAssists}
            </h6>
        <p>Username: {this.state.userName}</p>

      </div>
    )
  }
  
}