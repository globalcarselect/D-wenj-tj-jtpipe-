'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring
    if ('performance' in window) {
      // Track Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navigationEntry.loadEventEnd - navigationEntry.startTime);
        }
      });
    });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input'] });
    }

    // Preload critical resources
    const preloadLinks = [
      '/fonts/inter-var.woff2',
      '/images/about/company-overview.jpg',
      '/images/products/hdpe-pipe-fittings.jpg',
    ];

    preloadLinks.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = href.includes('.woff') ? 'font' : 'image';
      document.head.appendChild(link);
    });
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;