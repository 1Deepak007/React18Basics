import React, { useRef, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);     // Keep track of time
    const [isRunning, setIsRunning] = useState(false); // Keep track of whether the stopwatch is running

    const intervalRef = useRef(null);       // Store interval ID          //useRef is used to store a mutable reference to the interval ID returned by setInterval. This is necessary because setInterval returns an ID that you need to use later to clear the interval using clearInterval.

    // Function to start
    function start() {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    }

    // Function to pause
    function pause() {
        // It clears the interval to stop the time from incrementing and sets isRunning to false.
        if (isRunning) {
            clearInterval(intervalRef.current); // Clear the interval
            setIsRunning(false);
        }
    }

    // Function to reset
    function reset() {
        clearInterval(intervalRef.current); // Clear the interval
        setTime(0);
        setIsRunning(false);
    }

    return (
        <div className='ms-20 mt-3' >
            <h2 className='text-2xl underline'>Stopwatch</h2>
            <p>{time}</p>
            <button onClick={start} className='p-1 me-2 text-xl text-black bg-slate-500 rounded-3xl'>Start</button>
            <button onClick={pause} className='p-1 me-2 text-xl text-black bg-slate-500 rounded-3xl'>Pause</button>
            <button onClick={reset} className='p-1 text-xl text-black bg-slate-500 rounded-3xl'>Reset</button>
        </div>
    );
}

export default Stopwatch;

