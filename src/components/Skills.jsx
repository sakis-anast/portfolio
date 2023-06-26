import React from 'react'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import reactjs from '../assets/skills/react.png'
import javascript from '../assets/skills/javascript.png'
import github from '../assets/skills/github.png'
import tailwind from '../assets/skills/tailwind.png'
import nextjs from '../assets/skills/nextjs.png'

const Skills = () => {
    const skills=[
        {
            id: 0,
            src: html,
            tittle: "HTML",
            style : "shadow-orange-500"
        },
        {
            id: 1,
            src: css,
            tittle: "CSS",
            style : "shadow-blue-500"
        }, {
            id: 2,
            src: javascript,
            tittle: "JAVASCRIPT",
            style : "shadow-yellow-500"
        }, {
            id: 3,
            src: reactjs,
            tittle: "REACT.JS",
            style : "shadow-blue-600"
        }, {
            id: 4,
            src: tailwind,
            tittle: "TAILWIND",
            style : "shadow-sky-400"
        },{
            id: 5,
            src: github,
            tittle: "GITHUB",
            style : "shadow-gray-400"
        }, {
            id: 6,
            src: nextjs,
            tittle: "NEXTJS",
            style : "shadow-white"
        },
       
    ]
  return (
    <div name="skills" className=' w-full bg-gradient-to-b
    from-black to-slate-950'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full 
        text-red-500' >
            <div className='pt-20'> 
                <p className='text-4xl font-bold border-b-4 border-red-500 p-2 inline'>Skills</p>
                <p className="py-6">Technologies i work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:px-0'>
                {skills.map((skill)=>(
 <div key={skill.id}className={`shadow-md hover:scale-105 duration-500   rounded-lg ${skill.style}`}>
 <img src={skill.src} alt={skill.tittle}  className='w-20 mx-auto'/>
 <p className='mt-4 text-white'> {skill.tittle} </p>
 </div>

                ))}
              
        </div>
        </div>
    </div>
  )
}

export default Skills