import React, { useState } from 'react'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import reactjs from '../assets/skills/react.png'
import javascript from '../assets/skills/javascript.png'
import github from '../assets/skills/github.png'
import tailwind from '../assets/skills/tailwind.png'
import nextjs from '../assets/skills/nextjs.png'
import vscode from '../assets/skills/vscode.png'
import mongodb from '../assets/skills/mongodb.png'
import postman from '../assets/skills/postman.png'
import trello from '../assets/skills/trello.png'
import sass from '../assets/skills/sass.png'
import git from '../assets/skills/git.png'
import materialui from '../assets/skills/materialui.png'
import express from '../assets/skills/express.jpg'
import npm from '../assets/skills/npm.png'
import node from '../assets/skills/node.png'
import bootstrap from '../assets/skills/bootstrap.png'


const Skills = () => {

    const frontend=[
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
        }, {
            id: 5,
            src: nextjs,
            tittle: "NEXTJS",
            style : "shadow-white"
        },
        {
            id: 6,
            src: sass,
            tittle: "SASS",
            style : "shadow-purple-700"
        },
        {
            id: 7,
            src: materialui,
            tittle: "Material UI",
            style : "shadow-sky-900"
        },
        {
            id: 8,
            src: bootstrap,
            tittle: "Bootstrap",
            style : "shadow-purple-900"
        },
       
    ]
    const tools=[
        {
            id: 0,
            src: github,
            tittle: "GITHUB",
            style : "shadow-gray-400"
        },
        {
            id: 1,
            src: vscode,
            tittle: "VS Code",
            style : "shadow-sky-600"
        },
        {
            id: 2,
            src: postman,
            tittle: "Postman",
            style : "shadow-orange-400"
        },
        {
            id: 3,
            src: trello,
            tittle: "Postman",
            style : "shadow-sky-800"
        },
        {
            id: 4,
            src: git,
            tittle: "GIT",
            style : "shadow-orange-500"
        },
    ]
    const backend=[
        {
            id: 0,
            src: mongodb,
            tittle: "MongoDB",
            style : "shadow-green-500"
        },
        {
            id: 1,
            src: node,
            tittle: "Node JS",
            style : "shadow-lime-400"
        },
        {
            id: 4,
            src: npm,
            tittle: "NPM",
            style : "shadow-red-500"
        },
        {
            id: 3,
            src: express,
            tittle: "Express",
            style : "shadow-gray-500"
        },
       
    ]
    const [data, setData] = useState(frontend)
    const [skill1, setSkill1] = useState(true)
    const [skill2, setSkill2] = useState(false)
    const [skill3, setSkill3] = useState(false)

function front(){
    if (!skill1){
    setData(frontend)
    setSkill1(!skill1)
    setSkill2(false)
    setSkill3(false)


}
}
function back(){
    if (!skill2){
    setData(backend)
    setSkill1(false)
    setSkill2(!skill2)
    setSkill3(false)}
}
function tool(){
    if (!skill3){
    setData(tools)
    setSkill1(false)
    setSkill2(false)
    setSkill3(!skill3)}
}
  return (
    <div id="skills" className=' w-full bg-gradient-to-b min-h-screen
    from-black to-slate-950'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full 
        text-red-500' >
            <div className='pt-20 '> 
                <p className='text-4xl font-bold border-b-4 border-red-500 p-2 inline '>Skills</p>
                <p className='py-5 '>These are the technologies that i use</p>

            </div>
            <div className='flex '> 

                <p onClick={front} className={`cursor-pointer  hover:text-white  ${skill1 ? " text-white underline" : ""}`} >Frontend</p>
                <p onClick={back} className={`px-6 cursor-pointer hover:text-white ${ skill2 ? " text-white underline" : ""}`}>Backend</p>
                <p onClick={tool} className={`cursor-pointer hover:text-white  ${ skill3 ? " text-white underline" : ""}`}>Tools</p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:px-0'>
                
                {data.map((skill)=>(
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