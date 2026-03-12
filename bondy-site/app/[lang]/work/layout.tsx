import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'es' }
}): Promise<Metadata> {
  const baseUrl = 'https://wearebondy.com'
  const canonical = `${baseUrl}/${params.lang}/work`
  const meta = {
    en: {
      title: 'Our Work \u2014 Real Technical Hires Across LATAM | Bondy',
      description: '450+ technical hires completed. 94% retention at 6 months. See the real engagements behind Bondy track record hiring engineers in Argentina and across Latin America.',
    },
    es: {
      title: 'Nuestro Trabajo \u2014 Contrataciones T\u00e9cnicas Reales en LATAM | Bondy',
      description: 'M\u00e1s de 450 contrataciones t\u00e9cnicas. 94% de retenci\u00f3n a los 6 meses. Conoc\u00e9 los proyectos reales detr\u00e1s del track record de Bondy contratando ingenieros en Argentina y LATAM.',
    },
  }
  const m = meta[params.lang] ?? meta.en
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/work`,
        es: `${baseUrl}/es/work`,
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

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
