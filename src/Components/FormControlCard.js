import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row, Button, Input, Table } from 'reactstrap';

import { Card, CardContent, CardMedia, Container } from '@material-ui/core';

let useStyles = makeStyles({
  awards: {
    color: 'red',
    fontSize: '15px'
  },
  card: {
    maxWidth: 400,
    margin: 10,
    padding: 10
  },
  iconMedia: {
    height: 35,
    padding: 1,
    margin: 0,
    width: 35
  },
  iconMediaSmall: {
    height: 20,
    width: 20
  },
  inputField:{
    margin: '10px',
    alignContent: "center",
    display: 'center',
    float: 'none'
  },
  imageCol: {
    margin: 0,
    padding: 0
  },
  media: {
    height: 45,
    padding: 2,
    margin: 2,
    width: 45
  },
  statHeader: {
    fontSize: '15px',
    textDecoration: 'underline',
    paddingBottom: '10px',
    paddingTop: '0px'

  },
  subStatHeader: {
    fontSize: '12px',
    textDecoration: 'underline',

  },
  text: {
    fontSize: '10px'
  }

});

const FormControlCard = (props) => {

  switch (props.formControl) {

    case 'characterTile':

      let classes = useStyles();
      let recentGameStats = props.recentMatch.gameStats;
      let recentChampData = props.recentMatch.characterDetails;
      // let characterImagePath = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Neeko.png`;
      let characterImagePath = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${recentChampData.name}.png`;
      // let runeImagePath = ``;
      // let itemImagePath = `http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/{recentGameStats.item0}.png`;
      // console.log("FCC props", props.characterDetails)
      return (
        <Card className={classes.card}>

          <CardContent>
            <Row>
              <Col sm='3'>
                <Row>
                  <CardMedia
                    className={classes.media}
                    image={characterImagePath}
                    title={recentChampData.name}
                  />
                </Row>
                <Row><b>{recentChampData.name ? recentChampData.name : 'Neeko'}</b></Row>
              </Col>
              <Col>
                {/* <Row className={classes.text}><b>K/D/A: </b>&nbsp;{recentGameStats.kills}/{recentGameStats.deaths}/{recentGameStats.assists}</Row>
                <Row className={classes.text}><b>Gold: </b>&nbsp;{recentGameStats.goldEarned}</Row>
                <Row className={classes.text}><b>CS: </b>&nbsp;{recentGameStats.totalMinionsKilled}</Row> */}
                <Row className={classes.statHeader}><b>Character Description:</b></Row>
                <Row className={classes.text}>{props.characterDetails.blurb}</Row>
                {recentGameStats.win ? <Row className={classes.awards}><b>WIN</b></Row> : null}
                {recentGameStats.firstBloodKill ? <Row className={classes.awards}><b>FIRST BLOOD</b></Row> : null}
                {recentGameStats.firstTowerKill ? <Row className={classes.awards}><b>FIRST TOWER</b></Row> : null}

              </Col>
            </Row>
            <hr />

            <Row className={classes.statHeader}><b>Items:</b></Row>
            <Col>
              <Row>
                {recentGameStats.item0 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item0} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item0}.png`} /></Col> : null}
                {recentGameStats.item1 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item1} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item1}.png`} /></Col> : null}
                {recentGameStats.item2 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item2} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item2}.png`} /></Col> : null}
                {recentGameStats.item3 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item3} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item3}.png`} /></Col> : null}
                {recentGameStats.item4 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item4} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item4}.png`} /></Col> : null}
                {recentGameStats.item5 !== 0 ? <Col className={classes.imageCol}><img alt={recentGameStats.item5} className={classes.iconMedia} src={`http://ddragon.leagueoflegends.com/cdn/9.20.1/img/item/${recentGameStats.item5}.png`} /></Col> : null}
              </Row>
            </Col>
            <hr />

            <Row className={classes.statHeader}><b>Stats:</b></Row>
            <Col>
              <Row>
                <Col className={classes.text}>
                  <Row className={classes.subStatHeader}>Economy</Row>
                  <Row><b>Gold Earned: </b>&nbsp;{recentGameStats.goldEarned}</Row>
                  <Row><b>Gold Spent: </b>&nbsp;{recentGameStats.goldSpent}</Row>
                  <Row><b>Minions Killed: </b>&nbsp;{recentGameStats.totalMinionsKilled}</Row>
                </Col>
                <Col className={classes.text}>
                  <Row className={classes.subStatHeader}>Objectives</Row>
                  <Row><b>DMG to Obj: </b>&nbsp;{recentGameStats.damageDealtToObjectives}</Row>
                  <Row><b>Turrets: </b>&nbsp;{recentGameStats.turretKills}</Row>
                  <Row><b>Inhibitors: </b>&nbsp;{recentGameStats.inhibitorKills}</Row>
                  <Row><b>Vision Score: </b>&nbsp;{recentGameStats.visionScore}</Row>
                </Col>
                <Col className={classes.text}>
                  <Row className={classes.subStatHeader}>Damage</Row>
                  <Row><b>Crit Strike: </b>&nbsp;{recentGameStats.largestCriticalStrike}</Row>
                  <Row><b>Killing Spree: </b>&nbsp;{recentGameStats.largestKillingSpree}</Row>
                  <Row><b>Total DMG: </b>&nbsp;{recentGameStats.totalDamageDealtToChampions}</Row>
                  <Row><b>Magic DMG: </b>&nbsp;{recentGameStats.magicDamageDealtToChampions}</Row>
                  <Row><b>True DMG: </b>&nbsp;{recentGameStats.trueDamageDealtToChampions}</Row>
                  <Row><b>DMG Taken: </b>&nbsp;{recentGameStats.totalDamageTaken}</Row>
                </Col>
              </Row>
            </Col>

          </CardContent>
        </Card>
      )

    case 'quickLiveStats':

      if (props.liveData.liveStatus) {
        let secondsInGame = props.liveData.liveData.gameLength + 240;
        let minutes = Math.floor(secondsInGame / 60);
        let seconds = secondsInGame - (minutes * 60);
        if (seconds < 10) { seconds = `0${seconds}` }
        let actualTimeInGame = `${minutes}:${seconds}`

        return (
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
        return (
          <h1> NO LIVE GAMES</h1>
        );
      }

    case 'tableStats':


      let tableColor = {
        background: props.team
      }

      // const populatePlayersToTable = (props) =>{
      //   console.log('PLAYER')
      //   props.recentMatchPlayersData.forEach(player => {
      //     return (
      //       <tr>
      //         <td>{player.summonerName}</td>
      //         <td>{player.stats.champLevel}</td>
      //         <td>{player.stats.kills}/ {player.stats.deaths} / {player.stats.assists}</td>
      //         <td>{player.stats.totalMinionsKilled}</td>
      //         <td>{player.stats.goldEarned}</td>
      //         <td>{player.stats.totalDamageDealtToChampions}</td>
      //       </tr>
      //     );
      //   })
      // }
      classes = useStyles();
      let winStatus = false;
      // props.recentMatchPlayersData[0].stats.win ? winStatus=true : winStatus=false
      // winStatus ? winStatus = 'WIN': winStatus ='LOSS'

      return (
        <>
          <Card className={classes.card}>
            <Table style={tableColor} size='sm' dark>
              <thead>
                <tr>
                  <th><h6>{props.team} Team: {winStatus}</h6></th>
                  <th>Level</th>
                  <th>K/D/A</th>
                  <th>CS</th>
                  <th>Gold</th>
                  <th>Damage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.recentMatchPlayersData[0].summonerName}</td>
                  <td>{props.recentMatchPlayersData[0].stats.champLevel}</td>
                  <td>{props.recentMatchPlayersData[0].stats.kills}/ {props.recentMatchPlayersData[0].stats.deaths} / {props.recentMatchPlayersData[0].stats.assists}</td>
                  <td>{props.recentMatchPlayersData[0].stats.totalMinionsKilled}</td>
                  <td>{props.recentMatchPlayersData[0].stats.goldEarned}</td>
                  <td>{props.recentMatchPlayersData[0].stats.totalDamageDealtToChampions}</td>
                </tr>
                <tr>
                  <td>{props.recentMatchPlayersData[1].summonerName}</td>
                  <td>{props.recentMatchPlayersData[1].stats.champLevel}</td>
                  <td>{props.recentMatchPlayersData[1].stats.kills}/ {props.recentMatchPlayersData[1].stats.deaths} / {props.recentMatchPlayersData[1].stats.assists}</td>
                  <td>{props.recentMatchPlayersData[1].stats.totalMinionsKilled}</td>
                  <td>{props.recentMatchPlayersData[1].stats.goldEarned}</td>
                  <td>{props.recentMatchPlayersData[1].stats.totalDamageDealtToChampions}</td>
                </tr>
                <tr>
                  <td>{props.recentMatchPlayersData[2].summonerName}</td>
                  <td>{props.recentMatchPlayersData[2].stats.champLevel}</td>
                  <td>{props.recentMatchPlayersData[2].stats.kills}/ {props.recentMatchPlayersData[2].stats.deaths} / {props.recentMatchPlayersData[2].stats.assists}</td>
                  <td>{props.recentMatchPlayersData[2].stats.totalMinionsKilled}</td>
                  <td>{props.recentMatchPlayersData[2].stats.goldEarned}</td>
                  <td>{props.recentMatchPlayersData[2].stats.totalDamageDealtToChampions}</td>
                </tr>
                <tr>
                  <td>{props.recentMatchPlayersData[3].summonerName}</td>
                  <td>{props.recentMatchPlayersData[3].stats.champLevel}</td>
                  <td>{props.recentMatchPlayersData[3].stats.kills}/ {props.recentMatchPlayersData[3].stats.deaths} / {props.recentMatchPlayersData[3].stats.assists}</td>
                  <td>{props.recentMatchPlayersData[3].stats.totalMinionsKilled}</td>
                  <td>{props.recentMatchPlayersData[3].stats.goldEarned}</td>
                  <td>{props.recentMatchPlayersData[3].stats.totalDamageDealtToChampions}</td>
                </tr>
                <tr>
                  <td>{props.recentMatchPlayersData[4].summonerName}</td>
                  <td>{props.recentMatchPlayersData[4].stats.champLevel}</td>
                  <td>{props.recentMatchPlayersData[4].stats.kills}/ {props.recentMatchPlayersData[4].stats.deaths} / {props.recentMatchPlayersData[4].stats.assists}</td>
                  <td>{props.recentMatchPlayersData[4].stats.totalMinionsKilled}</td>
                  <td>{props.recentMatchPlayersData[4].stats.goldEarned}</td>
                  <td>{props.recentMatchPlayersData[4].stats.totalDamageDealtToChampions}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </>
      );


    case 'recentTeamStats':

      return (
        <>
          <Card className={classes.card}>
            <CardContent>
              <Row>
                <Col sm='1' className={classes.imageCol}><img className={classes.iconMediaSmall} src="http://ddragon.leagueoflegends.com/cdn/0.151.2/img/item/3132.png" /></Col>
                <Col sm='5'><p className={classes.text}>Kills: 10 | Deaths: 1 | Assists: 6</p></Col>
                <Col sm='3'><p className={classes.text}>CS: 210</p></Col>
                <Col sm='3'><p className={classes.text}>Gold: 5800</p></Col>
              </Row>
            </CardContent>
          </Card>
        </>
      )


    case 'inputAndSubmit':
      classes = useStyles();

      return (
        <Row className={classes.inputField}>
          <Col md={{size:4 , offset:3}}>
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