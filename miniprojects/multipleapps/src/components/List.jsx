import React, { useEffect, useState } from 'react'


const List = () => {
    const [item, setitem] = useState("");
    const [list, setlist] = useState([]);

    const addinlist = () => {
        setlist((list) => [...list, item])
    }

    useEffect(() => {
        console.log("list : ", list)
    }, [list]);

    const handleDelete = (elmntToDel) => {
        // console.log('handle delete')
        setlist((prevList) => (
            prevList.filter(element => element !== elmntToDel)
        ))
    }

    const handleEdit = (elmntToUpdt) => {
        // console.log('Handle edit')
        const ndx = list.indexOf(elmntToUpdt)
        const updtdVal = window.prompt()
        setitem(updtdVal);
        //when you update the state using a function like setlist, you can pass a function as an argument. This function receives the current state (often referred to as the "previous state" or prevList in this case) and returns the new state. This is particularly useful for updating state based on its current value.
        setlist((prevList) => (
            prevList.map((element, index) => index === ndx ? updtdVal : element
            ))
        )
    }

    return (
        <>
            <div className='ms-20 mt-3'>
                <h2 className='text-2xl underline'>List</h2>
                <input onChange={(e) => setitem(e.target.value)} type="text" placeholder='add item' />
                <button onClick={addinlist} className='bg-blue-500 text-white px-2 py-1 rounded'>Add In list</button>
            </div>
            <div className="ms-20 mt-3">
                <ul>
                    {list.map((element) => (
                        <li key={element}>
                            {element}
                            <button onClick={() => handleDelete(element)} className='text-white bg-red-500 rounded p-1 m-1'>Delete</button>
                            <button onClick={() => handleEdit(element)} className='text-white bg-green-500 rounded p-1 m-1'>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default List