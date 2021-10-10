import React from 'react';
import Jumbotron from 'reactstrap/lib/Jumbotron';
// import Jumbotron from '../components/Jumbotron/index'
import Search from './Search';
import './style.css';
import { Container } from 'react-bootstrap'

const Home = () => {
    
    return(
        <>
       
        <Container>
        
        <Search/>
        </Container>
        
            
            
        </>
    )
}

export default Home;