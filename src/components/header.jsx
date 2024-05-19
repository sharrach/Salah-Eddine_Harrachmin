import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row w-full justify-around items-center h-[15vh]'>
      <div className='text-center w-[8%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
        <button>Contact</button>
      </div>
      <div className='text-center w-[8%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
        <button>Resume</button>
      </div>
      <div className='text-center w-[8%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
        <button>About</button>
      </div>
      <div className='text-center w-[8%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
        <button>Certificate</button>
      </div>
      <div className='text-center w-[8%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
        <button>Projects</button>
      </div>
    </div>
  )
}


