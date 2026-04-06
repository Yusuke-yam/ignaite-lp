'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

const goldGradient: React.CSSProperties = {
  background: 'linear-gradient(90deg, #E7A200, #FEE21C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export function Section4() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', background: '#161c2d', padding: '48px 20px' }}>
        <p style={{ fontWeight: 800, fontSize: '20px', lineHeight: '1.6', textAlign: 'center', marginBottom: '32px', ...goldGradient }}>
          認知科学コーチング × AIコンサルで確実に人生を前進させる
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'コーチングだけ', body: 'ビジョンやゴールを言語化できても、具体的スキルが無かったり、なかなか行動に移せず現実は変わらないまま' },
            { label: 'AIインプットだけ', body: 'AIツールの知識や情報を大量に仕入れても、自分の強みや方向性が定まっていなければ何も動けない。情報過多で動けなくなるだけ。' },
          ].map((card, i) => (
            <div key={i} style={{ border: '2px solid #C9922A', borderRadius: '16px', padding: '28px 24px' }}>
              <p style={{ fontWeight: 800, fontSize: '18px', color: '#C9922A', marginBottom: '12px' }}>{card.label}</p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>{card.body}</p>
            </div>
          ))}
        </div>

        <p style={{ fontWeight: 700, fontSize: '20px', color: '#fff', textAlign: 'center', lineHeight: '1.6' }}>
          コーチングだけ、AI学習だけ、どちらも大きくは変えられない<br />
          <span style={{ ...goldGradient, fontSize: '22px' }}>だからIgnAIteは両方やる</span>
        </p>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: 'var(--section-height)', background: '#161c2d', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 40px' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ fontWeight: 800, fontSize: '42px', lineHeight: '60px', letterSpacing: '-1px', textAlign: 'center', whiteSpace: 'nowrap', marginBottom: '60px', ...goldGradient }}
      >
        認知科学コーチング × AIコンサルで確実に人生を前進させる
      </motion.h2>

      <div style={{ display: 'flex', gap: '48px', marginBottom: '48px' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ width: '520px', border: '2px solid #C9922A', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/coach.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18, borderRadius: '18px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: '26px', color: '#C9922A', marginBottom: '24px' }}>コーチングだけ</p>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
              ビジョンやゴールを言語化できても、具体的スキルが無かったり、なかなか行動に移せず現実は変わらないまま
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ width: '520px', border: '2px solid #C9922A', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/ai-icon.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18, borderRadius: '18px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: '26px', color: '#C9922A', marginBottom: '24px' }}>AIインプットだけ</p>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
              AIツールの知識や情報を大量に仕入れても、自分の強みや方向性が定まっていなければ何も動けない。情報過多で動けなくなるだけ。
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ fontWeight: 700, fontSize: '42px', color: '#fff', textAlign: 'center', letterSpacing: '-0.8px', lineHeight: '1.4', marginBottom: '36px', marginTop: '38px' }}
      >
        コーチングだけ、AI学習だけ、どちらも大きくは変えられない<br />
        <span style={{ background: 'linear-gradient(90deg, #E7A200, #FEE21C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '44px' }}>
          だからIgnAIteは両方やる
        </span>
      </motion.p>
    </section>
  )
}
