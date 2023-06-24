import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b
    from-black to-slate-950 p-4 text-red-500'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-red-500 p-2 inline'>Contact</p>
                <p className='py-6'>Submit to get in touch</p>
            </div>
            <div className='flex justify-center items-start'>
                <form action="https://getform.io/f/b2f890ad-103e-4dcd-8a4d-bb5d6f609034" method='post' className='flex flex-col w-full md:w-3/4'>
                    <input type='text' name='name' 
                    placeholder='Enter your Name' required className='p-2 bg-transparent border-2 rounded-md border-red-500
                     text-white focus:outline-white'></input>
                     <input type='text' name='email' 
                    placeholder='Enter your email' required className='p-2 my-2 bg-transparent border-2 rounded-md border-red-500
                     text-white focus:outline-white '></input>
                     <textarea name='message' required placeholder='Enter your message.' rows="10" className='p-2
                     bg-transparent border-2 rounded-md
                     text-white focus:outline-white border-red-500'></textarea>
                     <button className='text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-red-950 to-red-500 hover:scale-110 duration-200'> Contact</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact