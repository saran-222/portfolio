"use client"
import React from 'react'
import Github from "../../../public/github.svg"
import LinkedIn from "../../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'

const Email = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"

        const options = {
            method:"POST",
            headers: {
                'content-Type':"application/json"
            },
            body:JSONdata
        }

        const response = await fetch(endpoint,options)
        const resdata = await response.json()
        if(resdata.status === "success"){
            console.log("message sent");  
        }

    }

    return (
        <section className='grid md:grid-cols-2 mt-12 md:my-12 py-24 gap-4 '>
           
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new oppourtunities,
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/saran-222">
                        <Image src={Github} alt="Github image" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/saran-s-4b9b4b240/">
                        <Image src={LinkedIn} alt="LinkedIn image" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
                    <label name="email" className='text-white block  text-sm font-medium' >Your Email</label>
                    <input name="email" type='email' id="email" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Enter Email' required></input>
                    <label name="subject" className='text-white block  text-sm font-medium' >Subject</label>
                    <input name="subject" type='text' id="subject" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Subject' required></input>
                    <label name="message" className='text-white block  text-sm font-medium' >Message</label>
                    <textarea name='message' id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-6' placeholder="Let's talk..." required></textarea>

                    {/* <button type='submit' className='bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 text-white font-medium py-2.5 px-5 rounded-lg mt-6 w-full'>Send Message</button> */}
                    <div className='mt-4'>
                        <button
                            type='submit'
                            className='bg-gradient-to-br from-red-500 via-purple-500 to-sky-500 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Email
