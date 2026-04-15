import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import { getArticlesByLang, type Article } from '@/lib/thinking/articles'

// ── Metadata ──────────────────────────────────────────────────────────────────

const pageMeta = {
  en: {
    title: 'Thinking — Bondy',
    description: 'Bondy\'s editorial. What we think about technical hiring, the LATAM engineering market, and how we work. Written from 18+ years of placing engineers in Argentina and across Latin America.',
  },
  es: {
    title: 'Ideas — Bondy',
    description: 'El espacio editorial de Bondy. Lo que pensamos sobre recruiting técnico, el mercado de ingeniería en LATAM y cómo trabajamos. Escrito desde 18+ años colocando engineers en Argentina y América Latina.',
  },
}

export async function generateMetadata({ params }: { params: { lang: 'en' | 'es' } }): Promise<Metadata> {
  const baseUrl = 'https://wearebondy.com'
  const meta = pageMeta[params.lang] ?? pageMeta.en
  const canonical = `${baseUrl}/${params.lang}/thinking`
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: { en: `${baseUrl}/en/thinking`, es: `${baseUrl}/es/thinking` },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: 'Bondy',
      locale: params.lang === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
  }
}

// ── Styles ────────────────────────────────────────────────────────────────────

const tw = {
  bg: '#FEFCF9', ink: '#1A1A1A', inkMid: '#3A3530', inkSub: '#5A5550',
  inkFaint: '#7A7874', rule: '#E8E4DE', white: '#FFFFFF', green: '#4A8C40',
}
const notebookBg = [
  'linear-gradient(90deg, transparent 68px, rgba(210,100,80,0.10) 68px, rgba(210,100,80,0.10) 69.5px, transparent 69.5px)',
  'repeating-linear-gradient(180deg, transparent 0px, transparent 31px, rgba(100,140,200,0.09) 31px, rgba(100,140,200,0.09) 32px)',
].join(',')
const serif = "'Special Elite', Georgia, serif"
const mono  = "'Courier Prime', Courier, monospace"

// ── Category label map ────────────────────────────────────────────────────────

const categoryColor: Record<string, string> = {
  'Trends': tw.green,
  'Bondy Method': tw.inkSub,
  'Tendencias': tw.green,
  'Método Bondy': tw.inkSub,
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ThinkingPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const tr = t(lang)
  const lk = (href: string) => `/${lang}${href}`

  const articles = getArticlesByLang(lang)
  const isEN = lang === 'en'

  const labels = {
    section: isEN ? '— Thinking' : '— Ideas',
    h1: isEN ? 'Thinking' : 'Ideas',
    subtitle: isEN
      ? "What we think about technical hiring, the LATAM engineering market, and how we work."
      : "Lo que pensamos sobre recruiting técnico, el mercado de ingeniería en LATAM y cómo trabajamos.",
    readLabel: isEN ? 'Read →' : 'Leer →',
    readTime: (t: string) => t,
  }

  return (
    <main style={{ backgroundColor: tw.bg, backgroundImage: notebookBg, minHeight: '100vh' }}>
      <Nav lang={lang} tr={tr.nav} />

      {/* Header */}
      <header style={{ background: tw.white, borderBottom: `1px solid ${tw.rule}` }}>
        <div style={{ padding: '4.5rem clamp(1.25rem,5vw,4rem) 4rem', maxWidth: '860px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
            <div style={{ width: '22px', height: '1px', background: tw.green }} />
            <span style={{ fontFamily: mono, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: tw.green }}>
              {labels.section}
            </span>
          </div>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(3rem,7vw,5.5rem)', lineHeight: 1.0, color: tw.inkMid, marginBottom: '1.25rem' }}>
            {labels.h1}
          </h1>
          <p style={{ fontFamily: mono, fontSize: '15px', lineHeight: 1.78, maxWidth: '520px', color: tw.inkSub }}>
            {labels.subtitle}
          </p>
        </div>
      </header>

      {/* Article list */}
      <section>
        {articles.map((article: Article, i: number) => (
          <article
            key={article.slug}
            style={{
              background: i % 2 === 0 ? tw.bg : tw.white,
              borderBottom: `1px solid ${tw.rule}`,
              padding: '3rem clamp(1.25rem,5vw,4rem)',
            }}
          >
            <div className="thinking-article-grid">
              {/* Category + meta */}
              <div style={{ paddingTop: '4px' }}>
                <div style={{
                  fontFamily: mono,
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: categoryColor[article.category] ?? tw.green,
                  marginBottom: '6px',
                }}>
                  {article.category}
                </div>
                <div style={{ fontFamily: mono, fontSize: '10px', letterSpacing: '0.08em', color: tw.inkFaint }}>
                  {article.readingTime}
                </div>
              </div>

              {/* Title + excerpt */}
              <div>
                <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.4rem,2.5vw,2rem)', lineHeight: 1.15, color: tw.inkMid, marginBottom: '0.75rem' }}>
                  {article.title}
                </h2>
                <p style={{ fontFamily: mono, fontSize: '14px', lineHeight: 1.82, maxWidth: '600px', color: tw.inkSub, marginBottom: '1.5rem' }}>
                  {article.excerpt}
                </p>
                <Link
                  href={lk(`/thinking/${article.slug}`)}
                  style={{
                    fontFamily: mono,
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: tw.green,
                    textDecoration: 'none',
                  }}
                >
                  {labels.readLabel}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer lang={lang} tr={tr.footer} />

      <style>{`
        .thinking-article-grid {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1rem 3rem;
          align-items: start;
          max-width: 900px;
        }
        @media (max-width: 640px) {
          .thinking-article-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
      `}</style>
    </main>
  )
}
