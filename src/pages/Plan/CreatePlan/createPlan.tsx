import { useState, ChangeEvent } from 'react';
import  RadioButton  from '../../../components/RadioButton';
export const CreatePlan = () => {
    const options = ['Create new plan', 'Copy from existing plan', 'Create using GenAI'];
    const [selectedOption, setSelectedOption] = useState<string>('Create new plan'); 
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Choose how to create your plan.</h1>
            {options.map((option, index) => (
                <RadioButton key={index}
                    label={option}
                    name="radioGroup" // Common name for the radio group
                    checked={option === selectedOption}
                    value={option}
                    onChange={handleRadioChange} />
            ))}
        </div>
    );



   

}