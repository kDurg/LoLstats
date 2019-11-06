import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HeaderJumbotron = (props) => {
  let headlineText;
  if (props.userName !== null && props.userName !==undefined){
    headlineText = `Welcome ${props.userName}`;
  }
  
  return (
    <div className="headerJumbotron">
      <Jumbotron fluid id= "jumbotronFluid">
        <Container fluid  id= "container-fluid">
          <img
            id="jumboimage"
            src={props.imgSrc}
            alt={props.alt}
          />
          {/* <div id = "headerJumbotronText">{headlineText}</div> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HeaderJumbotron;