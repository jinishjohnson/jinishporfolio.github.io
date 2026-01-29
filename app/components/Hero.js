"use client"
import React, { useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import DotGrid from "./DotGrid"

const Hero = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    const count2 = useMotionValue(0)
    const rounded2 = useTransform(() => Math.round(count2.get()))
    const count3 = useMotionValue(0)
    const rounded3 = useTransform(() => Math.round(count3.get()))

    useEffect(() => {
        const controls = animate(count, 2.5, { duration: 2 })
        const controls2 = animate(count2, 20, { duration: 2 })
        const controls3 = animate(count3, 12, { duration: 2 })
        return () => controls.stop()
    }, [])

    return (
        <section className="relative overflow-hidden w-full">
            <div className="absolute inset-0 z-0 h-full w-full opacity-30 pointer-events-auto">
                <DotGrid
                    dotSize={2}
                    gridGap={35}
                    baseColor="#FA6E00"
                    activeColor="#757575ff"
                    shockRadius={200}
                    shockStrength={8}
                />
            </div>
            <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between pointer-events-none'>
                <div className='space-y-4 text-[var(--text-color)] flex flex-col items-start justify-center text-start lg:text-start sm:text-center max-sm:items-center max-sm:justify-center pointer-events-auto'>
                    <img src="/Vector.png" alt="profile" className="absolute z-0 w-[420px] max-sm:w-[250px] max-sm:h-[250px] max-sm:top-10 max-sm:left-0 object-contain " />
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-[#707070] ml-0.5 text-[24px] font-semibold">Hi I am</motion.p>

                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-[#959595] -mt-6 text-[28px] font-bold">
                        Jinish Johnson
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-[70px] font-semibold lg:whitespace-nowrap uppercase leading-[0.9] max-sm:text-[50px] max-sm:leading-[0.8] max-sm:text-center max-sm:whitespace-none">Full Stack <span className='lowercase'>Developer</span></motion.p>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='flex items-center z-10 justify-center sm:z-50 lg:justify-start mt-2 gap-4 text-[var(--services)] text-2xl'>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaInstagram className='bg-transparent border border-[var(--services)] p-2 w-9 h-9 rounded-full cursor-pointer' />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaLinkedin className='bg-transparent border border-[var(--services)] p-2 w-9 h-9 rounded-full cursor-pointer' />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <FaGithub className='bg-transparent border border-[var(--services)] p-2 w-9 h-9 rounded-full cursor-pointer' />
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='flex items-center justify-center lg:justify-start mt-2 gap-4 text-[var(--services)] text-xl z-10'>
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className='px-4 py-2  rounded-md text-[var(--foreground)] dark:text-[var(--foreground)] bg-[#FA6E00]'>
                            Hire Me
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className='px-4 py-2 rounded-md text-[var(--foreground)] dark:text-[var(--foreground)] bg-transparent border border-[var(--services)]'>
                            Download CV
                        </motion.a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className='flex bg-white/4 backdrop-blur-sm p-4  rounded-lg items-center justify-center lg:justify-start mt-2 gap-4 text-[var(--services)] text-xl'>
                        <div className='flex items-center border-r border-[var(--services)] pr-2 justify-center lg:justify-start mt-2 gap-4 text-[var(--services)] text-xl'>
                            <div className='flex flex-col max-sm:text-center max-sm:text-[12px]'>
                                <motion.p className="text-[#FA6E00] font-bold text-[28px] max-sm:text-[20px]">{rounded}</motion.p> Experience
                            </div>
                        </div>
                        <div className='flex items-center border-r border-[var(--services)] pr-2 justify-center lg:justify-start mt-2 gap-4 text-[var(--services)] text-1xl'>
                            <div className='flex flex-col max-sm:text-center max-sm:text-[12px]'>
                                <motion.p className="text-[#FA6E00] font-bold text-[28px] max-sm:text-[20px]">{rounded2}</motion.p> Projects done
                            </div>
                        </div>
                        <div className='flex items-center  pr-2 justify-center lg:justify-start mt-2 gap-4 text-[var(--services)] text-1xl'>
                            <div className='flex flex-col max-sm:text-center max-sm:text-[12px]'>
                                <motion.p className="text-[#FA6E00] font-bold text-[28px] max-sm:text-[20px]">{rounded3}</motion.p> Happy Clients
                            </div>
                        </div>

                    </motion.div>
                </div>
                <div className="relative flex justify-baseline items-start self-start">
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-sm:w-[300px] max-sm:h-[300px] bg-[#151515] rounded-full"></motion.div>
                    <motion.img initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} src="/heroimg.png" alt="profile" className="relative z-10 h-[781px] max-sm:h-[498px] max-sm:w-[100%] max-sm:rounded-[45%] max-sm:scale-none rounded-[100%] object-cover scale-110 bottom-12 " />
                </div>
            </div>

        </section >
    )
}

export default Hero