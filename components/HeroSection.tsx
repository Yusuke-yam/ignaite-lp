'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

export function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', background: '#fff', overflow: 'hidden' }}>
        {/* Video */}
        <div style={{ width: '100%', height: '56vw', overflow: 'hidden', position: 'relative' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
            <source src="/mobile-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text content */}
        <div style={{ padding: '32px 24px', background: '#fff', textAlign: 'center', marginTop: '-75px' }}>
          <motion.img
            src="/images/logo.png" alt="IgnAIte"
            style={{ width: '100%', maxWidth: '360px', height: 'auto', display: 'block', margin: '0 auto 24px' }}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <div style={{ marginTop: '-113px' }}>
            <motion.p
              style={{ fontWeight: 700, fontSize: '18px', lineHeight: '1.6', color: '#022769', marginBottom: '24px' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>
                <span style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>認知科学コーチング</span>
                ×
                <span style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>AIコンサル</span>
                で、
              </span>
              <br />
              あなたのもつ可能性を、<mark style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', color: '#022769', padding: '0 3px', borderRadius: '2px' }}>収入</mark>に変える。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="https://lin.ee/OatLRGd" className="btn-blue" target="_blank" rel="noopener noreferrer" style={{ width: '80%', maxWidth: '280px', height: '52px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <span>無料相談を予約する</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: 'var(--section-height)', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* White background panel (right side) */}
      <div style={{
        position: 'absolute', right: 0, top: 0, width: '900px', height: '100%',
        background: '#fff', clipPath: 'polygon(160px 0, 100% 0, 100% 100%, 0 100%)', zIndex: 0,
      }} />

      {/* SVG top-left */}
      <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: 3, pointerEvents: 'none' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        <path d="M280 0 C 200 80, 100 200, 0 420" stroke="#022769" strokeWidth="3.5" fill="none" opacity="0.95"/>
        <path d="M255 0 C 175 80, 75 200, -25 420" stroke="#022769" strokeWidth="3" fill="none" opacity="0.85"/>
        <path d="M230 0 C 150 80, 50 200, -50 420" stroke="#022769" strokeWidth="2.5" fill="none" opacity="0.75"/>
        <path d="M205 0 C 125 80, 25 200, -75 420" stroke="#022769" strokeWidth="2" fill="none" opacity="0.65"/>
        <path d="M180 0 C 100 80, 0 200, -100 420" stroke="#022769" strokeWidth="2" fill="none" opacity="0.55"/>
        <path d="M155 0 C 75 80, -25 200, -125 420" stroke="#022769" strokeWidth="1.5" fill="none" opacity="0.45"/>
        <path d="M268 0 C 188 80, 88 200, -12 420" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <path d="M243 0 C 163 80, 63 200, -37 420" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.35"/>
      </svg>

      {/* SVG bottom-right */}
      <svg style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 3, pointerEvents: 'none', transform: 'rotate(180deg)' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        <path d="M280 0 C 200 80, 100 200, 0 420" stroke="#022769" strokeWidth="3.5" fill="none" opacity="0.95"/>
        <path d="M255 0 C 175 80, 75 200, -25 420" stroke="#022769" strokeWidth="3" fill="none" opacity="0.85"/>
        <path d="M230 0 C 150 80, 50 200, -50 420" stroke="#022769" strokeWidth="2.5" fill="none" opacity="0.75"/>
        <path d="M205 0 C 125 80, 25 200, -75 420" stroke="#022769" strokeWidth="2" fill="none" opacity="0.65"/>
        <path d="M180 0 C 100 80, 0 200, -100 420" stroke="#022769" strokeWidth="2" fill="none" opacity="0.55"/>
        <path d="M155 0 C 75 80, -25 200, -125 420" stroke="#022769" strokeWidth="1.5" fill="none" opacity="0.45"/>
        <path d="M268 0 C 188 80, 88 200, -12 420" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <path d="M243 0 C 163 80, 63 200, -37 420" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.35"/>
      </svg>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ position: 'absolute', top: '16px', left: '25px', width: '1561px', height: '50px', display: 'flex', alignItems: 'center', zIndex: 20 }}
      />

      {/* Video panel */}
      <div style={{
        position: 'absolute', left: 0, top: 0, width: '900px', height: '100%',
        zIndex: 1, clipPath: 'polygon(0 0, 880px 0, 720px 100%, 0 100%)', overflow: 'hidden',
      }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="/0330-6.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo */}
      <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <img src="/images/logo.png" alt="IgnAIte" style={{ width: '640px', height: 'auto', display: 'block', objectFit: 'contain' }} />
        </motion.div>
      </div>

      {/* Main content */}
      <div style={{ position: 'absolute', top: '258px', left: '901px', width: '620px', textAlign: 'center', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'block', fontWeight: 700, fontSize: '39px', lineHeight: '64px', color: '#022769', letterSpacing: '-0.5px', position: 'relative', top: '-19px' }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>
            <span style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>認知科学コーチング</span>
            ×
            <span style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>AIコンサル</span>
            で、
          </span>
          <br />
          <span style={{ whiteSpace: 'nowrap' }}>あなたのもつ可能性を、<mark style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', color: '#022769', padding: '0 4px', borderRadius: '2px' }}>収入</mark>に変える。</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ marginTop: '116px', display: 'flex', justifyContent: 'center' }}
        >
          <a href="https://lin.ee/OatLRGd" className="btn-blue" target="_blank" rel="noopener noreferrer" style={{ width: '354px', height: '72px', fontSize: '25px' }}>
            <span>無料相談を予約する</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
