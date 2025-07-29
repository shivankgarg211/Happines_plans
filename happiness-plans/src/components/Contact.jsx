import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 85%',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className="py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      
      {/*  Left: Image */}
      <div className="md:w-1/2" ref={imageRef}>
        <img
          src="/Image.jpg"
          alt="Team Collaboration"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/*  Right: Text + CTA */}
      <div className="md:w-1/2" ref={textRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Let's build your next big idea!
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Have a project in mind or want to transform your business with cutting-edge digital solutions?
          Our team of developers, designers, and strategists are ready to bring your vision to life.
          <br /><br />
          Whether it's a website, app, or custom software – we’re just a click away.
        </p>

        <a href ="#hero" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
          CONTACT OUR TEAM
        </a>
      </div>
    </section>
  );
};

export default Contact;
