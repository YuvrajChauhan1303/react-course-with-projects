import React from 'react'
import Social from './Social'

export default function PeopleCard(props) {
    const img = props.image
  return (
    <div className='w-[18rem] h-[32rem] bg-green-300 border-4 border-red-800 rounded-xl overflow-hidden'>
        <img className='object-cover h-full w-full ' src= {img} alt="" />
        <div>
            <h3>Your Name Here</h3>
        </div>
        
    </div>
  )
}
