import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './ArcRevealHero.css'

export default function ArcRevealHero({
  children,
  greetings = [],
  greetingHold = 600,
  revealDuration = 1200,
  storageKey = 'arc-reveal-intro',
  introClassName = '',
  greetingClassName = '',
}) {
  // phase: 'idle' | 'intro' | 'reveal' | 'done' | 'error'
  const [phase, setPhase] = useState('idle')
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [hasError, setHasError] = useState(false)

  // Safety fallback — force show content if animation takes too long
  const forceComplete = useCallback(() => {
    setPhase('done')
  }, [])

  // Start intro on mount if not already seen
  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem(storageKey)
      if (!hasSeen) {
        setPhase('intro')
      } else {
        setPhase('done')
      }
    } catch (e) {
      // sessionStorage might be blocked (private browsing, etc.)
      console.warn('ArcRevealHero: sessionStorage error, skipping intro', e)
      setPhase('done')
    }
  }, [storageKey])

  // Safety timeout — if animation runs for more than 15 seconds, force complete
  useEffect(() => {
    const safetyTimer = setTimeout(forceComplete, 15000)
    return () => clearTimeout(safetyTimer)
  }, [forceComplete])

  // Greeting cycle — only runs during 'intro' phase
  useEffect(() => {
    if (phase !== 'intro') return

    const isLast = greetingIndex >= greetings.length - 1

    const timer = setTimeout(() => {
      try {
        if (isLast) {
          setPhase('reveal')
        } else {
          setGreetingIndex(i => i + 1)
        }
      } catch (e) {
        console.warn('ArcRevealHero: greeting timer error', e)
        forceComplete()
      }
    }, greetingHold)

    return () => clearTimeout(timer)
  }, [phase, greetingIndex, greetings.length, greetingHold, forceComplete])

  // After reveal animation finishes, mark done
  useEffect(() => {
    if (phase !== 'reveal') return

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(storageKey, 'true')
        setPhase('done')
      } catch (e) {
        console.warn('ArcRevealHero: sessionStorage write error', e)
        setPhase('done')
      }
    }, revealDuration)

    return () => clearTimeout(timer)
  }, [phase, revealDuration, storageKey])

  // Error fallback or normal done
  if (phase === 'done' || phase === 'error' || hasError) {
    return <>{children}</>
  }

  return (
    <div className="arc-reveal-wrapper">
      {/* Main content */}
      <div
        className={`arc-reveal-content ${phase === 'reveal' ? 'is-revealing' : ''}`}
        style={{ '--reveal-duration': `${revealDuration}ms` }}
      >
        {children}
      </div>

      {/* Intro overlay */}
      <AnimatePresence>
        {phase === 'intro' || phase === 'reveal' ? (
          <motion.div
            className={`arc-reveal-intro ${introClassName}`}
            initial={{ clipPath: 'inset(0 0 0 0)' }}
            animate={{
              clipPath: phase === 'reveal'
                ? 'inset(0 0 100% 0)'
                : 'inset(0 0 0 0)',
            }}
            transition={{
              duration: revealDuration / 1000,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Greeting text — only shown during intro */}
            <div className={`arc-reveal-greeting ${greetingClassName}`}>
              <AnimatePresence mode="wait">
                {phase === 'intro' && (
                  <motion.span
                    key={greetingIndex}
                    className="arc-reveal-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {greetings[greetingIndex]?.text || ''}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
