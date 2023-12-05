import React from 'react';

const DisplayPlan: React.FC = () => {
    const requirements = ['Requirement 1', 'Requirement 2', 'Requirement 3', 'Requirement 4'];
    const grades = [5, 6, 7, 8, 9, 10];

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th></th> {/* Empty cell for the top-left corner */}
                        {grades.map((grade) => (
                            <th key={grade} style={headerCellStyle}>
                                Grade {grade}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {requirements.map((requirement, rowIndex) => (
                        <tr key={requirement}>
                            <td style={headerCellStyle}>{requirement}</td>
                            {grades.map((grade) => (
                                <td key={`${requirement}-${grade}`} style={cellStyle}>
                                    {/* Add your content for each cell here */}
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
