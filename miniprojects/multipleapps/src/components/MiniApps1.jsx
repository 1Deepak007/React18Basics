import React, { useReducer, useState } from 'react';

const MiniApps1 = () => {
    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        myname: '', mycheckbox: false, mycolor: '',
        mydate: '', mydatetimelocal: '', myemail: '',
        mymonth: '', mynumber: '', mypassword: '',
        myradio: '', myrange: '', myreset: '',
        mysearch: '', mysubmit: '', mytel: '',
        mytext: '', mytime: '', myurl: '',
        myweek: ''
    });

    return (
        <div>
            <div className='bg-slate-300 ps-20 pt-2 pb-2'>
                <h2 className='text-xl underline'>Counter Application</h2>
                <div className="flex gap-3">
                    <button onClick={() => setCount(count - 1)} className='p-2 bg-black text-white rounded-full'>-</button>
                    <h3 className='pt-2'>{count}</h3>
                    <button onClick={() => setCount(count + 1)} className='p-2 bg-black text-white rounded-full'>+</button>
                </div>
                <button onClick={() => setCount(0)} className='p-2 bg-black text-white rounded-full w-20'>Reset</button>
            </div>

            <div className='bg-teal-400 ps-20 pt-2 pb-2'>
                <h2 className='text-xl underline'>All kinds of inputs using reducer</h2>
                <input type="text" value={state.myname} placeholder='Enter your full name' onChange={(e) => dispatch({ type: "myname", payload: e.target.value })} className="m-3" />
                <input type="checkbox" checked={state.mycheckbox} onChange={(e) => dispatch({ type: "mycheckbox", payload: e.target.checked })} className="m-3" /> {/* Placeholder not applicable for checkboxes */}
                <input type="color" value={state.mycolor} onChange={(e) => dispatch({ type: "mycolor", payload: e.target.value })} className="m-3" /> {/* Placeholder not applicable for color picker */}
                <input type="date" value={state.mydate}  placeholder='' onChange={(e) => dispatch({ type: "mydate", payload: e.target.value })} className="m-3" />
                <input type="datetime-local" value={state.mydatetimelocal} placeholder='Select date and time' onChange={(e) => dispatch({ type: "mydatetimelocal", payload: e.target.value })} className="m-3" />
                <input type="email" value={state.myemail} placeholder='example@example.com' onChange={(e) => dispatch({ type: "myemail", payload: e.target.value })} className="m-3" />
                <input type="file" onChange={(e) => dispatch({ type: "myfile", payload: e.target.value })} className="m-3" />
                {/* File input does not support placeholders */}
                <input type="month" value={state.mymonth} placeholder='YYYY-MM' onChange={(e) => dispatch({ type: "mymonth", payload: e.target.value })} className="m-3" />
                <input type="number" value={state.mynumber} placeholder='Enter a number' onChange={(e) => dispatch({ type: "mynumber", payload: e.target.value })} className="m-3" />
                <input type="password" value={state.mypassword} placeholder='Enter password' onChange={(e) => dispatch({ type: "mypassword", payload: e.target.value })} className="m-3" />
                <input type="radio" checked={state.myradio} placeholder=''  onChange={(e) => dispatch({ type: "myradio", payload: e.target.checked })} className="m-3" />
                {/* Placeholder not applicable for radio buttons */}
                <input type="range" value={state.myrange} onChange={(e) => dispatch({ type: "myrange", payload: e.target.value })} className="m-3" /> {/* Placeholder not applicable for range inputs */}
                <input type="search" value={state.mysearch}  placeholder='' onChange={(e) => dispatch({ type: "mysearch", payload: e.target.value })} className="m-3" />
                {/* Reset input does not support placeholders */}
                <input type="search" value={state.mysearch} placeholder='Search here...' onChange={(e) => dispatch({ type: "mysearch", payload: e.target.value })} className="m-3" />
                {/* Submit input does not typically require a placeholder */}
                <input type="tel" value={state.mytel} placeholder='123-456-7890' onChange={(e) => dispatch({ type: "mytel", payload: e.target.value })} className="m-3" />
                <input type="text" value={state.mytext} placeholder='Additional text' onChange={(e) => dispatch({ type: "mytext", payload: e.target.value })} className="m-3" />
                <input type="time" value={state.mytime} placeholder='HH:MM' onChange={(e) => dispatch({ type: "mytime", payload: e.target.value })} className="m-3" />
                <input type="url" value={state.myurl} placeholder='https://example.com' onChange={(e) => dispatch({ type: "myurl", payload: e.target.value })} className="m-3" />
                <input type="week" value={state.myweek} placeholder='YYYY-Www' onChange={(e) => dispatch({ type: "myweek", payload: e.target.value })} className="m-3" />
            </div>
        </div>
    );
};

export default MiniApps1;

function reducer(state, action) {
    switch (action.type) {
        case 'myname':
            return { ...state, myname: action.payload };
        case 'mycheckbox':
            return { ...state, mycheckbox: action.payload };
        case 'mycolor':
            return { ...state, mycolor: action.payload };
        case 'mydate':
            return { ...state, mydate: action.payload };
        case 'mydatetimelocal':
            return { ...state, mydatetimelocal: action.payload };
        case 'myemail':
            return { ...state, myemail: action.payload };
        case 'mymonth':
            return { ...state, mymonth: action.payload };
        case 'mynumber':
            return { ...state, mynumber: action.payload };
        case 'mypassword':
            return { ...state, mypassword: action.payload };
        case 'myradio':
            return { ...state, myradio: action.payload };
        case 'myrange':
            return { ...state, myrange: action.payload };
        case 'myreset':
            return { ...state, myreset: action.payload };
        case 'mysearch':
            return { ...state, mysearch: action.payload };
        case 'mysubmit':
            return { ...state, mysubmit: action.payload };
        case 'mytel':
            return { ...state, mytel: action.payload };
        case 'mytext':
            return { ...state, mytext: action.payload };
        case 'mytime':
            return { ...state, mytime: action.payload };
        case 'myurl':
            return { ...state, myurl: action.payload };
        case 'myweek':
            return { ...state, myweek: action.payload };
        default:
            return state;
    }
}
