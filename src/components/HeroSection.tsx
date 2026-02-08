import { useContent } from '@/contexts/ContentContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { hero } = useContent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/images/background/aerial-panorama.jpg" 
            alt="Company Aerial View" 
            fill 
            className="object-cover transition-transform duration-10000 ease-in-out hover:scale-110"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/90"></div>
        <div className="absolute inset-0 bg-blue-900/20 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {hero.title}
        </h1>
        <p 
          className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          {hero.subtitle}
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <Link 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            {hero.quoteButton}
          </Link>
          <Link 
            href="/products" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            {hero.productsButton}
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;