import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Books"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import {BsBookHalf, BsStarHalf} from 'react-icons/bs'


class Home extends Component {

// const [inquiry, setInquiry] = useState({input: ""})
// const [books, setBook] = useState([])
// const [message, setMessage] = useState("Search Below")
// const [apikey, setApikey] = useState("AIzaSyDU0OCVB11h9vQ3NKwdOTqPNJHre6B4NJo")

    state = {
        books: [],
        q:"",
        message: "Let's get Started"
      };

      handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
      };

      getBooks = () => {
          API.getBooks(this.state.q)
            .then(res => 
                this.setState({
                    books: res.data
                })
                )
                .catch(() =>
                this.setState({
                    books: [],
                    message: "Nothing in search.  Please try again" 
                })
                );
      };

      handleSubmit = event => {
          event.preventDefault();
          this.getBooks();
      };

      handleBookSave = id => {
          const book = this.state.books.find(book => book.id === id);

          API.saveBook({
              googleId: book.id,
              title: book.volumeInfo.title,
              link: book.volumeInfo.infoLink,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail
          }).then(() => this.getBooks(), console.log(book));
      }



    render () {
    return(
        // Version A
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>(React) Google Books Search</strong>
                </h1>
                <h2 className="text-center">Search for and Save Books of Interest.</h2>
              </Jumbotron>
            </Col>
            <Col size="md-12">
                <Card title="Book Search" icon="far fa-book">
                    <Form
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        q={this.state.q}
                        
                    />
                </Card>
            </Col>
            
          </Row>
          
          <Row>
            <Col size="md-12">
              <Card title="Results">
                
                {/* {this.state.books.map (book=> (
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener norferrer">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                  </a>
                ))} */}

                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                          <button 
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary m1-2"
                          >
                              Save
                        </button>
                      )}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row>
        </Container>

        // Version B 
        // <>
      // <Row>
      //   <Col md="12">
      //     <Card body>
      //       <h4 className="centerTitle" style={{textAlign: "center"}}></h4>
      //       <br/>
      //       <br/>
      //       <br/>            
      //       <Form>            
      //         <FormGroup>        
      //           <Label for="book" hidden>Email</Label>
      //           <Input type="text" name="input" handleinputChange={this.handleinputChange} id="exampleSearch" className ="formInputs" placeholder="Search Book" value={this.state.q} />      
      //         </FormGroup>      
      //         {' '}
      //         <div style={{textAlign:"center"}}>
      //           <Button type ="submit" handleSubmit={this.handleSubmit} className="searchBtn" ><GiArchiveResearch className="searchBtnIcon" /></Button>    
      //         </div>
      //       </Form>
      //     </Card>
      //   </Col>
      // </Row>
      // <CardTitle className="centerTitle" style={{textAlign: "center"}}>Results</CardTitle>      
      // {this.state.books.length ? (
      //   <List>
      // {this.state.book.map(novels => {

      //        return(
      //          <>
      //          <Row>
      //            <Col sm="12">
      //              <img className="resultingImg"src={(novels.volumeInfo.imageLinks) ? novels.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"} />
                   
      //              <h3 className="apidata apiTitle">{novels.volumeInfo.title}</h3>
      //              <h4 className="apidata apiAuthor">{novels.volumeInfo.authors.join(", ")}</h4> 
      //              <div>
      //                <a className="apidata apiInfoLink" href={novels.volumeInfo.infoLink} target="_blank" rel="noopener"><BsBookHalf/></a>
      //                <button className="saveBtn" handleBooksSave={this.handleBooksSave}>
      //                  {/* <BsStarHalf className="saveIcon"/> */}
      //                  </button>
      //                </div>
      //              <h5 className="apidata apiDescription">{novels.volumeInfo.description}</h5>
      //              <br/>
                   
      //            </Col>
      //          </Row>
      //          <br/>
      //          </>
      //        )
          
      // }
          
      // )}</List>): (<h2>{this.state.message}</h2>)  }

      // </>
    );
  }
}

export default Home;