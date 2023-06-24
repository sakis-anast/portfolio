import React from 'react'
import rema from '../assets/rema.PNG'
// import chatty from '../assets/rema.PNG'
// import openai from '../assets/rema.PNG'
// import calc from '../assets/rema.PNG'

const Portfolio = () => {
    const projects=[
        {
            id: 0,
           src: rema
        },
        {
            id: 1,
           src: rema
        },
        {
            id: 2,
           src: rema
        },
        {
            id: 3,
           src: rema
        },
        {
            id: 4,
           src: rema
        },
       
       
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-slate-950
     text-red-500 ">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Portfolio</p>
                <p className='py-6'>Check out my work here</p>

            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 overflow-x-hidden pb-2'>

            {projects.map((project)=>(
                <div key={project.id} className='shadow-md shadow-red-500 rounded-lg '>
                    <img src={project.src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 hover:text-white duration-300'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 hover:text-white duration-300'>Code</button>

                    </div>
                </div>
            ))}
                        </div>

        </div>
    </div>
  )
}

export default Portfolio