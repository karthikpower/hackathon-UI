// RadioButton.tsx
import React, { useState, ChangeEvent } from 'react';

interface SliderProps {
    min: number;
    max: number;
    options: string[];
}

const Slider: React.FC<SliderProps> = ({ min, max, options }) => {
    const handleSelectMinGrade = (option: any) => {
        setMinGrade(option);
    };


    const handleSelectMaxGrade = (option: any) => {
        setMaxGrade(option);
    };

    const [minGrade, setMinGrade] = useState(options[0]);
    const [maxGrade, setMaxGrade] = useState(options[options.length-1]);

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
        </div>
    );
};

export default Slider;
