import React from "react";
import contactus from "../assets/images/contactus.png";
import Carousel from "./Carousel";
const Contactus = () => {
  return (
    <div className="mx-32 mt-14">
      <div>
        <h1 className="text-[68px] font-bricolage">
          We’re here to help with any questions or support you need.
        </h1>
      </div>
      <div>
        <img src={contactus} alt="contactus" className="w-[1240px] h-[662px]" />
      </div>
      <div className="flex  justify-between ">
        <h2 className="text-[40px]">
          <span className="text-[#565656]">
            Inspired by Nature, <br />
          </span>
          Trusted by Thousands
        </h2>
        <div className="flex gap-[130px]">
          <div>
            <h2 className="text-[64px]">
              80+
              <span className="text-[36px] text-[#565656]">Products</span>
            </h2>
          </div>
          <div>
            <h2 className="text-[64px]">
              100+
              <span className="text-[36px] text-[#565656]">Customers</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen  items-center px-[80px] py-[90px]  bg-gray-50">
        <div className=" shadow-md rounded-md flex justify-between gap-[81px] flex-col lg:flex-row w-full lg:w-23/4 ">
          <div className=" p-8 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6">Get in Touch With Us!</h2>
            <div className="flex items-center mb-4">
              <div className="bg-black text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h1m8-8h.01M13 4h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9m0 4v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6m0-4v-.5a2.5 2.5 0 015 0V9m5 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m0-4h-2m-6 8h4"
                  />
                </svg>
              </div>
              <span className="ml-3 text-lg">9763278623</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-black text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12h6m-6 4h6m-6-8h6M8 7v10m-4 0h4a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h4z"
                  />
                </svg>
              </div>
              <span className="ml-3 text-lg">johndoe@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 15.121A3.004 3.004 0 004 18v2a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 00-1-1h-.879a3.004 3.004 0 01-1.879-.879l-.379-.379a3.004 3.004 0 01-.879-1.879V13a1 1 0 011-1h2a1 1 0 011 1v.879a3.004 3.004 0 01-.879 1.879l-.379.379z"
                  />
                </svg>
              </div>
              <span className="ml-3 text-lg">St. Mary Island, Tokyo</span>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="p-8 lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <p className="mb-6">
              Have a question or need assistance? Send us a message, and we'll
              get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold"
                >
                  Description*
                </label>
                <textarea
                  id="description"
                  className="w-full mt-2 p-2 border border-gray-300 rounded h-24"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.019983497271!2d85.32638590909093!3d27.747837818181814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f19be88469%3A0x7297381034c6496c!2sBhat-Bhateni%20Superstore%20-%20Tokha!5e0!3m2!1sen!2snp!4v1724772951854!5m2!1sen!2snp"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Carousel />
    </div>
  );
};

export default Contactus;
