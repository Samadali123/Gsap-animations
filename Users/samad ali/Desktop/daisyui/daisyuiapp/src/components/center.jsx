import React from 'react'

const center = () => {
  return (
    <div className='w-full h-[90%] flex flex-col justify-center items-center gap-3 '>
    <h1 className='text-2xl font-medium'>Over 3 million already use <span className='line-through'>DaisyOne</span></h1>
    <p className='w-[55%] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odio, nemo animi tempora nesciunt aperiam ipsa omnis neque aliquid repudiandae. Deserunt voluptates suscipit ex odio officiis doloribus eveniet alias, cum error reiciendis illo nemo?</p>

    <button className='bg-orange-950 text-orange-100 rounded-3xl px-4 py-1'>Explore now</button>
    </div>
  )
}

export default center