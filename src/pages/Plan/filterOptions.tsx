import React, { useContext, useState } from 'react';
import { planOptions } from '../../api/MockData/plan';
import _, { toInteger } from 'lodash';
import CourseContext from '../../components/CourseContext';
import PlanContext from '../../components/PlanContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from '../../components/Slider';

let grades = _.uniq(_.flatMap(planOptions, 'courses').map(course => course.grade));
grades = [...grades].sort((a, b) => a - b);

interface CourseProps {
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
    const plan = planOptions.find(plan => plan.guid === planGuid);
    const courses = plan?.courses;
    const coursesByGrade = _.groupBy(plan?.courses, 'grade');
    const coursesByStatus = _.groupBy(plan?.courses, 'status');

   
    return (planGuid ?
       ( 
            <Container fluid>
                <Row>
                    <Col xs={12}><DisplayPlan getCourseId={getCourseId} courses={courses} coursesByGrade={coursesByGrade} /></Col>
                    <Col xs={12}><ContextTable getCourseId={getCourseId} courses={courses} coursesByStatus={coursesByStatus} /></Col>
                    <Col xs={12}><Slider options={grades} /></Col>
                </Row>
            </Container>
        ): <></>
    );
    
}
const DisplayPlan: React.FC<CourseProps> = ({ getCourseId, courses, coursesByGrade }) => {
   
    return (
         <div>
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
                                        .map((course: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: number, array: string | any[]) => (
                                            <span
                                                key={course.id}
                                                onClick={() => getCourseId(course.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {course.name}
                                                {index !== array.length - 1 && ','}
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
    const courseStatus = ['Completed', 'In Progress', 'Failed'];
    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        {courseStatus.map((status) => (
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
                                        .map((course: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: number, array: string | any[]) => (
                                            <span
                                                key={course.id}
                                                onClick={() => getCourseId(course.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {course.name}
                                                {index !== array.length - 1 && ','}
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
