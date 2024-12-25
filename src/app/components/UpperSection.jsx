"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from "framer-motion"

const UpperSection = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {
    triggerOnce: false,
    threshold: 0.1
  })
  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 }
  }

  return (
    <section className="lg:py-12 md:mb-20" id="home">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-12 lg:ml-20">
        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 2.5 }}
          className="col-span-8 place-self-center text-center md:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-500">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Saran',
                1000,
                'Full Stack Developer',
                1000,
                'SAP ABAP Consultant',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6  sm:text-sm lg:text-lg">
            Driven developer using advanced technologies to deliver impactful solutions.</p>
          <div>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 text-white mt-3">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0  "
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] relative">
            <Image
              src="/images/computer1.jpg"
              className="rounded-full "
              layout="fill"
              objectFit="cover"
              objectPosition="center right"
              alt="profile Image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UpperSection
