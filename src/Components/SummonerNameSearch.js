import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';


const summonerNameSearch = (props) => {
  return (
    <Row>
      <Col>
        <Form>
          <FormGroup>
            <Input 
              type={props.type} 
              id={props.id} 
              placeholder={props.placeholder} />
          </FormGroup>
        </Form>
      </Col>
      <Col>
        <Button onClick={props.onClick}>Submit</Button>
      </Col>
    </Row>
  )
}

export default summonerNameSearch;