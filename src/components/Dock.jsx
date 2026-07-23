'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Children, cloneElement, useMemo, useRef } from 'react';
import './Dock.css';

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label,
  isActive
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);
  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });
  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${isActive ? 'is-active' : ''} ${className}`}
      tabIndex={0}
      role="button"
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      {Children.map(children, child =>
        cloneElement(child, {
          isHovered,
          isActive
        })
      )}
    </motion.div>
  );
}

function DockIcon({ children, isActive }) {
  return (
    <div className={`dock-icon ${isActive ? 'is-active' : ''}`}>
      {children}
    </div>
  );
}

function DockLabel({ children, isActive }) {
  return (
    <div className={`dock-label ${isActive ? 'is-active' : ''}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
  activeHref = '#home'
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Compute items with onClick and isActive
  const computedItems = useMemo(() => {
    return items.map(item => ({
      ...item,
      isActive: activeHref === item.href,
      onClick: () => {
        const id = item.href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }));
  }, [items, activeHref]);

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {computedItems.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label}
            isActive={item.isActive}
          >
            <DockIcon isActive={item.isActive}>{item.icon}</DockIcon>
            <DockLabel isActive={item.isActive}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
