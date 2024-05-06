import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'







function Home() {

  const workRef = React.createRef(); // Create a ref for the work section

  const handleClick = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <> 
    <div  name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='mx-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
          Hi, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          shashi kumar singh
        </h1>
         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
           I'm a Full Stack Developer
        </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div >
         
        <div>
            <Link to="work" ref={workRef} onClick={handleClick} className='text-white group border-2 px-6 py-3 my-2 flex item-center hover:border-pink-600 h-1/3 w-1/4'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className='ml-3' />
              </span>
            </Link>
          </div>
         
        </div>

      </div>

    </div>
    </>
  )
}

export default Home
