import Link from 'next/link'

const colCompany = [
  { href: '/about',    label: 'About' },
  { href: '/method',   label: 'Method' },
  { href: '/thinking', label: 'Thinking' },
  { href: '/work',     label: 'Work' },
]

const colServices = [
  { href: '/services#hunting',  label: 'Hunting' },
  { href: '/services#pipeline', label: 'Talent Pipeline' },
  { href: '/services#rpo',      label: 'Embedded Recruiter' },
]

const colResources = [
  { href: '/resources',              label: 'Resources & Tools' },
  { href: 'https://tools.wearebondy.com', label: 'Tools ↗', external: true },
  { href: '/roles',                  label: 'Open Roles' },
  { href: '/referrals',              label: 'Referrals' },
]

export default function Footer() {
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
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 900, color: '#F4F2EE', letterSpacing: '-0.02em' }}>
              Bond<em style={{ fontStyle: 'italic', color: '#C06A2D' }}>y</em><span style={{ color: '#C06A2D' }}>.</span>
            </span>
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontWeight: 300, lineHeight: 1.7, maxWidth: '200px', marginBottom: '1.5rem' }}>
            The standard for technical hiring. Since 2008.
          </p>
          <a href="mailto:hola@wearebondy.com" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 300, marginBottom: '0.5rem' }}>
            hola@wearebondy.com
          </a>
          <a
            href="https://linkedin.com/company/bondygroup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Company */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            Company
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {colCompany.map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            Services
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {colServices.map(({ href, label }) => (
              <Link key={href} href={href} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', display: 'block', marginBottom: '1.25rem' }}>
            Resources
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {colResources.map(({ href, label, external }) => (
              external
                ? <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{label}</a>
                : <Link key={href} href={href} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 300 }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          margin: '3.5rem 0 0',
          padding: '1.25rem clamp(1.25rem,5vw,4rem)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.14)' }}>
          © {new Date().getFullYear()} Bondy Group. All rights reserved.
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.13em', color: 'rgba(255,255,255,0.14)' }}>
          wearebondy.com
        </span>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
