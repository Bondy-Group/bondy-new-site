// lib/thinking/slug-pairs.ts
// Mapping of equivalent /thinking article slugs between EN and ES.
// Kept in its own file so client components (like Nav) can import the
// resolver without pulling in the full article content from articles.ts.
//
// When adding a new bilingual article, add its slug pair here.
// If a piece is published in only one language, simply omit it from this list:
// getAlternateThinkingSlug() will return null and the caller can fall back to
// the /thinking listing in the other language.

import type { Lang } from './articles'

interface SlugPair { en: string; es: string }

const slugPairs: SlugPair[] = [
  { en: 'how-they-think',                                                  es: 'diagnostico-cognitivo' },
  { en: 'how-to-hire-software-engineers-in-argentina',                     es: 'como-contratar-ingenieros-de-software-en-argentina' },
  { en: 'what-does-technical-recruiting-cost-in-latam',                    es: 'cuanto-cuesta-el-recruiting-tecnico-en-latam' },
  { en: 'why-we-stop-a-search-when-fewer-than-1-in-4-candidates-advance',  es: 'por-que-detenemos-una-busqueda-cuando-menos-de-1-de-cada-4-candidatos-avanza' },
  { en: 'why-senior-engineers-in-argentina-are-harder-to-hire-than-two-years-ago', es: 'por-que-los-ingenieros-senior-en-argentina-son-mas-dificiles-de-contratar' },
  { en: 'why-salary-benchmarking-2023-is-obsolete',                        es: 'por-que-el-salary-benchmarking-de-2023-ya-no-sirve' },
  { en: 'the-diagnostic-we-run-before-every-search',                       es: 'el-diagnostico-que-corremos-antes-de-cada-busqueda' },
]

/**
 * Returns the slug of the equivalent article in the other language,
 * or null if no equivalent has been mapped.
 */
export function getAlternateThinkingSlug(slug: string, currentLang: Lang): string | null {
  const otherLang: Lang = currentLang === 'en' ? 'es' : 'en'
  const pair = slugPairs.find(p => p[currentLang] === slug)
  return pair ? pair[otherLang] : null
}
