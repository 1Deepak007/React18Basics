import React, { useState } from 'react'
import Users from './subComponents/Users';

const ConditionalRendering = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const [isloggedIn, setisloggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(true);
    }
    const handleLogout = () => {
        setLoggedIn(false);
    }

    // if(isloggedIn){
    //     return(
    //         <h2>Logged In</h2>
    //     )
    // }
    // else{
    //     return(
    //         <h2>Not LoggedIn</h2>
    //     )
    // }

    return (
        <>
            <div className='my-3'>
                <h1 className='text-center text-2xl underline'>Conditional Rendering</h1>

                {
                    loggedIn ?
                        <div className='flex gap-10'>
                            <h2>LoggedIn</h2>
                            <button
                                onClick={() => setLoggedIn(false)}
                                className='bg-blue-500 p-2 rounded-md'>Logout</button>
                        </div>
                        :
                        <div className='flex gap-10'>
                            <h2>Not LoggedIn</h2>
                            <button
                                onClick={() => setLoggedIn(true)}
                                className='bg-blue-500 p-2 rounded-md'>Login</button>
                        </div>
                }
                <hr />
            </div>

            {/* ----------------------------------------------------- */}

            <Users />


        </>
    )
}

export default ConditionalRendering
