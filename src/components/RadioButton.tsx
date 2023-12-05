// RadioButton.tsx
import React, { useState, ChangeEvent } from 'react';

interface RadioButtonProps {
    label: string;
    name: string;
    checked: boolean;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, checked, value, onChange }) => {
    return (
        <div>
            <label>
                <input type="radio" name={name} checked={checked} value={value} onChange={onChange} />
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
