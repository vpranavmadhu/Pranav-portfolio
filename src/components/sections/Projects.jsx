import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex justify-center py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>


          <div className='rounded-xl h-auto p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
            <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
              Experience
            </h2>
            {/* Timeline */}
            <div className="relative border-l-2 border-cyan-500 pl-6 space-y-10">

              {/* Experience Item */}
              <div className="relative">
                <FaBriefcase className="absolute -left-6 top-1 text-cyan-500 bg-gray-900 p-1 rounded-full text-xl" />
                <h3 className="text-xl font-semibold text-white">Full-Stack development Intern</h3>
                <p className="text-sm text-gray-300">Kodnest Technologies <br /> Sep 2024 – Mar 2025</p>

              </div>

              {/* Add more items below */}

            </div>
          </div>


          <div className='md:col-span-2 rounded-xl h-auto p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
            <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
              My Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                <h3 className='text-xl font-bold mb-2'>E-commerce-Application</h3>
                <ul className='list-disc list-inside text-gray-100 space-y-1'>
                  <li>Full-stack application using React and Spring Boot</li>
                  <li>Implements all CRUD operations for products and users</li>
                  <li>Uses MySQL for database and JWT for authentication</li>
                  <li>Responsive UI with modern design</li>
                </ul>
                <div className='flex justify-center pt-4 pb-2'>
                  <a
                    href='https://github.com/vpranavmadhu/ShopNestApp' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all'
                  >
                    <AiOutlineEye className='text-lg' />
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                <h3 className='text-xl font-bold mb-2'>Job Hiring Application</h3>
                <ul className='list-disc list-inside text-gray-100 space-y-1'>
                  <li>Role-based authentication for recruiters and candidates</li>
                  <li>Built with React (frontend) and Spring Boot (backend)</li>
                  <li>REST APIs integrated with MySQL for persistent data</li>
                  <li>Responsive UI with filter/search functionality</li>
                </ul>
                <div className='flex justify-center pt-4 pb-2'>
                  <a
                    href='https://github.com/vpranavmadhu/JobHiringApp' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all'
                  >
                    <AiOutlineEye className='text-lg' />
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                <h3 className='text-xl font-bold mb-2'>Personal Portfolio</h3>
                <ul className='list-disc list-inside text-gray-100 space-y-1'>
                  <li>Showcases projects, technical skills, and contact details in a clean layout.</li>
                  <li>Built with React Vite for fast development and performance.</li>
                  <li>Styled using Tailwind CSS for a responsive and modern UI.</li>
                  <li>Includes smooth navigation, project previews, and mobile support.</li>
                </ul>
                <div className='flex justify-center pt-4 pb-2'>
                  <a
                    href='https://github.com/vpranavmadhu/Pranav-portfolio'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all'
                  >
                    <AiOutlineEye className='text-lg' />
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                <h3 className='text-xl font-bold mb-2'>MealMate: FoodApp</h3>
                <ul className='list-disc list-inside text-gray-100 space-y-1'>
                  <li>Built with Django for backend and templating.</li>
                  <li>Users can browse restaurants and view menus.</li>
                  <li>Food ordering system with cart functionality.</li>
                  <li>Integrated Razorpay Test API for payments.</li>
                </ul>

                <div className='flex justify-center pt-16 pb-2'>
                  <a
                    href='https://github.com/vpranavmadhu/MealMate-Django-'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all'
                  >
                    <AiOutlineEye className='text-lg' />
                    View on GitHub
                  </a>
                </div>
              </div>




            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
