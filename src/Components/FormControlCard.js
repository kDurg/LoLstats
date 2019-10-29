import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Button, Input, Table } from 'reactstrap';

import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';

const FormControlCard = (props) => {
	switch (props.formControl) {

		case 'characterTile':
			const useStyles = makeStyles({
				card: {
					maxWidth: 345,
				},
				media: {
					height: 140,
				},
			});

			let imagePath;
			if (props.image.image) {
				imagePath = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${props.image.image.full}`;
			}
			const classes = useStyles();

				return (
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={imagePath}
								title={props.recentMatch.characterDetails.name}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
								{props.recentMatch.characterDetails.name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				)
			// } else { return null }
		break;

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
			break;
		
		case 'quickRecentStats':
			let kills;
			let deaths;
			let assists;
			let kda;
			
			if (props.recentMatch){

				kills = props.recentMatch.gameStats.kills;
				deaths = props.recentMatch.gameStats.deaths;
				assists = props.recentMatch.gameStats.assists;
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
			break;

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
			break;

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