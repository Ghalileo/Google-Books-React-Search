import React, {useState, useEffect, setState, Component} from 'react';
import {  CardTitle, CardText, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import {  Avatar  } from 'antd';
import Card from '../components/Card'
import {List} from '../components/List'
import API from '../utils/API';
import Book from '../components/Books'
import Form from '../components/Form'
import {BsBookHalf, BsStarHalf} from 'react-icons/bs'
import {GiArchiveResearch} from 'react-icons/gi'
import './search.css'
import {Col, Container, Row} from '../components/Grid'



class Search extends Component {
  
  state = {
    books: [],
    q:"",
    message: "Let's get Started"
  };

// const [search, setSearch] = useState({input: ""})
// const [searchQuery, setsearchQuery] = useState([])
// const [message, setMessage] = useState("FOR THE LOVE OF GOD")





handleInputChange = event => {

  const {name, value} = event.target;
  this.setState({[name]: value})
}



 getBooks = () => {
  API.getBooks(this.state.q)
  .then(res => 
    this.setState({
    books: res.data
  },console.log(res.data))
  )
  .catch(() =>
  this.setState({
    books: [],
    message: "No New Books Retrieved.  Please try a new search."
  
  })
  
  );
  
}

handleSubmit = event => {
  event.preventDefault();
  this.getBooks()
  console.log(this)
}

 handleBookSave = id => {
  const book = this.state.books.find(book => book.id === id);

  API.saveBook({
    googleId: book.id,
    image: book.volumeInfo.imageLinks.thumbnail,
    title: book.volumeInfo.title,
    author: book.volumeInfo.author,
    link: book.volumeInfo.infoLink,
    description: book.volumeInfo.description,
      
  }).then(() => this.getBooks()); 
};

render () {
    return(
     
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
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
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
      

      

      // Original 

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
    )
  }
  };
  
  export default Search;