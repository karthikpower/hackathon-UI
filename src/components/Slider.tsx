// RadioButton.tsx
import React, { useState } from 'react';

interface SliderProps {
    options: number[];
}

const Slider: React.FC<SliderProps> = ({options }) => {
    const handleSelectMinGrade = (option: any) => {
        option = parseInt(option)
        if (option >= maxGrade) {
            console.log('line12', option, maxGrade)
            setError(`Please select min grade is less than max grade. You have selected min grade: ${option} and max grade: ${maxGrade}`);
        } else {
            console.log('line15',option, maxGrade)
            setMinGrade(option);
            setError('');
        }
    };


    const handleSelectMaxGrade = (option: any) => {
        option = parseInt(option)
        if (minGrade >= option) {
            console.log('line23', minGrade, option)
            setError(`Please select min grade is less than max grade. You have selected max grade: ${option} and min grade: ${minGrade}`);
        } else {
            console.log('line26', minGrade, option)
            setMaxGrade(option);
            setError('');
        }
    };

    const [minGrade, setMinGrade] = useState(options[0]);
    const [maxGrade, setMaxGrade] = useState(options[options.length - 1]);
    const [error, setError] = useState('');

    return (
        <div>
            <label>Min grade: </label>
            <select
                value={minGrade}
                onChange={(e) => handleSelectMinGrade(e.target.value)}
            >
                {options.map((option: any, index: number) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            &nbsp; &nbsp;
            <label>Max grade: </label>
            <select
                value={maxGrade}
                onChange={(e) => handleSelectMaxGrade(e.target.value)}
            >
                {options.map((option: any, index: number) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {{ error } ? <p style={{ color: 'red' }}>{error}</p> : ''}
        </div>
    );
};

export default Slider;
