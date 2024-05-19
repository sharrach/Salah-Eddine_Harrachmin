import React from 'react'
import image from './../public/hh.jpeg'

export default function Profile() {
  return (
    <div className='flex flex-col items-center justify-around h-[50vh]'>
      <div className='w-[300px] h-[300px] rounded-full shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
      <div>hey</div>
      <div>I'm sharrach</div>
      <div>Software Engineer</div>
      <div className='text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo ad repellendus est cum praesentium eos numquam exercitationem rerum reiciendis asperiores laboriosam, perferendis iure vel unde dolores impedit porro eum?</div>
      <div className='flex w-full items-center justify-center gap-8'>
        <div className='text-center w-[10%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
          <button>learn More</button>
        </div>
        <div className='text-center w-[10%] rounded-lg shadow-custom-shadow py-2 bg-[#24272C]'>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  )
}