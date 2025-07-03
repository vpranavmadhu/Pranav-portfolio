import React, { useEffect, useRef, useState } from 'react'
import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiSpring,
    SiDjango,
    SiMysql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiTailwindcss,
    SiBootstrap,
    SiGithub,
    SiPostman,
    SiIntellijidea,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import { DiJava } from "react-icons/di";

const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const skills = [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Java", icon: <DiJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-300" /> },
        { name: "Spring Boot", icon: <SiSpring className="text-green-600" /> },
        { name: "Django", icon: <SiDjango className="text-green-800" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-600" /> },
        { name: "Spring Tool Suite", icon: <SiSpring className="text-green-600" /> },
    ];

    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>About Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='md:col-span-2 rounded-xl h-auto p-8 border-white/10 border hover:-translate-y-1 transition-all bg-gray-900'>
                        <p className='text-gray-300 h-auto mb-6'>I'm a full stack web developer with experience in building robust and scalable applications using Java, Python, and modern web technologies. I work across both front-end and back-end, with a strong grasp of frameworks like Spring Boot, Django, and tools like MySQL and REST APIs. I’m passionate about writing clean, efficient code and creating user-friendly, responsive interfaces. Always eager to learn, I enjoy solving real-world problems through technology.</p>
                        <a
                            href="/resume.pdf"
                            download
                            className='bg-black border border-blue-500 text-blue-500 px-6 py-3 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/30 transition'
                        >
                            Download Resume
                        </a>

                    </div>

                    <div className=' rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
                        <h3 className='text-3xl font-bold text-center underline mb-4'>My Education</h3>
                        <p className='text-gray-300 mb-6'>Bachelor of Technology (B.Tech) in Computer Science and Engineering <br /> <br />St. Thomas College of Engineering and Technology, Kannur 2020-2024 Batch</p>
                    </div>
                    <div className='md:col-span-3 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all  bg-gray-900'>
                        <h3 className='text-4xl text-center underline font-bold mb-4'>My Skills</h3>

                        <div ref={sectionRef} className="flex flex-wrap justify-center gap-6 mt-10">
                            {skills.map((skill, i) => (
                                <div
                                    key={skill.name}
                                    className={`flex flex-col items-center text-white p-3 rounded-lg opacity-0 ${isVisible ? "animate-on-view" : ""
                                        }`}
                                    style={{
                                        animationDelay: `${i * 0.2}s`,
                                        animationFillMode: "forwards",
                                        minWidth: "80px",
                                    }}
                                >
                                    <div className="text-4xl">{skill.icon}</div>
                                    <span className="text-sm mt-2">{skill.name}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


            </div>

        </section>
    )
}

export default About
