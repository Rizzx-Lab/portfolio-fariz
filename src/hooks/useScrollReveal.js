import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal')
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible')
        }
      })
    }

    handleScroll() // Check on mount
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}