import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link} from "react-scroll"

const Home = () => {
  return (
<div name="home" className='h-screen w-full bg-gradient-to-b
from-black to-slate-950'>
    <div className='max-w-screen-lg mx-auto flex flex-col
    items-center justify-center h-full px-4 sm:text-center'>
            <h2 className='text-3xl sm:text-7xl font-bold text-red-500'>Hi, my name is Sakis Anastasopoulos.</h2>
            <p className='text-red-500 py-4 max-w-screen-sm min-[350px]:text-xl'>
            I am a full stack Web Developer with a background in working
with diverse teams . I enjoy working with full stack applications,
solving problems, creating useful applications, constantly
learning new technologies and implementing them
            </p>
                <Link to="portfolio" smooth duration={500}  className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-950 to-red-500'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <AiOutlineArrowRight className='ml-1'/>
                    </span>
                </Link>
                </div>
                <div>

    </div>
</div>
  )
}

export default Home