import React from 'react'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center '>
        <div className='flex justify-items-center'>
            <img  className='w-40 h-60 md:w-64 md:h-100 object-cover rounded-lg shadow-lg' src="/pranav.png" alt="" />
        </div>
        <div className='text-center z-10 px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent loading-right'>Hi, I'm Pranav</h1>
          <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>I'm a full stack developer passionate about building responsive, user-friendly web applications. Always eager to learn and grow, I enjoy turning ideas into real-world projects. Feel free to explore my work and see what I've been creating!</p>

          <div className='flex justify-center space-x-4'>
            <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>View Projects</a>
            <a href="#contact" className='border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/30'>Contact Me</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
