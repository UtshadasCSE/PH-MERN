import navlogo from "../../assets/images/more/logo1.png";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F0EBE3]">
      <div className="container mx-auto ">
        <div className="font-rancho w-11/12 mx-auto">
          <footer className="flex max-sm:flex-col-reverse justify-center py-10">
            {/* left  */}
            <div className="flex flex-col gap-3">
              <img className="w-16" src={navlogo} alt="" />
              <h2 className="text-2xl text-[#331A15] font-semibold">
                Espresso Emporium
              </h2>
              <p className="w-2/3 text-[#1B1A1A]">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex  gap-3 text-3xl text-[#331A15]">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
              <h2 className="text-2xl text-[#331A15] font-semibold">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-3">
                <p className="flex items-center">
                  <FaPhone className="text-[" />
                  <span>+88 01533 333 333</span>
                </p>
                <p className="flex items-center">
                  <IoMail />
                  <span>info@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <FaLocationDot />
                  <span>72, Wall street, King Road, Dhaka</span>
                </p>
              </div>
            </div>
            {/* right  */}
            <div className="w-full">
              <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]  p-4 rounded-md">
                  <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      ></textarea>
                    </div>
                    <div>
                      <button className="hover:shadow-form rounded-md bg-[#AF8260] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="bg-[#41201f] font-rancho text-white">
        <nav className="flex justify-center items-center py-2">
          <p className="text-sm">
            Copyright Espresso Emporium ! All Rights Reserved
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
