import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const tr = t(lang)
  const s = tr.services
  const lk = (href: string) => `/${lang}${href}`

  return (
    <main className="bg-b-black min-h-screen">
      <Nav lang={lang} tr={tr.nav} />

      {/* Header */}
      <section className="pt-[60px] border-b border-white/10">
        <div className="px-8 md:px-16 py-20 md:py-28">
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C06A2D', marginBottom: '2rem' }}>
            {s.label}
          </div>
          <h1 className="font-display font-black leading-tight tracking-tight text-b-off mb-8" style={{ fontSize: 'clamp(48px,6vw,80px)' }}>
            {s.h1_1}<br />{s.h1_2} <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>{s.h1_em}</em>
          </h1>
          <p style={{ color: '#AEADA9', fontSize: '16px', lineHeight: 1.75, fontWeight: 300, maxWidth: '540px' }}>
            {s.intro}
          </p>
        </div>
      </section>

      {/* Services */}
      {s.items.map((item) => (
        <section key={item.id} id={item.id} className="border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 md:px-16 py-20">
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2.5rem' }}>
                {item.n}
              </div>
              <h2 className="font-display font-black leading-tight tracking-tight text-b-off mb-6" style={{ fontSize: 'clamp(36px,4vw,56px)' }}>
                {item.title.split('\n').map((line, i) => <span key={i}>{line}{i < item.title.split('\n').length - 1 && <br />}</span>)}
              </h2>
              <p style={{ color: '#AEADA9', fontSize: '15px', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                {item.lead}
              </p>
              <p style={{ color: '#AEADA9', fontSize: '15px', lineHeight: 1.75, fontWeight: 300 }}>
                {item.body}
              </p>
            </div>
            <div className="px-8 md:px-16 py-20 flex flex-col justify-between">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {item.details.map((d) => (
                  <div key={d.label} style={{ borderLeft: '2px solid rgba(192,106,45,0.3)', paddingLeft: '20px' }}>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C06A2D', marginBottom: '8px' }}>{d.label}</div>
                    <p style={{ color: '#AEADA9', fontSize: '14px', fontWeight: 300, lineHeight: 1.72 }}>{d.text}</p>
                  </div>
                ))}
              </div>
              <Link
                href={lk('/contact')}
                style={{
                  marginTop: '3rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                  ...(item.ctaStyle === 'primary'
                    ? { background: '#C06A2D', color: '#0E0E0E', fontWeight: 500 }
                    : { border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.55)' }),
                }}
              >
                {item.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="px-8 md:px-16 py-24 text-center">
        <h2 className="font-display font-black leading-tight tracking-tight text-b-off mb-6" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
          {s.bottomCta.h2.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)} <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>{s.bottomCta.h2_em}</em>
        </h2>
        <p style={{ color: '#AEADA9', fontSize: '15px', fontWeight: 300, marginBottom: '2.5rem', maxWidth: '420px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          {s.bottomCta.body}
        </p>
        <Link href={lk('/contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#C06A2D', color: '#0E0E0E', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', fontWeight: 500 }}>
          {s.bottomCta.cta}
        </Link>
      </section>

      <Footer lang={lang} tr={tr.footer} />
    </main>
  )
}
