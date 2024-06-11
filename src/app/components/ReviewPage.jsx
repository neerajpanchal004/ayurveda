'use client';
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Stars from './Stars';
import LikeDislike from './Like';


export const ReviewPage = () => {
    const [isOpen, setIsOpen] = useState(true)
    if(!isOpen){
        return <button className='px-2 py-1 rounded-lg bg-green-600 text-white m-5' onClick={()=>setIsOpen(true)}>Review</button>
    }
  return (
  <div className='sm:w-1/4 w-full sm:mx-auto sm:mt-20 p-3 h-full  rounded-lg sm:shadow-xl'>
    <button onClick={()=>setIsOpen(false)}><RxCross1/></button>

    <h1 className='text-2xl font-bold'>Leave a review</h1>

     {/* safety rating */}
     <div>
    <h2 className='text-xl font-semibold mt-5'>Safety</h2>
    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
    <Stars/>
    </div>
     {/* safety rating */}


       {/* communication*/}
       <div>
    <h2 className='text-xl font-semibold mt-5'>Communication</h2>
    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
    <Stars/>
    </div>
     {/* communication*/}

       {/* trausti */}
       <div>
    <h2 className='text-xl font-semibold mt-5'>Would you recommend Trausti?</h2>
    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
    <LikeDislike/>
    </div>
     {/* trausti */}
     
  
  </div>
  )
}
