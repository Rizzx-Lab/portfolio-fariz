import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambah class saat masuk viewport
          entry.target.classList.add('reveal-visible');
        } else {
          // Hapus class saat keluar viewport - ini yang bikin animasi repeat
          entry.target.classList.remove('reveal-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger');
    scrollRevealElements.forEach((el) => observer.observe(el));

    return () => {
      scrollRevealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};