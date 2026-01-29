import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { MdOutlineDraw } from "react-icons/md";
import * as motion from "motion/react-client"
import { CiCircleMore } from "react-icons/ci";







const servicesData = [
    {
        id: 1,
        icon: <MdOutlineDesignServices className='w-12 h-12 text-[var(--services)]' />,
        title: "Ui/Ux Design",
        description: "I design visually appealing and user-friendly interfaces that enhance the user experience.",
    },
    {
        id: 2,
        icon: <CgWebsite className='w-12 h-12 text-[var(--services)]' />,
        title: "Web Development",
        description: "I design and develop fast, scalable, and user-focused websites and web applications using modern technologies.",
    },
    {
        id: 3,
        icon: <TbSeo className='w-12 h-12 text-[var(--services)]' />,
        title: "SEO Optimization",
        description: "I optimize websites and web applications to improve their visibility and ranking in search engine results.",
    },
    {
        id: 4,
        icon: <MdOutlineDraw className='w-12 h-12 text-[var(--services)]' />,
        title: "Graphic Design",
        description: "I design visually appealing and user-friendly interfaces that enhance the user experience.",
    },
    {
        id: 5,
        icon: <CiCircleMore className='w-12 h-12 text-[var(--services)]' />,
        href: "https://www.instagram.com/vitatechalliance/",
        title: "For More Services",
        description: "",
    }

]

const Services = () => {
    return (
        <motion.section initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} id='services' className='w-full mt-32 sm:w-full flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center space-y-4 mb-12">
                <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }} className='text-[var(--foreground)] font-bold text-[40px]'>Services</motion.h1>
                <p className='text-[#707070] text-[20px] max-w-2xl text-center'>I design and develop fast, scalable, and user-focused websites and web applications using modern technologies.</p>
            </div>
            <div className='grid grid-cols-1 max-sm:w-full max-sm:grid-cols-1 max-sm:px-2 lg:grid-cols-3 gap-8 pb-12'>
                {servicesData.map((service) => (
                    <motion.div whileHover={{ scale: 1.1 }} className='w-full max-w-[380px] flex flex-col items-center justify-center text-center leading-relaxed p-8 bg-white/4 backdrop-blur-sm rounded-lg border border-[var(--services)]' key={service.id}>
                        {service.icon ? (
                            <div>{service.href ? (
                                <a href={service.href}>{service.icon}</a>
                            ) : (
                                service.icon
                            )}</div>
                        ) : null}
                        <h2 className='text-[#FA6E00] font-bold text-[24px]'>
                            {service.href ? (
                                <a href={service.href}>{service.title}</a>
                            ) : (
                                service.title
                            )}
                        </h2>
                        <p className='text-[#707070] lato-regular text-[18px]'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default Services