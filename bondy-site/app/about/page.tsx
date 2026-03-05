import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About — Bondy',
  description: 'Bondy was founded in Buenos Aires in 2008. We\'re a technical recruiting firm run by psychologists and engineers who believe that hiring is a discipline, not a transaction.',
}

const values = [
  {
    n: '01',
    title: 'Diagnostic before prescription',
    body: 'We don\'t open a search without understanding why it\'s being opened. The problem a company thinks it has is often not the problem it actually has. We take the time to find out.',
  },
  {
    n: '02',
    title: 'Fewer, better candidates',
    body: 'Volume is not a strategy. Every candidate we send is one we would hire ourselves if we were in your seat. This standard makes us slower and better.',
  },
  {
    n: '03',
    title: 'Radical honesty with clients',
    body: 'If your offer isn\'t competitive, we\'ll tell you. If the role definition is attracting the wrong profiles, we\'ll tell you that too. Our job is to help you hire well — not to confirm your assumptions.',
  },
  {
    n: '04',
    title: 'We stand behind our work',
    body: 'Every placement comes with a 3-month guarantee. Not because we\'re required to offer it, but because it forces us to be honest about fit. If it doesn\'t work out, we search again.',
  },
  {
    n: '05',
    title: 'Recruiting is a discipline',
    body: 'We approach technical hiring as applied organizational psychology — with hypotheses, data, and rigorous analysis. Not gut feel, not hustle, not volume. A method.',
  },
]

const team = [
  {
    name: 'Mara Schmitman',
    role: 'Founder & Managing Director',
    bio: 'Licensed psychologist with a specialization in organizational behavior, Mara founded Bondy in Buenos Aires in 2008 with a clear thesis: that the best technical hires come from understanding people deeply, not from processing more resumes faster. After 16 years and hundreds of placements, the thesis still holds. She leads client relationships and every strategic search personally.',
    detail: 'MSc in Organizational Psychology · Buenos Aires, AR',
  },
]

