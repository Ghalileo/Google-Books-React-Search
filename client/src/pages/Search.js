import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Search (props) {
    return (
    <div>
      <Row>
        <Col md="12">
          <Card body>
            <CardTitle className="centerTitle">Google Books Search</CardTitle>
            <CardText>Search and Save Books you like!</CardText>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
          <Col sm="12">
          <Card body>
            <CardTitle className="centerTitle">Search List</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      </div>
    );
  };
  
  export default Search;