'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const svgPaths = [
  { d: 'M280 0 C 200 80, 100 200, 0 420', sw: '3.5', op: '0.95' },
  { d: 'M255 0 C 175 80, 75 200, -25 420', sw: '3', op: '0.85' },
  { d: 'M230 0 C 150 80, 50 200, -50 420', sw: '2.5', op: '0.75' },
  { d: 'M205 0 C 125 80, 25 200, -75 420', sw: '2', op: '0.65' },
  { d: 'M180 0 C 100 80, 0 200, -100 420', sw: '2', op: '0.55' },
  { d: 'M155 0 C 75 80, -25 200, -125 420', sw: '1.5', op: '0.45' },
  { d: 'M268 0 C 188 80, 88 200, -12 420', sw: '1.2', op: '0.5', white: true },
  { d: 'M243 0 C 163 80, 63 200, -37 420', sw: '1', op: '0.35', white: true },
]

export function Section5() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section
      ref={ref}
      style={{ width: '1600px', minHeight: '1059px', background: '#fff', padding: '50px 80px 80px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}
    >
      {/* SVG top-left — same as Section 1 */}
      <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        {svgPaths.map((p, i) => (
          <path key={i} d={p.d} stroke={p.white ? '#ffffff' : '#022769'} strokeWidth={p.sw} fill="none" opacity={p.op} />
        ))}
      </svg>

      {/* SVG bottom-right — rotated 180deg */}
      <svg style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2, pointerEvents: 'none', transform: 'rotate(180deg)' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        {svgPaths.map((p, i) => (
          <path key={i} d={p.d} stroke={p.white ? '#ffffff' : '#022769'} strokeWidth={p.sw} fill="none" opacity={p.op} />
        ))}
      </svg>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px', marginBottom: '44px', position: 'relative' }}>

        {/* Logo 2x — centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '-19px' }}
        >
          <img src="/images/logo.png" alt="IgnAIte" style={{ height: '400px', objectFit: 'contain', display: 'block' }} />
        </motion.div>

        {/* CTA right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ position: 'absolute', right: 0 }}
        >
          <a href="#" className="btn-blue" style={{ width: '247px', height: '50px', fontSize: '17px' }}>
            <span>無料相談を予約する</span>
          </a>
        </motion.div>
      </div>

      {/* Step box — 2cm (76px) lower */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ border: '1.5px solid #d0d5dd', borderRadius: '20px', padding: '44px 60px 50px', marginBottom: '40px', marginTop: '152px' }}
      >
        <img src="/images/step-diagram.png" alt="Step diagram" style={{ width: '100%', display: 'block' }} />
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ fontWeight: 700, fontSize: '30px', color: '#022769', textAlign: 'center' }}
      >
        あなたにマッチしたAIビジネスでの初収益までサポートします
      </motion.p>
    </section>
  )
}
