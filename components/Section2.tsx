'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

const cards = [
  {
    title: '自分で稼ぐのは、\n「一部のすごい人の話」\nだと思っている',
    body: '一部の才能ある人だけができることであり、\n自分とは無縁だと思い込んでいる。',
  },
  {
    title: '自分にそもそも能力がないと思っている',
    body: '夢はある。憧れもある。\nでもたいした能力の無い自分には無理だと思っている。',
  },
  {
    title: '情報収集だけで終わる',
    body: 'SNSやYouTubeを見て情報には詳しくなるが\n現実は何も変わっていない。',
  },
]

const goldGradientText: React.CSSProperties = {
  background: 'linear-gradient(90deg, #E7A200, #FEE21C)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}

const cardBase: React.CSSProperties = {
  background: 'linear-gradient(135deg, #2a3d7a 0%, #1a2755 60%, #0f1a3d 100%)',
  border: '2px solid #C9922A',
  borderRadius: '14px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  textAlign: 'left',
}

export function Section2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', background: '#fff', overflow: 'hidden', position: 'relative' }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/images/section2.png" alt="Section 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.15 }} />
        </div>

        {/* Content */}
        <div style={{ padding: '32px 20px', position: 'relative', zIndex: 1 }}>
          <p style={{ fontWeight: 700, fontSize: '17px', color: '#161c2d', marginBottom: '10px', lineHeight: '1.5', textAlign: 'center' }}>
            「いつか副業や個人事業でもっと稼ぎたい」<br />
            「いつか環境に縛られずに自由に働きたい」
          </p>
          <p style={{ fontWeight: 700, fontSize: '17px', color: '#161c2d', marginBottom: '24px', lineHeight: '1.5', textAlign: 'center' }}>
            <span style={{ display: 'block', marginBottom: '10px' }}>でも</span>
            「自分には特別な経験も能力もない」<br />
            そんな自分の思い込みで夢を諦めてませんか？
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {cards.map((card, i) => (
              <div key={i} style={{
                ...cardBase,
                padding: '14px 14px',
                width: 'fit-content',
                maxWidth: '82%',
                alignSelf: i === 1 ? 'flex-end' : 'flex-start',
              }}>
                <p style={{ ...goldGradientText, fontWeight: 700, fontSize: '15px', lineHeight: '1.6', marginBottom: '6px', whiteSpace: i === 0 ? 'nowrap' : 'pre-line' }}>{i === 0 ? card.title.replace(/\n/g, '') : card.title}</p>
                <p style={{ color: '#fff', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{card.body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontWeight: 700, fontSize: '17px', color: '#161c2d', textAlign: 'center', lineHeight: '1.5' }}>
            こんな人が多すぎます。本当にもったいないです。<br />
            <br />
            なぜなら今の世の中、AIを使いこなせば<br />
            副業や個人事業で誰でも絶対に収益化できるからです。
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: 'var(--section-height)', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ position: 'absolute', left: 0, top: 0, width: '595px', height: 'var(--section-height)', background: '#fde7c3', overflow: 'hidden' }}
      >
        <img src="/images/section2.png" alt="Section 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </motion.div>

      <div style={{ position: 'absolute', left: '640px', top: '41px', width: '920px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontWeight: 700, fontSize: '27px', color: '#161c2d', marginBottom: '12px', letterSpacing: '-0.3px', lineHeight: '1.4', textAlign: 'center' }}
        >
          「いつか副業や個人事業でもっと稼ぎたい」<br />
          「いつか環境に縛られずに自由に働きたい」
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontWeight: 700, fontSize: '27px', color: '#161c2d', marginBottom: '28px', letterSpacing: '-0.3px', lineHeight: '1.4', textAlign: 'center' }}
        >
          <span style={{ display: 'block', marginBottom: '12px' }}>でも</span>
          「自分には特別な経験も能力もない」<br />
          そんな自分の思い込みで夢を諦めてませんか？
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', marginBottom: '32px', marginTop: '57px' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{ ...cardBase, padding: '28px 18px 24px 18px', minHeight: '200px' }}
            >
              <p style={{ ...goldGradientText, fontWeight: 700, fontSize: '20px', lineHeight: '1.7', marginBottom: '12px', whiteSpace: 'pre-line', minHeight: '102px', textAlign: i === 2 ? 'center' : 'left', width: '100%' }}>{card.title}</p>
              <p style={{ color: '#fff', fontSize: '20px', lineHeight: '1.7', whiteSpace: 'pre-line', fontWeight: 700, textAlign: 'left', width: '100%' }}>{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ fontWeight: 700, fontSize: '27px', color: '#161c2d', textAlign: 'center', letterSpacing: '-0.3px', lineHeight: '1.4' }}
        >
          こんな人が多すぎます。本当にもったいないです。<br />
          <br />
          なぜなら今の世の中、AIを使いこなせば<br />
          副業や個人事業で誰でも絶対に収益化できるからです。
        </motion.p>
      </div>
    </section>
  )
}
