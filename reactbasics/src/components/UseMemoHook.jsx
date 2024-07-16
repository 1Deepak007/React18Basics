import React, { useMemo, useState } from 'react'


// in below code as many time we type text age functon is also rerendred
// so we use useMemo hook to memoize the age function in cache memory

const UseMemoHook = () => {
    const [selectDate, setselectDate] = useState(new Date());
    const [text,setText] = useState('')

    
    // console.log(selectDate); 

    function AgeCalculator(selDate){
        console.log("Age Calculator function called");
        const currDate = new Date();
        const dt = new Date(selectDate);
        const age = currDate.getFullYear() - dt.getFullYear();
        return age;
    }

    // const age = AgeCalculator(selectDate);
    const age = useMemo(() => {
        return AgeCalculator(selectDate)
        }, [selectDate]                 // when selectDate is change then only run AgeCalculator()
    );
    
    // console.log("Your age is ",age);

  return (
    <div>
        <h1 className='text-center text-2xl underline'>UseMemo Hook</h1>
        
        <h2 className='text-xl underline'>Age calculator</h2>
        <label htmlFor="date">Select Date : </label>
        <input type="date" id='date'
            onChange={(e)=>setselectDate(e.target.value)}
        />
        <label htmlFor="">Your age is : {age}</label>

        <br/>

        <label htmlFor="date">Type Text : </label>
        <input type="text" value={text}
            onChange={(e)=>setText(e.target.value)}
        />


    </div>
  )
}

export default UseMemoHook



