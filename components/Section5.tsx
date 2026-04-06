'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMobile } from '@/hooks/useMobile'

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

const steps = [
  { num: 1, title: 'あなたの強み・能力を特定', desc: '認知科学の理論に基づき科学的に特定' },
  { num: 2, title: 'あなたに合う「AI×◯◯」を決定', desc: 'あなたにマッチするAIの活用法を具体化' },
  { num: 3, title: 'ゴール設定', desc: '目指すべきゴールを設定し目標を明確化' },
  { num: 4, title: '必要なAIスキルを習得', desc: '必要最低限に絞りAI知識を丁寧に教育' },
  { num: 5, title: '案件獲得〜初回納品まで伴走', desc: '案件サイトなども活用し、一緒に収益獲得を目指す' },
  { num: 6, title: 'アクションプラン設計', desc: 'サービス終了後も自走できるように' },
]

const goldGradientText: React.CSSProperties = {
  background: 'linear-gradient(90deg, #E7A200, #FEE21C)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}

const goldGradientDark: React.CSSProperties = {
  background: 'linear-gradient(90deg, #A85C00, #C48000)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}

const stepCardBg: React.CSSProperties = {
  background: 'linear-gradient(135deg, #0a1e4a 0%, #0d2460 60%, #0a1a40 100%)',
  border: '1.5px solid #1a3a7a',
  borderRadius: '14px',
  padding: '18px 24px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
}

export function Section5() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const isMobile = useMobile()

  if (isMobile) {
    return (
      <section ref={ref} style={{ width: '100%', background: '#fff', padding: '40px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/section5-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }} />
        {/* Steps */}
        <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontWeight: 800, fontSize: '18px', color: '#022769', textAlign: 'center', marginBottom: '20px', marginTop: '-38px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <img src="/images/logo.png" alt="IgnAIte" style={{ height: '130px', width: 'auto', display: 'inline-block' }} />
          <span style={{ marginLeft: '-38px' }}>6ステップ</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', marginTop: '-57px', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', alignItems: 'stretch' }}>
          {steps.map((step) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'linear-gradient(135deg, #0a1e4a 0%, #0d2460 60%, #0a1a40 100%)', border: '1.5px solid #1a3a7a', borderRadius: '12px', padding: '14px 16px' }}>
              <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(90deg, #E7A200, #FEE21C)', color: '#022769', fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</span>
              <div>
                <p style={{ ...goldGradientText, fontWeight: 800, fontSize: '16px', lineHeight: '1.4', marginBottom: '2px' }}>{step.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5', fontWeight: 700, whiteSpace: step.num === 5 ? 'nowrap' : 'normal' }}>{step.num === 5 ? '案件サイトなども活用し一緒に収益獲得を目指す' : step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div style={{ fontSize: '14px', color: '#022769', lineHeight: '1.6', fontWeight: 800, textAlign: 'center', marginTop: '38px' }}>
          <p style={{ color: '#E7A200', fontWeight: 800, marginBottom: '16px' }}>IgnAIteはあなたの強みを見つけ、<br />AIを使って必ず稼げる状態までサポートします。</p>
          <p style={{ marginBottom: '16px' }}>あなたは強み,能力がないのではありません。<br />自分の強み,能力に気づいていないだけです。</p>
          <p style={{ marginBottom: '16px' }}>IgnAIteは個人に合ったAIの活かし方を明確にし、<br />必要なAI知識の学習から案件納品まで<br />一気通貫で伴走する唯一無二のサービスです。</p>
          <p>これまで一部のすごい人だけのものだった挑戦が、<br />あなたの現実になります。</p>
        </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      style={{ width: '1600px', minHeight: 'var(--section-height)', background: '#fff', padding: '50px 80px 60px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '60px' }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/section5-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }} />
      <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        {svgPaths.map((p, i) => <path key={i} d={p.d} stroke={p.white ? '#ffffff' : '#022769'} strokeWidth={p.sw} fill="none" opacity={p.op} />)}
      </svg>
      <svg style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2, pointerEvents: 'none', transform: 'rotate(180deg)' }} width="280" height="420" viewBox="0 0 280 420" fill="none">
        {svgPaths.map((p, i) => <path key={i} d={p.d} stroke={p.white ? '#ffffff' : '#022769'} strokeWidth={p.sw} fill="none" opacity={p.op} />)}
      </svg>

      {/* Left: Step diagram */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ flex: '0 0 680px', position: 'relative', zIndex: 3 }}
      >
        <h3 style={{ fontWeight: 800, fontSize: '26px', color: '#022769', marginBottom: '28px', marginTop: '-38px', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
          <img src="/images/logo.png" alt="IgnAIte" style={{ height: '180px', width: 'auto', display: 'inline-block' }} />
          <span style={{ marginLeft: '-30px' }}>6ステップ</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '-76px', width: 'fit-content', alignItems: 'stretch', marginLeft: '151px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={stepCardBg}
            >
              <span style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(90deg, #E7A200, #FEE21C)', color: '#022769', fontWeight: 800, fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</span>
              <div>
                <p style={{ ...goldGradientText, fontWeight: 800, fontSize: '20px', lineHeight: '1.4', marginBottom: '4px' }}>{step.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ flex: 1, position: 'relative', zIndex: 3, fontSize: '27px', color: '#022769', lineHeight: '1.4', fontWeight: 700, letterSpacing: '-0.3px', textAlign: 'center' }}
      >
        <p style={{ color: '#E7A200', fontWeight: 800, marginBottom: '28px' }}>
          IgnAIteはあなたの強みを見つけ、<br />AIを使って必ず稼げる状態までサポートします。
        </p>
        <p style={{ marginBottom: '28px' }}>
          あなたは強みや能力がないのではありません。<br />
          ただ「自分の強み、能力」に気づいていないだけです。
        </p>
        <p style={{ marginBottom: '28px', whiteSpace: 'nowrap' }}>
          IgnAIteでは「あなたに合ったAIの活かし方」を明確にし、<br />
          必要なAI知識の学習から案件納品まで<br />
          一気通貫で伴走する唯一無二のサービスです。
        </p>
        <p>
          これまで一部のすごい人だけのものだった挑戦が、<br />あなたの現実になります。
        </p>
      </motion.div>
    </section>
  )
}
