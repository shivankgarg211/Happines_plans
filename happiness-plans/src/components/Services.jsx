import React, { useEffect, useRef } from 'react';
import { Code, Server, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ✅ Service Card Component
const ServiceCard = ({ title, description, icon, images, bg, cardRef }) => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
    >
      <div className={`px-6 py-4 flex items-center gap-3 ${bg}`}>
        <div className="text-primary">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover transition duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="px-6 py-4">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// ✅ Main Section
const Services = () => {
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built for performance and scalability.",
      icon: <Code size={28} />,
      images: ["/webImage1.jpg", "/webimage2.jpg", "/webimage3.jpg"],
      bg: "bg-blue-100",
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud solutions on AWS, Azure, and GCP.",
      icon: <Server size={28} />,
      images: ["/cloudImage1.jpg", "/cloudImage2.jpg"],
      bg: "bg-green-100",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform apps using React Native and Flutter.",
      icon: <Smartphone size={28} />,
      images: ["/MobileImage1.jpg", "/MobileImage2.jpg"],
      bg: "bg-yellow-100",
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <section className="py-16 px-4 md:px-16 bg-white" id="services">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div>
          <p className="text-sm uppercase text-gray-500 font-medium tracking-wide">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-xl mt-2">
            Innovative IT Solutions for Every Business Need
          </h2>
        </div>
        <p className="text-gray-600 max-w-md mt-4 md:mt-0">
          From full-stack web applications to robust cloud infrastructure, we deliver technology that drives success and scales with your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            {...service}
            cardRef={(el) => (cardRefs.current[idx] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
