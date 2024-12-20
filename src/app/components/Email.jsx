"use client"
import { useState } from 'react';
import Github from "../../../public/github.svg"
import LinkedIn from "../../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import {motion} from "framer-motion"






const Email = () => {


    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send', formData);
            if (response.data && response.data.result) {
                console.log("Message sent successfully");
                setFormData({
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                console.log("Failed to send message");
            }

        } catch (error) {
            console.error('Failed to add event:', error);
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email : e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value
    //     }
    //     const JSONdata = JSON.stringify(data)
    //     const endpoint = "/api/send"

    //     const options = {
    //         method:"POST",
    //         headers: {
    //             'content-Type':"application/json"
    //         },
    //         body:JSONdata
    //     }

    //     const response = await fetch(endpoint,options)
    //     const resdata = await response.json()
    //     if(resdata.status === "success"){
    //         console.log("message sent");  
    //     }

    // }




    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value
    //     };

    //     const JSONdata = JSON.stringify(data);

    //     try {
    //         // Sending the POST request using axios
    //         const response = await axios.post('api/send', JSONdata)


    //         // Check if the response contains the expected result
    //         if (response.data && response.data.result) {
    //             console.log("Message sent successfully");
    //         } else {
    //             console.log("Failed to send message");
    //         }
    //     } catch (error) {
    //         // Handle errors
    //         console.error("Error in sending message:", error);
    //     }
    // };



    return (
        <section className='grid md:grid-cols-2 mt-12 md:my-12 py-24 gap-4 ' id='contact'>

            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
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
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
                <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
                    <label name="email" className='text-white block  text-sm font-medium' >Your Email</label>
                    <input name="email" value={formData.email} type='email' id="email" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Enter Email' onChange={handleChange} required></input>
                    <label name="subject" className='text-white block  text-sm font-medium' >Subject</label>
                    <input name="subject" value={formData.subject} type='text' id="subject" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Subject' onChange={handleChange} required></input>
                    <label name="message" className='text-white block  text-sm font-medium' >Message</label>
                    <textarea name='message' value={formData.message} id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-6' placeholder="Let's talk..." onChange={handleChange} required></textarea>

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
            </motion.div>
        </section>
    )
}

export default Email
