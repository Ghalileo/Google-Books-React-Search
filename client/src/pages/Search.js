import React, {useState, useEffect} from 'react';
import { Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, Avatar  } from 'antd'
import API from '../utils/API';
import {BsBookHalf, BsStarHalf} from 'react-icons/bs'


import './search.css'

const {Meta} = Card;

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
            <h4 className="centerTitle" style={{textAlign: "center"}}>Search and Save Books you like!</h4>
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
      <Button type ="submit" onClick={handleSubmit} className="buttonSe" >Search</Button>
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
                   <h4 className="apidata apiAuthor">{novels.volumeInfo.authors}</h4> <div><a className="apidata apiInfoLink" href={novels.volumeInfo.infoLink} target="_blank" rel="noopener"><BsBookHalf/></a><BsStarHalf className="saveIcon"/></div>
                   <h5 className="apidata apiDescription">{novels.volumeInfo.description}</h5>
                   <br/>
                   
                 </Col>
               </Row>
               <br/>
               </>
             )
    //       return (
    //         <div>
                
    //         <Row>
              
    //           {/* <Col >
    //           <img className="resultImg" src={(novels.volumeInfo.imageLinks) ? novels.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"} width="250" height="250"/>
    //           </Col> */}
    //         <Col sm="6">
    //         <Card 
    //         style={{width: 300}}
    //         cover={<img alt="book" src={(novels.volumeInfo.imageLinks) ? novels.volumeInfo.imageLinks.smallThumbnail : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"}/>}
    //         >
    //         <Meta
    //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    //   title="Card title"
    //   description="This is the description"
    // />
    
    //         <CardText>Results</CardText>
            
    //         <ul>
    //         <h4>Title</h4>
    //           <li>{novels.volumeInfo.title}</li>
    //         <br/>
    //         <h4>Authors</h4>
    //         <li>{novels.volumeInfo.authors}</li>
    //         <br/>
    //         <h4>Descriptions</h4>
    //         <li>{novels.volumeInfo.description}</li>
    //         <br/>
    //         <h4>View</h4>
    //         <a href={novels.volumeInfo.infoLink} target="_blank" rel="noopener"><li>View Book</li></a>
    //         <br />
            
    //         </ul>
    //       </Card>
    //     </Col>
    //   </Row>
    //         </div>
    //       )
      }
          
      )}
      </div>
    );
  };
  
  export default Search;