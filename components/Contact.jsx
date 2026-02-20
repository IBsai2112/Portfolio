import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key","116bc93e-a89a-4326-8649-24a812c8b34a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[10%] py-14 scroll-mt-20'
    >

      <div className='max-w-5xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl'>

        {/* LEFT SIDE – PURPLE GRADIENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='bg-gradient-to-br from-[#fde7df] to-[#e2b1a0] text-white p-10 flex flex-col justify-center'
        >
          <h2 className='text-3xl font-semibold mb-4'>
            Reach Out
          </h2>

          <p className='text-sm leading-relaxed opacity-90'>
            Whether you have a question, a suggestion, or just want to have a chat,
            feel free to drop a message.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='bg-white p-10 dark:bg-[#110220]'
        >
          <h3 className='text-2xl font-semibold mb-2'>Contact us</h3>
          <p className='text-sm text-gray-500 mb-6'>
            We’re open for any suggestion or just to have a chat.
          </p>

          <motion.form
            onSubmit={onSubmit}
            className='flex flex-col gap-4'
          >

            <input
              type="text"
              placeholder='Name'
              required
              name='name'
              className='p-3 bg-gray-100 outline-none rounded-md text-sm dark:bg-black/20'
            />

            <input
              type="email"
              placeholder='Email'
              required
              name='email'
              className='p-3 bg-gray-100 outline-none rounded-md text-sm dark:bg-black/20'
            />

            <textarea
              rows='4'
              placeholder='Message'
              required
              name='message'
              className='p-3 bg-gray-100 outline-none rounded-md text-sm resize-none dark:bg-black/20'
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              type='submit'
              className='mt-2 py-3 bg-gradient-to-r from-[#fde7df] to-[#e2b1a0] text-black rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2'

            >
              Send Message
              <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.button>

            <p className='text-xs mt-2 text-center text-gray-600'>{result}</p>

          </motion.form>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Contact
