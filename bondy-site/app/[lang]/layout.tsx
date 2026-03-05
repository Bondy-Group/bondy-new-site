import type { Metadata } from 'next'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'
import '../globals.css'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang }
}): Promise<Metadata> {
  const tr = t(params.lang)
  return {
    title: 'Bondy — The standard for technical hiring',
    description: tr.home.meta.description,
    openGraph: {
      title: 'Bondy',
      description: tr.home.meta.description,
      url: 'https://newbondy.wearebondy.com',
      siteName: 'Bondy',
      locale: params.lang === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    robots: { index: false, follow: false },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Lang }
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
