import { useEffect, useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
export default function VideoEditing() {

  const [isOpen, setIsOpen] = useState(false);

  const cardsRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowCards(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  {/* Posters */ }
  const images = [
    "/design1.jpg",
    "/design2.jpg",
    "/design3.jpg",
    "/design4.jpg",
  ];

  const [loaded, setLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [imageWidth, setImageWidth] = useState(332);
  const [index, setIndex] = useState(4);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    setLoaded(true);

    const updateSlider = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile
        setVisibleCount(1);
        setImageWidth(window.innerWidth); // full width
        setIndex(1);
      } else {
        // 💻 Desktop (UNCHANGED)
        setVisibleCount(4);
        setImageWidth(332); // 300px + 32px gap
        setIndex(4);
      }
    };

    updateSlider();
    window.addEventListener("resize", updateSlider);

    return () => window.removeEventListener("resize", updateSlider);
  }, []);

  const clonedImages = [
    ...images.slice(-visibleCount),
    ...images,
    ...images.slice(0, visibleCount),
  ];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === clonedImages.length - visibleCount) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCount);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length);
      }, 500);
    }

    const timer = setTimeout(() => {
      setTransition(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [index, visibleCount, clonedImages.length]);

  const sectionRef = useRef(null);
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
      { threshold: 0.3 } // 30% section visible hote hi trigger hoga
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

      {/* Videoo Editing */}
      <section
        className="relative text-white py-12 md:py-16 px-6 md:px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/video-bg.jpg')" }}
      >

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-40 md:h-60
    bg-gradient-to-t from-transparent via-black/60 to-black z-20">
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-30 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-[38px] md:text-[89px] font-montserrat font-bold animate-slideInTogether">
              <span className="text-white">Video </span>
              <span className="text-[#04D78D] italic font-playfair">
                Editing
              </span>
            </h1>

            <p className="text-white mt-4 max-w-2xl mx-auto text-[16px] md:text-[16px] font-montserrat font-regular animate-slideInTogether px-4 md:px-0 leading-[1.6]">
              We transform raw footage into polished, engaging videos that
              capture attention and communicate your message effectively across
              digital platforms.
            </p>
          </div>

          {/* BACK BUTTON */}
          <div className="flex justify-center animate-slideInTogether">
            <a href="/our-services">
              <button
                className="flex items-center gap-2 text-white transition-all duration-300 mb-10 md:mb-16"
              >
                <IoIosArrowBack className="w-[20px] h-[22px]" />
                <span className="text-[18px] md:text-lg font-montserrat font-medium hover:underline">
                  Our Services
                </span>
              </button>
            </a>
          </div>

          {/* What We Offer */}
          <h2 className="text-center text-[30px] md:text-[59px] font-montserrat font-semibold mb-10 md:mb-16 animate-fadeUp">
            What We Offer
          </h2>

          {/* Top 3 Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 text-center mb-12 md:mb-20 ml-4 md:ml-0 mr-4 md:mr-0"
          >

            <div className={showCards ? "animate-slideLeftFade" : "opacity-0"}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/edit1.png"
                  alt="service"
                  className="w-full h-[160px] md:h-[180px] object-cover"
                />
              </div>
              <p className="mt-4 md:mt-6 text-[20px] md:text-[29px] font-montserrat font-semibold">
                Social media & short-form edits
              </p>
            </div>

            <div className={showCards ? "animate-slideInTogether" : "opacity-0"}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/edit2.png"
                  alt="service"
                  className="w-full h-[160px] md:h-[180px] object-cover"
                />
              </div>
              <p className="mt-4 md:mt-6 text-[20px] md:text-[29px] font-montserrat font-semibold">
                Promotional & brand videos
              </p>
            </div>

            <div className={showCards ? "animate-slideRightFade" : "opacity-0"}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/edit3.png"
                  alt="service"
                  className="w-full h-[160px] md:h-[180px] object-cover"
                />
              </div>
              <p className="mt-4 md:mt-6 text-[20px] md:text-[29px] font-montserrat font-semibold">
                Ad creatives & <br />
                reels
              </p>
            </div>

          </div>

          {/* Bottom 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto text-center ml-4 md:ml-52 mr-4 md:mr-0">

            <div className={showCards ? "animate-slideLeftFade" : "opacity-0"}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/edit4.png"
                  alt="service"
                  className="w-full h-[160px] md:h-[180px] object-cover"
                />
              </div>
              <p className="mt-4 md:mt-6 text-[20px] md:text-[29px] font-montserrat font-semibold">
                Platform-optimized formats
              </p>
            </div>

            <div className={showCards ? "animate-slideRightFade" : "opacity-0"}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/edit5.png"
                  alt="service"
                  className="w-full h-[160px] md:h-[180px] object-cover"
                />
              </div>
              <p className="mt-4 md:mt-6 text-[20px] md:text-[29px] font-montserrat font-semibold">
                Color correction & sound enhancement
              </p>
            </div>

          </div>
        </div>

        {/* BLEND */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-80
          bg-gradient-to-b from-transparent via-black/10 to-black">
        </div>

      </section>

      {/* ================= Edits that tell your story better ================= */}
      <div
        ref={sectionRef}
        className="mt-14 md:mt-32 md:mb-32">

        <h3
          className={`text-[30px] sm:text-[30px] md:text-[39px] 
            font-montserrat font-semibold 
            mb-8 md:mb-10
            text-center md:text-left
            px-6 md:px-0
            md:ml-28
            ${isVisible ? "animate-slideLeftFade opacity-100" : "opacity-0"}`}
                  >
          Edits that tell your story <br className="hidden md:block" /> better.
        </h3>

        <div className="relative w-full flex items-center justify-center">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-12 z-20 bg-white text-black w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg"
          >
            <IoArrowBack />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden w-full md:w-[1300px] px-14 md:px-0">
            <div
              className={`flex gap-28 md:gap-8 ${transition ? "transition-transform duration-500 ease-in-out" : ""
                }`}
              style={{
                transform: `translateX(-${index * imageWidth}px)`
              }}
            >
              {clonedImages.map((img, i) => {
                const position = i % 4;
                let animationClass = "";

                if (loaded) {
                  if (position === 0 || position === 2) {
                    animationClass = "animate-fadeDown";
                  } else {
                    animationClass = "animate-fadeUp";
                  }
                }

                return (
                  <img
                    key={i}
                    src={img}
                    alt="poster"
                    className={`w-[280px] md:w-[300px] h-[380px] md:h-[413px] ml-3 mr-2 md:ml-0 md:mr-0 rounded-xl object-cover flex-shrink-0 ${animationClass}`}
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-12 z-20 bg-white text-black w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <section
        ref={sectionRef9}
        className="relative px-6 md:px-12 lg:px-20 
        py-20 md:py-28 md:mb-14 mt-14 md:mt-0
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