import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
export default function WebDesign() {

  const [isOpen, setIsOpen] = useState(false);

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

      <section className="bg-black text-white px-4 sm:px-6 md:px-16 py-12 md:py-20 ml-4 md:ml-0 mr-4 md:mr-0">

        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 md:ml-36">

            <h2 className="text-[38px] sm:text-4xl md:text-[50px] font-montserrat font-bold mb-8 md:mb-10 md:-ml-14 animate-slideLeftFade">
              Modern Web Design Trends
            </h2>

            {/* Big Image */}
            <img
              src="/web-hosting.jpg"
              alt="Blog Featured"
              className="w-full h-[250px] sm:h-[350px] md:h-[550px] object-cover rounded-xl md:-ml-14 animate-slideLeftFade"
            />

            {/* Date Row */}
            <div className="flex items-center gap-2 text-white text-[16px] sm:text-base mt-6 md:mt-8 md:-ml-16">
              <FiCalendar className="text-white" />
              <span> Posted On 24 February 2026</span>
            </div>

            {/* Content */}
            <div className="mt-6 md:mt-8 md:-ml-14">


              <p className="text-[#B1B1B1] text-[16px] sm:text-[18px] leading-relaxed font-montserrat">
                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">Creating Impactful Digital Experiences</span><br />
                Web design has evolved far beyond simple layouts and color combinations. Today, modern <br />
                web design focuses on creating immersive, user-centered experiences that combine aesthetics <br />
                with performance. As competition in the digital space grows, businesses must adopt <br />
                contemporary design trends that not only look visually appealing but also enhance usability <br />and engagement.<br /> <br />
                A well-designed website builds credibility instantly. It communicates professionalism, <br />
                strengthens brand identity, and guides users smoothly toward meaningful actions. When <br />
                modern design principles are applied strategically, websites become powerful tools for <br />
                growth and conversion.<br /> <br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">What Defines Modern Web Design?</span><br />
                Modern web design is centered around clarity, functionality, and user experience. It prioritizes <br />
                intuitive navigation, responsive layouts, fast loading speeds, and visually balanced compositions. <br /> <br />
                Unlike traditional designs that focused heavily on decorative elements, today’s approach <br />
                emphasizes minimalism, purposeful content placement, and interactive features that <br />
                enhance engagement. Clean typography, bold visuals, subtle animations, and structured <br />
                spacing play a crucial role in creating a seamless browsing experience. <br /> <br />
                Modern websites are not just attractive — they are strategic, data-driven platforms designed <br />
                to support business goals. <br /> <br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">The Importance of User Experience (UX)</span><br />
                User experience is at the heart of modern web design. Visitors expect websites to be easy <br />
                to navigate, mobile-friendly, and fast. Even a slight delay in loading speed can increase <br />
                bounce rates and reduce conversions. <br /> <br />
                A strong UX strategy ensures that users can quickly find the information they need without <br />
                confusion. Clear call-to-action buttons, logical content hierarchy, and consistent design <br />
                patterns create a sense of familiarity and trust. <br /> <br />
                By understanding user behavior and preferences, businesses can design websites that <br />
                feel intuitive and enjoyable, encouraging visitors to stay longer and interact more.<br /> <br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">Key Modern Web Design Trends</span> <br />
                Several trends are shaping the digital landscape today:<br /><br />

                Minimalist Layouts:<br />
                Clean, uncluttered interfaces with ample white space improve readability and focus.<br /><br />

                Responsive and Mobile-First Design:<br />
                Websites must adapt seamlessly to all screen sizes, ensuring consistent performance <br />
                across devices.<br /> <br />

                Interactive Elements and Micro-Animations:<br />
                Subtle hover effects, smooth transitions, and engaging animations enhance user <br />interaction without overwhelming the interface.<br /><br />

                Bold Typography and Visual Hierarchy:<br />
                Strategic font choices and structured headings guide users through content naturally.<br /><br />

                Dark Mode and Adaptive Color Schemes:<br />
                Modern color palettes improve accessibility and create visually striking experiences.<br /><br />

                These trends help businesses remain relevant while delivering engaging digital journeys.<br /> <br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">Performance and Speed Optimization</span><br />
                A visually appealing website is ineffective if it performs poorly. Modern web design <br />
                places strong emphasis on speed optimization, lightweight frameworks, and efficient <br />
                coding practices.<br /><br />
                Optimized images, streamlined layouts, and clean backend architecture ensure faster <br />
                load times. Performance directly impacts SEO rankings and user satisfaction, making <br />
                it a critical component of contemporary design strategies.<br /><br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">The Role of Branding in Web Design</span><br />
                Consistency in branding strengthens recognition and trust. Modern websites integrate <br />
                brand colors, typography, imagery, and messaging cohesively across all pages.<br /><br />
                When branding elements are aligned with user experience, the website becomes more <br />
                memorable and impactful. This alignment helps businesses communicate authority and <br />
                professionalism in competitive markets.<br /><br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">Benefits of Adopting Modern Web Design</span><br />
                Implementing modern web design trends offers several advantages:<br /><br />
                <li className="ml-4">Improved user engagement<br /></li>
                <li className="ml-4">Higher conversion rates<br /></li>
                <li className="ml-4">Better search engine performance <br /></li>
                <li className="ml-4">Enhanced brand credibility<br /></li>
                <li className="ml-4">Increased customer retention<br /><br /></li>
                By combining creativity with functionality, businesses can create digital platforms that drive measurable results and long-term growth.<br /><br />

                <span className="font-bold text-white text-[24px] sm:text-2xl md:text-[28px]">Conclusion</span><br />
                Modern web design is not just about following trends — it is about creating meaningful <br />
                digital experiences that connect with users. By focusing on usability, responsiveness, <br />
                performance, and strategic design elements, businesses can transform their websites into <br />
                powerful marketing assets.<br /><br />
                Investing in modern web design ensures that your brand remains competitive, relevant, and <br />
                impactful in today’s fast-paced digital world. When executed thoughtfully, it becomes a <br />
                foundation for sustained business success and stronger customer relationships.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 md:mr-16 md:mt-20 animate-fadeRight">

            {/* RECENT CARD */}
            <div className="bg-[#111111] p-6 rounded-xl shadow-xl">

              <h3 className="text-[26px] md:text-[24px] font-montserrat font-semibold mb-6">
                Recent
              </h3>

              <div className="flex flex-col gap-3 font-montserrat font-medium text-[16px]">

                <a href="/web-design">
                  <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                    <IoIosArrowForward />
                    <span>Modern Web Design Trends</span>
                  </button>
                </a>

                <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                  <IoIosArrowForward />
                  <span>Why Responsive Websites Matter</span>
                </button>

                <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                  <IoIosArrowForward />
                  <span>SEO Strategies That Drive Traffic</span>
                </button>

              </div>
            </div>


            {/* CATEGORIES CARD */}
            <div className="bg-[#111111] p-6 rounded-xl shadow-xl">

              <h3 className="text-xl md:text-[24px] font-montserrat font-semibold mb-6">
                Categories
              </h3>

              <div className="flex flex-col gap-3 font-montserrat font-medium">

                <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                  <IoIosArrowForward />
                  <span>UI/UX Designing</span>
                </button>

                <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                  <IoIosArrowForward />
                  <span>Web Development</span>
                </button>

                <button className="w-full bg-black hover:bg-[#1a1a1a] flex items-center gap-2 px-4 py-2 rounded-lg transition">
                  <IoIosArrowForward />
                  <span>Digital Marketing</span>
                </button>

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