import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black to-slate-950 text-red-500'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>About</p>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur ad nobis, accusantium aliquid cumque?</p>
        <br/>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laboriosam molestiae? Earum facilis facere quidem.</p>
        </div>
    </div>
  )
}

export default About