import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(columnsRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.5,
      ease: 'power3.out',
    });

    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
      },
      scale: 0,
      duration: 0.5,
      delay: 0.10,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white text-gray-700 border-t"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div ref={el => (columnsRef.current[0] = el)}>
          <h4 className="text-green-600 font-semibold mb-3">happypalns.com</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us </li>
            <li>Careers  </li>
            <li>Our Team</li>
            <li>Privacy Policy </li>
            <li>Terms & Conditions</li>
            <li>Refund Policy </li>
            <li>Contact Us</li>
            <li>Partners & Clients</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div ref={el => (columnsRef.current[1] = el)}>
          <h4 className="text-green-600 font-semibold mb-3">Happiness Plans</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design </li>
            <li>E-commerce Solutions </li>
            <li>Custom Software Development </li>
            <li>Cloud Services </li>
            <li>API Integration </li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div ref={el => (columnsRef.current[2] = el)}>
          <h4 className="text-green-600 font-semibold mb-3"> happyplans.com on:</h4>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="text-gray-400 hover:text-green-600 text-xl" />
            <FaInstagram className="text-gray-400 hover:text-green-600 text-xl" />
            <FaYoutube className="text-gray-400 hover:text-green-600 text-xl" />
            <FaTwitter className="text-gray-400 hover:text-green-600 text-xl" />
            <FaLinkedinIn className="text-gray-400 hover:text-green-600 text-xl" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        2025 happyplans.com - Code with Passion · Build with Purpose · Scale with Confidence
      </div>

      {/* Scroll to top button */}
      <button
        ref={buttonRef}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
