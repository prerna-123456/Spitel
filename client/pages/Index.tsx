import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BiRightArrow } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Index() {

  const [isOpen, setIsOpen] = useState(false);

  const testimonials = [
    {
      text: `They handled our e-commerce setup and product photography. Everything was organized well, and the store runs smoothly without technical issues.`,
      name: "Meera Nair",
      company: "Founder, Nair Home Decor",
    },
    {
      text: `Spitel helped us with UI/UX improvements for our dashboard. The interface is clearer now, and our support tickets related to usability have reduced.`,
      name: "Karan Malhotra",
      company: "Product Manager, NexSoft Solutions",
    },
    {
      text: `Their team manages our Meta ads and creatives. They’re responsive, share reports regularly, and keep improving the campaigns based on results.`,
      name: "Ritu Sharma",
      company: "Marketing Head, UrbanNest Interiors",
    },
    {
      text: `They helped with content strategy, graphic design, and product videos. The messaging across our campaigns feels more consistent now.`,
      name: "Sneha Reddy",
      company: "Brand Manager, Bloom Cosmetics",
    },
    {
      text: `Spitel did our photography, video editing, and ad creatives. The overall presentation of our events looks much more polished.`,
      name: "Pooja Chatterjee",
      company: "Owner, Elegant Occasions Events",
    },
    {
      text: `Working with Spitel helped us present our company more professionally online. We now get inquiries from outside our usual network, which wasn’t happening before.`,
      name: "Shashank Deshpande",
      company: "Founder, Deshpande Logistics",
    },
    {
      text: `Our brand finally looks consistent across Instagram, website, and store packaging. Customers recognize us more easily, and walk-ins have increased.`,
      name: "Aditi Jain",
      company: "Owner, Aditi’s Boutique",
    },
    {
      text: `Our firm looks more established online now. Clients from other cities started contacting us, which helped us expand our practice.`,
      name: "Nikhil Chatterjee",
      company: "Managing Partner, Chatterjee & Co. Chartered Accountants",
    },
    {
      text: `We used to depend only on local contacts. After working with Spitel, we started getting inquiries from new markets, which helped our sales pipeline.`,
      name: "Harsh Vora",
      company: "Founder, Vora Electronics Trading",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite reset smoothly
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // same as transition duration

      setTimeout(() => {
        setIsTransitioning(true);
      }, 750);
    }
  }, [currentIndex]);

  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const section2Ref = useRef(null);
  const [showSection2, setShowSection2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection2(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionRef3Ref = useRef(null);
  const [sectionRef3, setSectionRef3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionRef3(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef3Ref.current) {
      observer.observe(sectionRef3Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionRef4 = useRef(null);
  const [showSection4, setShowSection4] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection4(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef4.current) observer.observe(sectionRef4.current);

    return () => observer.disconnect();
  }, []);

  const sectionRef5 = useRef(null);
  const [showSection5, setShowSection5] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection5(true);
          observer.disconnect(); // animation sirf ek baar
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef5.current) {
      observer.observe(sectionRef5.current);
    }

    return () => observer.disconnect();
  }, []);

  const [active, setActive] = useState(1);

  const images = [
    "/poster8(1).jpeg",
    "/poster2(1).jpeg",
    "/poster3(1).jpeg",
    "/poster4.jpeg",
    "/poster5.jpeg",
    "/poster6(1).jpeg",
    "/poster7.jpeg",
    "/poster1.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = images.length;

    if (index === active) return "center";
    if (index === (active - 1 + total) % total) return "left";
    if (index === (active + 1) % total) return "right";

    return "hidden";
  };

  const sectionRef6 = useRef(null);
  const [showSection6, setShowSection6] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection6(true);
          observer.disconnect(); // sirf ek baar animate
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef6.current) {
      observer.observe(sectionRef6.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionRef7 = useRef(null);
  const [showSection7, setShowSection7] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection7(true);
          observer.disconnect(); // animation sirf ek baar
        }
      },
      { threshold: 0.3 } // jab 30% section viewport me aaye
    );

    if (sectionRef7.current) {
      observer.observe(sectionRef7.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionRef8 = useRef(null);
  const [showSection8, setShowSection8] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection8(true);
          observer.disconnect(); // animation ek baar hi chale
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef8.current) {
      observer.observe(sectionRef8.current);
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

  const sectionRef10 = useRef(null);
  const [showSection10, setShowSection10] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection10(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef10.current) {
      observer.observe(sectionRef10.current);
    }

    return () => {
      if (sectionRef10.current) {
        observer.unobserve(sectionRef10.current);
      }
    };
  }, []);

  const sectionRef11 = useRef(null);
  const [showSection11, setShowSection11] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection11(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef11.current) {
      observer.observe(sectionRef11.current);
    }

    return () => {
      if (sectionRef11.current) {
        observer.unobserve(sectionRef11.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      <section className="relative min-h-[85vh] w-full bg-black text-white font-sans overflow-hidden">

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute -inset-20 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        <div className="relative z-30">

          {/* ================= NAVBAR ================= */}
          <header className="max-w-8xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between ml-4 md:ml-20 animate-fadeDown">

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

              <a href="/" className="opacity-0 animate-fadeDown [animation-delay:0.2s]">
                Home
              </a>

              <a href="/about-us" className="opacity-0 animate-fadeDown [animation-delay:0.35s]">
                About Us
              </a>

              <a href="/our-services" className="opacity-0 animate-fadeDown [animation-delay:0.5s]">
                Our Services
              </a>

              <a href="/blog" className="opacity-0 animate-fadeDown [animation-delay:0.65s]">
                Blog
              </a>

              <a href="/contact-us">
                <button
                  className="ml-4 px-6 py-2 text-[18px] font-medium font-montserrat rounded-full border-[3px] border-[#04D78D] bg-transparent opacity-0 animate-fadeDownGlow [animation-delay:0.85s] transition-colors"
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

          {/* ================= HERO BODY ================= */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 items-center">

            {/* LEFT TEXT */}
            <div className="hidden md:block md:col-span-3 text-center md:text-left text-[#B1B1B1] text-[16px] md:text-[20px] font-montserrat leading-relaxed overflow-x-hidden -mb-10 md:-mb-36 -ml-0 md:-ml-12 animate-fadeLeft">
              Comprehensive solutions <br />
              across marketing, design, and <br />
              technology built to <br />
              accelerate your growth.
            </div>

            {/* CENTER CONTENT */}
            <div className="md:col-span-6 text-center -mt-4 md:-mt-20 ml-4 md:ml-4 mr-4 md:mr-0">

              <h1 className="text-[48px] sm:text-[58px] md:text-[89px] font-montserrat font-bold text-white leading-snug md:leading-tight opacity-0 animate-heroPopUltra">
                <span className="block">Expand Your</span>
                <span className="block -ml-0 md:-ml-10 -mt-3 md:-mt-6">
                  Social{" "}
                  <span className="text-[#04D78D] italic font-playfair">
                    Reach
                  </span>
                </span>
              </h1>

              <div className="mt-6 mb-6 md:mb-0 mx-auto w-full max-w-[594px] h-[220px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-heroPopUltraImage [animation-delay:0.18s]">
                <img
                  src="/hero.jpg"
                  alt="Social Media"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* LEFT TEXT */}
              <div className="md:col-span-3 text-center md:hidden md:text-left text-[#B1B1B1] text-[16px] md:text-[20px] font-montserrat leading-relaxed overflow-x-hidden mb-6 md:-mb-36 -ml-0 md:-ml-20 animate-fadeLeft">
                Comprehensive solutions across marketing, design, and
                technology built to
                accelerate your growth.
              </div>

            </div>

            {/* RIGHT STATS */}
            <div className="md:col-span-3 text-center md:text-right mt-0 md:mt-16 md:-mr-4 overflow-x-hidden">

              <p className="text-[#04D78D] text-[38px] md:text-[55px] -ml-52 md:-ml-0 font-medium font-playfair opacity-0 animate-fadeRight [animation-delay:0.1s]">
                95%
              </p>

              <p className="text-[#B1B1B1] text-[16px] md:text-[20px] -ml-52 md:-ml-0 font-regular font-montserrat mt-2 opacity-0 animate-fadeRight [animation-delay:0.25s]">
                Client <br /> Retention <br /> Rate
              </p>

              <div className="-mt-24 md:-mt-0 flex justify-center md:justify-end gap-1 ml-32 md:ml-0 text-[22px] opacity-0 animate-fadeRight [animation-delay:0.4s]">
                <span className="text-[#FDC700]">⭐</span>
                <span className="text-[#FDC700]">⭐</span>
                <span className="text-[#FDC700]">⭐</span>
                <span className="text-[#FDC700]">⭐</span>
                <span className="text-[#cdd4e0]">⭐</span>
              </div>

              <p className="text-[#B1B1B1] text-[16px] md:text-[20px] ml-32 md:ml-0 font-regular font-montserrat mt-4 mr-0 md:mr-2 opacity-0 animate-fadeRight [animation-delay:0.55s]">
                300+ Clients <br /> Reviews
              </p>

            </div>

          </div>

        </div>
        {/* BLEND TO NEXT SECTION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* ================= BRAND SERVICES SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative w-full py-14 md:py-20 bg-black overflow-hidden"
      >
        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{ backgroundImage: "url('/grow-bg.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 ml-0 md:ml-40 mr-4 md:-mr-20 relative z-50">

          {/* HEADING */}
          <h2
            className={`text-center ml-2 md:ml-0 mr-0 md:mr-44 text-[#FFFFFF] 
            text-[38px] md:text-[59px] 
            font-montserrat font-bold leading-tight mb-12 md:mb-16
            transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            We Grow Brands <br />
            With Digital{" "}
            <span className="text-[#04D78D] italic font-playfair text-[38px] md:text-[59px]">
              Creativity
            </span>
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ml-4 md:ml-0">

            {/* LEFT CARD */}
            <div
              className={`relative rounded-[12px] overflow-hidden
              w-full md:w-[700px] h-[250px] md:h-[400px] ml-0 md:-ml-16
              transition-all duration-1000 ease-out delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
            >
              <img
                src="/brand1.jpg"
                alt="Brand Growth"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
            </div>

            {/* RIGHT CARD */}
            <div
              className={`relative rounded-[12px] overflow-hidden
              w-full md:w-[560px] h-[250px] md:h-[400px] ml-0 md:-ml-20
              transition-all duration-1000 ease-out delay-300
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
            >
              <img
                src="/brand2.jpg"
                alt="Creative Solutions"
                className="absolute inset-0 w-full h-full object-cover opacity-95"
              />
            </div>

          </div>
        </div>

        {/* BLEND TO NEXT SECTION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section
        ref={section2Ref}
        className="relative w-full py-6 md:py-28 overflow-hidden"
      >

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-t from-transparent via-black/10 to-black z-20" />

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">

          {/* ================= HEADING ================= */}
          <h2
            className={`
              text-center text-[#FFFFFF] 
              text-[38px] sm:text-[38px] md:text-[59px]
              font-montserrat font-bold mb-14 md:mb-20
              transition-all duration-1000 ease-out
              ${showSection2
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
              }
            `}
          >
            What We Do
          </h2>

          {/* ================= GRID ================= */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
              gap-x-6 md:gap-x-10 ml-4 md:ml-0 mr-4 md:mr-0
              gap-y-14 md:gap-y-20
              transition-all duration-1000 ease-out delay-300
              ${showSection2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-32"
              }
            `}
          >
            {/* CARD TEMPLATE */}
            {[
              { img: "/do1.png", title: "UI & UX", desc: "Simple, intuitive user experiences." },
              { img: "/do2.png", title: "Web & Mobile App", desc: "High-performance websites and mobile apps." },
              { img: "/do3.png", title: "Social Media", desc: "Content that grows and engages audiences." },
              { img: "/do4.png", title: "WhatsApp Marketing", desc: "Direct WhatsApp outreach for faster customer engagement." },
              { img: "/do5.png", title: "Meta Ads", desc: "Meta advertising built for measurable growth." },
            ].map((item, index) => (
              <div key={index}>
                <div className="rounded-[12px] overflow-hidden mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />
                </div>
                <h3 className="text-white text-[26px] md:text-[24px] font-montserrat font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#B1B1B1] text-[16px] md:text-[16px] font-montserrat font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* VIEW ALL */}
            <a href="/our-services" className="col-span-1 sm:col-span-2 md:col-span-1 flex justify-start ml-4 md:ml-0 md:block">
              <button className="flex flex-col items-center justify-center mt-0 md:mt-12 md:ml-28 group">
                <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[#04D78D] flex items-center justify-center cursor-pointer animate-viewGlow">
                  <span className="animate-arrowMove">
                    <FaArrowRight className="w-[20px] h-[22px] md:w-[22px] md:h-[24px]" />
                  </span>
                </div>
                <p className="text-white font-montserrat font-bold mt-4 text-[18px] md:text-[20px]">
                  View All
                </p>
              </button>
            </a>

          </div>
        </div>

        {/* BLEND TO NEXT SECTION */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-80 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </section>

      {/* WORK + AI VIDEOS SECTION */}
      <section
        ref={sectionRef3Ref}
        className="relative w-full bg-black lg:mr-16 px-6 md:px-12 lg:px-20 py-20 text-white overflow-hidden"
      >

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — WORK TITLE */}
          <div
            className={`
              gap-5 -mt-2 flex items-center
              ml-4 sm:ml-6 md:ml-10 lg:ml-10
              ${sectionRef3 ? "animate-slideInLeft" : "opacity-0"}
            `}
          >
            <h2 className="relative text-[44px] sm:text-[52px] md:text-[59px] lg:text-[64px] font-montserrat font-bold leading-none">

              <span className="absolute inset-0 -top-[18px] lg:-top-[28px] text-[#2A2A2A] opacity-80">
                Work
              </span>

              <span className="absolute inset-0 top-[18px] lg:top-[28px] text-[#1F1F1F] opacity-80">
                Work
              </span>

              <span className="relative z-10 text-white">
                Work
              </span>
            </h2>

            <img
              src="/Vector.png"
              alt="sparkle"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] lg:w-[77px] lg:h-[77px] ml-4 lg:ml-14"
            />
          </div>

          {/* RIGHT — DESCRIPTION */}
          <p
            className={`text-center lg:text-right text-[#B1B1B1] text-[16px] sm:text-base lg:text-[18px]
            font-montserrat leading-relaxed max-w-full lg:max-w-[760px] mx-auto lg:mr-10
            ${sectionRef3 ? "animate-slideRightFade" : "opacity-0"}`}
          >
            A complete digital project covering logo design, branding, UI/UX,
            <br className="hidden lg:block" />
            web & mobile, AI video content, and targeted marketing. Built to
            <br className="hidden lg:block" />
            create impact, consistency, and measurable results.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="ml-4 md:ml-0 mr-4 md:mr-0 mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — VIDEO GRID */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 gap-4
              ml-0 sm:ml-6 md:ml-10 lg:ml-10
              ${sectionRef3 ? "animate-zoomIn" : "opacity-0"}
            `}
          >
            {["https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606051/video1_jb3aqd.mp4", "https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606304/video2_czjp3u.mov", "https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606279/labubu_j20ymf.mp4", "https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606326/video4_esfuci.mov"].map(
              (video, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border-2 border-white/25
                  h-[350px] sm:h-[280px] lg:h-[309px]
                  w-full lg:w-[285px]"
                >
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>

          {/* RIGHT — AI VIDEOS */}
          <div
            className={`
              mt-10 lg:mt-0
              mb-0 lg:-mb-72
              ml-0 sm:ml-6 md:ml-10 lg:ml-8
              ${sectionRef3 ? "animate-slideInRight" : "opacity-0"}
            `}
          >
            <h3 className="text-[38px] sm:text-[42px] lg:text-[59px] font-bold mb-6 flex items-center -mt-10 md:-mt-0 ml-0 lg:ml-2">
              AI Videos
              <img src="/video1.png" className="w-[45px] h-[45px] lg:w-[65px] lg:h-[62px] lg:ml-10" />
            </h3>

            <p className="text-[#B1B1B1] mb-8 lg:mb-10 text-[16px] lg:text-[18px] leading-relaxed ml-0 lg:ml-2 font-montserrat font-regular">
              We create AI-powered videos tailored to your brand <br />
              and message. Designed to capture attention, <br />
              explain ideas, and boost engagement.
            </p>

            <a href="/ai-animation">
              <button
                className="
                px-6 py-3 rounded-full border-[3px] border-[#04D78D]
                text-[#04D78D] text-[16px] lg:text-[16px]
                font-montserrat font-medium
                ml-0 lg:ml-2
                bg-transparent
                opacity-0
                animate-fadeDownGlow
                [animation-delay:0.85s]
                transition-colors
              "
              >
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* BLEND */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40
          bg-gradient-to-b from-transparent via-black/50 to-black" />
      </section>

      {/* Smart Software Solutions */}
      <section
        ref={sectionRef4}
        className="relative px-6 md:px-12 lg:px-20 py-16 text-white overflow-hidden"
      >
        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-20
          bg-gradient-to-t from-transparent via-black/60 to-black z-20" />

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/solution-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div
          className={`
            relative z-10
            transition-all duration-1000
            ${showSection4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}
          `}
        >
          {/* HEADING */}
          <h2 className="text-center mt-14 text-[38px] md:text-[59px] font-montserrat font-bold mb-16 md:mb-20 leading-[0.8] md:leading-[0.8]">
            Smart Software <br />
            <span className="block mt-4 md:mt-6 text-[#04D78D] font-playfair italic text-[38px] md:text-[59px]">
              Solutions
            </span>
          </h2>

          {/* SUBTEXT */}
          <p className="-mt-6 md:-mt-10 mb-16 md:mb-28 px-4 md:px-0 mx-auto max-w-[520px] font-montserrat font-regular text-center text-white text-[16px] md:text-[16px] leading-[1.6]">
            Powering businesses with intelligent apps, automation,
            <br className="hidden md:block" />
            and custom-built software.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 ml-4 md:ml-24 mr-4 md:mr-16 justify-items-center">

            {/* CARD 1 */}
            <div className="group text-center">
              <div className="rounded-3xl overflow-hidden w-full max-w-[361px] h-[240px] md:w-[361px] md:h-[295px]
                shadow-[0_0_60px_rgba(172,41,205,0.7)]
                transition-transform duration-300">
                <img src="/mobile.jpg" className="rounded-2xl w-full h-full object-cover" />
              </div>
              <h3 className="text-[26px] md:text-[34px] font-montserrat font-bold mt-6 md:mt-8">
                Mobile App <br />Development
              </h3>
              <p className="text-[16px] md:text-[16px] text-[#B1B1B1] font-montserrat font-regular mt-3 max-w-sm mx-auto">
                Scalable Android and iOS apps <br className="hidden md:block" />
                built for performance and user <br className="hidden md:block" />
                experience.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group text-center">
              <div className="rounded-3xl overflow-hidden w-full max-w-[361px] h-[240px] md:w-[361px] md:h-[295px]
                shadow-[0_0_60px_rgba(15,31,127,0.9)]
                transition-transform duration-300">
                <img src="/software.png" className="rounded-2xl w-full h-full object-cover" />
              </div>
              <h3 className="text-[26px] md:text-[34px] font-montserrat font-bold mt-6 md:mt-8">
                Software <br />Development
              </h3>
              <p className="text-[16px] md:text-[16px] text-[#B1B1B1] font-montserrat font-regular mt-3 max-w-sm mx-auto">
                Custom software solutions <br className="hidden md:block" />
                designed to simplify workflows and <br className="hidden md:block" />
                scale operations.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group text-center">
              <div className="rounded-3xl overflow-hidden w-full max-w-[361px] h-[240px] md:w-[361px] md:h-[295px]
                shadow-[0_0_60px_rgba(51,6,103,0.7)]
                transition-transform duration-300">
                <img src="/chatbots.jpg" className="rounded-2xl w-full h-full object-cover" />
              </div>
              <h3 className="text-[26px] md:text-[34px] font-montserrat font-bold mt-6 md:mt-8">
                AI <br className="hidden md:block" /> Chatbots
              </h3>
              <p className="text-[16px] md:text-[16px] text-[#B1B1B1] font-montserrat font-regular mt-3 max-w-sm mx-auto">
                AI-powered chatbots that <br className="hidden md:block" />
                automate support, capture leads, <br className="hidden md:block" />
                and engage users.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-12 md:mt-20">
            <a href="/our-services">
              <button className="px-10 md:px-14 py-3 rounded-full 
              font-montserrat font-medium text-[16px] md:text-[16px]
              border-[3px] border-[#04D78D]
              text-[#04D78D] bg-transparent
              animate-fadeUpGlow">
                Build With Us
              </button>
            </a>
          </div>
        </div>

        {/* BLEND */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 
          bg-gradient-to-b from-transparent via-black/10 to-black" />
      </section>

      {/* Graphic Designing */}
      <section
        ref={sectionRef5}
        className="relative bg-black overflow-hidden"
      >

        {/* TOP BLEND OVERLAY */}
        <div className="absolute top-0 left-0 w-full h-[400px]
          bg-gradient-to-t from-transparent via-black/90 to-black z-20">
        </div>

        {/* Background */}
        <div className="absolute inset-0 bg-[url('/brand-bg.jpg')] bg-cover bg-center opacity-90" />

        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 items-center 
          px-6 md:px-12 lg:px-20 
          py-24 md:py-48"> {/* mobile padding adjust, desktop same */}

          {/* ================= LEFT ================= */}
          <div className="text-white max-w-full 
            ml-4 md:ml-10  /* desktop same, mobile fix */
            text-center md:text-left"> {/* mobile center only */}

            <h2
              className={`text-[38px] md:text-[59px] text-start font-montserrat font-bold mb-6 leading-[0.95] relative z-30
              ${showSection5 ? "animate-slideLeftFade [animation-delay:0.2s]" : ""}`}
            >
              Graphic <br />
              <span className="block mt-2">Designing</span>
            </h2>

            <p
              className={`text-[#B1B1B1] text-[16px] md:text-[20px] font-montserrat text-start mb-10 leading-relaxed relative z-30
              ${showSection5 ? "animate-slideLeftFade [animation-delay:0.4s]" : ""}`}
            >
              Creative visuals crafted to communicate, <br className="hidden md:block" />
              connect, and strengthen brand identity.
            </p>

            <div className="flex justify-start lg:justify-start">
              <a href="/graphic-designing">
                <button
                  className={`px-6 py-3 rounded-full border-[3px] border-[#04D78D]
                text-[#04D78D] text-[16px] font-montserrat font-medium bg-transparent relative z-30
                ${showSection5 ? "animate-fadeLeftGlow" : ""}`}
                >
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className={`relative flex items-center justify-center md:justify-end z-30
            h-[400px] md:h-[600px]
            mt-16 md:mt-0
            mr-0 md:mr-44
            ${showSection5 ? "animate-slideInTogether" : "opacity-0"}`}
          > {/* desktop same */}

            <div className="relative flex items-center justify-center 
              w-full max-w-[1600px] mx-auto 
              animate-slideRightFade [animation-delay:0.3s]">

              {images.map((src, index) => {
                const position = getPosition(index);

                return (
                  <div
                    key={index}
                    className={`
                    absolute rounded-2xl overflow-hidden 
                    transition-all duration-700 ease-in-out
                    flex items-center justify-center

                    w-[280px] md:w-[329px] h-[360px] md:h-[405px]

                    ${position === "center"
                        ? "z-30 translate-x-0 scale-100"
                        : position === "left"
                          ? "z-20 -translate-x-[200px] md:-translate-x-[314px] scale-75"
                          : position === "right"
                            ? "z-20 translate-x-[200px] md:translate-x-[314px] scale-75"
                            : "opacity-0 scale-50 z-10"
                      }
                  `}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover transition-none duration-700"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* BLEND */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[950px]
            bg-gradient-to-b from-transparent via-black/50 to-black">
          </div>

        </div>

        {/* DOTS */}
        <div className="absolute
          bottom-[70px] md:bottom-[210px]   /* mobile adjust only */
          left-1/2 md:left-auto
          md:right-[480px]
          -translate-x-1/2 md:translate-x-0
          flex gap-3 z-40">

          {images.slice(0, 3).map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300
              ${active % 3 === index ? "bg-[#04D78D] scale-125" : "bg-gray-500"}
            `}
            />
          ))}
        </div>
      </section>

      {/* Web / UI UX Projects */}
      <section
        ref={sectionRef6}
        className="relative bg-black px-6 md:px-12 lg:px-20 py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div
            className={`
              text-white max-w-xl
              ml-4 lg:ml-10

              /* ✅ Sticky only on desktop */
              relative lg:sticky 
              top-auto lg:top-32 
              self-auto lg:self-start

              ${showSection6 ? "opacity-100 animate-slideInLeft" : "opacity-0"}
            `}
          >
            <h2 className="text-[38px] md:text-[59px] font-montserrat font-bold mb-6 leading-[1.1]">
              Web / UI UX <br /> Projects
            </h2>

            <p className="text-[#B1B1B1] text-[16px] font-montserrat font-regular mb-10 leading-relaxed">
              Created a clean web and UI experience optimized for <br className="hidden md:block" />
              all devices. Built for clarity, speed, and ease of use.
            </p>

            <a href="/web-mobile-app">
              <button
                className={`
                px-6 py-3 rounded-full text-[16px]
                border-[3px] border-[#04D78D] text-[#04D78D]
                bg-transparent transition-colors
                ${showSection6 ? "opacity-100 animate-fadeLeftGlow" : "opacity-0"}
              `}
              >
                Learn More
              </button>
            </a>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className={`
              space-y-10 md:space-y-10
              mr-4 lg:mr-16 ml-4 md:ml-0
              ${showSection6 ? "opacity-100 animate-slideInRight" : "opacity-0"}
            `}
          >
            <div className="relative rounded-[10px] overflow-hidden group cursor-pointer">
              <a
                href="https://panoplyindustries.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-[10px] overflow-hidden group cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src="/web5.jpeg"
                  alt="UI Project 1"
                  className="w-full h-full object-cover transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* VIEW SITE TEXT */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center gap-3 text-white text-[22px] font-montserrat font-medium underline">
                    View Site <FaArrowRight />
                  </div>
                </div>
              </a>
            </div>

            <div className="relative rounded-[10px] overflow-hidden group cursor-pointer">
              <a
                href="https://panoplyindustries.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-[10px] overflow-hidden group cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src="/web2.png"
                  alt="UI Project 1"
                  className="w-full h-[200px] md:h-[372px] object-cover transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* VIEW SITE TEXT */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center gap-3 text-white text-[22px] font-montserrat font-medium underline">
                    View Site <FaArrowRight />
                  </div>
                </div>
              </a>
            </div>

            <div className="relative rounded-[10px] overflow-hidden group cursor-pointer">
              <a
                href="https://panoplyindustries.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-[10px] overflow-hidden group cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src="/home-ui-ux(3).png"
                  alt="UI Project 1"
                  className="w-full h-[200px] md:h-[372px] transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* VIEW SITE TEXT */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center gap-3 text-white text-[22px] font-montserrat font-medium underline">
                    View Site <FaArrowRight />
                  </div>
                </div>
              </a>
            </div>

            <div className="relative rounded-[10px] overflow-hidden group cursor-pointer">
              <a
                href="https://panoplyindustries.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-[10px] overflow-hidden group cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src="/home-ui-ux(2).png"
                  alt="UI Project 1"
                  className="w-full h-[200px] md:h-[372px] transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* VIEW SITE TEXT */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="flex items-center gap-3 text-white text-[22px] font-montserrat font-medium underline">
                    View Site <FaArrowRight />
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WhatsApp Marketing */}
      <section
        ref={sectionRef7}
        className="relative px-8 md:px-12 lg:px-20 py-2 md:py-40 bg-black"
      >
        {/* TOP BLEND OVERLAY */}
        <div
          className="absolute top-0 left-0 w-full h-[500px]
          bg-gradient-to-t from-transparent via-black/80 to-black z-20"
        ></div>

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/brand-bg.jpg')] bg-cover bg-center opacity-70"></div>

        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white ml-0 md:ml-10 mt-8 text-center md:text-left">

            {/* HEADING */}
            <h2
              className={`text-[38px] md:text-[59px] font-montserrat font-bold 
                mb-8 md:mb-10 mr-28 ml-4 md:ml-0
                md:whitespace-nowrap
                ${showSection7 ? "opacity-100 animate-slideInLeft" : "opacity-0"}`}
            >
              Whatsapp Marketing
            </h2>

            {/* GREEN SUB TEXT */}
            <p
              className={`text-[#04D78D] text-[16px] md:text-[26px] md:leading-[1.3] font-montserrat font-medium ml-4 md:ml-0 mr-20 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0
              ${showSection7 ? "opacity-100 animate-slideInLeft" : "opacity-0"}`}
              style={{ animationDelay: "0.15s" }}
            >
              Reach customers instantly with <br className="hidden md:block" />
              <span className="mt-2">personalized messaging</span>
            </p>

            {/* BULLET POINTS */}
            <div className="ml-4 md:ml-0 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-18 md:gap-y-5 text-white text-[16px] md:text-[18px] font-montserrat font-regular text-left">

              <ul className="space-y-5 md:space-y-8 list-disc list-inside">
                <li className="whitespace-nowrap">Broadcast promotional messages</li>
                <li className="whitespace-nowrap">Automated replies and follow-ups</li>
                <li className="whitespace-nowrap">Click-to-WhatsApp ads</li>
              </ul>

              <ul className="space-y-5 md:space-y-8 list-disc list-inside md:ml-20">
                <li className="whitespace-nowrap">Share offers and updates</li>
                <li className="whitespace-nowrap">Send images, videos, and catalogs</li>
                <li className="whitespace-nowrap">Instant customer support</li>
              </ul>

            </div>

            {/* BUTTON */}
            <a
              href="https://connecteze.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="
                px-6 py-3 rounded-full border-[3px] border-[#04D78D]
                text-[#04D78D] text-[16px] lg:text-[16px]
                font-montserrat font-medium 
                -ml-36 lg:ml-0 md:mt-12 mt-8
                bg-transparent
                opacity-0 hover:underline
                animate-fadeLeftGlow
                [animation-delay:0.85s]
                transition-colors
              "
              >
                Connecteze.in
              </button>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`flex justify-center md:justify-end md:mt-40 mt-4 md:mr-10 
            ${showSection7 ? "animate-slideRightFade" : "opacity-0"}`}>
            <a href="/connect.MP4" target="_blank">
              <video
                src="https://res.cloudinary.com/dnrpf4rsx/video/upload/v1774606584/connect_y7t4yk.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[500px] h-[350px] object-cover transition-transform duration-500 cursor-pointer rounded-2xl"
              />
            </a>
          </div>

        </div>

        {/* BLEND TO NEXT SECTION */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[800px]
          bg-gradient-to-b from-transparent via-black/10 to-black"
        ></div>
      </section>

      {/* Bidding Section */}
      <section
        ref={sectionRef10}
        className="relative w-full min-h-screen mt-10 md:-mt-8 flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >

        {/* TOP BLEND OVERLAY */}
        <div
          className="absolute top-0 left-0 w-full h-32 md:h-40
    bg-gradient-to-t from-transparent via-black/80 to-black z-20"
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-8xl w-full px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className={`flex justify-center hidden md:block ${showSection10 ? "animate-slideLeftFade" : "opacity-0"}`}>
            <img
              src="/bidding.png"
              alt="Auction"
              className="w-[85%] sm:w-[70%] md:w-[583px] object-contain md:ml-12"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`text-center md:text-left -ml-0 md:-ml-10 relative z-30 ${showSection10 ? "animate-slideRightFade" : "opacity-0"}`}>

            <h1 className="text-[38px] sm:text-[38px] md:text-[59px] font-montserrat font-bold leading-tight">
              Smart Auction <br />
              Bidding Software
            </h1>

            <div className={`flex justify-center md:hidden ${showSection10 ? "animate-slideLeftFade" : "opacity-0"}`}>
              <img
                src="/bidding.png"
                alt="Auction"
                className="w-[90%] sm:w-[70%] md:w-[583px] object-contain mt-8 md:mt-0"
              />
            </div>

            <p className="text-[#04D78D] ml-4 md:ml-0 mr-4 md:mr-0 font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[26px] mt-4 max-w-[700px] mx-auto md:mx-0">
              A powerful digital platform to manage, monitor, <br className="hidden md:block" />
              and win auctions with ease and transparency.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ml-6 md:ml-0 gap-4 md:gap-6 mt-8 font-montserrat font-regular text-[16px] sm:text-[17px] md:text-[18px] text-left">

              <div className="flex items-center gap-2">
                <FaCheck /> Real-Time Live Bidding
              </div>

              <div className="flex items-center gap-2">
                <FaCheck /> User-Friendly Dashboard
              </div>

              <div className="flex items-center gap-2">
                <FaCheck /> Secure & Transparent System
              </div>

              <div className="flex items-center gap-2">
                <FaCheck /> Admin Control Panel
              </div>

              <div className="flex items-center gap-2">
                <FaCheck /> Multi-Device Access
              </div>

              <div className="flex items-center gap-2">
                <FaCheck /> Automated Notifications
              </div>

            </div>

            {/* BUTTON */}
            <div className="text-left md:text-left">
              <a href="https://auctionzo.com/"
                target="_blank"
                rel="noopener noreferrer">
                <button
                  className={`px-6 py-3 rounded-full border-[3px] border-[#04D78D]
              text-[#04D78D] text-[15px] sm:text-[16px]
              font-montserrat font-medium mt-8 md:mt-10 ml-6 md:ml-0
              bg-transparent transition-colors
              ${showSection10 ? "animate-fadeUpGlow" : "opacity-0"}`}
                >
                  View Site
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* BLEND TO NEXT SECTION */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32 md:h-40
             bg-gradient-to-b from-transparent via-black/10 to-black"
        ></div>

      </section>

      {/* OUR CLIENTS */}
      <section
        ref={sectionRef11}
        className="px-0 md:px-12 lg:px-0 py-16 md:py-20 bg-black">

        {/* HEADING */}
        <div className="flex flex-col md:flex-row md:justify-between 
          mb-16 md:mb-24 
          ml-0 md:ml-28 
          mr-0 md:mr-28">

          <h2
            className={`text-[38px] md:text-[59px] font-montserrat font-bold text-white text-center md:text-left
            ${showSection11 ? "animate-slideLeftFade" : "opacity-0"}`}
          >
            Our Clients
          </h2>

          <p
            className={`text-[#B1B1B1] max-w-full md:max-w-7xl mt-6 md:mt-0
            font-montserrat font-regular text-[16px] md:text-[18px] ml-4 md:ml-0 mr-4 md:mr-0
            text-center md:text-left
            ${showSection11 ? "animate-slideRightFade" : "opacity-0"}`}
          >
            We've built strong relationships with our clients. Become <br className="hidden md:block" />
            our new client and expect nothing less than industry's best.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="overflow-hidden">
          <div className={`flex gap-4 md:gap-12 w-max ${showSection11 ? "animate-scroll-left" : "opacity-0"}`}>

            {[
              "/logo1.png", "/logo2.png", "/logo3.png",
              "/logo4.png", "/logo5.png", "/logo6.png", "/logo7.png"
            ].map((img, i) => {
              const bigLogos = [4, 5, 6, 7];

              return (
                <div
                  key={i}
                  className="min-w-[160px] md:min-w-[220px] 
                    h-[80px] md:h-[120px] 
                    rounded-xl border-[1px] 
                    border-[#1C1C1C] 
                    flex items-center justify-center"
                >
                  <img
                    src={img}
                    className={`object-contain transition-transform duration-300
                      ${bigLogos.includes(i) ? "scale-110 md:scale-125" : "scale-100 md:scale-100"}
                      max-h-[45px] md:max-h-[70px]
                    `}
                  />
                </div>
              );
            })}

            {/* DUPLICATE */}
            {[
              "/logo1.png", "/logo2.png", "/logo3.png",
              "/logo4.png", "/logo5.png", "/logo6.png", "/logo7.png"
            ].map((img, i) => {
              const bigLogos = [4, 5, 6, 7];

              return (
                <div
                  key={`dup-${i}`}
                  className="min-w-[140px] md:min-w-[220px] 
                    h-[80px] md:h-[120px] 
                    rounded-xl border-[1px]
                    border-[#1C1C1C] 
                    flex items-center justify-center"
                >
                  <img
                    src={img}
                    className={`object-contain transition-transform duration-300
                      ${bigLogos.includes(i) ? "scale-110 md:scale-125" : "scale-100 md:scale-100"}
                      max-h-[45px] md:max-h-[70px]
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="overflow-hidden mt-6 md:mt-20">
          <div className={`flex gap-4 md:gap-12 w-max ${showSection11 ? "animate-scroll-right" : "opacity-0"}`}>

            {[
              "/client1.png", "/client2.png", "/client3.png",
              "/client4.png", "/client5.png", "/client6.png", "/client7.png"
            ].map((img, i) => {
              const bigLogos = [1, 3, 5, 6];

              return (
                <div
                  key={i}
                  className="min-w-[140px] md:min-w-[220px] 
                    h-[80px] md:h-[120px] 
                    rounded-xl border-[1px] 
                    border-[#1C1C1C] 
                    flex items-center justify-center"
                >
                  <img
                    src={img}
                    className={`object-contain transition-transform duration-300
                      ${bigLogos.includes(i) ? "scale-110 md:scale-125" : "scale-100 md:scale-100"}
                      max-h-[45px] md:max-h-[70px]
                    `}
                  />
                </div>
              );
            })}

            {/* DUPLICATE */}
            {[
              "/client1.png", "/client2.png", "/client3.png",
              "/client4.png", "/client5.png", "/client6.png", "/client7.png"
            ].map((img, i) => {
              const bigLogos = [1, 3, 5, 6];

              return (
                <div
                  key={`dup-${i}`}
                  className="min-w-[140px] md:min-w-[220px] 
                    h-[80px] md:h-[120px] 
                    rounded-xl border-[1px] 
                    border-[#1C1C1C] 
                    flex items-center justify-center"
                >
                  <img
                    src={img}
                    className={`object-contain transition-transform duration-300
                      ${bigLogos.includes(i) ? "scale-110 md:scale-125" : "scale-100 md:scale-100"}
                      max-h-[45px] md:max-h-[70px]
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={sectionRef8}
        className="px-6 md:px-12 lg:px-20 py-12 md:py-24 bg-black"
      >
        <h2
          className={`text-[38px] md:text-[59px] font-montserrat font-bold text-white text-center mb-16 md:mb-24 leading-[0.8]
          ${showSection8 ? "animate-slideInTogether" : "opacity-0"}`}
        >
          What Our <span className="italic font-playfair">Clients</span>
          <span className="block mt-4 md:mt-6">Say About Us</span>
        </h2>

        {/* SLIDER WRAPPER */}
        <div
          className={`relative w-full overflow-hidden
          ${showSection8 ? "animate-fadeUp" : "opacity-0"}`}
        >
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...testimonials, testimonials[0]].map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-center px-2">

                {/* CARD */}
                <div className="
                  w-full max-w-[95%] 
                  md:w-[816px]
                  rounded-[24px] md:rounded-[32px] 
                  border border-[#04D78D]/40 
                  bg-black 
                  p-8 md:p-16 
                  text-center 
                  shadow-[0_0_60px_rgba(0,255,136,0.15)] 
                  md:shadow-[0_0_120px_rgba(0,255,136,0.18)]
                ">

                  <img
                    src="/quote.png"
                    alt="Quote"
                    className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] mb-6 md:mb-8 mx-auto"
                  />

                  <p className="text-[#9C9C9C] text-[15px] md:text-[18px] leading-relaxed max-w-full md:max-w-2xl mx-auto mb-10 md:mb-14 font-montserrat italic">
                    "{item.text}"
                  </p>

                  <p className="text-white font-montserrat font-bold text-[15px] md:text-[16px]">
                    – {item.name}
                  </p>

                  <p className="text-[#B1B1B1] text-[13px] md:text-[14px] mt-1 font-montserrat">
                    {item.company}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10 md:mt-14">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-4 h-3 md:w-5 md:h-4 rounded-full transition-all duration-300 ${currentIndex % 3 === i
                ? "bg-[#04D78D]"
                : "bg-[#444]"
                }`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRef9}
        className="relative px-6 md:px-12 lg:px-20 
        py-20 md:py-28 
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
                <BiRightArrow className="text-[16px] md:text-[16px]" /> Get Free Strategy Call

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
                transition-colors"
              >
                Mail Us <MdMailOutline className="text-[22px] md:text-[16px]" />
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
      <footer className="bg-black px-6 md:px-16 py-10 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:mt-14">

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

            <div className="flex justify-center md:justify-start flex-wrap gap-6 text-[#D2D2D2] text-[26px] md:text-[30px] max-w-[220px] mx-auto md:mx-0">

              <a href="https://www.instagram.com/spitel_insta/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://www.facebook.com/company.spitel/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://wa.me/917892059939" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="cursor-pointer hover:text-[#04D78D]" />
              </a>

              <a href="https://www.linkedin.com/company/spitel/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer md:ml-16 hover:text-[#04D78D]" />
              </a>

              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="cursor-pointer hover:text-[#04D78D]" />
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

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/917892059939"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6 md:bottom-14
          right-4 md:right-0
          md:mr-20
          z-50

          w-[56px] h-[56px] md:w-[71px] md:h-[71px]
          rounded-full
          flex items-center justify-center

          bg-[#25D366]
          shadow-[0_0_25px_rgba(37,211,102,0.65)] 
          md:shadow-[0_0_35px_rgba(37,211,102,0.75)]

          animate-whatsappFloat
        "
        style={{
          animation:
            "whatsappEnter 0.6s ease-out forwards, whatsappFloat 3.6s ease-in-out infinite 0.8s",
        }}
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-[56px] h-[56px] md:w-[71px] md:h-[71px]"
        />
      </a>
    </div>
  );
}
