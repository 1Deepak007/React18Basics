// ===============> normal code 

// import React, { useReducer, useState } from 'react';

// const UseReducerHook = () => {
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent the default form submit behavior
//         console.log("Form submitted");
//         alert(`
//             Firstname : ${firstname}, Lastname : ${lastname},
//             Email : ${email}, Phone : ${phone}
//         `);
//     };

//     return (
//         <div>
//             <h1 className='text-center text-2xl underline'>UseReducer Hook</h1>
//             <p>Complex State Logic: When your component's state logic becomes too complex to handle with multiple useState hooks, useReducer simplifies the process by centralizing the state logic into a single reducer function.</p>

//             <form onSubmit={handleSubmit}> 
//                 <label>Firstname</label>
//                 <input type="text" value={firstname} className='border-2 border-red-900'
//                 onChange={(e) => setFirstname(e.target.value)} />

//                 <label>Lastname</label>
//                 <input type="text" value={lastname} className='border-2 border-red-900'
//                 onChange={(e) => setLastname(e.target.value)} />

//                 <label>Email</label>
//                 <input type="text" value={email} className='border-2 border-red-900'
//                 onChange={(e) => setEmail(e.target.value)} />

//                 <label>Phone</label>
//                 <input type="number" value={phone} className='border-2 border-red-900'
//                 onChange={(e) => setPhone(e.target.value)} />

//                 <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UseReducerHook;




//==============>  Code using reducer
import React, { useReducer } from 'react'

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    })

    function handleSubmitForm() {
        alert(`${state.firstname} " "${state.lastname} " " ${state.email} " " ${state.phone}`);
    }

    return (
        <div>
            <h1 className='text-center text-2xl underline'>UseReducer Hook</h1>
            <p>Complex State Logic: When your component's state logic becomes too complex to handle with multiple useState hooks, useReducer simplifies the process by centralizing the state logic into a single reducer function.</p>

            <form onSubmit={handleSubmitForm}>
                <input type="text" value={state.firstname} placeholder="first name" className='border-4 border-blue-400'
                    onChange={(e) => (dispatch({ type: "firstname", payload: e.target.value }))} />

                <input type="text" value={state.lastname} placeholder="last name" className='border-4 border-blue-400'
                    onChange={(e) => (dispatch({ type: "lastname", payload: e.target.value }))} />

                <input type="email" value={state.email} placeholder="email" className='border-4 border-blue-400'
                    onChange={(e) => (dispatch({ type: "email", payload: e.target.value }))} />

                <input type="number" value={state.phone} placeholder="phone" className='border-4 border-blue-400'
                    onChange={(e) => (dispatch({ type: "phone", payload: e.target.value }))} />

                <button type='submit' className='p-2 text-white bg-black rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default UseReducerHook;



function reducer(state, action) {
    switch (action.type) {
        case 'firstname':
            return { ...state, firstname: action.payload };
        case 'lastname':
            return { ...state, lastname: action.payload };
        case 'email':
            return { ...state, email: action.payload };
        case 'phone':
            return { ...state, phone: action.payload };
        default:
            return state;
    }
}
