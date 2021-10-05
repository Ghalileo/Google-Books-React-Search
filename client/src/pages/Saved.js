import { React, Component} from 'react';
import API from "../utils/API"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from "react-bootstrap"
import Jumbotron from 'reactstrap/lib/Jumbotron';


class Saved extends Component {

  state = {
    books:[]
  }

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
    .then(res =>
      this.setState({
        books: res.data
      })).catch(err => console.log(err))
  }

  handleBookDelete = (id) => {
    API.deleteBook(id).then(res => this.setSavedBooks());
  };

render() {
    return (
    <Container>
      <Row>
        <Col md="12">
          <Jumbotron>
            <h1 className="text-center">
              <strong>(React) Google Books Sarch</strong>
            </h1>
            <h2 className="text-center">Search for and Save Books of Interest</h2>
          </Jumbotron>
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
            <CardTitle className="centerTitle">Saved Books</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      </Container>
    );
   }
  };
  
  export default Saved;