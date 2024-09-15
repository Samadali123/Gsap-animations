import React from 'react'
import Navbar from './components/navbar'
import Center from './components/center'


const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-orange-100 text-black ">
         <Navbar/>
         <Center/>
    </div>
  )
} 

export default App