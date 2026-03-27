import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import { BiRightArrow } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function OurServices() {

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

  const serviceRef = useRef(null);
  const [showService, setShowService] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowService(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <section className="relative w-full py-10"
        style={{ backgroundImage: "url('/service-bg.jpg')" }}>
        {/* ================= NAVBAR ================= */}
        <header className="max-w-8xl mx-auto px-4 md:px-8 py-2 md:py-6 relative z-30 md:-mt-10 flex items-center justify-between ml-4 md:ml-20">

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
                className="mml-4 px-6 py-2 text-[18px] font-medium font-montserrat
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

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          {/* ================= HEADING ================= */}
          <h2 className="text-center text-[#FFFFFF] text-[38px] sm:text-[42px] md:text-[89px] font-montserrat font-bold mt-10 md:mt-0 mb-12 md:mb-20 animate-slideInTogether">
            IT{" "}
            <span className="text-[#04D78D] text-[38px] sm:text-[42px] md:text-[89px] font-playfair italic">
              Services
            </span>
          </h2>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-20 ml-4 md:ml-0 mr-4 md:mr-0 animate-fadeUp">

            {/* CARD 1 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service1.png" alt="UI UX" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">UI & UX</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Simple, intuitive user <br className="hidden md:block" /> experiences.
              </p>
              <a href="/ui-ux">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 2 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service2.png" alt="Web App" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">Web & Mobile App</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                High-performance <br className="hidden md:block" /> websites and mobile apps.
              </p>
              <a href="/web-mobile-app">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 3 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service3.png" alt="Software" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">Software Development</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Smart custom software built <br className="hidden md:block" /> around your business needs.
              </p>
              <a href="/software-development">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 4 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service4.png" alt="Mobile Dev" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">
                Mobile App <br className="hidden md:block" /> Development
              </h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Apps built for performance <br className="hidden md:block" /> and user experience.
              </p>
              <a href="/mobile-development">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 5 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service5.png" alt="Ecommerce" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">
                E-Commerce <br className="hidden md:block" /> Development
              </h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                E-commerce solutions engineered <br className="hidden md:block" /> for growth.
              </p>
              <a href="/commerce-development">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 6 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service6.png" alt="API" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">API Integrations</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Seamless system <br className="hidden md:block" /> connectivity.
              </p>
              <a href="/api-integration">
                <button className="relative mt-5 md:mt-14 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 7 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service7.png" alt="Maintenance" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">
                Maintenance & <br className="hidden md:block" /> Support
              </h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Reliable updates and <br className="hidden md:block" /> support.
              </p>
              <a href="/maintenance-support">
                <button className="relative mt-5 md:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 8 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-5 md:mb-6">
                <img src="/service8.jpg" alt="Chatbots" className="w-full h-[180px] sm:h-[200px] md:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">Chatbots</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Smart automated <br className="hidden md:block" /> conversations.
              </p>
              <a href="/chatbot-development">
                <button className="relative mt-5 md:mt-14 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/40 before:blur-md before:-z-10 before:opacity-40">
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

          </div>
        </div>
        {/* BLEND TO NEXT SECTION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* Digital Marketing Services */}
      <section
        ref={serviceRef}
        className="relative w-full py-16 md:py-44"
        style={{ backgroundImage: "url('/service-bg.jpg')" }}
      >
        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          {/* ================= HEADING ================= */}
          <h2
            className={`text-center text-white 
              text-[38px] sm:text-[42px] md:text-[89px] 
              font-montserrat font-bold mb-0 md:mb-20 leading-[1.0]
              ${showService ? "animate-slideInTogether" : "opacity-100"}`}
          >
            Digital Marketing<br />
            <span className="text-[#04D78D] text-[38px] sm:text-[42px] md:text-[89px] font-playfair italic">
              Services
            </span>
          </h2>

          {/* ================= GRID ================= */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-20 ml-4 md:ml-0 mr-4 md:mr-0
              transition-all duration-1000 delay-300 ${showService
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-16"
              }`}
          >
            {/* CARD 1 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital1.png" alt="UI UX" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">SEO Marketing</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Search strategies designed
                <br className="hidden md:block" />
                for long-term performance.
              </p>
              <a href="/seo-marketing">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 2 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital2.png" alt="Web App" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Graphic Designing</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Visual identities designed for <br className="hidden md:block" />
                impact.
              </p>
              <a href="/graphic-designing">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 3 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital3.png" alt="Social Media" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Meta Ads</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Meta advertising built for <br className="hidden md:block" />
                measurable growth.
              </p>
              <a href="/meta-ads">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 4 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital4.png" alt="WhatsApp" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Whatsapp Marketing</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Direct WhatsApp outreach for faster  <br className="hidden md:block" />
                customer engagement.
              </p>
              <a href="/whatsapp-marketing">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 5 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital5.png" alt="Meta Ads" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">SMS Marketing</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Direct messaging to reach <br className="hidden md:block" />
                customers instantly.
              </p>
              <a href="/sms-marketing">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 6 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital6.png" alt="Meta Ads" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Content Strategy</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Planning content that supports <br className="hidden md:block" />
                brand growth.
              </p>
              <a href="/content-strategy">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 7 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital7.png" alt="Meta Ads" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Photography & <br />Videography</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Capturing visuals that <br className="hidden md:block" />
                elevate your brand.
              </p>
              <a href="/photography-videography">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 8 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital8.jpg" alt="Meta Ads" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">AI Animation</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Creating modern animations <br className="hidden md:block" />
                using AI technology.
              </p>
              <a href="/ai-animation">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2 md:mt-14
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>

            {/* CARD 9 */}
            <div>
              <div className="rounded-[12px] overflow-hidden mb-6">
                <img src="/digital9.png" alt="Meta Ads" className="w-full h-[180px] sm:h-[200px] object-cover" />
              </div>
              <h3 className="text-white text-[26px] sm:text-[22px] md:text-[24px] font-montserrat font-bold mb-2">Video Editing</h3>
              <p className="text-[#B1B1B1] text-[16px] sm:text-[15px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                Editing videos for clear and <br className="hidden md:block" />
                engaging storytelling.
              </p>
              <a href="/video-editing">
                <button
                  className="
                    relative mt-6 inline-flex items-center gap-2 md:mt-14
                    px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                    bg-white text-black font-montserrat font-semibold text-[14px] md:text-[14px]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-full
                    before:bg-white/40 before:blur-md before:-z-10
                    before:opacity-40
                "
                >
                  Learn More <FaArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLEND TO NEXT SECTION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRef9}
        className="relative px-6 md:px-12 lg:px-20 
        py-20 md:py-28 md:mb-16 mt-20 md:mt-0
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
