import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Button, Input, Table } from 'reactstrap';

import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';

const FormControlCard = (props) => {
	switch (props.formControl) {

		case 'characterTile':
			let useStyles = makeStyles({
				card: {
					maxWidth: 250,
				},
				media: {
					height: 45,
					padding: 2,
					width: 45
				},
				iconMedia: {
					height: 35,
					padding: 1,
					margin: 0,
					width: 35
				},
				imageCol: {
					margin: 0,
					padding: 0
				}
			});

			if (props){
				let classes = useStyles();	
				let recentGameStats = props.recentMatch.gameStats;
				let recentChampData = props.recentMatch.characterDetails;
				let characterImagePath = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Neeko.png`;
				// let characterImagePath = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${recentChampData.name}.png`;
				// let runeImagePath = ``;
				// let itemImagePath = `http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/{recentGameStats.item0}.png`;
				console.log("FCC props", props.recentMatch, props)
				return (
					<Card className={classes.card}>
						<CardActionArea>

							<CardContent>
								<Row>
									<Col sm-1>
										<Row>
											<CardMedia
												className={classes.media}
												image={characterImagePath}
												title={recentChampData.name}
											/>
										</Row>
										<Row><b>{recentChampData.name}</b></Row>
									</Col>
									<Col sm-2>
										{/* <Typography gutterBottom variant="h6" component="h6">
										<b>Time: </b> 25:00
										</Typography> */}
									</Col>
									<Col sm-9>
										<Row><b>KDA: </b>  {recentGameStats.kills}/{recentGameStats.deaths}/{recentGameStats.assists}</Row>
										<Row><b>Gold: </b>  {recentGameStats.goldEarned}</Row>
										<Row><b>CS: </b>  {recentGameStats.totalMinionsKilled}</Row>
									</Col>
								</Row>
								<hr />

								<Row>
									<Col md-2>
										<Row>Runes: </Row>
										<Row>
											<Col md-1 className={classes.imageCol}><img alt={recentGameStats.perk0} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
											<Col md-1 className={classes.imageCol}><img alt={recentGameStats.perk4} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
										</Row>
									</Col>
									<Col md-9>
										<Row>Objectives</Row>
										<Row>
											<Col className={classes.imageCol}><img alt="3132" className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
											<Col className={classes.imageCol}><img alt="3132" className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3126.png"/></Col>
											<Col className={classes.imageCol}><img alt="3132" className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3138.png"/></Col>
											<Col className={classes.imageCol}><img alt="3132" className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
										</Row>
									</Col>
								</Row>
								<hr />

								<Row>Items</Row>
									<Col>
										<Row>
											<Col className={classes.imageCol}><img alt={recentGameStats.item0} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
											<Col className={classes.imageCol}><img alt={recentGameStats.item1} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3126.png"/></Col>
											<Col className={classes.imageCol}><img alt={recentGameStats.item2} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3138.png"/></Col>
											<Col className={classes.imageCol}><img alt={recentGameStats.item3} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png"/></Col>
											<Col className={classes.imageCol}><img alt={recentGameStats.item4} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3126.png"/></Col>
											<Col className={classes.imageCol}><img alt={recentGameStats.item5} className={classes.iconMedia} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3138.png"/></Col>
										</Row>
									</Col>
							</CardContent>
						</CardActionArea>
					</Card>
				)
			}
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
		
		// case 'quickRecentStats':
		// 	let kills;
		// 	let deaths;
		// 	let assists;
		// 	let kda;
			
		// 	if (props.recentMatch){

		// 		kills = props.recentMatch.gameStats.kills;
		// 		deaths = props.recentMatch.gameStats.deaths;
		// 		assists = props.recentMatch.gameStats.assists;
		// 		if (isNaN((kills/deaths))) {
		// 			kda = ''
		// 		} else {
		// 			kda = ((kills/deaths) * 100).toFixed(0) + '%';
		// 		}

		// 		return(
		// 			<>
		// 				<h1>Most Recent Game</h1>
		// 				<h6>Character: </h6>
		// 				<Card>
							
		// 					<Table dark>
		// 						<thead>
		// 							<tr>
		// 								<th>Kills</th>
		// 								<th>Deaths</th>
		// 								<th>Assists</th>
		// 								<th>KDA</th>
		// 							</tr>
		// 						</thead>
		// 						<tbody>
		// 							<tr>
		// 								<td>{kills}</td>
		// 								<td>{deaths}</td>
		// 								<td>{assists}</td>
		// 								<td>{kda}</td>
		// 							</tr>
		// 						</tbody>
		// 					</Table>
		// 				</Card>
		// 			</>
		// 		);
    //   }
      
    case 'recentTeamStats':
   
      let classes = makeStyles({
        card: {
          padding: 0,
          margin: 0,
          maxWidth: 250,
        }
      });
      return (
        <>
          <Card className={classes.card}>
							<CardContent>
                <h2>Team Stats</h2>
                <Container >
                  <Row>
                    <Col md-6>
                      <Container>
                        <p>Blue Team</p>
                      </Container>
                    </Col>

                    <Col md-6>
                      <Container>
                        <p>Red Team</p>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </CardContent>
          </Card>
        </>
      )


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