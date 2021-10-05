import React, {useState, useEffect, setState, Component} from 'react';
import { Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, Avatar  } from 'antd'
import API from '../utils/API';
import {BsBookHalf, BsStarHalf} from 'react-icons/bs'
import {GiArchiveResearch} from 'react-icons/gi'
import './search.css'



const Search = (props) => {
  // state = {
  //   books: [],
  //   q:"",
  //   message: "Search for a book to Start!"
  // }
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

const getBooks = (q) => {
  API.getBooks(this.state.q)
  .then(res => this.setState({
    book: res.data
  })).catch(() =>
  this.setState({
    books: [],
    message: "No New Books Retrieved.  Please try a new search."
  }))
}

const handleBooksSave = (id) => {
  const book = this.state.books.find(book => book.id === id);

  API.saveBook({
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
  }).then(() => this.getBooks());
  
}

    return (
    <div>
      <Row>
        <Col md="12">
          <Card body>
            <h4 className="centerTitle" style={{textAlign: "center"}}></h4>
            <br/>
            <br/>
            <br/>
            {/* <CardText>Search and Save Books you like!</CardText> */}
            <Form >
            
      <FormGroup>
        
        <Label for="book" hidden>Email</Label>
        <Input type="text" name="input" onChange={handleInputChange} id="exampleSearch" className ="formInputs" placeholder="Search Book" />
        
      </FormGroup>
      
      {' '}
      <div style={{textAlign:"center"}}>
      <Button type ="submit" onClick={handleSubmit} className="searchBtn" ><GiArchiveResearch className="searchBtnIcon" /></Button>
      {/* <GiArchiveResearch type ="submit" onClick={handleSubmit} className="searchBtn"  /> */}
      </div>
    </Form>
          </Card>
        </Col>
      </Row>
      <CardTitle className="centerTitle" style={{textAlign: "center"}}>Results</CardTitle>
      
      {searchQuery.map(novels => {

             return(
               <>
               <Row>
                 <Col sm="12">
                   <img className="resultingImg"src={(novels.volumeInfo.imageLinks) ? novels.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"} />
                   <h3 className="apidata apiTitle">{novels.volumeInfo.title}</h3>
                   <h4 className="apidata apiAuthor">{novels.volumeInfo.authors}</h4> 
                   <div>
                     <a className="apidata apiInfoLink" href={novels.volumeInfo.infoLink} target="_blank" rel="noopener"><BsBookHalf/></a>
                     <button className="saveBtn" onClick={handleBooksSave}><BsStarHalf className="saveIcon"/></button>
                     </div>
                   <h5 className="apidata apiDescription">{novels.volumeInfo.description}</h5>
                   <br/>
                   
                 </Col>
               </Row>
               <br/>
               </>
             )
    //      
      }
          
      )}
      </div>
    );
  };
  
  export default Search;