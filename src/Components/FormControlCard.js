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
								{/* <td>{props.games[0]}</td>
								<td>{props.games[0]}</td>
								<td>{props.games[0]}</td>
								<td>{props.games[0]}/{props.games.lastGame.lastGameDeaths}</td> */}
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
									placeholder={props.placeholder}
									onChange={props.onChange}
									value={props.searchName}
								/>
							</FormGroup>
						</Form>
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