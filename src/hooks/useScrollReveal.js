import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll reveal animations using Intersection Observer API.
 * This is more performant than scroll event listeners because:
 * 1. It doesn't run on every scroll event
 * 2. It only triggers when elements actually enter/leave the viewport
 * 3. It's handled by the browser's native optimization
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px',
    once = true
  } = options

  useEffect(() => {
    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.add('reveal-visible')

            // Unobserve after animation if once is true
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            // Remove classes if not once
            entry.target.classList.remove('visible')
            entry.target.classList.remove('reveal-visible')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach(el => observer.observe(el))

    // Cleanup
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])
}

/**
 * Hook for animating elements when they come into view
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) {
            observer.unobserve(element)
          }
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isInView]
}
