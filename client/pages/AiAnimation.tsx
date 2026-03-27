import { useEffect, useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
export default function AiAnimation() {

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

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
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
            className="h-[90px] w-[100px] md:h-[133px] md:w-[143px] relative z-30"
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
                                                                        relative z-30        
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

      {/* Ai Animation */}
      <section className="bg-black text-white py-12 md:py-16 px-6 md:px-10 ml-4 mr-4 md:ml-0 md:mr-0">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-[38px] md:text-[89px] font-montserrat font-bold animate-slideInTogether">
            <span className="text-white">AI </span>
            <span className="text-[#04D78D] italic font-playfair">
              Animation
            </span>
          </h1>
        </div>

        {/* BACK BUTTON */}
        <div className="flex justify-center animate-slideInTogether">
          <a href="/our-services">
            <button
              className="flex items-center gap-2 text-white transition-all duration-300 mb-12 md:mb-24"
            >
              <IoIosArrowBack className="w-[20px] h-[22px]" />
              <span className="text-[18px] md:text-lg font-montserrat font-medium hover:underline">
                Our Services
              </span>
            </button>
          </a>
        </div>

        {/* Left Big Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center mr-4 md:mr-14 ml-4 md:ml-10 gap-6 md:gap-0">

          {/* Video 1 */}
          <div className="group w-full md:w-[383px] mx-auto animate-fadeUp">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606978/sevenbeans_fyydsx.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

          {/* Video 2 */}
          <div className="group w-full md:w-[383px] md:h-[495px] mx-auto animate-fadeDown">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774605288/ai-video_tzajok.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

          {/* Video 3 */}
          <div className="group w-full md:w-[383px] mx-auto animate-fadeUp">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606279/labubu_j20ymf.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

        </div>

        {/* ===== SECOND ROW ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-6 md:mt-14 mr-4 md:mr-14 ml-4 md:ml-10 gap-6 md:gap-0">

          {/* Video 4 */}
          <div className="group w-full md:w-[383px] mx-auto animate-fadeUp">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606051/video1_jb3aqd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

          {/* Video 5 */}
          <div className="group w-full md:w-[383px] mx-auto animate-fadeDown">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606304/video2_czjp3u.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

          {/* Video 6 */}
          <div className="group w-full md:w-[383px] mx-auto animate-fadeDown">
            <div className="relative rounded-[10px] overflow-hidden shadow-lg">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606326/video4_esfuci.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[383px] h-[420px] md:h-[495px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 opacity-100 transition duration-500" />
            </div>
          </div>

        </div>

        {/* Text Content */}
        <div
          ref={contentRef}
          className="text-center mt-16 md:mt-20 max-w-4xl mx-auto px-4 md:px-0"
        >
          <h2
            className={`text-[30px] md:text-[39px] font-semibold font-montserrat text-white mb-6 
      ${isVisible ? "animate-slideInTogether" : "opacity-0"}`}
          >
            Smart Visual Storytelling with AI
          </h2>

          <p
            className={`text-[#B1B1B1] text-[16px] md:text-[16px] font-montserrat leading-6 md:leading-7 mb-6 
      ${isVisible ? "animate-fadeUp" : "opacity-0"}`}
          >
            We design AI-powered animations that transform ideas into visually compelling stories.
            By combining artificial intelligence with motion design, we create engaging visuals,
            explainer animations, and dynamic content that help brands communicate better,
            capture attention, and leave a lasting impact across digital platforms.
          </p>

          <p
            className={`text-[#B1B1B1] text-[15px] md:text-[16px] font-montserrat leading-6 md:leading-7 
      ${isVisible ? "animate-fadeUp" : "opacity-0"}`}
          >
            Our AI animation services create cost-effective, high-impact videos for marketing,
            product education, and brand communication. By automating key production steps,
            we reduce turnaround time while maintaining visual quality and brand consistency across campaigns.
          </p>
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