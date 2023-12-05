import React from 'react';
import Dropdown from '../../components/Dropdown';

export const PlanGenAI: React.FC = () => { 
    const planOptions = ['66b3208a-c9a5-420f-b8b2-e1c7eb5f083a', '66b3208a-c9a5-420f-b8b2-e1c7eb5f', 'c5698b5b-4cda-48e5-aa05-e1876e75a0ae'];

    return (
        <>
            <h1> Plans suggested by GenAI</h1>
            <Dropdown options={planOptions}/>
        </>
    );
}