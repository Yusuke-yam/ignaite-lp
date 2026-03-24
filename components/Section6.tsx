'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const goldGradientText: React.CSSProperties = {
  background: 'linear-gradient(90deg, #E7A200, #FEE21C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export function Section6() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  // CTA size 1.5x: 460→690px wide, 70→105px tall, 20→30px font
  // CTA 2cm (76px) up → reduce logo marginBottom by 76px: 20 - 76 = -56px
  // ▲text 2cm (76px) below CTA → marginTop: 76px on the text element

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: '1059px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background at 60% opacity */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/section6-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6, zIndex: 0 }} />

      {/* Inner content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '50px 80px' }}>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontWeight: 800, fontSize: '48px', lineHeight: '64px', textAlign: 'center', marginBottom: '16px', letterSpacing: '-0.8px', ...goldGradientText }}
        >
          まずは無料相談であなたの可能性を見てみませんか？
        </motion.h2>

        {/* Logo — marginBottom reduced by 76px to move CTA up 2cm */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginTop: '-38px', marginBottom: '-56px' }}
        >
          <img src="/images/logo.png" alt="IgnAIte" style={{ width: '900px', height: 'auto', display: 'block' }} />
        </motion.div>

        {/* CTA 1.5x size, pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '-57px', marginBottom: '0' }}
        >
          <a href="#" className="btn-blue pulse-btn" style={{ width: '690px', height: '105px', fontSize: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>無料相談を予約する</span>
          </a>
        </motion.div>

        {/* ▲こちらをクリック — 2cm (76px) below CTA */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ marginTop: '38px', fontWeight: 700, fontSize: '44px', letterSpacing: '-0.3px', ...goldGradientText }}
        >
          ▲こちらをクリック
        </motion.p>

        {/* Two action buttons */}
        <div style={{ display: 'flex', gap: '28px', marginTop: '38px' }}>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            style={{ width: '440px', padding: '26px 28px', background: '#1a2755', border: '2px solid #C9922A', borderRadius: '12px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '30px', color: '#fff', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            まずは自分の可能性を聞いてみる
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.85 }}
            style={{ width: '440px', padding: '26px 28px', background: '#1a2755', border: '2px solid #C9922A', borderRadius: '12px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '30px', color: '#fff', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            まずは自分にあったAI副業/個人事業<br />の方向性をまずは聞いてみる
          </motion.a>
        </div>
      </div>
    </section>
  )
}
