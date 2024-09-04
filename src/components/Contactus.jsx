import React from "react";
import contactus from "../assets/images/contactus.png";
import Carousel from "./Carousel";

const Contactus = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8 lg:mt-12 xl:mt-14">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bricolage leading-tight">
          We’re here to help with any questions or support you need.
        </h1>
      </div>

      <div className="my-6">
        <img
          src={contactus}
          alt="contactus"
          className="w-full h-auto max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center my-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left mb-6 lg:mb-0">
          <span className="text-gray-600">
            Inspired by Nature, <br />
          </span>
          Trusted by Thousands
        </h2>
        <div className="flex gap-8 lg:gap-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              80+ <br />
              <span className="text-base md:text-lg xl:text-xl text-gray-600">
                Products
              </span>
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">
              100+
              <br />
              <span className="text-base md:text-lg xl:text-xl text-gray-600">
                Customers
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 lg:py-12 xl:py-16 px-4 lg:px-8 xl:px-16  rounded-md shadow-md">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Get in Touch With Us!
            </h2>
            <div className="space-y-4">
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
                      d="M3 10h1m8-8h.01M13 4h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9m0 4v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6m0-4v-.5a2.5 2.5 0 015 0V9m5 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m0-4h-2m-6 8h4"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-lg">9763278623</span>
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
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Send Message</h2>
            <p className="mb-4">
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

      <div className="bg-orange-100 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Discover the Route to Authenticity
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Navigate the map to connect with us and embrace the essence of Nepal
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between py-16 px-4 lg:px-8 xl:px-16">
          <div className="mb-8 lg:mb-0">
            <p className="font-semibold">ADDRESS</p>
            <p className="text-lg font-bold">P&P International PVT.LTD.</p>
            <p className="text-gray-700">
              156-000-43 TOKYO TO SETAGAYA, KU
              <br />
              MATSUBARA 2-17-14
              <br />
              MEZON.DO.SERESUTO, 201
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4634698079935!2d139.6481385!3d35.6655884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f33ab89ae229%3A0xd75f4f4046644079!2z44Oh44K-44Oz44OJ44K744Os44K544OI!5e0!3m2!1sen!2snp!4v1725468571385!5m2!1sen!2snp"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-xl"
          ></iframe>
        </div>
      </div>

      <Carousel />
    </div>
  );
};

export default Contactus;
