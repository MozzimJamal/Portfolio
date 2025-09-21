import React from 'react';
import Title from './Titles';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-16 lg:py-20"
    >
      {/* Title */}
      <Title text1={"My"} text2={"CONTACT"} />

      <div className="flex  lg:p-20  flex-col md:flex-row items-start justify-center    w-full min-h-[40rem]">
        
        {/* Left div */}
        <div className="w-full  md:w-1/2 flex flex-col items-center">
          <h1 className="text-center text-xl sm:text-2xl font-bold mb-6">Talk to me</h1>

          <div className="flex flex-col gap-6 w-full items-center">
            {/* Email Card */}
            <div className="w-4/5 sm:w-3/4 flex flex-col items-center text-center shadow-lg rounded-md p-6">
              <MdEmail className="text-2xl mb-2" />
              <h1>Email<br />user@gmail.com</h1>
              <button className="shadow-lg flex items-center gap-2 rounded-md mt-3 px-4 py-2 text-sm">
                Write Me
                <FaAngleDoubleRight className="animate-bounce" />
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="w-4/5 sm:w-3/4 flex flex-col items-center text-center shadow-lg rounded-md p-6">
              <IoLogoWhatsapp className="text-2xl mb-2" />
              <h1>Whatsapp<br />6969696969</h1>
              <button className="shadow-lg flex items-center gap-2 rounded-md mt-3 px-4 py-2 text-sm">
                Write Me
                <FaAngleDoubleRight className="animate-bounce" />
              </button>
            </div>

            {/* Twitter Card */}
            <div className="w-4/5 sm:w-3/4 flex flex-col items-center text-center shadow-lg rounded-md p-6">
              <FaTwitter className="text-2xl mb-2" />
              <h1>Twitter<br />usertw</h1>
              <button className="shadow-lg flex items-center gap-2 rounded-md mt-3 px-4 py-2 text-sm">
                Write Me
                <FaAngleDoubleRight className="animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="w-full  md:w-1/2 flex flex-col items-center rounded-lg p-4 sm:p-6">
          <h2 className="text-center font-bold text-xl sm:text-2xl mb-6">
            Write Me your Message
          </h2>

          <form className="w-full max-w-md flex flex-col shadow-lg p-6 sm:p-8 rounded-md space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name"
                className="bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-1">Mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className="bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your Message"
                className="bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-6 text-black font-semibold rounded-lg px-6 py-3 shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
