'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

const jissekiImages = [
  { src: '/images/jisseki1.png', alt: '実績1' },
  { src: '/images/jisseki2.jpg', alt: '実績2' },
  { src: '/images/jisseki3.png', alt: '実績3' },
  { src: '/images/jisseki4.png', alt: '実績4' },
]

function Carousel({ height }: { height: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + jissekiImages.length) % jissekiImages.length)
  const next = () => setCurrent((c) => (c + 1) % jissekiImages.length)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Image */}
      <div style={{ borderRadius: '14px', overflow: 'hidden', background: '#fff', width: '100%', minHeight: height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={jissekiImages[current].src}
            alt={jissekiImages[current].alt}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </AnimatePresence>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
      >‹</button>
      <button
        onClick={next}
        style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
      >›</button>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
        {jissekiImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? '#E7A200' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }}
          />
        ))}
      </div>

    </div>
  )
}

export function Section6() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', position: 'relative', overflow: 'hidden', padding: '48px 20px 56px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/section6-bg2.png)', backgroundSize: 'cover', backgroundPosition: '95% center', opacity: 0.6, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%', padding: '40px 20px' }}>
          <p style={{ fontWeight: 700, fontSize: '14px', lineHeight: '1.6', textAlign: 'center', marginBottom: '-22px', background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            多くの方が実際にIgnAIteで成果を出されています。<br />
            無料相談であなたも自分の可能性を見てみませんか？
          </p>

          <h2 style={{ fontWeight: 800, fontSize: '14px', lineHeight: '1.4', textAlign: 'center', marginTop: '95px', marginBottom: '57px', color: '#022769', whiteSpace: 'nowrap' }}>
            ▼クライアントの方からいただいたお声の一例
          </h2>

          {/* カルーセル */}
          <div style={{ width: '90%', marginBottom: '36px', marginTop: '-57px' }}>
            <Carousel height="240px" />
          </div>

          <div style={{ marginTop: '-19px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <a href="https://lin.ee/OatLRGd" className="btn-blue pulse-btn" target="_blank" rel="noopener noreferrer" style={{ width: '80%', maxWidth: '280px', height: '52px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>
              <span>無料相談を予約する</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: 'var(--section-height)', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/section6-bg2.png)', backgroundSize: 'cover', backgroundPosition: '95% center', opacity: 0.6, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '40px 80px' }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          style={{ fontWeight: 700, fontSize: '33px', lineHeight: '1.6', textAlign: 'center', marginBottom: '-22px', letterSpacing: '-0.3px', background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
        >
          多くの方が実際にIgnAIteで成果を出されています。<br />
          無料相談であなたも自分の可能性を見てみませんか？
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontWeight: 800, fontSize: '28px', lineHeight: '1.4', textAlign: 'center', marginTop: '95px', marginBottom: '57px', letterSpacing: '-0.8px', color: '#022769' }}
        >
          ▼クライアントの方からいただいたお声の一例
        </motion.h2>

        {/* カルーセル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ width: '60%', maxWidth: '576px', marginBottom: '36px', marginTop: '-57px' }}
        >
          <Carousel height="360px" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '-19px' }}
        >
          <a href="https://lin.ee/OatLRGd" className="btn-blue pulse-btn" target="_blank" rel="noopener noreferrer" style={{ width: '552px', height: '84px', fontSize: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>無料相談を予約する</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
