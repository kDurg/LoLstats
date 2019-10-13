import React from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Input, Table } from 'reactstrap';

const FormControlCard = (props) => {
	switch (props.formControl) {

		case 'quickLiveStats':
			console.log('FCC props: ', props)
			let characterIcon;
			let liveKDA;
			let liveItems;
			let liveSummonerSpells;
			let liveRunes;
			let timeInGame;
			
			if (props.liveStatus){
				return(
					<>
						<Container>
							<Row>
								<Col md-2>
									<h6>LIVE Game</h6>
								</Col>
								<Col md-8></Col>
								<Col md-2>{timeInGame}</Col>
							</Row>
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

export default FormControlCard;