'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

const qaItems = [
  {
    q: '「自分には大した強み/能力がありません、、、」',
    a: '→ 強みや能力はただ\u201c自覚できていないだけ\u201dです。\n　脳科学に基づいたコーチングセッションで\n　あなただけの強みや能力を特定します。',
  },
  {
    q: '「AIで収益化するのは正直難しそう、、、」',
    a: '→ 初心者前提で設計しています。\n　基礎的なことから丁寧に説明していきます。',
  },
  {
    q: '「強みやAI知識が分かっても本当に稼げるのか不安です」',
    a: '→ 案件獲得から納品までの0→1を丁寧にサポートします。',
  },
  {
    q: '「続けられるか不安です」',
    a: '→ 一人のままでは途中で挫折します。\n　だからこそプロのコーチが伴走し現実を一緒に変えていきます。',
  },
]

export function Section3() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', background: '#fff', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '56vw', overflow: 'hidden' }}>
          <img src="/images/section3.png" alt="コーチング" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div style={{ padding: '32px 20px' }}>
          <h2 style={{ fontWeight: 800, fontSize: '22px', color: '#161c2d', textAlign: 'center', marginBottom: '24px' }}>
            よくこんな相談をいただきます
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {qaItems.map((item, i) => (
              <div key={i} style={{ background: '#161c2d', border: '2px solid #C9922A', borderRadius: '12px', padding: '16px 20px' }}>
                <p style={{ fontWeight: 700, fontSize: '14px', color: '#fff', lineHeight: '1.6', marginBottom: '6px' }}>{item.q}</p>
                <p style={{ fontWeight: 500, fontSize: '13px', color: '#C9922A', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{item.a}</p>
              </div>
            ))}
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
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ position: 'absolute', right: 0, top: 0, width: '595px', height: 'var(--section-height)', overflow: 'hidden' }}
      >
        <img src="/images/section3.png" alt="コーチング" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </motion.div>

      <div style={{ position: 'absolute', left: 0, top: 0, width: '1005px', height: 'var(--section-height)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 50px 60px 60px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontWeight: 800, fontSize: '34px', color: '#161c2d', textAlign: 'center', marginBottom: '32px', letterSpacing: '-0.5px' }}
        >
          よくこんな相談をいただきます
        </motion.h2>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {qaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{ background: '#161c2d', border: '2px solid #C9922A', borderRadius: '12px', padding: '20px 28px' }}
            >
              <p style={{ fontWeight: 700, fontSize: '18px', color: '#fff', lineHeight: '1.6', marginBottom: '6px' }}>{item.q}</p>
              <p style={{ fontWeight: 500, fontSize: '17px', color: '#C9922A', lineHeight: '1.8', whiteSpace: 'pre-line', paddingLeft: '8px' }}>{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
