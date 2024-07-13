import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectHook = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('useEffect hook of UseEffectHook.jsx');
        axios.get('https://icubecode-server.onrender.com/users')
            .then((response) => {
                console.log(response);
                console.log("Data : ", response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to load data. Please try again later.');
            });
    }, []);

    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count === 10) {
            alert('Click limit reached 10');
        }
    }, [count])

    return (
        <>
            <div>
                <h1 className='text-center text-2xl underline'>useEffect Hook</h1>
                <p>useEffect hook runs on every render of component. It is similar to componentDidMount</p>

                {data.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200 bg-slate-300">
                        <thead className="bg-gray-50">
                            <tr>
                                {Object.keys(data[0]).map((header, index) => (
                                    <th key={index} scope="col">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* we use map() here cuz map() returns something */}
                            {data.map((item, index) => (
                                <tr key={index} className='text-center'>
                                    {Object.values(item).map((value, i) => (
                                        <td key={i}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading...</p>
                )}
            </div>


            <div className="flex">
                {data.map((item, index) => {
                    return <div className='bg-slate-400'>
                        <p key={index}>{item.username},</p>
                    </div>
                })}
            </div>


            <h2 className='text-center text-2xl underline'>UseEffect on value change</h2>
            <div className="flex gap-10">
                <p>Count : {count}</p>
                <button onClick={() => { setCount(count + 1) }} className='bg-green-400 rounded-xl p-2'>Increase Count</button>
            </div>

            
        </>
    );
};

export default UseEffectHook;
