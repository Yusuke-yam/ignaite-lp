'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: '1059px', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, zIndex: 0 }} />

      {/* SVG top-left */}
      <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
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
      <svg style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2, pointerEvents: 'none', transform: 'rotate(180deg)' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
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
      >
        <a href="#" className="btn-blue" style={{ position: 'absolute', right: 0, width: '247px', height: '50px', fontSize: '17px' }}>
          <span>無料相談を予約する</span>
        </a>
      </motion.header>

      {/* Logo */}
      <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src="/images/logo.png" alt="IgnAIte" style={{ width: '900px', height: 'auto', display: 'block', objectFit: 'contain' }} />
        </motion.div>
      </div>

      {/* Main content */}
      <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-50%)', width: '1280px', textAlign: 'center', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'block', fontWeight: 600, fontSize: '20px', lineHeight: '32px', color: '#022769', letterSpacing: '-0.2px', marginBottom: '28px', position: 'relative', top: '-19px' }}
        >
          認知科学コーチングとAIコンサルで全ての人の可能性を広げる
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginBottom: '20px' }}
        >
          <p style={{ fontWeight: 700, fontSize: '26px', lineHeight: '44px', color: '#161c2d', letterSpacing: '-0.5px' }}>「特出した能力がないから自分は何もできない」</p>
          <p style={{ fontWeight: 700, fontSize: '26px', lineHeight: '44px', color: '#161c2d', letterSpacing: '-0.5px' }}>「満足してないけど何がしたいか分からない」</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontWeight: 800, fontSize: '30px', lineHeight: '46px', color: '#022769', letterSpacing: '-0.8px', marginBottom: '24px' }}
        >
          そう思っている人ほど、AIで人生を変えられる
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ marginBottom: '44px' }}
        >
          <p style={{ fontWeight: 600, fontSize: '22px', lineHeight: '40px', color: '#161c2d', letterSpacing: '-0.3px' }}>あなただけの「強み」を脳科学に基づいたコーチング理論で特定し、</p>
          <p style={{ fontWeight: 600, fontSize: '22px', lineHeight: '40px', color: '#161c2d', letterSpacing: '-0.3px' }}>あなたの強みに基づいたAIビジネスを設計。</p>
          <p style={{ fontWeight: 600, fontSize: '22px', lineHeight: '40px', color: '#161c2d', letterSpacing: '-0.3px' }}>そして収益化まで徹底的にサポート。</p>
          <p style={{ fontWeight: 600, fontSize: '22px', lineHeight: '40px', color: '#161c2d', letterSpacing: '-0.3px' }}>理想だけで終わらない人生を動かす0→1支援サービス。</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <a href="#" className="btn-blue" style={{ width: '460px', height: '70px', fontSize: '20px' }}>
            <span>無料相談を予約する</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
