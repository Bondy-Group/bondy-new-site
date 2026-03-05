import Link from 'next/link'
import type { Lang, Translations } from '@/lib/i18n/translations'

type FooterProps = {
  lang: Lang
  tr: Translations['footer']
}

export default function Footer({ lang, tr }: FooterProps) {
  const lk = (href: string) => `/${lang}${href}`

  return (
    <footer style={{ background: '#0E0E0E', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '3rem',
          padding: '4rem clamp(1.25rem,5vw,4rem) 0',
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <Link href={lk('/')} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 900, color: '#F4F2EE', letterSpacing: '-0.02em' }}>
              Bond<em style={{ fontStyle: 'italic', color: '#C06A2D' }}>y</em><span style={{ color: '#C06A2D' }}>.</span>
            </span>
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontWeight: 300, lineHeight: 1.7, maxWidth: '200px', marginBottom: '1.5rem' }}>
            {tr.tagline}
          </p>
          <a href="mailto:hola@wearebondy.com" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 300, marginBottom: '0.5rem' }}>
            hola@wearebondy.com
          </a>
          <a href="https://linkedin.com/company/bondygroup" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
            LinkedIn ↗
          </a>
        </div>

        {/* Company */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            {tr.colCompany}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { href: '/about',    label: tr.links.about },
              { href: '/method',   label: tr.links.method },
              { href: '/thinking', label: tr.links.thinking },
              { href: '/work',     label: tr.links.work },
            ].map(({ href, label }) => (
              <Link key={href} href={lk(href)} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            {tr.colServices}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { href: '/services#hunting',  label: tr.links.hunting },
              { href: '/services#pipeline', label: tr.links.pipeline },
              { href: '/services#rpo',      label: tr.links.embedded },
            ].map(({ href, label }) => (
              <Link key={href} href={lk(href)} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            {tr.colResources}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <Link href={lk('/resources')} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{tr.links.resources}</Link>
            <a href="https://tools.wearebondy.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{tr.links.tools}</a>
            <Link href={lk('/roles')} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{tr.links.roles}</Link>
            <Link href={lk('/referrals')} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{tr.links.referrals}</Link>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        margin: '3.5rem 0 0',
        padding: '1.25rem clamp(1.25rem,5vw,4rem)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.14)' }}>
          © {new Date().getFullYear()} {tr.copyright}
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.14)' }}>
          wearebondy.com
        </span>
      </div>

      <style>{`
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
