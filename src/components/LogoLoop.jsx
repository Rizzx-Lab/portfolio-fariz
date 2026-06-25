import './LogoLoop.css'

/**
 * LogoLoop - Infinite horizontal marquee of logos
 * Based on react-bits/LogoLoop
 */
export default function LogoLoop({
  logos = [],
  speed = 50,
  direction = 'left',
  logoHeight = 40,
  gap = 48,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#0a0f1a',
  ariaLabel = 'Logo carousel',
  renderItem,
}) {
  const duration = logos.length * (10 / speed) * 1000

  const style = {
    '--logo-height': `${logoHeight}px`,
    '--logo-gap': `${gap}px`,
    '--logo-speed': `${duration}ms`,
    '--logo-direction': direction === 'left' ? 'normal' : 'reverse',
    '--fade-color': fadeOutColor,
    '--hover-speed': hoverSpeed ? `${duration / hoverSpeed}ms` : '0ms',
  }

  // Duplicate logos for seamless loop
  const doubledLogos = [...logos, ...logos]

  return (
    <div className="logoloop-wrapper" aria-label={ariaLabel}>
      {fadeOut && (
        <>
          <div className="logoloop-fade logoloop-fade-left" />
          <div className="logoloop-fade logoloop-fade-right" />
        </>
      )}

      <div
        className={`logoloop-track ${scaleOnHover ? 'logoloop-scale' : ''}`}
        style={style}
      >
        <div className="logoloop-inner">
          {doubledLogos.map((logo, index) => (
            <div key={index} className="logoloop-item">
              {renderItem ? (
                renderItem(logo, index)
              ) : (
                logo.node
              )}
              {logo.title && (
                <span className="logoloop-label">{logo.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
