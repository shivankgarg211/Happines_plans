import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
    );

    gsap.from(textRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-4 py-8"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* ✅ Top-right floating text on image */}
      <div className="absolute top-6 right-6 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg shadow-md max-w-xs text-sm md:text-base">
        Empowering Businesses with <br /> Smart Web Solutions
      </div>

      {/* ✅ Contact Form */}
      <div className="w-full md:w-1/2 flex justify-end z-10">
        <div className="w-full max-w-md md:mr-12">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-t-lg mb-2 shadow">
            <h2 className="text-xl md:text-2xl font-bold text-green-400">
              Let’s Build Something Amazing
            </h2>
            <p className="text-sm text-white mt-1">
              Custom Web & App Solutions for Startups & Businesses.
            </p>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-b-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-center text-white mb-4">Contact Us</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Animated Text Block – will move below form on mobile */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 max-w-md bg-black bg-opacity-50 text-white rounded-lg backdrop-blur-sm p-4 space-y-4 mt-6 md:mt-0 md:absolute md:left-6 md:bottom-20"
      >
        <h2 className="text-xl md:text-3xl font-bold leading-tight">
          Build Future-Ready Products
        </h2>
        <ul className="list-disc pl-5 text-sm md:text-base">
          <li>Full-stack Web Development</li>
          <li>Custom Business Solutions</li>
          <li>Mobile App Integration</li>
          <li>UI/UX Design & Branding</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
