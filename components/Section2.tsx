'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const painPointsTop = [
  '今の仕事は安定しているはずなのに、なぜか満足できずモヤモヤする',
  '副業/個人事業に憧れ・興味はあるが自分には無理だと思っている',
  '自分にはスキルも経験もないから何もできないと思っている',
]
const painPointsBottom = [
  'AIの技術がすごいのは分かるが、どう活かせばいいか分からない',
  'いろんな情報は見ているが、現実は何も変わっていない',
  '既に事業をおこなっているがもっと拡大していきたい',
]

const cardStyle: React.CSSProperties = {
  background: '#1a2755',
  border: '2px solid #C9922A',
  borderRadius: '14px',
  padding: '28px 18px 24px',
  color: '#fff',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '1.7',
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
}

export function Section2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section
      ref={ref}
      style={{ width: '1600px', height: '1059px', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Left photo panel */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ position: 'absolute', left: 0, top: 0, width: '595px', height: '1059px', background: '#fde7c3', overflow: 'hidden' }}
      >
        <img src="/images/section2.png" alt="Section 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </motion.div>

      {/* Right content */}
      <div style={{ position: 'absolute', left: '640px', top: '60px', width: '920px' }}>

        {/* Quote 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontWeight: 700, fontSize: '28px', color: '#161c2d', marginBottom: '12px', letterSpacing: '-0.3px', lineHeight: '1.4', whiteSpace: 'nowrap' }}
        >
          「結局、自分に個人事業や副業は無理だと思ってませんか？」
        </motion.p>

        {/* Quote 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontWeight: 700, fontSize: '28px', color: '#161c2d', marginBottom: '28px', letterSpacing: '-0.3px', lineHeight: '1.4', whiteSpace: 'nowrap' }}
        >
          「変わりたいのに、情報収集だけして時間だけ過ぎていませんか？」
        </motion.p>

        {/* Top 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', marginBottom: '0' }}>
          {painPointsTop.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={cardStyle}
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 cards — 1cm (38px) extra below top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', marginTop: '18px', marginBottom: '32px' }}>
          {painPointsBottom.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              style={cardStyle}
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ fontWeight: 800, fontSize: '40px', color: '#161c2d', textAlign: 'center', letterSpacing: '-0.6px' }}
        >
          そのままでは、一生変わりません
        </motion.p>
      </div>
    </section>
  )
}
