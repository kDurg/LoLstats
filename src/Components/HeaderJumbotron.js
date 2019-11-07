import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HeaderJumbotron = (props) => {
  
  return (
    <div className="headerJumbotron">
      <Jumbotron fluid id= "jumbotronFluid">
        <Container fluid  id= "container-fluid">
          <img
            id="jumboimage"
            src={props.imgSrc}
            alt={props.alt}
          />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HeaderJumbotron;