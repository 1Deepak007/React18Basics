import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
    function handleNavigate(){
        navigate('/');
    }


  return (
    <div>
      <h2>About</h2>


      <button className='bg-teal-600 rounded-md p-3' onClick={handleNavigate}>Home</button>

    </div>
  )
}

export default About
