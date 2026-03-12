import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'es' }
}): Promise<Metadata> {
  const baseUrl = 'https://wearebondy.com'
  const canonical = `${baseUrl}/${params.lang}/contact`
  const meta = {
    en: {
      title: 'Contact Bondy \u2014 Start a Technical Search in Argentina or LATAM',
      description: 'Ready to hire engineers in Argentina or LATAM? Tell us what you need to build. Bondy responds within 24 hours.',
    },
    es: {
      title: 'Contacto \u2014 Inici\u00e1 una B\u00fasqueda T\u00e9cnica en Argentina o LATAM | Bondy',
      description: '\u00bfNecesit\u00e1s contratar ingenieros en Argentina o LATAM? Cont\u00e1nos qu\u00e9 necesit\u00e1s construir. Bondy responde en 24 horas.',
    },
  }
  const m = meta[params.lang] ?? meta.en
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/contact`,
        es: `${baseUrl}/es/contact`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: 'Bondy',
      locale: params.lang === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
