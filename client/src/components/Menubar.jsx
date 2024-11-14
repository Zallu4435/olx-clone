import React from 'react'

const Menubar = ({ setMenu }) => {
  return (
    <div className='flex flex-wrap items-center justify-center sm:justify-start shadow-sm h-auto p-2'>
      <h1 onClick={() => { setMenu('Shirt') }} className='mx-2 sm:mx-6 my-2 cursor-pointer'>Shirt</h1>
      <h1 onClick={() => { setMenu('Jacket') }} className='mx-2 sm:mx-6 my-2 cursor-pointer'>Jacket</h1>
      <h1 onClick={() => { setMenu('Mobile Phones') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>Mobile Phones</h1>
      <h1 onClick={() => { setMenu('Motor Cycles') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>Motor Cycles</h1>
      <h1 onClick={() => { setMenu('House') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>House</h1>
      <h1 onClick={() => { setMenu('Scooters') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>Scooters</h1>
      <h1 onClick={() => { setMenu('Bike') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>Bike</h1>
      <h1 onClick={() => { setMenu('Apartments') }} className='mx-2 sm:mx-4 my-2 cursor-pointer'>Apartments</h1>
    </div>
  )
}

export default Menubar;
