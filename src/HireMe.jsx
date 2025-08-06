import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMegaphoneFill } from "react-icons/ri";

const HireMe = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMessage("");
    try {
      const response = await emailjs.sendForm(
        "service_9wx3uli",  
        "template_bne1cru",
        formRef.current,
        "mTsFp8QpIVR-uo1lC"
      );
      if (response.status === 200) {
        setSuccess(true);
        formRef.current.reset(); 
        setTimeout(() => setSuccess(null), 3000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSuccess(false);
      setErrorMessage(error.text || "Something went wrong. Please try again.");
      setTimeout(() => {
        setSuccess(null);
        setErrorMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center flex items-start gap-3">
        <RiMegaphoneFill className="text-gray-500 mb-1" />
        Hire Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="phoneno"
            name="user_phoneno"
            placeholder="Your Phone-No"
            required
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-[#1D2430] rounded-md px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="bg-[#1D2430] rounded-md px-5 py-3 h-40 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="px-10 py-2 rounded-lg bg-green-600 active:bg-green-700 hover:bg-green-500 transition w-[50%] md:w-auto"
            disabled={loading}
          >
            {loading ? "Submitting" : "Submit"}
          </button>

          
          {success && (
            <p className="text-center text-green-500">Message sent successfully!</p>
          )}

          
          {success === false && (
            <p className="text-center text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HireMe;
