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

export default function ContentStrategy() {

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

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white">

      {/* ================= SECTION 1 ================= */}
      <section className="relative py-6 lg:py-16 px-4 md:px-16 lg:px-28 overflow-hidden">

        {/* ================= NAVBAR ================= */}
        <header className="max-w-8xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between ml-4 md:-ml-8">

          {/* Logo */}
          <a href="/">
            <img
              src="/spitel-logo.png"
              alt="Spitel"
              className="h-[90px] w-[100px] md:h-[133px] md:w-[143px] relative z-30"
            />
          </a>

          {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
          <nav className="hidden md:flex items-center gap-10 text-[16px] text-[#FFFFFF] font-medium font-montserrat relative z-30">

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

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-t from-transparent via-black/10 to-black z-20" />

        {/* ================= GRID BACKGROUND ================= */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.18) 1px, transparent 4px),
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 4px)
          `,
            backgroundSize: "85px 85px",
          }}
        />

        {/* ================= TOP → BOTTOM GRADIENT ================= */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.85) 0%,
              rgba(0,0,0,0.55) 10%,
              rgba(0,0,0,0.25) 22%,
              rgba(0,0,0,0.08) 35%,
              rgba(0,0,0,0) 50%,
              rgba(0,0,0,0.08) 65%,
              rgba(0,0,0,0.25) 78%,
              rgba(0,0,0,0.55) 90%,
              rgba(0,0,0,0.85) 100%
            )
          `,
          }}
        />

        <div className="relative z-30 ml-4 md:ml-0 mr-4 md:mr-0">

          {/* Heading */}
          <h1 className="text-center text-[38px] md:text-[89px] font-montserrat font-bold mt-12 md:mt-20 animate-slideInTogether">
            Content{" "}
            <span className="text-[#04D78D] italic font-bold font-montserrat">
              Strategy
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-center text-white mt-4 max-w-2xl mx-auto text-[16px] font-montserrat font-regular animate-slideInTogether px-6 md:px-0 leading-[1.6]">
            We plan and create content that aligns with your brand goals, speaks to
            your audience, and drives consistent growth across digital platforms.
          </p>

          {/* BACK BUTTON */}
          <div className="flex justify-center animate-slideInTogether">
            <a href="/our-services">
              <button
                className="flex items-center gap-2 text-white transition-all duration-300 mr-10 mt-16"
              >
                <IoIosArrowBack className="w-[20px] h-[22px]" />
                <span className="text-[18px] font-montserrat font-medium hover:underline">
                  Our Services
                </span>
              </button>
            </a>
          </div>

          {/* What We Offer */}
          <h2 className="text-center text-[30px] md:text-[59px] font-montserrat font-semibold mt-12 md:mt-24 mb-16 animate-fadeUp">
            What We Offer
          </h2>

          {/* ===== FIRST ROW ===== */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 text-center mt-16 md:mt-24 relative z-30">

            {/* Content Planning */}
            <div className="flex flex-col items-center gap-6 ml-0 md:ml-34 animate-slideLeftFade opacity-0">
              <img
                src="/offer1.png"
                alt="Content Planning"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D]"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Content planning & calendars
              </p>
            </div>

            {/* Brand Messaging */}
            <div className="flex flex-col items-center gap-6 animate-slideInTogether opacity-0">
              <img
                src="/offer2.png"
                alt="Brand Messaging"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D]"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Brand messaging <br className="hidden md:block" /> & tone
              </p>
            </div>

            {/* Platform Strategies */}
            <div className="flex flex-col items-center gap-6 
                mr-0 md:mr-34
                col-span-1 md:col-span-1
                justify-self-center 
                animate-slideRightFade opacity-0">
              <img
                src="/offer3.png"
                alt="Platform Strategies"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D]"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Platform-specific strategies
              </p>
            </div>

            <div className="flex flex-col md:hidden items-center gap-6 mr-0 md:mr-42 animate-slideLeftFade opacity-0">
              <img
                src="/offer4.png"
                alt="Performance Tracking"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D]"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Performance tracking <br className="hidden md:block" /> & optimization
              </p>
            </div>

          </div>


          {/* ===== SECOND ROW ===== */}
          <div className="grid grid-cols-2 md:flex md:justify-center 
      gap-10 md:gap-40 
      mt-20 md:mt-36 
      text-center relative z-30 px-6 md:px-0">

            {/* Performance Tracking */}
            <div className="flex-col hidden md:block items-center gap-6 mr-0 md:mr-42 animate-slideLeftFade opacity-0">
              <img
                src="/offer4.png"
                alt="Performance Tracking"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D] md:ml-28 md:mb-6"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Performance tracking <br className="hidden md:block" /> & optimization
              </p>
            </div>

            {/* Long Term Content */}
            <div className="flex flex-col items-center gap-6 -mt-8 md:-mt-0
              justify-self-start md:justify-self-auto
              animate-slideRightFade opacity-0">
              <img
                src="/offer4.png"
                alt="Long Term Content"
                className="w-[80px] h-[80px] drop-shadow-[0_0_15px_#04D78D]"
              />
              <p className="font-montserrat font-semibold text-[20px] md:text-[29px]">
                Long-term content <br className="hidden md:block" /> roadmaps
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section
        ref={sectionRef}
        className="relative py-20 md:py-28 px-6 md:px-16 lg:px-28 bg-black overflow-hidden">

        {/* ===== Vertical Center Glow ===== */}
        <div className="absolute inset-0 flex justify-center top-40 md:top-60">
          <div className="w-full h-[120px] md:h-[150px]  
      bg-gradient-to-b 
      from-transparent 
      via-[#04D78D]/90 
      to-transparent 
      blur-[120px] md:blur-[140px] 
      opacity-80">
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">

          {/* Heading */}
          <div className={`text-center 
      ${isVisible ? "animate-slideInTogether opacity-100" : "opacity-0"}`}>

            <h2 className="text-[30px] md:text-[59px] font-montserrat font-semibold">
              Our Process
            </h2>

            <p className="text-white text-[16px] md:text-[16px] font-montserrat font-regular mt-4 md:mt-6 ml-4 md:ml-0 mr-4 md:mr-0">
              A structured approach from idea to impact.
            </p>
          </div>

          {/* Timeline */}
          <div className={`relative mt-16 md:mt-20 
      ${isVisible ? "animate-fadeUp opacity-100" : "opacity-0"}`}>

            {/* Desktop Line (UNCHANGED) */}
            <div className="hidden md:block absolute top-16 left-20 right-20 h-[4px] bg-[#04D78D] opacity-60"></div>

            <div className="grid 
        grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-5 
        gap-12 md:gap-6 
        text-center relative z-10">

              {[
                { step: "Step 1", title: "Discover", image: "/process1.png" },
                { step: "Step 2", title: "Strategize", image: "/process2.png" },
                { step: "Step 3", title: "Execute", image: "/process3.png" },
                { step: "Step 4", title: "Optimize", image: "/process4.png" },
                { step: "Step 5", title: "Scale", image: "/process5.png" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">

                  {/* Circle */}
                  <div className="
              w-[110px] h-[110px] 
              md:w-[128px] md:h-[128px] 
              rounded-full 
              bg-[#04D78D] 
              flex items-center justify-center 
              mb-6
              hover:scale-110 
              transform-gpu
              transition-transform duration-500 
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:animate-smoothGlow">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>

                  <p className="text-[16px] md:text-[14px] font-montserrat font-bold text-[#C9C9C9]">
                    {item.step}
                  </p>

                  <p className="text-[18px] md:text-[20px] font-bold font-montserrat text-[#D7D7D7] mt-1">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRef9}
        className="relative px-6 md:px-12 lg:px-20 
        py-20 md:py-28 md:mb-14
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