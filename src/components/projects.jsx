import React from 'react'
import image from './../public/hh.jpeg'
export default function projects() {
  return (
    <div className='flex flex-col items-center justify-center w-[70%]'>
      <div className='self-start pb-3'>Projects</div>
      <hr className='bg-white w-full h-[2px]' />
      <div className='flex flex-row w-full justify-around items-center h-[10vh]'>
        <div className='flex items-center justify-center w-[20%] h-[40px] rounded-2xl shadow-custom-shadow py-1 bg-[#24272C]'>first</div>
        <div className='flex items-center justify-center w-[20%] h-[40px] rounded-2xl shadow-custom-shadow py-1 bg-[#24272C]'>first</div>
        <div className='flex items-center justify-center w-[20%] h-[40px] rounded-2xl shadow-custom-shadow py-1 bg-[#24272C]'>first</div>
      </div>
      <div className='flex flex-row items-center w-full h-[25vh] justify-around'>
        <div className='flex flex-col justify-around h-full'>
        <div className='w-[75px] h-[75px] rounded-full shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
        <div className='w-[75px] h-[75px] rounded-full shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
        <div className='w-[75px] h-[75px] rounded-full shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
        </div>
        <div className='w-[250px] h-[300px] rounded-lg shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
      </div>
    </div>
  )
}
