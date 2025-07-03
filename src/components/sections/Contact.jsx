import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com'

const Contact = () => {
  const[formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const SERVICE_ID = "service_def3c89"
  const TEMPLATE_ID = "template_4qi31nx"
  const PUBLIC_KEY = "cdkIuBXNwKf-c93Ql"

  const handlesubmit = (e) => {
    e.preventDefault()
    emailjs
    .sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY)
    .then((result) => {
      alert("Message Sent!");
      setFormData({name:"",email:"",message:""})
    }).catch(() => alert("Oops! Something went wrong. Please try again."));

  }

    return (
        <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
  <div className='w-full max-w-6xl mx-auto px-4'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>

      {/* Get in Touch Form */}
      <div className='md:col-span-2 w-full rounded-xl h-auto p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
        <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          Get In Touch
        </h2>
        <form className='space-y-6' onSubmit={handlesubmit}>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={(e) =>setFormData({...formData, name:e.target.value})}
            className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' required />
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={(e) =>setFormData({...formData, email:e.target.value})}
            className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' required />
          <textarea name="message" rows="3" placeholder="Your message" value={formData.message} onChange={(e) =>setFormData({...formData, message:e.target.value})}
            className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' required />
          <button type='submit'
            className='w-full bg-blue-500 text-white py-3 px-7 rounded-xl font-medium transition hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className='md:col-span-1 w-full rounded-xl h-auto p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
        <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          Connect with Me
        </h2>
        <div className='flex flex-col justify-center gap-16 items-center text-3xl text-white'>
          <a href='https://github.com/vpranavmadhu' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition'>
            <FaGithub /><h4 className='text-sm'>Git Hub</h4>
          </a>
          <a href='https://www.linkedin.com/in/v-pranav-madhu-062018266/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition'>
            <FaLinkedin /> <h4 className='text-sm'>LinkedIn</h4>
          </a>
          <a href='https://instagram.com/pranavmadhu_' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 transition'>
            <FaInstagram /> <h4 className='text-sm'>Instagram</h4>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
    )
}

export default Contact
