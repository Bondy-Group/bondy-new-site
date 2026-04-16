import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import { getArticleBySlug, getAllSlugs } from '@/lib/thinking/articles'
import { notFound } from 'next/navigation'

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const enSlugs = getAllSlugs('en').map(slug => ({ lang: 'en', slug }))
  const esSlugs = getAllSlugs('es').map(slug => ({ lang: 'es', slug }))
  return [...enSlugs, ...esSlugs]
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'es'; slug: string }
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug, params.lang)
  if (!article) return {}
  const baseUrl = 'https://wearebondy.com'
  const canonical = `${baseUrl}/${params.lang}/thinking/${article.slug}`
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      url: canonical,
      siteName: 'Bondy',
      locale: params.lang === 'es' ? 'es_AR' : 'en_US',
      type: 'article',
      publishedTime: article.date,
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
const mono  = "'Plus Jakarta Sans', system-ui, sans-serif"

// ── Component ─────────────────────────────────────────────────────────────────

export default function ArticlePage({
  params,
}: {
  params: { lang: Lang; slug: string }
}) {
  const lang = params.lang
  const tr = t(lang)
  const article = getArticleBySlug(params.slug, lang)

  if (!article) notFound()

  const lk = (href: string) => `/${lang}${href}`
  const backLabel = lang === 'en' ? '← Back to Thinking' : '← Volver a Ideas'

  // Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta.description,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Bondy Group',
      url: 'https://wearebondy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bondy Group',
      url: 'https://wearebondy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wearebondy.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wearebondy.com/${lang}/thinking/${article.slug}`,
    },
  }

  return (
    <main style={{ backgroundColor: tw.bg, backgroundImage: notebookBg, minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Nav lang={lang} tr={tr.nav} />

      {/* Header */}
      <header style={{ background: tw.white, borderBottom: `1px solid ${tw.rule}` }}>
        <div style={{ padding: '4rem clamp(1.25rem,5vw,4rem) 3.5rem', maxWidth: '760px' }}>
          {/* Back link */}
          <Link
            href={lk('/thinking')}
            style={{
              fontFamily: mono,
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: tw.inkFaint,
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '2.5rem',
            }}
          >
            {backLabel}
          </Link>

          {/* Category + reading time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: mono,
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tw.green,
            }}>
              {article.category}
            </span>
            <span style={{ color: tw.rule, fontSize: '9px' }}>·</span>
            <span style={{ fontFamily: mono, fontSize: '10px', letterSpacing: '0.08em', color: tw.inkFaint }}>
              {article.readingTime}
            </span>
          </div>

          <h1 style={{
            fontFamily: serif,
            fontSize: 'clamp(2rem,5vw,3.5rem)',
            lineHeight: 1.1,
            color: tw.inkMid,
            marginBottom: '1.5rem',
          }}>
            {article.title}
          </h1>

          <p style={{
            fontFamily: mono,
            fontSize: '15px',
            lineHeight: 1.78,
            color: tw.inkSub,
          }}>
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Article body */}
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '3.5rem clamp(1.25rem,5vw,4rem) 5rem',
        }}
      >
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* CTA footer */}
      <section style={{ background: tw.white, borderTop: `1px solid ${tw.rule}`, padding: '3.5rem clamp(1.25rem,5vw,4rem)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: mono, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: tw.inkFaint, marginBottom: '0.5rem' }}>
              Bondy Group
            </p>
            <p style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: tw.inkMid, lineHeight: 1.3 }}>
              {lang === 'en'
                ? 'Technical recruiting in Argentina and LATAM since 2008.'
                : 'Recruiting técnico en Argentina y LATAM desde 2008.'}
            </p>
          </div>
          <Link
            href={lk('/contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: tw.green,
              color: '#fff',
              fontFamily: mono,
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '13px 28px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {lang === 'en' ? 'Talk to us →' : 'Hablemos →'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} tr={tr.footer} />

      <style>{`
        .article-body {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 15px;
          line-height: 1.88;
          color: #5A5550;
        }
        .article-body p {
          margin-bottom: 1.5rem;
        }
        .article-body h2 {
          font-family: 'Special Elite', Georgia, serif;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          line-height: 1.2;
          color: #3A3530;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .article-body ul,
        .article-body ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .article-body li {
          margin-bottom: 0.6rem;
        }
        .article-body strong {
          color: #3A3530;
          font-weight: 700;
        }
        .article-body table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 13px;
        }
        .article-body th {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A7874;
          text-align: left;
          border-bottom: 2px solid #E8E4DE;
          padding: 0.5rem 0.75rem;
        }
        .article-body td {
          border-bottom: 1px solid #E8E4DE;
          padding: 0.6rem 0.75rem;
          color: #5A5550;
        }
        .article-body hr {
          border: none;
          border-top: 1px solid #E8E4DE;
          margin: 3rem 0 1.5rem;
        }
        .article-body .article-sources {
          font-size: 12px;
          color: #7A7874;
          line-height: 1.7;
        }
      `}</style>
    </main>
  )
}
