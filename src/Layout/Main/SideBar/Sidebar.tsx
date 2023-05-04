import Rating from '@/Components/Rating/Rating'
import { useState } from 'react'

const Sidebar = () => {
  return (
    <>
      <div className=" bg-[#343A40] text-white px-5 py-7 pb-20 flex flex-col gap-10">
        <span className="text-2xl">Filter Products</span>
        <div>
          <input name="group1" type="radio" id="Ascending" />
          <label htmlFor="Ascending">Ascending</label>
        </div>
        <div>
          <input name="group1" type="radio" id="Descending" />
          <label htmlFor="Descending">Descending</label>
        </div>
        <div>
          <input type="checkbox" id="Stock" />
          <label htmlFor="Stock">Include Out of Stock</label>
        </div>
        <div>
          <input type="checkbox" id="Fast" />
          <label htmlFor="Fast">Fast Delivery Only</label>
        </div>
        <Rating />
        <button className='bg-[#F8F9FA] text-black rounded-md py-2'>Clear Filters</button>
      </div>
    </>
  )
}

export default Sidebar
