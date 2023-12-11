import React, { useContext } from 'react';
import { planOptions } from '../../api/MockData/plan';
import _ from 'lodash';
import PlanContext from '../../components/PlanContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../../components/Slider';
import Button from 'react-bootstrap/Button';
import { MdOutlineFavorite } from "react-icons/md";

let grades = _.uniq(_.flatMap(planOptions, 'courses').map(course => course.grade));
grades = [...grades].sort((a, b) => a - b);

interface CourseProps {
    planGuid: any;
    getCourseId: any;
    courses: any;
    coursesByGrade: any;
}

interface CourseStatusProps {
    getCourseId: any;
    courses: any;
    coursesByStatus: any;
}

interface FilterOptionsProps {
    getCourseId: any;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ getCourseId }) => { 
    const planGuid = useContext(PlanContext);
    const partialId = planGuid.slice(0, 7);
    const plan = planOptions.find(plan => plan.guid === planGuid);
    const courses = plan?.courses;
    const coursesByGrade = _.groupBy(plan?.courses, 'grade');
    const coursesByStatus = _.groupBy(plan?.courses, 'status');
    
    return (planGuid ?
        ( 
            <div style={{ backgroundColor: '#D8F0FA' }}>
                <Container fluid>
                    <Row>
                        <Col xs={12}><DisplayPlan planGuid={partialId} getCourseId={getCourseId} courses={courses} coursesByGrade={coursesByGrade} /></Col>
                        <Col xs={12}><ContextTable getCourseId={getCourseId} courses={courses} coursesByStatus={coursesByStatus} /></Col>
                        <Col xs={12}><Slider title={'Filter by Grade'} options={[6, 7, 8, 9, 10, 11, 12]} /></Col>
                        <Col xs={12}><Button variant="success">Apply Filters & Create Plan</Button></Col>
                    </Row>
                </Container>
            </div>
           
        ): <></>
    );
    
}
const DisplayPlan: React.FC<CourseProps> = ({ planGuid, getCourseId, courses, coursesByGrade }) => {
   
    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>Plan Guid from GenAI model: <span style={{fontWeight: 'normal'}}>{planGuid}</span><br/>To be Planned courses</p>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        {grades.map((grade) => (
                            <th key={grade} style={headerCellStyle}>
                                Grade {grade}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        {grades.map((grade) => (
                            <td key={grade} style={cellStyle}>
                                {coursesByGrade[grade]
                                    ? coursesByGrade[grade]
                                        .filter((course: { id: any; }) => courses!.some((planCourse: { id: any; }) => planCourse.id === course.id))
                                        .map((course: { id: React.Key | null | undefined; name: string | null | undefined; favourite: string|boolean | null | undefined, status: string | null | undefined }, index: number, array: string | any[]) => (
                                            <span
                                                key={course.id}
                                                onClick={() => getCourseId(course.id)}
                                                style={{
                                                    cursor: 'pointer',
                                                    backgroundColor: (course.status === 'Completed' && course.favourite) ? 'green' : (course.status === 'Yet to Complete' && course.favourite)? 'yellow': '',
                                                }}
                                            >
                                                {course.name} {course.favourite ? <MdOutlineFavorite color='#FF007F' /> : <MdOutlineFavorite style={{opacity: 0.0}}/>}
                                                 <br/>
                                            </span>
                                        ))
                                    : ''}
                            </td>
                        ))}
                    </tr>
                
                </tbody>
            </table>
            <br /><br />
        </div>
        
    );
};

const ContextTable: React.FC<CourseStatusProps> = ({ getCourseId, courses, coursesByStatus }) => {
    const courseStatus = ['Completed', 'Yet to Complete'];
    const courseStatusHeader = ['Completed', 'Yet to Complete from AI model'];
    return (
        <div>
            <p style={{fontWeight: 'bold'}}>Student Course History</p>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        {courseStatusHeader.map((status) => (
                            <th key={status} style={headerCellStyle}>
                                {status}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        {courseStatus.map((grade) => (
                            <td key={grade} style={cellStyle}>
                                {coursesByStatus[grade]
                                    ? coursesByStatus[grade]
                                        .filter((course: { id: any; }) => courses!.some((planCourse: { id: any; }) => planCourse.id === course.id))
                                        .map((course: { id: React.Key | null | undefined; name: string | null | undefined; favourite: string | boolean | null | undefined, status: string | null | undefined }, index: number, array: string | any[]) => (
                                            <span
                                                key={course.id}
                                                onClick={() => getCourseId(course.id)}
                                                style={{
                                                    cursor: 'pointer',
                                                    backgroundColor: (course.status === 'Completed' && course.favourite) ? 'green' : (course.status === 'Yet to Complete' && course.favourite) ? 'yellow' : '',
}}
                                            >
                                                {course.name} {course.favourite ? <MdOutlineFavorite color='#FF007F' /> : <MdOutlineFavorite style={{ opacity: 0.0 }} />}
                                                <br />
                                            </span>
                                        ))
                                    : ''}
                            </td>
                        ))}
                    </tr>

                </tbody>
            </table>
            <br /><br />
        </div> 
    )
};

const headerCellStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
};

const cellStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
};

export default FilterOptions;
