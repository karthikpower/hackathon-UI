import React, { useContext } from 'react';
import { planOptions } from '../../api/MockData/plan';
import _ from 'lodash';
import MyContext from '../../components/MyContext';


const grades = _.uniq(_.flatMap(planOptions, 'courses').map(course => course.grade));
const handleCourseClick = (name: any) => {
    console.log(name)
}
const DisplayPlan: React.FC = () => {
    const planGuid = useContext(MyContext);
    const plan = planOptions.find(plan => plan.guid === planGuid);
    const courses = plan?.courses;
    const coursesByGrade = _.groupBy(plan?.courses, 'grade');
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
                                <td key={ grade } style={cellStyle}>
                                    {coursesByGrade[grade]
                                        ? coursesByGrade[grade]
                                            .filter(course => courses!.some(planCourse => planCourse.id === course.id))
                                            .map((course, index, array) => (
                                                <span
                                                    key={course.id}
                                                    onClick={() => handleCourseClick(course.name)}
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
        </div>
        
    );
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

export default DisplayPlan;
