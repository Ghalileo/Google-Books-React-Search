import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
// import Jumbotron from '../components/Jumbotron/index'
import Search from './Search';
import './style.css';
import { Container } from 'react-bootstrap'

const Home = () => {
    
    return(
        <>
        <br/>
        <br/>
        <Container>
        <Jumbotron className="theJumboTron">
        <h1 style={{textAlign: "center"}}>(React) Google Books Search</h1>
        </Jumbotron>
        <Search></Search>
        </Container>
        
            
            
        </>
    )
}

export default Home;