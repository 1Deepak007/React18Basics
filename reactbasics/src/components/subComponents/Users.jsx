import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"
import PropagateLoader from "react-spinners/PropagateLoader"

const Users = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUserData(response.data);
                setTimeout(() => {                  // settime must not be used here, it is used for checking loading 
                    setloading(false);
                }, 3000);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const [loading, setloading] = useState(true);


    // using ternary operator
    {
        return loading ?
            (
                <h2 className='text-center'> <PropagateLoader /> </h2>
            )
            :
            (
                userData.map((user) => {
                    return (
                        <>
                            <div className="inline-flex bg-gray-200 p-4 m-1 rounded-md shadow-md" key={user.id}>
                                <h2 className='text-md'>{user.name}</h2>
                                <p className='text-md ms-5'>{user.email}</p>
                            </div>
                        </>
                    )
                })
            )
    }



    // using if else

    // if (loading) {
    //     return <div className='text-center'>
    //                 <PropagateLoader color='red' loading={loading} size={10} className='items-center' aria-label="BeatLoader" data-testid="loader">
    //                 {/* <span className='text-sm'>Loading..</span> */}
    //                 </PropagateLoader> 
    //             </div>
    // }
    // else {
    //     return (
    //         <>
    //             <h1 className='text-xl underline'>Users</h1>
    //             {
    //                 userData.map((user) => {
    //                     return (
    //                         <>
    //                             <div className="inline-flex bg-gray-200 p-4 m-1 rounded-md shadow-md">
    //                                 <h2 className='text-md'>{user.name}</h2>
    //                                 <p className='text-md ms-5'>{user.email}</p>
    //                             </div>
    //                         </>
    //                     )
    //                 })
    //             }
    //         </>
    //     )
    // }



}

export default Users
