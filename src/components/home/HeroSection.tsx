import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    video: '/sofixs scale1.mp4',
    title: 'Welcome to Sofixs',
    quote: 'Empowering Digital Transformation – Web, App, AI, and Beyond.',
  },
  {
    video: '/sofixs scale2.mp4',
    title: 'Innovate with Intelligence',
    quote: 'Harness the power of AI and Automation for future-ready solutions.',
  },
  {
    video: '/sofixs scale3.mp4',
    title: 'Build. Scale. Lead.',
    quote: 'From ideas to impact – we make technology work for you.',
  },
  {
    video: '/sofixs scale4.mp4',
    title: 'Your Vision, Our Code',
    quote: 'Crafting scalable web and mobile apps that matter.',
  },
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Inline style for fade-in */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>

      {/* Videos */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <video
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current
                ? videoLoaded
                  ? 'opacity-100'
                  : 'opacity-0'
                : 'opacity-0'
            }`}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {
              if (index === 0) setVideoLoaded(true);
            }}
          />
        ))}
      </div>

      {/* Show content only when the first video has loaded */}
      {videoLoaded && (
        <>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-brightness-75 z-10" />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {slides[current].quote}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex gap-6 flex-wrap justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link to="/services">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition">
                  Explore Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white scale-110' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
