import React, { useState } from 'react';

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(null);

    return (
        <div className='ms-20 mt-3'>
            <h2 className='text-2xl underline'>Progress Bar</h2>

            <div className="container">
                <div className="mb-4">
                    <label htmlFor='perc' className='block mb-2'>Enter percentage</label>
                    <input
                        id='perc'
                        type="number"
                        value={percentage}
                        onChange={(e) => setPercentage(Math.max(0, Math.min(100, Number(e.target.value))))}
                        className='bg-orange-200 ms-4 rounded-md p-1'
                    />
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div style={{ width: `${percentage}%` }} className='bg-black h-2 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
