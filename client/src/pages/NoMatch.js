import React from 'react';
import { Col, Row, Container } from '../components/Grid'
import Jumbotron from '../components/Jumbotron';

const NoMatch = () => {
    return(
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Unfortunetly Not Found</h1>
                        
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;