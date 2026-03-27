import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function AboutPage() {

  const [isOpen, setIsOpen] = useState(false);

  const sectionRef = useRef(null);
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowSection(true);
        }
      },
      { threshold: 0.3 }
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const connectRef = useRef(null);
  const [showConnect, setShowConnect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowConnect(true);
        }
      },
      { threshold: 0.3 }
    );

    const current = connectRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

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

      {/* ================= ABOUT SECTION ================= */}
      <section className="px-8 md:px-12 lg:px-20 py-10 md:py-20 text-center">

        <h2 className="text-[38px] sm:text-4xl md:text-[89px] font-bold mb-10 md:mb-16 font-montserrat opacity-100 animate-slideInTogether">
          About
          <span className="text-[#04D78D] italic font-playfair"> Us</span>
        </h2>

        <p className="max-w-4xl mx-auto text-white leading-6 md:leading-7 mb-10 md:mb-12 opacity-100 animate-slideInTogether px-2 sm:px-0">

          <span className="font-medium font-montserrat text-[16px]">
            SPITEL
          </span>

          <span className="text-[16px] sm:text-[16px] font-montserrat font-regular">
            {" "}is a forward-thinking digital solutions company helping businesses grow through
            <br className="hidden md:block" />
            strategy-driven design and technology. From websites, mobile apps, software,
            <br className="hidden md:block" />
            AI chatbots, and digital marketing to graphic design, we create tailored solutions that deliver
            <br className="hidden md:block" />
            scalable performance and real results. Our collaborative approach blends creativity with
            <br className="hidden md:block" />
            functionality, making{" "}
            <span className="font-medium font-montserrat text-[16px]">
              SPITEL
            </span>
            {" "}a reliable long-term digital partner for growing brands.
          </span>

        </p>

        <div className="flex justify-center opacity-100 animate-slideInTogether">
          <img
            src="/about-us.jpg"
            alt="About"
            className="rounded-[10px] w-full max-w-[539px] h-auto md:h-[345px] shadow-lg"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section
        ref={sectionRef}
        className="relative px-6 md:px-12 lg:px-20 py-10 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/brand-bg.jpg')" }}
      >
        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-40 md:h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-0" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 ml-4 md:ml-16">

          <h2 className="text-[38px] sm:text-4xl md:text-[59px] relative z-30 font-bold text-center md:mr-16 mb-12 md:mb-20 text-white opacity-100 animate-slideInTogether">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className={`space-y-10 md:space-y-14 text-white transition-all duration-1000 text-center lg:text-left ml-4 md:ml-0 mr-4 md:mr-0
              ${showSection ? "animate-slideInLeft opacity-100" : "opacity-0 translate-x-[-50px]"}`}>

              <div>
                <h3 className="text-white font-bold font-montserrat text-[26px] md:text-[24px] mb-2">
                  Strategy-Driven <br className="hidden md:block" />
                  Approach
                </h3>
                <p className="text-[16px] md:text-[16px] font-montserrat text-[#B1B1B1]">
                  We understand your business goals <br className="hidden md:block" />
                  first, then build solutions aligned with <br className="hidden md:block" />
                  real growth and measurable <br className="hidden md:block" />
                  outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold font-montserrat text-[26px] md:text-[24px] mb-2">
                  End-to-End <br className="hidden md:block" />
                  Expertise
                </h3>
                <p className="text-[16px] md:text-[16px] font-montserrat text-[#B1B1B1]">
                  From design and development to <br className="hidden md:block" />
                  marketing and AI solutions, we <br className="hidden md:block" />
                  handle everything under one roof.
                </p>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className={`relative flex justify-center items-center md:mr-16 transition-all duration-1000
              ${showSection ? "animate-slideInTogether opacity-100" : "opacity-0 scale-90"}`}>

              {/* Main Glow */}
              <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px]
                bg-[radial-gradient(circle,rgba(0,255,255,0.55)_0%,rgba(0,255,255,0.25)_30%,rgba(0,0,0,0)_70%)]
                blur-[60px] md:blur-[80px]" />

              {/* Outer Spread */}
              <div className="absolute w-[400px] h-[400px] md:w-[750px] md:h-[750px]
                bg-[#3F98C4]/5 blur-[100px] md:blur-[160px] rounded-full" />

              <img
                src="/choose-us.png"
                alt="Why Choose Us"
                className="relative z-10 w-[320px] sm:w-[280px] md:w-[351px] h-auto md:h-[510px] object-cover mb-6 md:mb-12"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className={`space-y-10 md:space-y-14 text-gray-300 ml-4 lg:ml-24 mr-4 md:mr-16 text-center lg:text-right transition-all duration-1000
              ${showSection ? "animate-slideInRight opacity-100" : "opacity-0 translate-x-[50px]"}`}>

              <div>
                <h3 className="text-white font-bold font-montserrat text-[26px] md:text-[24px] mb-2">
                  Scalable & Future <br className="hidden md:block" />
                  Ready Solutions
                </h3>
                <p className="text-[16px] md:text-[16px] font-montserrat text-[#B1B1B1]">
                  Our work is built to grow with your 
                  business, ensuring long-term 
                  performance and adaptability.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold font-montserrat text-[26px] md:text-[24px] mb-2">
                  Design Meets <br className="hidden md:block" />
                  Functionality
                </h3>
                <p className="text-[16px] md:text-[16px] font-montserrat text-[#B1B1B1]">
                  We balance clean aesthetics with 
                  strong usability to create impactful 
                  digital experiences.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BLEND */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-80 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* ================= CONNECT WITH US ================= */}
      <section
        ref={connectRef}
        className="px-4 md:px-12 lg:px-20 py-10 md:py-20 text-center"
      >
        <h2
          className={`text-[38px] md:text-[59px] font-bold font-montserrat mb-16 transition-all duration-1000
          ${showConnect ? "opacity-100 animate-slideInTogether" : "opacity-0 translate-y-10"}`}
        >
          Connect With Us
        </h2>

        <div
          className={`flex justify-center gap-10 md:gap-[73px] transition-all duration-1000 delay-200
          ${showConnect ? "opacity-100 animate-slideInTogether" : "opacity-0 translate-y-10"}`}
        >
          <a
            href="https://www.instagram.com/spitel_insta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[80px] h-[80px] rounded-[20px] 
                            bg-gradient-to-tr from-[#FADB04] via-[#F42C70] to-[#7E1CC6] 
                            flex items-center justify-center text-[60px] 
                            shadow-[0_0_25px_rgba(244,44,112,0.4),0_0_45px_rgba(250,219,4,0.25)]
                            hover:scale-110 transition duration-300">
              <i className="fab fa-instagram"></i>
            </div>
          </a>

          <a
            href="https://www.facebook.com/company.spitel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[80px] h-[80px] rounded-[20px] 
                            bg-gradient-to-tr from-[#155DFC] via-[#709DFF] to-[#155DFC] 
                            flex items-center justify-center text-[52px] 
                            shadow-[0_0_22px_rgba(21,93,252,0.4),0_0_40px_rgba(112,157,255,0.25)]
                            hover:scale-110 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/spitel/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="w-[80px] h-[80px] rounded-[20px] 
                          bg-gradient-to-tr from-[#4338ca] via-[#1e40af] to-[#164e63]
                          flex items-center justify-center text-[52px]
                          shadow-[0_0_12px_rgba(67,56,202,0.45),0_0_26px_rgba(30,64,175,0.35),0_0_40px_rgba(22,78,99,0.25)]
                          hover:scale-110 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </div>
          </a>
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
