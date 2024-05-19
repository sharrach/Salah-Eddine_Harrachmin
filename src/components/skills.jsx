import React from 'react'
import image from './../public/hh.jpeg'

export default function Skills() {
  return (
    <div className='flex flex-col items-center justify-center w-[70%]'>
      <div className='self-end pb-3'>Skills</div>
      <hr className='h-[2px] w-full bg-white '/>
      <div className='flex flex-row w-full justify-around items-center h-[10vh]'>
        <div className='flex items-center justify-center w-[20%] h-[50px] rounded-2xl shadow-custom-shadow py-1 bg-[#24272C]'>first
        </div>

      </div>
      <div className='flex items-center justify-between h-[25vh] w-full'>
        <div> <button>left arrow</button></div>
        <div className='w-[200px] h-[200px] rounded-full shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>

        <div> <button>right arrow</button></div>
      </div>
    </div>
  )
}
