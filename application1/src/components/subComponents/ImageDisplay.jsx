import React from 'react'

function ImageDisplay({name, imgurl}) {
    return (
        <div className=' justify-center items-center'>
            <img src={imgurl} className='h-48' alt="Image here" />
            <h2>{name}</h2><br/>
        </div>
    )
}

export default ImageDisplay
