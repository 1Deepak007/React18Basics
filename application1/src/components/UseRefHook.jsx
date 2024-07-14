import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const refCount = useRef(0); // Initializes refCount with 0

  const btnRef = useRef(); // Initializes btnRef without a value, but it will be attached to a button

  useEffect(() => {
    console.log('Component re-rendered');
    if(btnRef.current){
      btnRef.current.style.color = 'red';
    }
  }, []);

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log('Ref count:', refCount.current);
  };

  const decrementRefCount = () => {
    refCount.current -= 1;
    console.log('Ref count:', refCount.current);
  };

  return (
    <div>
      <h1 className='text-center text-2xl underline'>UseRef Hook</h1>
      <p className='mb-2'>
        useRef hook in React serves multiple purposes. It can hold a mutable value that persists across renders,
        interact with DOM elements, or store any value you want to keep around without triggering a re-render
        when the value changes.
      </p>

      <div className="flex gap-4 mt-4">
        <button onClick={() => setCount(count - 1)} className='border-teal-600 bg-orange-300 border-4 rounded-2xl p-1'>
          State Count -
        </button>
        <h4 className='mt-2'>State Count: {count}</h4>
        <button onClick={() => setCount(count + 1)} className='border-teal-600 bg-orange-300 border-4 rounded-2xl p-1'>
          State Count +
        </button>
      </div>

      <h3><b>Note : </b>Increased value will be shown below only when component reloads as it is a ref variable.</h3> 

      <div className="flex gap-4 mt-4">
        <button onClick={decrementRefCount} className='border-teal-600 bg-orange-300 border-4 rounded-2xl p-1'>
          Ref Count -
        </button>
        <h4 className='mt-2'>Ref Count: {refCount.current}</h4>
        <button onClick={incrementRefCount} className='border-teal-600 bg-orange-300 border-4 rounded-2xl p-1'>
          Ref Count +
        </button>
      </div>

      {/* Attaching btnRef to a button */}
      <button ref={btnRef} className='border-teal-600 bg-orange-300 border-4 rounded-2xl p-1'>
        Ref Button
      </button>
      <button onClick={() => { btnRef.current.style.display = 'none' }}>Hide Ref Button</button>
    </div>
  );
};

export default UseRefHook;
