import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // ✅ Animate Text
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
    });

    // ✅ Animate Image
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: 40,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8"
      id="about"
    >
      {/* ✅ Left: Text Content */}
      <div className="md:w-1/2" ref={textRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Technology is the tool, <br />
          <span className="text-green-600">Innovation is the mindset!</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          At <strong className="text-gray-800">Happiness Plans</strong>, we build powerful web and mobile apps that drive businesses forward.
          Whether you're a <span className="text-green-600 font-semibold">startup</span>, an established <span className="text-green-600 font-semibold">enterprise</span>, or a creative visionary — 
          we help turn your <span className="font-semibold">ideas into scalable digital solutions</span>.  
          <br /><br />
          From <strong className="text-gray-800">UI/UX design</strong> to <strong className="text-gray-800">cloud deployment</strong>, we craft end-to-end systems with <span className="text-green-600">performance</span>, 
          <span className="text-green-600">security</span>, and <span className="text-green-600">user experience</span> in mind.
        </p>
      </div>

      {/* ✅ Right: Image */}
      <div className="md:w-1/2" ref={imageRef}>
        <img
          src="/imagemeditation.jpg" // ✅ Replace with your image
          alt="About Happiness Plans"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
