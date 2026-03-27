import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import { BiRightArrow } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
export default function UiUx() {

  const [isOpen, setIsOpen] = useState(false);

  const sectionRef9 = useRef(null);
  const [showSection9, setShowSection9] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection9(true);
          observer.disconnect(); // animation sirf ek baar chale
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef9.current) {
      observer.observe(sectionRef9.current);
    }

    return () => observer.disconnect();
  }, []);

  const section2Ref = useRef(null);
  const [showSection2, setShowSection2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSection2(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
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

      {/* UI and UX */}
      <section className="bg-black text-white mt-16 overflow-hidden px-4 sm:px-6 md:px-16 lg:px-24 flex flex-col justify-center ml-4 md:ml-0 mr-4 md:mr-0">

        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[38px] sm:text-4xl md:text-6xl lg:text-[89px] font-bold font-montserrat tracking-wide leading-none animate-slideInTogether">
            UI & UX{" "}
            <span className="text-[#04D78D] italic font-playfair">
              Designing
            </span>
          </h2>
        </div>

        {/* BACK BUTTON */}
        <div className="flex justify-center animate-slideInTogether mb-10">
          <a href="/our-services">
            <button className="flex items-center gap-2 text-white transition-all duration-300">
              <IoIosArrowBack className="w-[18px] h-[20px] lg:w-[20px] lg:h-[22px]" />
              <span className="text-[18px] lg:text-lg font-montserrat font-medium hover:underline">
                Our Services
              </span>
            </button>
          </a>
        </div>

        {/* ===== SECTION 1 ===== */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full lg:h-[805px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start animate-slideLeftFade">

            <p className="text-[26px] sm:text-3xl md:text-4xl lg:text-[39px] text-center lg:text-left font-montserrat font-semibold leading-snug md:leading-[1.2] mb-8 lg:mb-20">
              Design that speak <br className="hidden lg:block" />
              through experience
            </p>

            <div className="relative w-full max-w-[460px] mx-auto md:w-[460px] md:-ml-1">

            {/* Screen Image (Behind) */}
            <div className="absolute top-[6%] left-[12%] w-[76%] h-[60%] overflow-hidden z-0
                            md:top-[4.6%] md:left-[12.4%] md:w-[86.5%] md:h-[64%]">

              <img
                src="/home-ui-ux(1).png"
                alt="Screen UI"
                className="w-full h-full object-cover md:w-[356px]"
              />

            </div>

            {/* Laptop Frame (Above) */}
            <img
              src="/laptop.png"
              alt="Laptop"
              className="relative z-10 w-full object-contain"
            />

          </div>
          </div>

          {/* RIGHT SIDE AUTO SCROLL */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative h-[400px] sm:h-[500px] lg:h-[620px] w-[260px] sm:w-[320px] lg:w-[360px] overflow-hidden">

              <div className="absolute top-0 left-0 w-full animate-verticalLoop">

                <img
                  src="/home-ui-ux.png"
                  alt="Scrolling UI"
                  className="w-full object-cover mb-16 animate-slideRightFade"
                />

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className="bg-black text-white overflow-hidden px-4 sm:px-6 md:px-16 lg:px-24 flex items-center mb-20 md:mb-0 mt-20 md:mt-0 lg:h-[805px]"
      >

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

          {/* ===== LEFT SIDE ===== */}
          <div
            className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${showSection2
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
              }`}
          >

            <p className="text-[26px] sm:text-3xl md:text-4xl lg:text-[39px] font-montserrat font-semibold leading-snug md:leading-[1.2] mb-8 lg:mb-12">
              Designed for efficient <br className="hidden lg:block" />
              ordering and seamless <br className="hidden lg:block" />
              checkout
            </p>

            <img
              src="/home2.png"
              alt="Ecommerce UI"
              className="w-full max-w-[500px] lg:w-[611px] object-contain mt-4 lg:mt-6 lg:-ml-8"
            />
          </div>

          {/* ===== RIGHT SIDE AUTO SCROLL ===== */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative h-[400px] sm:h-[500px] lg:h-[620px] w-[260px] sm:w-[320px] lg:w-[360px] overflow-hidden">

              <div className="absolute top-0 left-0 w-full animate-verticalLoop">

                <img
                  src="/home-ui-ux2.png"
                  alt="Scrolling UI"
                  className={`w-full object-cover mb-16 transition-all duration-1000 delay-200 ${showSection2
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                    }`}
                />

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRef9}
        className="relative px-6 md:px-12 lg:px-20 
        py-20 md:py-28 md:mb-14 md:mt-14
        min-h-[80vh] md:min-h-[120vh] 
        text-center text-white bg-black overflow-hidden"
      >
        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 h-full md:h-[877px] bg-[url('/work-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

        {/* CONTENT */}
        <div
          className={`relative z-10 max-w-4xl mx-auto 
          mt-40 md:mt-52 px-2
          ${showSection9 ? "opacity-100 animate-slideInTogether" : "opacity-0"}`}
        >
          <h2 className="text-[34px] sm:text-4xl md:text-[59px] font-montserrat font-bold mb-6 leading-tight">
            Let’s Work{" "}
            <span className="italic font-playfair text-[#04D78D] md:text-[59px]">
              Together
            </span>
          </h2>

          <p className="text-[#B1B1B1] text-[16px] md:text-[16px] mb-10 md:mb-14 max-w-2xl mx-auto font-montserrat">
            Contact our team to discuss your requirements and receive a tailored <br /> 
            marketing plan.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row sm:flex-row gap-7 md:gap-8 justify-center items-center">

            {/* Primary Button */}
            <a href="/contact-us">
            <button
              className="relative flex-1 sm:flex-none flex items-center gap-3 px-8 md:px-10 py-2 md:py-4
              bg-white text-[#024F7E] font-montserrat font-semibold
              rounded-full overflow-visible text-sm md:text-base"
            >
              <BiRightArrow className="text-[16px] md:text-[16px]"/> Get Free Strategy Call

              {/* LEFT – Layer 1 */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2
              w-full h-full rounded-full bg-[#656565]
              animate-leftLayer1 -z-10"></span>

              {/* LEFT – Layer 2 */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2
              w-full h-full rounded-full bg-[#565656]
              animate-leftLayer2 -z-20"></span>

              {/* RIGHT – Layer 1 */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2
              w-full h-full rounded-full bg-[#656565]
              animate-rightLayer1 -z-10"></span>

              {/* RIGHT – Layer 2 */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2
              w-full h-full rounded-full bg-[#565656]
              animate-rightLayer2 -z-20"></span>
            </button>
            </a>

            {/* Secondary Button */}
            <a href="mailto:info.spitel@gmail.com">
              <button
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 md:px-10 py-2 md:py-4 
                border-2 border-[#04D78D] text-[#04D78D] 
                text-sm md:text-[16px] font-montserrat font-medium 
                rounded-full bg-transparent
                opacity-0
                animate-fadeDownGlow
                [animation-delay:0.8s]
                transition-colors"
              >
                Mail Us <MdMailOutline className="text-[22px] md:text-[16px]"/>
              </button>
            </a>
          </div>
        </div>

        {/* BLEND TO NEXT SECTION */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-10
          bg-gradient-to-b from-transparent via-black/10 to-black"
        ></div>
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