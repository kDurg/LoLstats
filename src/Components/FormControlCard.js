import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Table } from 'reactstrap';

import { Card, Container } from '@material-ui/core';

const FormControlCard = (props) => {
	switch (props.formControl) {

		case 'quickLiveStats':
			// console.log('FCC props: ', props)
			// let characterIcon;
			// let liveKDA;
			// let liveItems;
			// let liveSummonerSpells;
			// let liveRunes;
			
			if (props.liveData.liveStatus){
				let secondsInGame = props.liveData.liveData.gameLength +240;
				let minutes = Math.floor(secondsInGame / 60);
				let seconds = secondsInGame - (minutes * 60);
					if (seconds < 10){ seconds= `0${seconds}`}
				let actualTimeInGame = `${minutes}:${seconds}`

				return(
					<>
						<Container style={styles.container}>
							<Container>
								<Row>
									<Col md-2>
										<h6>LIVE Game</h6>
									</Col>
									<Col md-8> data delayed by 4 minutes </Col>
									<Col md-2>o {actualTimeInGame}</Col>
								</Row>
							</Container>
							<Container>
								<Row>
									<Col md-2>
										<Row>Icon</Row>
										<Row>Neeko</Row>
									</Col>
									<Col md-10>
										<Row>Kills: | Deaths: | Assists: </Row>
										<Row>Items: </Row>
									</Col>
								</Row>
								<Row> UPDATED: *NEED UPDATED AT TIME*</Row>
							</Container>
						</Container>
					</>
				);
			} else {
				return(
					<h1> NO LIVE GAMES</h1>
				);
			}
		
		case 'quickRecentStats':
			let kills;
			let deaths;
			let assists;
			let kda;
			
			if (props.games.recentMatch){

				kills = props.games.recentMatch.kills;
				deaths = props.games.recentMatch.deaths;
				assists = props.games.recentMatch.assists;
				if (isNaN((kills/deaths))) {
					kda = ''
				} else {
					kda = ((kills/deaths) * 100).toFixed(0) + '%';
				}

				return(
					<>
						<h1>Most Recent Game</h1>
						<h6>Character: </h6>
						<Card>
							
							<Table dark>
								<thead>
									<tr>
										<th>Kills</th>
										<th>Deaths</th>
										<th>Assists</th>
										<th>KDA</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{kills}</td>
										<td>{deaths}</td>
										<td>{assists}</td>
										<td>{kda}</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</>
				);
			}

		case 'inputAndSubmit':
			return (
				<Row>
					<Col>
						<Input
							type={props.type}
							placeholder={props.placeholder}
							onChange={props.onChange}
							value={props.searchName}
						/>
					</Col>
					<Col>
						<Button 
							onClick={props.onClick}>{props.buttonName}</Button>
					</Col>
				</Row>
			);

		default: return;
	}   
}
const styles = {
	container: {
		background: 'red',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: 'black',
		marginTop: 5, 
		padding: 5,
	}
}


export default FormControlCard;