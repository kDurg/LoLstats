import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input, Table } from 'reactstrap';

const FormControlCard = (props) => {
	switch (props.formControl) {
		
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