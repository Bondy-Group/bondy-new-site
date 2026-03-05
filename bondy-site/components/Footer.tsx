import Link from 'next/link'
import type { Lang, Translations } from '@/lib/i18n/translations'

type FooterProps = {
  lang: Lang
  tr: Translations['footer']
}

export default function Footer({ lang, tr }: FooterProps) {
  const lk = (href: string) => `/${lang}${href}`

  return (
    <footer style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-5">
            <Link href={lk('/')} style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '20px',
                fontWeight: 900,
                color: '#F4F2EE',
                letterSpacing: '-0.02em',
              }}>
                Bond<em style={{ fontStyle: 'italic', color: '#C06A2D' }}>y</em><span style={{ color: '#C06A2D' }}>.</span>
              </span>
            </Link>
          </div>
          <p style={{ color: '#888885', fontSize: '14px', lineHeight: 1.7, fontWeight: 300, maxWidth: '180px' }}>
            {tr.tagline}
          </p>
        </div>

        {/* Company */}
        <div>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888885', marginBottom: '1.25rem' }}>
            {tr.colCompany}
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { href: '/about',    label: tr.links.about    },
              { href: '/method',   label: tr.links.method   },
              { href: '/thinking', label: tr.links.thinking },
              { href: '/work',     label: tr.links.work     },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={lk(href)} style={{ fontSize: '14px', color: '#888885', fontWeight: 300, textDecoration: 'none' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888885', marginBottom: '1.25rem' }}>
            {tr.colServices}
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { href: '/services#hunting',  label: tr.links.hunting  },
              { href: '/services#pipeline', label: tr.links.pipeline },
              { href: '/services#rpo',      label: tr.links.embedded },
              { href: '/referrals',         label: tr.links.referrals },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={lk(href)} style={{ fontSize: '14px', color: '#888885', fontWeight: 300, textDecoration: 'none' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888885', marginBottom: '1.25rem' }}>
            Get in touch
          </div>
          <a
            href="mailto:hola@wearebondy.com"
            style={{ fontSize: '14px', color: '#F4F2EE', fontWeight: 300, textDecoration: 'none', display: 'block', marginBottom: '0.75rem' }}
          >
            hola@wearebondy.com
          </a>
          <a
            href="https://www.linkedin.com/company/bondygroup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888885', textDecoration: 'none' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.25rem clamp(1.25rem,5vw,4rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} {tr.copyright}
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
          Buenos Aires · Global
        </span>
      </div>
    </footer>
  )
}
