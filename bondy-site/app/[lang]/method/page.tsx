import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'

export default function MethodPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const tr = t(lang)
  const m = tr.method
  const lk = (href: string) => `/${lang}${href}`

  return (
    <main className="min-h-screen" style={{ background: '#F0EBE3' }}>
      <Nav lang={lang} tr={tr.nav} />

      {/* Header */}
      <section className="pt-[60px]" style={{ borderBottom: '1px solid #DDD8D0' }}>
        <div className="px-8 md:px-16 py-20 md:py-28" style={{ maxWidth: '900px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C06A2D', marginBottom: '2rem' }}>
            {m.label}
          </div>
          <h1 className="font-display font-black leading-tight tracking-tight mb-8" style={{ fontSize: 'clamp(48px,6vw,80px)', color: '#1A1A1A' }}>
            {m.h1_1}<br />{m.h1_2} <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>{m.h1_em}</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.75, fontWeight: 300, maxWidth: '540px', color: '#6B6966' }}>
            {m.intro}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-8 md:px-16 py-20">
        {m.steps.map((step) => (
          <div key={step.n} className="grid grid-cols-1 md:grid-cols-[120px_1fr_200px] gap-8 md:gap-16 py-14" style={{ borderTop: '1px solid #DDD8D0' }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', color: '#C06A2D' }}>
              {step.n}
            </div>
            <div>
              <h2 className="font-display font-bold tracking-tight mb-3" style={{ fontSize: 'clamp(28px,3vw,38px)', color: '#1A1A1A' }}>
                {step.title}
              </h2>
              <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '1.25rem', color: '#1A1A1A' }}>
                {step.subtitle}
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, fontWeight: 300, maxWidth: '560px', color: '#6B6966' }}>
                {step.body}
              </p>
            </div>
            <div className="flex md:justify-end md:items-start">
              <div style={{ border: '1px solid #DDD8D0', padding: '8px 16px', display: 'inline-block' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8C4BE', marginBottom: '4px' }}>{m.timelineLabel}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#6B6966' }}>{step.time}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="px-8 md:px-16 py-20 md:py-28" style={{ borderTop: '1px solid #DDD8D0', background: '#FFFFFF' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-black leading-tight tracking-tight" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#1A1A1A' }}>
              {m.cta.h2_1}<br />{m.cta.h2_2} <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>{m.cta.h2_em}</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem', color: '#6B6966' }}>
              {m.cta.body}
            </p>
            <Link href={lk('/contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#C06A2D', color: '#1A1A1A', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', fontWeight: 500 }}>
              {m.cta.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} tr={tr.footer} />
    </main>
  )
}
