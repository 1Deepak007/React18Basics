import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Profile = () => {

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();
    function handleNavigate(){
        navigate('/');
    }

  return (
    <div>
      <h2>Profile</h2>
      <h4>Name : {params.username}</h4>


      <button className='bg-teal-600 rounded-md p-3' onClick={handleNavigate}>Home</button>

    </div>
  )
}

export default Profile
