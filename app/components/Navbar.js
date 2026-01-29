"use client";
import React from 'react'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { AnimatePresence } from "motion/react"

const navLinks = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Services",
        href: "#services"
    },
    {
        id: 3,
        title: "About Me",
        href: "#about"
    },
    {
        id: 4,
        title: "Portfolio",
        href: "#portfolio"
    },
    {
        id: 5,
        title: "Contact Me",
        href: "#contact"
    }
]





const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");
    const handleLinkClick = (title) => {
        setActive(title);
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(!open);
    }


    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 350) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <>


            <motion.nav
                animate={{ y: hidden ? "-100%" : "0%", opacity: 1 }}
                transition={{ duration: 0.6 }}
                initial={{ y: -100, opacity: 0 }}
                className='w-full h-20 bg-transparent backdrop-blur-xl sm:hidden  sticky top-0 z-100'
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between w-full mt-4">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold bg-gradient-to-l from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">Jinish</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex justify-between items-center space-x-8">
                                {navLinks.map((links) => {
                                    return (
                                        <motion.a whileHover={{ scale: 1.1 }} key={links.id} href={links.href} className={`text-[var(--services)] hover:text-[var(--text-color)] px-3 py-2 rounded-md text-sm font-medium ${active === links.title ? "text-[var(--text-color)]" : ""}`} onClick={() => handleLinkClick(links.title)}>{links.title}</motion.a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex justify-between items-center space-x-8">
                                <motion.a whileHover={{ scale: 1.1 }} href="#" className='px-4 py-2 rounded-md text-[var(--foreground)] dark:text-[var(--foreground)] bg-[#FA6E00]'>
                                    Hire Me
                                </motion.a>
                            </div>

                        </div>
                        <div className="-mr-2 flex md:hidden" onClick={handleOpen}>
                            <motion.button whileTap={{ scale: 0.9 }} type="button" className="bg-transparent inline-flex items-center justify-center p-2 rounded-full border border-[var(--services)] text-[var(--services)] hover:text-[var(--text-color)] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className={`${!open ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className={`${open ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                            <AnimatePresence>

                                {open && (
                                    <motion.div key="modal" exit={{ opacity: 0 }}>
                                        <div className="md:hidden z-50 absolute top-20 left-0 w-full h-screen bg-[var(--background)]">
                                            <div className="px-2 pt-2 pb-3 space-y-1 max-sm:px-3 flex flex-col">
                                                {navLinks.map((links) => {
                                                    return (
                                                        <motion.a
                                                            key={links.id}
                                                            href={links.href}
                                                            whileHover={{ scale: 1.1 }}
                                                            className={`text-[var(--services)] hover:text-[var(--text-color)] px-3 py-2 rounded-md text-sm font-medium ${active === links.title ? "text-[var(--text-color)]" : ""}`}
                                                            onClick={() => handleLinkClick(links.title)}
                                                        >
                                                            {links.title}
                                                        </motion.a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </motion.nav >
        </>


    )
}

export default Navbar