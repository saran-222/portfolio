"use client"
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import {motion} from "framer-motion"



const tab_data = [
    // {
    //     title: "Skills",
    //     id: "skills",
    //     content: (
    //         <ul className='space-y-1'>
    //             {/* <li><Image src="/images/node.png" alt="Node.js logo" className="rounded-full inline-block mr-2 " layout="fill" objectFit="cover" />Node</li> */}
    //             <li className="flex items-center">
    //                 <div className="relative mr-2">
    //                     <Image src="/images/node.png" alt="Node.js logo" className="rounded-full" width={30} height={30} objectFit="contain" />
    //                 </div>
    //                 Node
    //             </li>
    //             <li className="flex items-center">
    //                 <div className="relative mr-2">
    //                     <Image src="/images/express.png" alt="Express.js logo" className="rounded-full" width={30} height={30} objectFit="contain" />
    //                 </div>
    //                 Express
    //             </li>
    //             <li className="flex items-center">
    //                 <div className="relative mr-2">
    //                     <Image src="/images/react.png" alt="React.js logo" className="rounded-full" width={30} height={30} objectFit="contain" />
    //                 </div>
    //                 React
    //             </li>
    //             <li className="flex items-center">
    //                 <div className="relative mr-2">
    //                     <Image src="/images/next.png" alt="Next.js logo" className="rounded-full" width={30} height={30} objectFit="contain" />
    //                 </div>
    //                 Next
    //             </li>
    //             <li className="flex items-center">
    //                 <div className="relative mr-2">
    //                     <Image src="/images/mongo.png" alt="Mongo logo" className="rounded-full" width={30} height={30} objectFit="contain" />
    //                 </div>
    //                 MongoDB
    //             </li>



    //         </ul>
    //     )
    // },

    {
        title: "Skills",
        id: "skills",
        content: (
            <div className=" flex">
                <div className="flex-1">
                    <ul className="space-y-1">
                        {[
                            { src: "/images/node.png", alt: "Node.js logo", label: "Node" },
                            { src: "/images/express.png", alt: "Express.js logo", label: "Express" },
                            { src: "/images/react.png", alt: "React.js logo", label: "React" },
                            { src: "/images/next.png", alt: "Next.js logo", label: "Next" },
                            { src: "/images/mongo.png", alt: "Mongo logo", label: "MongoDB" }
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-[#ADB7BE] text-base sm:text-sm lg:text-lg hover:text-white">
                                <div className="relative mr-2">
                                    <Image src={item.src} alt={item.alt} className="rounded-full" width={30} height={30} objectFit="contain" />
                                </div>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="space-y-1">
                        {[
                            { src: "/images/postgres.png", alt: "Postgres logo", label: "Postgres" },
                            { src: "/images/aws.png", alt: "Aws logo", label: "AWS" },
                            { src: "/images/sap.png", alt: "SAP logo", label: "SAP ABAP" }
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-[#ADB7BE] text-base sm:text-sm lg:text-lg hover:text-white">
                                <div className="relative mr-2">
                                    <Image src={item.src} alt={item.alt} className="rounded-full" width={30} height={30} objectFit="contain" />
                                </div>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            // <ul className="space-y-1">
            //     {[
            //         { src: "/images/college.png", alt: "college logo", label: "BTech IT", percent: "83%" },
            //         { src: "/images/hsc.png", alt: "college logo", label: "HSC", percent: "71%" },
            //         { src: "/images/sslc.png", alt: "school logo", label: "HSC", percent: "95%" },


            //     ].map((item, index) => (
            //         <li key={index} className="flex items-center">
            //             <div className="relative mr-2">
            //                 <Image src={item.src} alt={item.alt} className="rounded-full" width={30} height={30} objectFit="contain" />
            //             </div>
            //             {item.label}
            //         </li>
            //     ))}
            // </ul>


            <ul className="space-y-1">
                {[
                    { src: "/images/college.png", alt: "college logo", label: "BTech - Information Technology (2019 - 2023)", percent: "83%" },
                    { src: "/images/book1.png", alt: "hsc logo", label: "HSC (2018 - 2019)", percent: "71%" },
                    { src: "/images/book2.png", alt: "sslc logo", label: "SSLC (2016 - 2017)", percent: "95%" },
                    
                ].map((item, index) => (
                    <li key={index} className="flex items-center justify-between text-[#ADB7BE] text-base sm:text-sm lg:text-lg hover:text-white">
                        <div className="flex items-center">
                            <div className="relative mr-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className="rounded-full"
                                    width={30}
                                    height={30}
                                    objectFit="contain"
                                />
                            </div>
                            <span>{item.label}</span>
                        </div>
                        <div >{item.percent}</div>
                    </li>
                ))}
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>SAP ABAP </li>
            </ul>
        )
    },
]


const About = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 md:mt-20'>
                {/* <Image src="/images/computer.jpg"  alt="aboutMe image" width={500} height={500}/> */}
                <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:2}} className='flex justify-center items-start'>
                    <div className='rounded-full bg-[#181818] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] relative '>
                        <Image src="/images/computer.jpg" className='rounded-full  object-cover' layout="fill" alt='profile Image' ></Image>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:2}} className='mt-4 md:mt-0 text-left flex flex-col h-full' >
                    <h2 className='text-2xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        As a Digital Marketing Specialist at XYZ Company, I developed and executed comprehensive digital marketing strategies that increased website traffic by 40% and improved lead conversion rates by 25%.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            Certification
                        </TabButton>
                    </div>
                    <div className='mt-8 '>
                        {tab_data.find((t) => t.id === tab)?.content}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
