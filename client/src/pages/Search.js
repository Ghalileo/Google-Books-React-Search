import React, {useState, useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../utils/API';

function Search (props) {
const [search, setSearch] = useState({input: ""})
const [searchQuery, setsearchQuery] = useState([])

const handleInputChange = (event) => {

    const {name, value} = event.target;
    setSearch({[name]: value})
}


    const handleSubmit = (event) => {
        event.preventDefault();
        API.searchBook(search.input)
        .then(res => setsearchQuery(res.data.items))
        .catch(err => console.log(err));
    }

    return (
    <div>
      <Row>
        <Col md="12">
          <Card body>
            <CardTitle className="centerTitle">Google Books Search</CardTitle>
            <CardText>Search and Save Books you like!</CardText>
            <Form inline>
      <FormGroup>
        <Label for="book" hidden>Email</Label>
        <Input type="text" name="input" onChange={handleInputChange} id="exampleSearch" className ="formInputs" placeholder="Search Book" />
      </FormGroup>
      {' '}
      <Button type ="submit" onClick={handleSubmit} className="buttonSe">Search</Button>
    </Form>
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
      {searchQuery.map(novels => {
          return (
            <div>
                
            <Row>
            <Col sm="12">
            <Card body>
            <CardTitle className="centerTitle">Search List</CardTitle>
            <CardText>Results</CardText>
            <ul><li>{novels.volumeInfo.title}</li>
            <br/>
            <li>{novels.volumeInfo.authors}</li>
            <br/>
            <li>{novels.volumeInfo.description}</li>
            <br/>
            <li>{novels.volumeInfo.infoLink}</li>
            <br />
            <img src={(novels.volumeInfo.imageLinks) ? novels.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"}/>
            </ul>
          </Card>
        </Col>
      </Row>
            </div>
          )
      }
          
      )}
      </div>
    );
  };
  
  export default Search;