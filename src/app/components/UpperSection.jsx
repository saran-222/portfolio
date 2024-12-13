"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';

const UpperSection = () => {
    return (
        <section>
            {/* <div className='grid grid-cols-1 sm:grid-cols-12 md:ml-8 lg:ml-16 xl:ml-18 '>
                <div className="col-span-7 flex flex-col justify-center  items-center sm:items-start text-center sm:text-start">
                    <h1 className='text-white font-extrabold mb-4 text-2xl lg:text-3xl xl:text-4xl '> */}

                <div className='grid grid-cols-1 sm:grid-cols-12  '>
                <div className=" col-span-7 place-self-center text-center md:text-left ">
                    <h1 className="text-white mb-4 text-2xl  lg:text-3xl lg:leading-normal font-extrabold">         
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-sky-500'>Hello, I'm {""} </span>
                        <br></br>
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
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6  lg:text-xl'>
                        The quick brown fox jumps over a lazy dog.
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 hover:bg-slate-200 text-white'>Hire me</button>
                        <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 text-white mt-3'>
                            <span className='block bg-black  hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] relative'>
                        <Image src="/images/saran.jpg" className='rounded-full  ' layout="fill" objectFit="cover" objectPosition="center right" alt='profile Image' ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpperSection
