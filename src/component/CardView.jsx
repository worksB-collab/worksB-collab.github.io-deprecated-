import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const CardView = function () {
    return (
        <div>
            <Row className="mx-5 m-3">
                <Card
                    as={Col}
                    bg='dark'
                    text='white'
                    style={{width: '18rem'}}
                    className="m-3"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    as={Col}
                    bg='dark'
                    text='white'
                    style={{width: '18rem'}}
                    className="m-3"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    as={Col}
                    bg='dark'
                    text='white'
                    style={{width: '18rem'}}
                    className="m-3"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default CardView;