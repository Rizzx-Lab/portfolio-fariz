import { useEffect, useState } from 'react'
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
  // phase: 'idle' | 'intro' | 'reveal' | 'done'
  const [phase, setPhase] = useState('idle')
  const [greetingIndex, setGreetingIndex] = useState(0)

  // Start intro on mount if not already seen
  useEffect(() => {
    const hasSeen = sessionStorage.getItem(storageKey)
    if (!hasSeen) {
      setPhase('intro')
    } else {
      setPhase('done')
    }
  }, [storageKey])

  // Greeting cycle — only runs during 'intro' phase
  useEffect(() => {
    if (phase !== 'intro') return

    const isLast = greetingIndex >= greetings.length - 1

    const timer = setTimeout(() => {
      if (isLast) {
        setPhase('reveal')
      } else {
        setGreetingIndex(i => i + 1)
      }
    }, greetingHold)

    return () => clearTimeout(timer)
  }, [phase, greetingIndex, greetings.length, greetingHold])

  // After reveal animation finishes, mark done
  useEffect(() => {
    if (phase !== 'reveal') return

    const timer = setTimeout(() => {
      sessionStorage.setItem(storageKey, 'true')
      setPhase('done')
    }, revealDuration)

    return () => clearTimeout(timer)
  }, [phase, revealDuration, storageKey])

  if (phase === 'done') return <>{children}</>

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