export default function AboutPage() {
  return (
    <main style={{ background: '#F0EBE3', minHeight: '100vh' }}>
      <Nav />

      {/* Header */}
      <header style={{ paddingTop: '60px', background: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
        <div style={{ padding: '4.5rem clamp(1.25rem,5vw,4rem) 4rem', maxWidth: '860px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ width: '22px', height: '1px', background: '#C06A2D', flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C06A2D' }}>
              About Bondy
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(38px,5vw,68px)', fontWeight: 900, lineHeight: .96, letterSpacing: '-.02em', color: '#1A1A1A', marginBottom: '1.75rem' }}>
            We believe hiring<br />is a <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>discipline.</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.72, fontWeight: 300, color: '#7A7874', maxWidth: '520px' }}>
            Founded in Buenos Aires in 2008, Bondy is a technical recruiting firm built on a simple conviction: that the quality of a hire is determined long before the offer letter — in how you define the role, how you evaluate the market, and how carefully you assess fit.
          </p>
        </div>
      </header>

      {/* Origin story */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="split-grid">
          <div style={{ padding: '4.5rem clamp(1.25rem,5vw,4rem)', borderRight: '1px solid #E8E4DE' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C8C5C0', display: 'block', marginBottom: '1.75rem' }}>
              Since 2008
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', color: '#1A1A1A', marginBottom: '1.5rem' }}>
              Why we started —<br />and why it still matters.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#7A7874', fontWeight: 300 }}>
                Bondy was founded with a specific frustration: that technical recruiting was being done by people who didn&apos;t understand engineers, for companies that didn&apos;t understand what they were really looking for.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#7A7874', fontWeight: 300 }}>
                The result was predictable — high volume, low quality, short tenures. A $30,000 mistake dressed up as a service.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#7A7874', fontWeight: 300 }}>
                We started with a different approach: apply the rigor of organizational psychology to the search process. Define what &quot;fit&quot; actually means before looking for it. Interview deeply. Send fewer candidates — and better ones.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#7A7874', fontWeight: 300 }}>
                Sixteen years later, 94% of the people we place are still in role at 6 months. That number is the only metric we care about.
              </p>
            </div>
          </div>
          <div style={{ padding: '4.5rem clamp(1.25rem,5vw,4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3rem' }}>
            {[
              { n: '16', sup: '+', label: 'Years in technical recruitment' },
              { n: '94', sup: '%', label: 'Retention at 6 months' },
              { n: '5–7', sup: 'd', label: 'To first qualified shortlist' },
            ].map(({ n, sup, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(52px,6vw,80px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-.03em', color: '#1A1A1A' }}>
                  {n}<span style={{ fontSize: '0.4em', color: '#C06A2D', verticalAlign: 'super' }}>{sup}</span>
                </div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#C8C5C0', marginTop: '.6rem' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ borderBottom: '1px solid #E8E4DE' }}>
        <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem) 2rem', borderBottom: '1px solid #E8E4DE' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C06A2D', display: 'block', marginBottom: '.75rem' }}>
            How we work
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', color: '#1A1A1A' }}>
            Five things we believe.
          </h2>
        </div>
        <div>
          {values.map((v, i) => (
            <div
              key={v.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gap: '2rem',
                padding: '3rem clamp(1.25rem,5vw,4rem)',
                borderBottom: i < values.length - 1 ? '1px solid #E8E4DE' : 'none',
                background: i % 2 === 0 ? '#FFFFFF' : '#F0EBE3',
                alignItems: 'start',
              }}
            >
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C8C5C0', paddingTop: '4px' }}>
                {v.n}
              </span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: '#1A1A1A', marginBottom: '.85rem', lineHeight: 1.15, letterSpacing: '-.01em' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.78, color: '#7A7874', fontWeight: 300, maxWidth: '580px' }}>
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
        <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem) 2rem', borderBottom: '1px solid #E8E4DE' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C06A2D', display: 'block', marginBottom: '.75rem' }}>
            The team
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', color: '#1A1A1A' }}>
            The people behind<br />every <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>search.</em>
          </h2>
        </div>

        {team.map((person) => (
          <div
            key={person.name}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #E8E4DE' }}
            className="team-grid"
          >
            {/* Photo placeholder */}
            <div style={{
              background: '#F0EBE3',
              borderRight: '1px solid #E8E4DE',
              minHeight: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: '#E8E4DE', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2rem', fontWeight: 900, color: '#C8C5C0' }}>
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.13em', textTransform: 'uppercase', color: '#C8C5C0' }}>
                  Photo coming soon
                </span>
              </div>
            </div>

            {/* Bio */}
            <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C06A2D', marginBottom: '1.25rem' }}>
                {person.role}
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, letterSpacing: '-.02em', color: '#1A1A1A', marginBottom: '1.5rem', lineHeight: 1 }}>
                {person.name}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.78, color: '#7A7874', fontWeight: 300, marginBottom: '2rem', maxWidth: '440px' }}>
                {person.bio}
              </p>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.14em', color: '#C8C5C0', textTransform: 'uppercase' }}>
                {person.detail}
              </span>
            </div>
          </div>
        ))}

        {/* Join the team */}
        <div style={{ padding: '3.5rem clamp(1.25rem,5vw,4rem)', background: '#F0EBE3', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C8C5C0', display: 'block', marginBottom: '.6rem' }}>
              Join the team
            </span>
            <p style={{ fontSize: '15px', color: '#7A7874', fontWeight: 300, maxWidth: '440px', lineHeight: 1.65 }}>
              We&apos;re occasionally looking for senior recruiters who combine technical understanding with genuine curiosity about people. If that&apos;s you, write to us.
            </p>
          </div>
          <a href="mailto:hello@wearebondy.com?subject=Join Bondy" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', border: '1px solid #E8E4DE', color: '#7A7874', padding: '13px 26px', textDecoration: 'none', background: '#FFFFFF', whiteSpace: 'nowrap' }}>
            Write to us →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1A1A1A', padding: '6rem clamp(1.25rem,5vw,4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="cta-grid">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', color: '#F4F2EE' }}>
            Ready to work<br />with us? Let&apos;s<br /><em style={{ color: '#C06A2D', fontStyle: 'italic' }}>talk.</em>
          </h2>
          <div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.72, marginBottom: '2rem' }}>
              Tell us what you&apos;re building and who you need. We&apos;ll tell you honestly whether we can help — and how.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '.13em', textTransform: 'uppercase', background: '#C06A2D', color: '#fff', padding: '13px 26px', textDecoration: 'none' }}>
              Start the conversation ↗
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .split-grid { grid-template-columns: 1fr 1fr; }
        .team-grid { grid-template-columns: 1fr 1fr; }
        .cta-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 860px) {
          .split-grid, .team-grid, .cta-grid { grid-template-columns: 1fr !important; }
          .split-grid > *:first-child, .team-grid > *:first-child { border-right: none !important; border-bottom: 1px solid #E8E4DE; }
        }
      `}</style>
    </main>
  )
}
