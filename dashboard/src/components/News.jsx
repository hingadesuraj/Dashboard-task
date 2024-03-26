import React from 'react'

const News = ({title,article,views,like,share}) => {
  return (
    <div className='border-b-2 h-[100px] w-[700px] ml-4 mb-2' >
        <div>
            <h1><span className='font-bold' >Title :</span> {title}</h1>
            <p><span className='font-bold'>Article :</span> {article} </p>
            <div className='flex gap-3' >
                <p><span className='font-bold' >Views :</span>{views}k</p>
                <p><span className='font-bold' >Like :</span>{like}k</p>
                <p><span className='font-bold' >Share :</span>{share}k</p>
            </div>
        </div>
        
    </div>
  )
}

export default News