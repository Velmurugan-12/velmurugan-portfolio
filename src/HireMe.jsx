import React, { forwardRef } from "react";
import { RiMegaphoneFill } from "react-icons/ri";

const HireMe = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="container mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex items-ends gap-3">
        <RiMegaphoneFill className="text-gray-500 mb-1" />
        Hire Me
      </h1>

      {/* Form Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <form 
          action="https://formsubmit.co/mvelmurugan2192@gmail.com"
          method="post"
          className="text-lg text-gray-200 flex flex-col gap-5 w-full"
        >
          <input
            type="text"
            name="Name"
            required
            placeholder="Name"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full"
          />

          <input
            type="email"
            name="Email"
            required
            placeholder="Email Id"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full"
          />

          <input
            type="tel"
            name="Phone"
            required
            placeholder="Phone No"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full"
          />

          <textarea
            name="Message"
            required
            placeholder="Message"
            cols="30"
            rows="5"
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full"
          />

          {/* Buttons */}
          <div className="flex flex-row mb-4 items-center gap-4 mt-4">
            <button 
              type="submit"
              className="px-10 py-2 rounded-lg bg-green-600 active:bg-green-700 transition w-[50%] md:w-auto"
            >
              Submit
            </button>

            <button
              type="reset"
              className="px-10 py-2 rounded-lg bg-gray-600 active:bg-gray-700 w-[50%] md:w-auto"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

export default HireMe;
