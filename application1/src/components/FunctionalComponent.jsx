import React from 'react'
import ImageDisplay from './subComponents/ImageDisplay'

const FunctionalComponent = () => {

  let carname = "Hyundai";
  const carnames = ["Tesla","Audi","Lambourghini","Ferrari"]
  const carimages = [
    'https://images.pexels.com/photos/3954401/pexels-photo-3954401.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]

  function getalert(username){
    alert(`Hello ${username}`);
  }
  return (
    <div>
      <h2 className='text-center text-2xl underline'>Functional Component & Props</h2>
      
      <div className="flex">
        <ImageDisplay name={carname} imgurl={"https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6"}/>
        <ImageDisplay name={"Lambourghini"} imgurl={"https://media.zigcdn.com/media/model/2021/May/v8_360x240.jpg"}/>
      </div>

      <div className="flex gap-4">
        {
          carnames.map((carname, index) => {
            return <ImageDisplay key={index} name={carname} imgurl={carimages[index]}/>
          })
        }
      </div>



      <div>
        <UsersList username='Deepak' getAlert={getalert}/>
        <UsersList isNum={10} getAlert={getalert}/>
      </div>
    
    </div>
  )
}

export default FunctionalComponent


// UsersList component
function UsersList({username = 'default name' , isNum=0, getAlert}){
  return  <>
            <p>Username : {username} Num : {isNum}</p>
            <button onClick={()=>getAlert(username)} className='bg-slate-400 rounded-2xl p-2 text-white hover:text-black'>Click</button>
          </>
}

export {UsersList}
