import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Table } from 'reactstrap';

const FormControlCard = (props) => {
	
	switch (props.formControl) {
		case 'quickRecentStats':
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
								<td>{props.games.lastGame.lastGameKills}</td>
								<td>{props.games.lastGame.lastGameDeaths}</td>
								<td>{props.games.lastGame.lastGameAssists}</td>
								<td>{props.games.lastGame.lastGameKills}/{props.games.lastGame.lastGameDeaths}</td>
							</tr>
						</tbody>
					</Table>
				</>
			);

		case 'inputAndSubmit':
			return (
				<Row>
					<Col>
						<Form>
							<FormGroup>
								<Input
									type={props.type}
									id={props.id} //This is the username
									placeholder={props.placeholder}
									onChange={props.onChange}
									value={props.searchName}
								/>
							</FormGroup>
						</Form>
					</Col>
					<Col>
						<Button 
							onClick={(summonerName)=>props.onClick(summonerName)}>{props.buttonName}</Button>
					</Col>
				</Row>
			);
	}
        
}

export default FormControlCard;