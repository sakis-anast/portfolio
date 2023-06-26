import React ,{useState} from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
function NavBar() {

    const [navigation , setNavigation] =useState(false)
    const infos=[
        {
            id: 0,
            info: "home"
        },
        {
            id: 1,
            info: "about"
        }, 
        {
            id: 2,
            info: "portfolio"
        },
        {
            id: 3,
            info: "skills"
        },
        {
            id: 4,
            info: "contact"
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-red-500 fixed z-10 bg-black px-4 '>
        <div >
            <h1 className='text-5xl font-signature ml-2'>Sakis</h1>
        </div>

        <ul className='hidden md:flex'>
            {infos.map(info=> (
 <li key={info.id} className='px-4 cursor-pointer font-medium 
hover:scale-105 hover:text-white duration-200 capitalize'> <Link to={info.info} smooth duration={500}>{info.info}</Link>
 </li>
            ))}
        </ul>

        <div  className='pr-4 z-10 md:hidden'>
        {navigation ?
                <FaTimes size={30} onClick={()=>setNavigation(!navigation)} className='cursor-pointer'/>

        

        :      
        <div className='flex items-center '>
            <h1 className='font-medium pr-2'>Menu</h1>
        <FaBars size={30} onClick={()=>setNavigation(!navigation)} className='cursor-pointer' /> 
        </div>   
}
        </div>
        {navigation &&(
  <ul className='flex flex-col justify-center items-center
  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-950'>
{infos.map(info=> (
<li key={info.id} className='py-6 px-4 cursor-pointer text-4xl
capitalize'> 
<Link to={info.info} smooth duration={500} onClick={()=>setNavigation(!navigation)} >{info.info}</Link>
  </li>
      ))}
  </ul>

        )}

      
    </div>
  )
}

export default NavBar