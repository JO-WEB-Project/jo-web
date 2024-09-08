import React from 'react'

const MainTitle = ({title, description}) => {
  return (
    <div className='flex flex-col justify-center gap-2 mb-8'>
      <h1 className='text-3xl font-extrabold text-black text-opacity-80 '>{title}</h1>
      <p className=' text-sm text-black text-opacity-60 mb-2'>{description}</p>
      <hr className='w-full text-black border-[0.1px] border-black border-opacity-20'/>
    </div>
  )
}

export default MainTitle
