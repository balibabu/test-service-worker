import React, { useState } from 'react'

let num = 0;
const savedValues = localStorage.getItem('key');
export default function App() {
    const [values, setValues] = useState(savedValues ? savedValues.split(',') : []);

    function addValue() {
        setValues((prev) => {
            const newValues = [...values, num++];
            localStorage.setItem('key', newValues.toLocaleString());
            return newValues
        });
    }
    
    return (
        <div>
            <button onClick={addValue}>Add Number</button>
            {values.map((value) => <div key={value}>{value}</div>)}
        </div>
    )
}
