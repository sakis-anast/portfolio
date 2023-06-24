import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"

const SocialLinks = () => {
    const links=[
        {
            id: 0,
            child: (
                <>
                            Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/sakis-anastasopoulos-3270b1b3/",
            style: "rounded-tr-md"
        },
        {
            id: 1,
            child: (
                <>
                            Github <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/sakis-anast",      
          }, 
        {
            id: 2,
            child: (
                <>
                            Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:sak.anastasopoulos@gmail.com",  
            style: "rounded-br-md"

        },
       
    ]
  return (
    <div className='hidden lg:flex flex-col top-[40%] left-0 fixed'>
        <ul>
           {links.map((link)=>(
             <li key={link.id} className={`' flex justify-between items-center w-40 h-14 px-4 font-bold
             ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-white ${link.style}' `}>
                 
                  <a href={link.href}  target="_blank" rel="noopener noreferrer"className='flex justify-between items-center w-full text-red-500'> 
             {link.child}
             </a></li>
           ))}
        </ul>
    </div>
  )
}

export default SocialLinks