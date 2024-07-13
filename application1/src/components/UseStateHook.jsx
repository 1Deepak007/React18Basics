import React, { useState, useEffect } from 'react';

const UseStateHook = () => {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const increment = () => setNum1(num1 + 1);
    const decrement = () => setNum1(num1 - 1);
    const reset = () => setNum1(0);

    const [aryVal, setAryVal] = useState('');
    const [myary, setMyary] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateValue, setUpdateValue] = useState('');

    const addValueInMyArray = () => {
        if (aryVal.trim()) {
            setMyary([...myary, { element: aryVal.trim() }]);
            setAryVal(''); // Clear the input after adding
        }
    };

    const deleteElement = (index) => {
        setMyary(myary.filter((_, i) => i !== index));
    };

    const startUpdate = (index, value) => {
        setUpdateIndex(index);
        setUpdateValue(value);
    };

    const updateElement = () => {
        if (updateValue.trim()) {
            setMyary(myary.map((el, i) => i === updateIndex ? { element: updateValue.trim() } : el));
            setUpdateIndex(null);
            setUpdateValue('');
        }
    };

    useEffect(() => {
        console.log(myary);
    }, [myary]);

    return (
        <div>
            <h2 className="text-center text-2xl underline">UseState Hook</h2>

            {/* State variables for numbers */}
            <h4>{num}</h4>
            <button onClick={() => setNum(num + 1)} className="p-3 rounded-md bg-green-400"> + </button>
            <button onClick={() => setNum(num - 1)} className="p-3 m-2 rounded-md bg-green-400"> - </button>
            <button onClick={() => setNum(0)} className="p-3 rounded-md bg-green-400"> Reset </button>

            <h4>{num1}</h4>
            <button onClick={increment} className="p-3 rounded-md bg-blue-400"> + </button>
            <button onClick={decrement} className="p-3 m-2 rounded-md bg-blue-400"> - </button>
            <button onClick={reset} className="p-3 rounded-md bg-blue-400"> Reset </button>

            <br />

            {/* Array and update functionality */}
            <h4>Values of array are:</h4>
            {myary.map((element, index) => (
                <div key={index} className="flex items-center mb-2">
                    <p className="flex-1">Index: {index}, Element: {element.element}</p>
                    <button onClick={() => deleteElement(index)} className="mx-2 bg-red-400 text-white p-1 rounded-xl">
                        Delete
                    </button>
                    <button onClick={() => startUpdate(index, element.element)} className="mx-2 bg-yellow-400 text-white p-1 rounded-xl">
                        Update Value
                    </button>
                </div>
            ))}

            {/* Add value in array */}
            <input type="text" value={aryVal} onChange={(e) => setAryVal(e.target.value)} className="border border-red-700"/>
            <button onClick={addValueInMyArray} className="p-2 rounded-md bg-green-400">
                Add to array
            </button>

            {/* Update value input */}
            {updateIndex !== null && (
                <div className="mt-4">
                    <input type="text" value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)} className="border border-blue-700"
                    />
                    <button onClick={updateElement} className="p-2 rounded-md bg-yellow-400">
                        Update
                    </button>
                    <button onClick={() => { setUpdateIndex(null); setUpdateValue(''); }} className="p-2 ml-2 rounded-md bg-gray-400">
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default UseStateHook;
