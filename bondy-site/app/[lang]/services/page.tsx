import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BondyUnderline } from '@/components/bondy/atoms'
import AnchorStrip from '@/components/services/AnchorStrip'
import ServicesSectionCard from '@/components/services/ServicesSectionCard'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const baseUrl = 'https://wearebondy.com'
  const tr = t(params.lang)
  const meta = tr.services.meta
  const canonical = `${baseUrl}/${params.lang}/services`
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/services`,
        es: `${baseUrl}/es/services`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: 'Bondy',
      locale: params.lang === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image-v2.png', width: 1200, height: 630, alt: 'Bondy' }],
    },
  }
}

const SERIF = "'Special Elite', Georgia, serif"
const BODY = "'Plus Jakarta Sans', system-ui, sans-serif"

const INK_MID = '#3A3530'
const INK_SUB = '#5A5550'
const INK_FAINT = '#7A7874'
const RULE = '#E8E4DE'
const WHITE = '#FFFFFF'
const GREEN = '#4A8C40'
const GREEN_HOVER = '#3a7030'

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  const tr = t(params.lang)
  const s = tr.services

  // ItemList of Service offerings — surfaces the 10 services to Google as discrete entities,
  // referencing the global Organization via @id rather than duplicating the entity.
  const baseUrl = 'https://wearebondy.com'
  const servicesItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Bondy — Services',
    itemListElement: [
      { name: 'Hunting', description: 'Dedicated technical search with a curated shortlist of pre-interviewed candidates within 5 to 7 business days. 3-month guarantee on every placement.', serviceType: 'Technical Recruiting', anchor: 'hunting' },
      { name: 'Talent Pipeline', description: 'Curated list of pre-vetted, ready-to-contact candidates selected to spec, not to volume. Lightweight 3 to 5 day delivery.', serviceType: 'Tech Sourcing', anchor: 'pipeline' },
      { name: 'RPO', description: 'Embedded recruiter inside your team for 3+ months. Market insights in real time, full transparency, no agency markup.', serviceType: 'Recruitment Process Outsourcing', anchor: 'rpo' },
      { name: 'Staffing Partner Program', description: 'White-label technical recruiting for staffing companies that need senior engineering search delivered to their clients under their brand.', serviceType: 'Staffing Partnership', anchor: 'staffing' },
      { name: 'Hiring Process Audit', description: 'Diagnostic of an engineering hiring funnel. Identifies where qualified candidates drop, where the brief misaligns with the market, and where the offer loses.', serviceType: 'Hiring Advisory', anchor: 'practice' },
      { name: 'Hiring Workshops', description: 'Tactical workshops for engineering leaders and hiring managers on interview design, brief calibration, and candidate evaluation.', serviceType: 'Training', anchor: 'practice' },
      { name: 'Talent OS', description: 'End-to-end hiring operating system: cadence, roles, scorecards, and metrics for engineering teams running multiple parallel searches.', serviceType: 'Hiring Strategy', anchor: 'strategy' },
      { name: 'Salary Benchmarks', description: 'Compensation benchmarking for engineering roles in Argentina and LATAM. Real data from active searches, not survey self-reports.', serviceType: 'Compensation Advisory', anchor: 'strategy' },
      { name: 'Headcount Planning', description: 'Engineering org design and headcount sequencing aligned to roadmap, runway, and hiring market reality.', serviceType: 'Workforce Planning', anchor: 'strategy' },
      { name: 'HR Dashboard', description: 'Custom hiring metrics dashboard: funnel conversion, time-to-shortlist, offer acceptance, retention. Built per engagement.', serviceType: 'Hiring Analytics', anchor: 'strategy' },
    ].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: [
          { '@type': 'Country', name: 'Argentina' },
          { '@type': 'Place', name: 'Latin America' },
        ],
        serviceType: item.serviceType,
        url: `${baseUrl}/${params.lang}/services#${item.anchor}`,
      },
    })),
  }

  return (
    <main className="notebook-bg" style={{ minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemList) }}
      />
      <Nav lang={params.lang} tr={tr.nav} />

      <AnchorStrip
        anchors={[
          { id: 'execution', n: '01', label: s.anchors.exec },
          { id: 'practice',  n: '02', label: s.anchors.practice },
          { id: 'strategy',  n: '03', label: s.anchors.strategy },
        ]}
      />

      {/* HERO */}
      <section
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,3rem) clamp(2rem,4vw,3rem)',
        }}
      >
        {/* Kicker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: '1.5rem',
          }}
        >
          <span
            aria-hidden
            style={{ display: 'inline-block', width: 22, height: 1, background: GREEN }}
          />
          <span
            style={{
              fontFamily: BODY,
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: GREEN,
              fontWeight: 600,
            }}
          >
            {s.intro.kicker}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="tw-ink-heavy"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
            lineHeight: 0.98,
            color: INK_MID,
            fontWeight: 400,
            margin: 0,
            maxWidth: 900,
            letterSpacing: '0.01em',
          }}
        >
          {s.intro.h1a} {s.intro.h1b}{' '}
          <em style={{ fontStyle: 'normal', color: GREEN }}>{s.intro.h1c}</em>
        </h1>

        <BondyUnderline width={240} strokeWidth={2} style={{ marginTop: '1.25rem', marginBottom: '2rem' }} />

        {/* 2-col body grid */}
        <div className="services-hero-grid">
          <p
            style={{
              fontFamily: BODY,
              fontSize: 17,
              lineHeight: 1.55,
              color: INK_MID,
              fontWeight: 500,
              margin: 0,
            }}
          >
            {s.intro.sub}
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: '14.5px',
              lineHeight: 1.75,
              color: INK_SUB,
              margin: 0,
            }}
          >
            {s.intro.body}
          </p>
        </div>
      </section>

      {/* SECTION CARDS */}
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '0 clamp(1.25rem,4vw,3rem) 3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {s.sections.map((sec) => (
          <ServicesSectionCard
            key={sec.id}
            section={sec}
            labels={s.labels}
            defaultOpenId={sec.id === 'execution' ? 'hunting' : undefined}
          />
        ))}
      </div>

      {/* CLOSER */}
      <section
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '0 clamp(1.25rem,4vw,3rem) clamp(4rem,8vw,6rem)',
        }}
      >
        <div
          style={{
            background: WHITE,
            border: `1px solid ${RULE}`,
            borderRadius: 20,
            padding: '3rem clamp(1.5rem,4vw,3.5rem)',
            maxWidth: 880,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Kicker centered */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: '1.25rem',
            }}
          >
            <span aria-hidden style={{ display: 'inline-block', width: 22, height: 1, background: GREEN }} />
            <span
              style={{
                fontFamily: BODY,
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GREEN,
                fontWeight: 600,
              }}
            >
              {s.closer.kicker}
            </span>
          </div>

          <h2
            className="tw-ink-heavy"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)',
              lineHeight: 1.1,
              color: INK_MID,
              fontWeight: 400,
              margin: 0,
              letterSpacing: '0.005em',
            }}
          >
            {s.closer.h2a} <em style={{ fontStyle: 'normal', color: GREEN }}>{s.closer.h2b}</em>
          </h2>

          <BondyUnderline width={200} strokeWidth={2} style={{ margin: '1.25rem auto 1.75rem' }} />

          <p
            style={{
              fontFamily: BODY,
              fontSize: 15,
              lineHeight: 1.75,
              color: INK_SUB,
              margin: '0 auto 2rem',
              maxWidth: 540,
            }}
          >
            {s.closer.body}
          </p>

          <a
            href={s.closer.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 26px',
              background: GREEN,
              color: '#fff',
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
              borderRadius: 0,
              transition: 'background 120ms ease',
            }}
          >
            {s.closer.cta}
          </a>
        </div>
      </section>

      <Footer lang={params.lang} tr={tr.footer} />

      {/* Page-scoped CSS */}
      <style>{`
        .services-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 720px) {
          .services-hero-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
        .services-cta:hover { background: ${GREEN_HOVER} !important; }
        @media (max-width: 640px) {
          .services-item-name { min-width: 0 !important; font-size: 16px !important; }
          .services-item-sub  { display: none !important; }
        }
      `}</style>
    </main>
  )
}
