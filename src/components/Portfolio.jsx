import React from 'react'
import rema from '../assets/rema.PNG'
import chatty from '../assets/chatty.PNG'
import openai from '../assets/openai.PNG'
// import calc from '../assets/rema.PNG'
import portfolio from '../assets/portfolio.PNG'

const Portfolio = () => {
    const projects=[
        {
            id: 0,
           src: rema,
           href1: "https://metalaxis.net/rema/",
           href2: "https://github.com/sakis-anast/ReMa",

        },
        {
            id: 1,
           src: chatty,
           href1: "https://www.loom.com/share/78841e49f9344ddbba4c0523abc3b4c5",
           href2: "https://github.com/sakis-anast/chat-application",
        },
        {
            id: 2,
           src: openai,
           href1: "https://www.loom.com/share/074498d15c304dafab77e7264a67beeb",
           href2: "https://github.com/sakis-anast/Chat-GPT",
        },
        {
           id: 3,
           src: portfolio,
           href1: "https://incredible-pony-000561.netlify.app/",
           href2: "https://github.com/sakis-anast/portfolio",
        },   
       
    ]
  return (
    <div id="portfolio" className="bg-gradient-to-b from-black to-slate-950
     text-red-500 ">
        <div className='max-w-screen-lg  mx-auto flex flex-col min-[320px]:p-2
         justify-center w-full h-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Portfolio</p>
                <p className='py-6'>Check out my work here</p>

            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-h-screen overflow-y-scroll scroll overflow-x-hidden md:overflow-x-hidden md:overflow-hidden md:h-auto pb-2'>

            {projects.map((project)=>(
                <div key={project.id} className='shadow-md shadow-red-500 rounded-lg scale-90 min-[290px]:scale-100  '>
                    <img src={project.src} alt='' className='rounded-md duration-200 hover:scale-105 '></img>
                    <div className='flex items-center justify-center'>
                        <a href={project.href1}  target="_blank" rel="noopener noreferrer" className='w-1/2  py-3 m-4 hover:scale-105 hover:text-white duration-300'>Demo</a>
                        <a href={project.href2}  target="_blank" rel="noopener noreferrer" className='w-1/2  py-3 m-4 hover:scale-105 hover:text-white duration-300'>Code</a>

                    </div>
                </div>
            ))}
                        </div>

        </div>
    </div>
  )
}

export default Portfolio