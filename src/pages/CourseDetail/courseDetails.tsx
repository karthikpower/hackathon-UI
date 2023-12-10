import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { planOptions } from '../../api/MockData/plan';

interface courseDetails {
    courseId: string;
}

const CourseDetails: React.FC<courseDetails> = ({ courseId}) => { 

    return (
        (courseId ? <Row xs={1} >
            <Card style={{ width: '28rem' }} className="xs-12">
                <Card.Body>
                    <Card.Title>{courseId}</Card.Title>
                    <Card.Text>
                        <label><span style={{ fontWeight: 'bold' }}>Course Id:</span> {courseId}</label>
                        {/*  <br />
                            <label><span style={{ fontWeight: 'bold' }}>Pathways:</span> {option.pathway}</label>
                            <br />
                            <label><span style={{ fontWeight: 'bold' }}>Clusters:</span> {option.cluster}</label> */}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Row>: <></>)
        
    )
}

export default CourseDetails;