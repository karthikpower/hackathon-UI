import React, { useState } from 'react';

interface DropDownProps { 
    options: string[]
}

const Dropdown: React.FC<DropDownProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelect = (option:any) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <label>Select one of the plan: </label>
            <select
                value={selectedOption}
                onChange={(e) => handleSelect(e.target.value)}
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

export default Dropdown;
