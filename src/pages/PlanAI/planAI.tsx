import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import {planOptions} from '../../api/MockData/plan';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

interface PlanAIProps {
    getPlanId:any
}

const handlePlanCreation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    console.log('call plan creation api');
   
}
export const PlanGenAI: React.FC<PlanAIProps> = ({getPlanId }) => { 
    return (
        <>
            <h1> Plans suggested by GenAI</h1>
            {planOptions.map((option) => (
                <Row xs={1} >
                    <Button variant="none" onClick={() => getPlanId(option.guid)}>
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
                                <Button variant="success" onClick={(e) => {handlePlanCreation(e)}}>Create Plan</Button>
                            </Card.Body>
                        </Card>    
                    </Button>  
                </Row>
            ))}
        
        </>
    );
}