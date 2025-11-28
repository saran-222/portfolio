import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link';

const ProjectCard = ({ url, title, description, git, web }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-3xl relative group' style={{ background: `url(${url})`, backgroundSize: "cover" }}>
                <div className='overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    {!git && !web ? (
                        <div className='text-white text-xl font-semibold'>
                            <p>In Progress</p>
                        </div>
                    ) : (
                        <>
                            {git && (
                                <Link href={git} className='h-12 w-12 border-2  mr-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                                    <HiCodeBracket className='h-8 w-8 text-[#ADB7BE] cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 group-hover/link:text-white' />
                                </Link>
                            )}
                            {/* {web && (
                                <Link href={web} className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                                    <FaRegEye className='h-8 w-8 text-[#ADB7BE] cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 group-hover/link:text-white' />
                                </Link>
                            )} */}
                        </>
                    )}

                </div>
            </div>
            <div className='text-white rounded-b-3xl bg-black mt-3 py-3 px-4 '>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
