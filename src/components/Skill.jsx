import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCR from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import NodeJs from '../assets/node.png'
import MongoDb from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import FireBase from '../assets/firebase.png'


function Skill() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Skills
          </p>
          <p className='py-6'>
            //This are the Technology I've Working with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>
              HTML
            </p>
          </div> 
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='my-4'>
              CSS
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JAVASCR } alt="HTML icon" />
            <p className='my-4'>
              JavaScript
            </p>
          </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>
               React
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
            <p className='my-4'>
              GitHub 
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={NodeJs} alt="HTML icon" />
            <p className='my-4'>
              Node Js
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MongoDb} alt="HTML icon" />
            <p className='my-4'>
              MongoDB
            </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            <p className='my-4'>
              Tailwind
            </p>
          </div> 
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
            <p className='my-4'>
                FireBase
            </p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Skill
