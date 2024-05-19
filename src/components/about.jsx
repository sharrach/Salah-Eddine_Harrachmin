import React from 'react'
import image from "./../public/hh.jpeg"

export default function about() {
  return (
    <div className='flex flex-row items-center justify-between w-[70%] h-[40vh]'>
         <div className='w-[300px] h-[300px] rounded-lg shadow-custom-shadow' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}></div>
        <div className='w-[50%] flex flex-col gap-7'>
            <div className='text-xl text-bold'>About me</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error modi quisquam! Maxime ipsum quasi exercitationem nulla distinctio, eius delectus aliquam placeat deleniti enim. Esse fugiat cumque sapiente necessitatibus suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius dolorum laborum error provident reprehenderit ratione, sint reiciendis esse consequatur ipsam dolorem temporibus culpa, ut, deleniti soluta asperiores et impedit?</div>
        </div>
    </div>
  )
}
