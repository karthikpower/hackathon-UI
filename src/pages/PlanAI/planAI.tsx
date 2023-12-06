import React from 'react';
import Card from 'react-bootstrap/Card';
import {planOptions} from '../../api/MockData/plan';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const PlanGenAI: React.FC = () => { 

    return (
        <>
            <h1> Plans suggested by GenAI</h1>
         
            {planOptions.map((option) => (
                <Row xs={1} >
                    <Card style={{ width: '28rem' }} className="xs-12">
                        <Card.Body>
                            <Card.Title>{option.name}</Card.Title>
                            <Card.Text>
                                <label><span style={{ fontWeight: 'bold' }}>Guid:</span> {option.guid}</label>
                                <br/>
                                <label><span style={{ fontWeight: 'bold' }}>Pathways:</span> {option.pathway}</label>
                                <br />
                                <label><span style={{ fontWeight: 'bold' }}>Clusters:</span> {option.cluster}</label>
                            </Card.Text>
                            <Button variant="success">Create Plan</Button>
                        </Card.Body>
                        </Card>
                    </Row>
            ))}
        
        </>
    );
}