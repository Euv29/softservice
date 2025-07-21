"use client";

import { useEffect } from 'react';

export default function AnimateOnScroll() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animate-in-view class to trigger the animation
          entry.target.classList.add('animate-in-view');
          // Stop observing this element since animation should only happen once
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-50px', // Trigger when element is 50px into the viewport
      threshold: 0.2, // Trigger when 20% of the element is visible
    });

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
