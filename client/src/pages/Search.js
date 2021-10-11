import React, {useState, useEffect, setState, Component} from 'react';
import {  Col, CardTitle, CardText, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import {  Avatar  } from 'antd';
import Card from '../components/Card'
import {List} from '../components/List'
import API from '../utils/API';
import Book from '../components/Books'
import Form from '../components/Form'
import {BsBookHalf, BsStarHalf} from 'react-icons/bs'
import {GiArchiveResearch} from 'react-icons/gi'
import './search.css'
import { Container, Row} from '../components/Grid'
const axios = require("axios")



const Search = () => {
  
  // state = {
  //   books: [],
  //   inquiry:"",
  //   message: "Let's get Started"
  // };

const [inquiry, setInquiry] = useState({input: ""})
const [books, setBook] = useState([])
const [message, setMessage] = useState("Search Below")
const [apikey, setApikey] = useState("AIzaSyDU0OCVB11h9vQ3NKwdOTqPNJHre6B4NJo")





const handleInputChange = event => {

  const book = event.target.value;
  setInquiry(book)
}



const getBooks = () => {
  API.getBooks({inquiry})
  .then(res => 
    
    this.setState({
    books: {books}
  },console.log(res.data),console.log(books))
  )
  .catch(() =>
  this.setState({
    books: [],
    message: "No New Books Retrieved.  Please try a new search."
  
  })
  
  );
  
}

const handleSubmit = event => {
  event.preventDefault();
  
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inquiry +" &key=" + apikey + "&maxResults=5")
  .then(res => {
    setBook(res.data.items)
    console.log(res.data.items)
  })
}

const handleBookSave = id => {
  const book = books.find(book => book.id === id);

  books.saveBook({
    googleId: book.id,
    image: book.volumeInfo.imageLinks.thumbnail,
    title: book.volumeInfo.title,
    author: book.volumeInfo.author,
    link: book.volumeInfo.infoLink,
    description: book.volumeInfo.description,
      
  }).then(() => this.getBooks()); 
  
};


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
            
          </Row>
          <Row>
          
          <Card title="Book Search" icon="far fa-book">
                {/* <Form 
                onChange={handleInputChange}
                onClick={handleSubmit}
                value={inquiry}
                /> */}

                <form>
                  <div>
                  <input onChange={handleInputChange} className="form-control"></input>
                  </div>
                  <br/>

                  <button className=" btn btn-danger" onClick={handleSubmit}></button>
                </form>
              </Card>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Results">
                
                {/* {books.map (book=> (
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener norferrer">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                  </a>
                ))} */}

                {books.length ? (
                  <List>
                    {books.map(book => (
                      <Row>
                                 <Col sm="12">
                                    <img className="resultingImg"src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"} />
                                   
                                  <h3 className="apidata apiTitle">{book.volumeInfo.title}</h3>
                                   <h4 className="apidata apiAuthor">{book.volumeInfo.authors}</h4> 
                                   <div>
                                      <a className="apidata apiInfoLink" href={book.volumeInfo.infoLink} target="_blank" rel="noopener"><BsBookHalf/></a>
                               <button className="saveBtn btn btn-danger" onClick={handleBookSave}>
                                       {/* <BsStarHalf className="saveIcon"/> */}
                                        </button>
                                     </div>
                                   <h5 className="apidata apiDescription">{book.volumeInfo.description}</h5>
                                   <br/>
                                   
                                 </Col>
                               </Row>
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">{message}</h2>
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
  
  };
  
  export default Search;