import React, {  Component} from 'react';
import API from "../utils/API"
import { Button, CardTitle, CardText} from 'reactstrap';
import Card from '../components/Card';
import {Row, Col} from '../components/Grid'
import { Container } from "react-bootstrap"
import Book from '../components/Books'
import Jumbotron from 'reactstrap/lib/Jumbotron';


class Saved extends Component {

  state = {
    books:[]
  }

  componentDidMount() {
    this.getSavedBooks();
    console.log(this)
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
              <strong>(React) Google Books Search</strong>
            </h1>
            <h2 className="text-center">Search for and Save Books of Interest</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Saved Books" icon="download">
            {this.state.books.map(book => (
              <Book
              key={book._id}
              title={book.title}
              authors={book.authors.join(", ")}
              description={book.description}
              image={book.image}
              Button={() => (
                <button
                onClick={() => this.handleBookDelete(book._id)}
                className="btn btn-danger ml-2"
                >
                  </button>
              )}
              />

              
            ))}
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
          {/* <Card body>
            <CardTitle className="centerTitle">Saved Books</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card> */}
        </Col>
      </Row>
      </Container>
    );
   }
  };
  
  export default Saved;