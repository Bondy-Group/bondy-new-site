import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Work — Bondy',
  description: 'Case studies and selected engagements. Technical recruiting for high-growth companies.',
}

const cases = [
  {
    slug: 'red-hat',
    client: 'Red Hat',
    service: 'RPO · LATAM',
    year: '2022–2023',
    sector: 'Enterprise Software',
    headline: 'Building an engineering pipeline across Latin America at scale.',
    description: 'Red Hat needed to scale its LATAM engineering footprint significantly — across multiple countries, multiple seniority levels, and a highly competitive talent market for open-source specialists.',
    outcomes: [
      '40+ technical roles filled across Argentina, Brazil, and Mexico',
      'Avg. time-to-shortlist: 6 business days',
      '91% retention at 12 months',
    ],
    color: '#CC0000',
  },
  {
    slug: 'arcor',
    client: 'Arcor',
    service: 'RPO · Bolivia',
    year: '2023',
    sector: 'FMCG / Tech transformation',
    headline: 'Staffing the technology transformation team in a non-traditional market.',
    description: 'Arcor was building its digital and IT team in Bolivia — a market with limited local tech talent and specific cultural and regulatory complexity. We embedded to lead the full hiring strategy.',
    outcomes: [
      'Full IT and digital team built from scratch',
      'Hybrid local + regional candidate sourcing strategy',
      'First tech hires onboarded within 5 weeks of engagement start',
    ],
    color: '#1A1A1A',
  },
  {
    slug: 'disbyte',
    client: 'Disbyte',
    service: 'TA Consulting',
    year: '2024',
    sector: 'Gaming / Technology',
    headline: 'Talent acquisition consulting for a fast-scaling gaming company.',
    description: 'Disbyte needed to build its talent acquisition function from the ground up — processes, tooling, interview frameworks, and the first wave of senior engineering hires.',
    outcomes: [
      'Full TA process design and implementation',
      'Senior engineering team built in under 90 days',
      'Interview framework adopted across all technical roles',
    ],
    color: '#2D1B69',
  },
]

export default function WorkPage() {
  return (
    <main style={{ background: '#F0EBE3', minHeight: '100vh' }}>
      <Nav />

      {/* Header */}
      <header style={{ paddingTop: '60px', background: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
        <div style={{ padding: '4.5rem clamp(1.25rem,5vw,4rem) 4rem', maxWidth: '860px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ width: '22px', height: '1px', background: '#C06A2D', flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C06A2D' }}>
              Selected work
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(38px,5vw,68px)', fontWeight: 900, lineHeight: .96, letterSpacing: '-.02em', color: '#1A1A1A', marginBottom: '1.75rem' }}>
            Results we can<br /><em style={{ color: '#C06A2D', fontStyle: 'italic' }}>put our name on.</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.72, fontWeight: 300, color: '#7A7874', maxWidth: '520px' }}>
            A selection of engagements across industries, company stages, and geographies. Every case starts with a problem — not a job description.
          </p>
        </div>
      </header>

      {/* Case studies */}
      <section>
        {cases.map((c, idx) => (
          <article
            key={c.slug}
            style={{
              borderBottom: '1px solid #E8E4DE',
              background: idx % 2 === 0 ? '#FFFFFF' : '#F0EBE3',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="case-grid">
              {/* Left — context */}
              <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem)', borderRight: '1px solid #E8E4DE' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C06A2D', border: '1px solid rgba(192,106,45,0.25)', padding: '4px 10px' }}>
                    {c.service}
                  </span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C8C5C0', border: '1px solid #E8E4DE', padding: '4px 10px' }}>
                    {c.sector}
                  </span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C8C5C0', border: '1px solid #E8E4DE', padding: '4px 10px' }}>
                    {c.year}
                  </span>
                </div>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(11px,1.2vw,14px)', fontWeight: 400, color: '#C8C5C0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {c.client}
                </div>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', color: '#1A1A1A' }}>
                  {c.headline}
                </h2>
              </div>

              {/* Right — outcomes */}
              <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '15px', lineHeight: 1.78, color: '#7A7874', fontWeight: 300, marginBottom: '2.5rem' }}>
                    {c.description}
                  </p>
                  <div style={{ borderTop: '1px solid #E8E4DE', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C06A2D', marginBottom: '0.25rem', display: 'block' }}>
                      Outcomes
                    </span>
                    {c.outcomes.map((o) => (
                      <div key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C06A2D', flexShrink: 0, marginTop: '6px' }} />
                        <span style={{ fontSize: '14px', color: '#5A5855', fontWeight: 300, lineHeight: 1.55 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: '#1A1A1A', padding: '6rem clamp(1.25rem,5vw,4rem)' }}>
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center', gridTemplateColumns: '1fr 1fr' }} className="cta-grid">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', color: '#F4F2EE' }}>
            Ready to be the<br />next one?
          </h2>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.72, marginBottom: '2rem' }}>
              Tell us what you&apos;re building. We&apos;ll tell you how we can help.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', background: '#C06A2D', color: '#fff', padding: '13px 26px', textDecoration: 'none' }}>
              Start a conversation ↗
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .case-grid { grid-template-columns: 1fr 1fr; }
        .cta-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .case-grid, .cta-grid { grid-template-columns: 1fr !important; }
          .case-grid > div:first-child { border-right: none !important; border-bottom: 1px solid #E8E4DE; }
        }
      `}</style>
    </main>
  )
}
