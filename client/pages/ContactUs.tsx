import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
export default function ContectUs() {

  const [isOpen, setIsOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully ✅");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <header className="max-w-8xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between ml-4 md:ml-20">

        {/* Logo */}
        <a href="/">
          <img
            src="/spitel-logo.png"
            alt="Spitel"
            className="h-[90px] w-[100px] md:h-[133px] md:w-[143px]"
          />
        </a>

        {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
        <nav className="hidden md:flex items-center gap-10 text-[16px] text-[#FFFFFF] font-medium font-montserrat mr-0 md:mr-24">

          <a href="/">
            Home
          </a>

          <a href="/about-us">
            About Us
          </a>

          <a href="/our-services">
            Our Services
          </a>

          <a href="/blog">
            Blog
          </a>

          <a href="/contact-us">
            <button
              className="ml-4 px-6 py-2 text-[18px] font-medium font-montserrat
                    rounded-full border-[3px] border-[#04D78D]
                    bg-transparent
                    animate-softGlow
      
                    transition-colors"
            >
              Contact Us
            </button>
          </a>
        </nav>

        {/* ================= MOBILE HAMBURGER ================= */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY + MENU ================= */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-0 right-0 w-[75%] h-full bg-black z-50 flex flex-col items-start gap-8 pt-28 px-12 md:hidden shadow-2xl">

            <a href="/" onClick={() => setIsOpen(false)} className="text-white text-lg">
              Home
            </a>

            <a href="/about-us" onClick={() => setIsOpen(false)} className="text-white text-lg">
              About Us
            </a>

            <a href="/our-services" onClick={() => setIsOpen(false)} className="text-white text-lg">
              Our Services
            </a>

            <a href="/blog" onClick={() => setIsOpen(false)} className="text-white text-lg">
              Blog
            </a>

            <a href="/contact-us" onClick={() => setIsOpen(false)}>
              <button className="text-white text-lg">
                Contact Us
              </button>
            </a>

          </div>
        </>
      )}

      {/* ================= CONTACT US SECTION ================= */}
      <section className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 md:px-16 lg:px-32 ml-4 md:ml-0 mr-4 md:mr-0">

        {/* Top Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-[38px] sm:text-4xl md:text-5xl lg:text-[65px] font-montserrat font-semibold animate-slideInTogether">
            Let’s get in Touch
          </h2>

          <p className="text-[#00D492] mt-6 md:mt-8 text-[16px] sm:text-[16px] md:text-[18px] font-montserrat font-medium animate-slideInTogether">
            Fill out the form below to schedule a meeting with us.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 md:gap-8 mt-10 md:mt-16 text-[38px] sm:text-4xl md:text-5xl animate-slideInTogether">
            <a href="https://www.instagram.com/spitel_insta/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-[#04D78D]" />
            </a>

            <a href="https://www.facebook.com/company.spitel/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-[#04D78D]" />
            </a>

            <a href="https://www.linkedin.com/company/spitel/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-[#04D78D]" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:ml-20">

          {/* ================= LEFT FORM ================= */}
          <div className="border-[1px] border-[#DBDBDB] rounded-[20px] p-6 sm:p-8 md:p-14 animate-slideLeftFade">

            <h3 className="text-[22px] md:text-[24px] font-montserrat font-semibold mb-6 md:mb-8">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[16px] text-[#C4C4C4] font-montserrat">First name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full mt-2 p-3 rounded-[8px] bg-white text-black outline-none text-[14px] font-montserrat"
                    required
                  />
                </div>

                <div>
                  <label className="text-[16px] text-[#C4C4C4] font-montserrat">Last name*</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full mt-2 p-3 rounded-[8px] bg-white text-black outline-none text-[14px] font-montserrat"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[16px] text-[#C4C4C4] font-montserrat">Email*</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 p-3 rounded-[8px] bg-white text-black outline-none text-[14px] font-montserrat"
                    required
                  />
                </div>

                <div>
                  <label className="text-[16px] text-[#C4C4C4] font-montserrat">Phone no.*</label>
                  <div className="relative mt-2">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-[#C4C4C4]" />
                    <input
                      type="text"
                      placeholder="+91"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-[8px] bg-white text-black outline-none text-[14px] font-montserrat"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[16px] text-[#C4C4C4] font-montserrat">Comments</label>
                <textarea
                  rows={4}
                  placeholder="Type here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mt-2 p-3 rounded-[8px] bg-white text-black outline-none resize-none text-[14px] font-montserrat"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#04D78D] text-white text-[16px] px-8 py-3 rounded-[58px] font-montserrat font-medium hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {/* ================= RIGHT CONTACT INFO ================= */}
          <div className="md:ml-20 animate-slideRightFade">

            <h3 className="text-[22px] md:text-[24px] font-montserrat font-medium mb-6 md:mb-8">
              Contact us
            </h3>

            <div className="space-y-6 md:space-y-8 text-white">

              <div className="flex gap-4 items-start text-[16px] md:text-[20px] font-montserrat">
                <HiLocationMarker className="text-[28px] md:text-[36px] mt-1" />
                <p>
                  1st Floor, K Nexon Mall,<br />
                  Keshwapur, Hubballi - 580057
                </p>
              </div>

              <div className="flex gap-4 items-center text-[16px] md:text-[20px] font-montserrat">
                <FaPhoneAlt className="text-[22px] md:text-[26px]" />
                <a href="tel:+917892059939" className="hover:underline">
                  +91 7892059939
                </a>
              </div>

              <div className="flex gap-4 items-center text-[16px] md:text-[20px] font-montserrat">
                <IoMail className="text-[22px] md:text-[28px]" />
                <a href="mailto:info.spitel@gmail.com" className="hover:underline">
                  spitel@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 md:px-16 py-10 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <a href="/">
              <img
                src="/spitel-logo.png"
                alt="Spitel Logo"
                className="w-[120px] h-auto mx-auto md:ml-16 md:w-[133px] md:h-[143px] mb-6 md:mb-10"
              />
            </a>
            <p className="text-[#8D8D8D] text-[15px] md:text-[16px] font-montserrat leading-relaxed 
                  mx-auto md:ml-16 md:-mt-4">
              Crafting impactful digital<br />
              brand experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[#FFFFFF] font-montserrat font-medium text-[16px] mb-6 md:mb-8 md:ml-8">
              Quick Links
            </h4>

            <ul className="text-[#8D8D8D] text-[15px] md:text-[16px] font-montserrat md:ml-8">
              <li className="mb-3 md:mb-3">
                <a href="/" className="cursor-pointer block">Home</a>
              </li>

              <li className="mb-3 md:mb-3">
                <a href="/about-us" className="cursor-pointer block">About Us</a>
              </li>

              <li className="mb-3 md:mb-3">
                <a href="/our-services" className="cursor-pointer block">Our Services</a>
              </li>

              <li className="mb-3 md:mb-3">
                <a href="/blog" className="cursor-pointer block">Blog</a>
              </li>

              <li>
                <a href="/contact-us" className="cursor-pointer block">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h4 className="text-[#FFFFFF] font-montserrat font-medium text-[16px] mb-6 md:mb-8">
              Address
            </h4>

            <div className="space-y-5 text-[#A4A4A4] font-montserrat text-[15px] md:text-[16px]">

              <div className="flex gap-3 items-start justify-center md:justify-start">
                <img src="/location.png" className="w-[19px] h-[19px] mt-1" />
                <p>
                  1st Floor, K Nexon Mall,<br />
                  Keshwapur, Hubballi - 580057
                </p>
              </div>

              <div className="flex gap-3 items-center justify-center md:justify-start">
                <img src="/phone.png" className="w-[18px] h-[18px]" />
                <a href="tel:+917892059939" className="hover:underline">
                  +91 7892059939
                </a>
              </div>

              <div className="flex gap-3 items-center justify-center md:justify-start">
                <img src="/email.png" className="w-[20px] h-[16px]" />
                <a href="mailto:info.spitel@gmail.com" className="hover:underline">
                  info.spitel@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-left">
            <h4 className="text-[#FFFFFF] font-montserrat font-medium text-[18px] mb-6 md:mb-8">
              Get In Touch With Us
            </h4>

            <div className="flex justify-center md:justify-center md:mr-[120px] flex-wrap gap-6 text-[#D2D2D2] text-[26px] md:text-[30px] max-w-[220px] mx-auto md:mx-0">

              <a href="https://www.instagram.com/spitel_insta/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://www.facebook.com/company.spitel/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://www.linkedin.com/company/spitel/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer hover:text-[#04D78D]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#787878] mt-12 md:mt-16 pt-6 md:pt-8 text-center w-full">
          <p className="text-[#B1B1B1] text-[14px] md:text-[16px] font-montserrat">
            © 2026 Spitel Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}