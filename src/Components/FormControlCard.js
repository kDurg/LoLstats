import React from 'react';

const FormControlCard = (props) => {
	console.log('this is our passed props', props);
	switch (props.type) {
		case 'quickRecentStats':
			return(
				<div>
					<h1>Most Recent Game</h1>
					<h3>Character</h3>
					<h6>Character: </h6>
					<h6>KDA:</h6>
						<p></p>
						<p>Kills: {props.games.lastGame.lastGameKills}</p>
						<p>Deaths: {props.games.lastGame.lastGameDeaths}</p> 
						<p>Assists: {props.games.lastGame.lastGameAssists}</p>
						<p>Username: {props.player.userName}</p>
				</div>
			)
	}
        
}

export default FormControlCard;