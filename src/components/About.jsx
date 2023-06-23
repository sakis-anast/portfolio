import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black to-slate-950 text-red-500'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>About</p>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus, laborum natus neque nesciunt excepturi maiores itaque autem omnis dignissimos enim commodi veritatis? Enim quaerat harum reiciendis tempora est earum praesentium, dicta culpa. Ullam, doloremque pariatur sint adipisci libero eaque quod, id voluptate nobis eveniet sunt voluptatum rerum et natus.</p>
        <br/>
        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sed veniam repellendus explicabo doloribus, est facilis possimus id rem ea hic neque mollitia fuga quae dolor nisi repellat repudiandae excepturi. Temporibus corporis dignissimos totam nam. Soluta a omnis iure. Beatae eos animi enim laboriosam culpa, itaque odit! A, deserunt hic?</p>
        </div>
    </div>
  )
}

export default About