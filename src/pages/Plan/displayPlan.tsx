import React, { useContext } from 'react';
import { planOptions } from '../../api/MockData/plan';
import _ from 'lodash';
import MyContext from '../../components/MyContext';

const coursesByGrade = _.groupBy(_.flatMap(planOptions, 'courses'), 'grade');
const grades = _.uniq(_.flatMap(planOptions, 'courses').map(course => course.grade));

const handleCourseClick = (name: any) => {
    console.log(name)
}
const DisplayPlan: React.FC = () => {
    const planGuid = useContext(MyContext);
    console.log('line14 test', planGuid)
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
                    {planOptions.map((plan, rowIndex) => (
                        <tr key={plan.guid}>
                            {grades.map((grade) => (
                                <td key={ grade } style={cellStyle}>
                                    {coursesByGrade[grade]
                                        ? coursesByGrade[grade]
                                            .filter(course => plan.courses.some(planCourse => planCourse.id === course.id))
                                            .map(course => (
                                                <span
                                                    key={course.id}
                                                    onClick={() => handleCourseClick(course.name)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    {course.name}
                                                </span>
                                            ))
                                        : ''}
                                </td>
                            ))}
                        </tr>
                    ))}
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
