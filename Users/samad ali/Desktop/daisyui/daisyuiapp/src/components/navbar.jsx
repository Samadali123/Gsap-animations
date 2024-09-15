import React from 'react'

const navbar = () => {
  return (
    <div className='w-full h-[10%]  flex items-center justify-between px-5 border-b-2 border-orange-900  text-black'>
         <div className="left">
            <h3 className='text-lg font-semibold '>DaisyOne</h3>
         </div>
      
         <div className="right flex gap-2 pr-8 ">
            <ul className='flex gap-4 cursor-pointer text-sm font-medium '>
                <li className='px-3 py-1 rounded-3xl hover:bg-amber-950 hover:text-orange-100 '>About</li>
                <li className='px-3 py-1 rounded-3xl hover:bg-amber-950 hover:text-orange-100'>Contacts</li>
                <li className='px-3 py-1 rounded-3xl hover:bg-amber-950 hover:text-orange-100'>Services</li>
            </ul>
         </div>

    </div>
  )
}

export default navbar