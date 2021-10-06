import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

const Book = ({title, authors, link, description, image, Button}) => {
 
    return(
        <ListGroup>
            <Row>
                <Col>
                <h3 className="font-italic">{title}</h3>
                </Col>
                <Col>
                <h3 className="font-italic">Written by {authors}</h3>
                </Col>
                <Button/>
            </Row>
            <Row>
                <Col size="md-6">
                    <a href={link} className="btn btn-light" target="_blank" rel="noopener noreferrer"></a>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={title}/>
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListGroup>
    )
}

export default Book;