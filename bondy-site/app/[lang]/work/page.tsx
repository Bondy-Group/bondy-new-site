'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import type { Lang } from '@/lib/i18n/translations'

// ── COPY ─────────────────────────────────────────────────────────────
const copy = {
  en: {
    label: 'Work',
    h1a: "What we've",
    h1b: 'actually built.',
    intro: "Not case studies written for marketing. Real engagements — what the challenge was, what we did, and what happened.",
    mapLabel: 'Geographic reach',
    mapSub: 'projects mapped',
    casesLabel: 'Selected engagements',
    industriesLabel: 'Industries we\'ve hired for',
    ctaLabel: 'Ready to be next?',
    ctaH2a: 'Tell us what you',
    ctaH2b: 'need to build.',
    ctaBtn: 'Start a search ↗',
    readMore: 'Read →',
    close: 'Close ↑',
    challenge: 'The challenge',
    approach: 'Our approach',
    result: 'The result',
  },
  es: {
    label: 'Trabajo',
    h1a: 'Lo que',
    h1b: 'realmente construimos.',
    intro: 'No son casos de éxito escritos para marketing. Son proyectos reales — cuál fue el desafío, qué hicimos y qué pasó.',
    mapLabel: 'Alcance geográfico',
    mapSub: 'proyectos mapeados',
    casesLabel: 'Proyectos seleccionados',
    industriesLabel: 'Industrias en las que contratamos',
    ctaLabel: '¿Listo para ser el siguiente?',
    ctaH2a: 'Contanos qué',
    ctaH2b: 'necesitás construir.',
    ctaBtn: 'Iniciar una búsqueda ↗',
    readMore: 'Leer →',
    close: 'Cerrar ↑',
    challenge: 'El desafío',
    approach: 'Nuestro enfoque',
    result: 'El resultado',
  },
}

// ── STATS ─────────────────────────────────────────────────────────────
const stats = {
  en: [
    { value: '450+', label: 'Hirings completed',    sub: 'since 2008' },
    { value: '70+',  label: 'Client companies',     sub: 'across 3 continents' },
    { value: '94%',  label: 'Retention at 6 months', sub: 'industry avg: ~60%' },
    { value: '16',   label: 'Years in market',       sub: 'founded Buenos Aires, 2008' },
  ],
  es: [
    { value: '450+', label: 'Contrataciones realizadas', sub: 'desde 2008' },
    { value: '70+',  label: 'Empresas clientes',         sub: 'en 3 continentes' },
    { value: '94%',  label: 'Retención a 6 meses',       sub: 'promedio industria: ~60%' },
    { value: '16',   label: 'Años en el mercado',         sub: 'fundada Buenos Aires, 2008' },
  ],
}

// ── REGIONS ───────────────────────────────────────────────────────────
const regions = [
  { label: 'United States', projects: 44, x: 19, y: 38 },
  { label: 'Argentina',     projects: 34, x: 29, y: 76 },
  { label: 'México',        projects: 6,  x: 17, y: 50 },
  { label: 'España',        projects: 2,  x: 47, y: 31 },
  { label: 'Germany',       projects: 1,  x: 51, y: 27 },
  { label: 'Global/Remote', projects: 60, x: 73, y: 44 },
]

// ── CASE STUDIES ──────────────────────────────────────────────────────
const cases = [
  {
    slug: 'redhat',
    client: 'Red Hat',
    type: { en: 'Market Study + Consulting', es: 'Estudio de Mercado + Consultoría' },
    region: 'LATAM — Argentina, Perú, Chile, Brasil',
    year: '2023–2024',
    headline: {
      en: 'Mapping senior tech talent across Latin America for a global enterprise',
      es: 'Mapeo de talento técnico senior en toda América Latina para una empresa global',
    },
    challenge: {
      en: "Red Hat needed to understand the availability and compensation landscape for senior technical profiles — Java Engineers, Software Architects, Cloud Infrastructure specialists — across four countries simultaneously. A traditional search alone wouldn't answer the question.",
      es: 'Red Hat necesitaba entender la disponibilidad y el contexto salarial de perfiles técnicos senior — Programadores Java, Arquitectos de Software, especialistas en Cloud — en cuatro países al mismo tiempo. Una búsqueda tradicional sola no respondía la pregunta.',
    },
    approach: {
      en: "Bondy ran a regional talent mapping exercise across Argentina, Perú, Chile and Brazil. We analyzed 156 profiles in total, conducting structured evaluations on technical depth, compensation expectations, and market availability. The engagement combined direct sourcing with strategic consulting to deliver a complete picture of the market — not just a shortlist.",
      es: 'Bondy realizó un mapeo regional de talento en Argentina, Perú, Chile y Brasil. Analizamos 156 perfiles en total, realizando evaluaciones estructuradas sobre profundidad técnica, expectativas salariales y disponibilidad de mercado. El proyecto combinó sourcing directo con consultoría estratégica para entregar una visión completa del mercado — no solo un shortlist.',
    },
    result: {
      en: "One hire placed (Programador Java, Perú), alongside a comprehensive market map covering 4 countries and 156 profiles. Red Hat gained clarity on realistic compensation ranges, candidate availability by country, and the architectural talent density in the region — input that informed their hiring strategy beyond the immediate openings.",
      es: 'Una contratación realizada (Programador Java, Perú), junto con un mapa de mercado completo que cubre 4 países y 156 perfiles. Red Hat obtuvo claridad sobre rangos salariales realistas, disponibilidad de candidatos por país y la densidad de talento arquitectónico en la región — insumo que informó su estrategia de contratación más allá de las posiciones abiertas inmediatas.',
    },
    metrics: [
      { n: '156', label: { en: 'profiles analyzed', es: 'perfiles analizados' } },
      { n: '4',   label: { en: 'countries covered', es: 'países cubiertos' } },
      { n: '11',  label: { en: 'roles mapped',       es: 'roles mapeados' } },
    ],
    tags: ['Market Study', 'Senior Technical', 'LATAM', 'Java / AWS'],
  },
  {
    slug: 'arcor',
    client: 'Arcor',
    type: { en: 'Embedded Recruiter / RPO', es: 'Recruiter Embebido / RPO' },
    region: 'Bolivia',
    year: '2022–2023',
    headline: {
      en: 'Building a local tech team from scratch in a thin talent market',
      es: 'Construir un equipo tech local desde cero en un mercado con poco talento disponible',
    },
    challenge: {
      en: "Arcor was expanding operations into Bolivia and needed to hire technical roles in a market with very limited visibility — no established salary benchmarks, few active candidates, and no local recruiter with relevant expertise.",
      es: 'Arcor estaba expandiendo operaciones a Bolivia y necesitaba contratar perfiles técnicos en un mercado con visibilidad muy limitada — sin benchmarks salariales establecidos, pocos candidatos activos y sin recruiters locales con experiencia relevante.',
    },
    approach: {
      en: "Bondy deployed an embedded recruiting model: we operated as an extension of their HR team, running end-to-end sourcing and selection. This meant building sourcing channels from scratch, establishing compensation references for the local market, and adapting screening criteria to realistic local availability.",
      es: 'Bondy desplegó un modelo de recruiting embebido: operamos como extensión de su equipo de RRHH, gestionando el sourcing y la selección de punta a punta. Esto implicó construir canales de sourcing desde cero, establecer referencias salariales para el mercado local y adaptar los criterios de screening a la disponibilidad real.',
    },
    result: {
      en: "Multiple technical hires completed across the engagement. Arcor gained not just candidates, but a repeatable process and market intelligence they could continue to use internally.",
      es: 'Múltiples contrataciones técnicas completadas durante el proyecto. Arcor obtuvo no solo candidatos, sino un proceso replicable e inteligencia de mercado que pudieron seguir usando internamente.',
    },
    metrics: [
      { n: 'RPO',  label: { en: 'engagement model',           es: 'modelo de trabajo' } },
      { n: '1',    label: { en: 'new market entered',          es: 'nuevo mercado abordado' } },
      { n: '0→✓', label: { en: 'benchmarks built from scratch', es: 'benchmarks construidos desde cero' } },
    ],
    tags: ['RPO', 'Embedded', 'Bolivia', 'Market Entry'],
  },
  {
    slug: 'disbyte',
    client: 'Disbyte',
    type: { en: 'TA Consulting + Execution', es: 'Consultoría TA + Ejecución' },
    region: 'Argentina',
    year: '2024',
    headline: {
      en: 'Rebuilding a hiring process that had stopped producing results',
      es: 'Reconstruir un proceso de contratación que había dejado de dar resultados',
    },
    challenge: {
      en: "Disbyte had an internal TA function that was generating volume — but not quality. Processes were long, rejection rates were high, and the team was spending weeks on candidates who shouldn't have reached the interview stage.",
      es: 'Disbyte tenía una función de TA interna que generaba volumen, pero no calidad. Los procesos eran largos, las tasas de rechazo eran altas, y el equipo pasaba semanas con candidatos que no debían haber llegado a la etapa de entrevista.',
    },
    approach: {
      en: "Bondy ran a TA consulting engagement: we audited the existing funnel, identified where the process was breaking down, and redesigned the brief-to-shortlist workflow. We then ran the first two searches under the new model to validate the approach with the internal team.",
      es: 'Bondy realizó un proyecto de consultoría TA: auditamos el funnel existente, identificamos dónde se rompía el proceso y rediseñamos el flujo de brief a shortlist. Luego ejecutamos las primeras dos búsquedas bajo el nuevo modelo para validar el enfoque con el equipo interno.',
    },
    result: {
      en: "Three positions filled. More importantly, the internal team now had a diagnostic framework they could apply to future searches — reducing time-to-shortlist and increasing the quality of candidates reaching final interviews.",
      es: 'Tres posiciones cubiertas. Más importante: el equipo interno ahora tiene un framework de diagnóstico que pueden aplicar a futuras búsquedas — reduciendo el tiempo hasta el shortlist y aumentando la calidad de los candidatos en entrevistas finales.',
    },
    metrics: [
      { n: '3',  label: { en: 'positions filled',         es: 'posiciones cubiertas' } },
      { n: 'TA', label: { en: 'consulting + execution',   es: 'consultoría + ejecución' } },
      { n: '↓',  label: { en: 'time-to-shortlist reduced', es: 'tiempo a shortlist reducido' } },
    ],
    tags: ['TA Consulting', 'Process Design', 'Argentina'],
  },
]

const industries = [
  'B2B SaaS', 'Fintech', 'Gaming', 'E-commerce', 'Data & Analytics',
  'Blockchain / Web3', 'Healthcare Tech', 'Logistics Tech', 'Telecom',
  'Enterprise Software', 'Marketplace', 'EdTech',
]

// ── MAP ───────────────────────────────────────────────────────────────
function WorldMap({ lang }: { lang: Lang }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const totalProjects = regions.reduce((a, r) => a + r.projects, 0)

  return (
    <div>
      <div className="relative w-full" style={{ paddingBottom: '48%' }}>
        {/* Simplified world map SVG */}
        <svg viewBox="0 0 100 48" className="absolute inset-0 w-full h-full" fill="none">
          {/* North America */}
          <path d="M5,8 L22,7 L24,12 L22,20 L20,26 L22,33 L19,38 L15,40 L12,36 L10,28 L7,20 L5,14 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
          {/* South America */}
          <path d="M22,38 L32,37 L34,42 L32,46 L28,47 L24,44 L22,40 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
          {/* Europe */}
          <path d="M44,7 L56,7 L57,13 L54,17 L50,15 L46,17 L43,14 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
          {/* Africa */}
          <path d="M44,19 L54,19 L56,27 L54,36 L50,40 L46,36 L43,27 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
          {/* Asia */}
          <path d="M57,7 L82,7 L84,15 L80,21 L72,23 L63,21 L59,16 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
          {/* Australia */}
          <path d="M74,30 L84,29 L85,37 L77,38 L73,34 Z" fill="#F9F8F6" opacity="0.08" stroke="#F9F8F6" strokeWidth="0.15"/>
        </svg>

        {/* Region dots */}
        {regions.map((r) => {
          const isHovered = hovered === r.label
          const size = Math.max(6, Math.min(16, r.projects / 3.5))
          return (
            <div
              key={r.label}
              className="absolute cursor-pointer"
              style={{
                left: `${r.x}%`,
                top: `${r.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHovered(r.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pulse */}
              <div
                className="absolute rounded-full animate-ping"
                style={{
                  width: size * 2,
                  height: size * 2,
                  top: -size / 2,
                  left: -size / 2,
                  background: '#C06A2D',
                  opacity: isHovered ? 0.3 : 0.1,
                }}
              />
              {/* Dot */}
              <div
                className="relative rounded-full transition-all duration-200"
                style={{
                  width: size,
                  height: size,
                  background: isHovered ? '#C06A2D' : '#E05C00',
                  boxShadow: isHovered ? '0 0 14px #C06A2D60' : 'none',
                }}
              />
              {/* Tooltip */}
              {isHovered && (
                <div
                  className="absolute z-20 whitespace-nowrap pointer-events-none"
                  style={{
                    bottom: '140%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '8px 12px',
                  }}
                >
                  <div className="font-mono-bondy text-[9px] tracking-widest uppercase text-b-orange mb-1">
                    {r.label}
                  </div>
                  <div className="font-display text-sm font-bold text-b-off">
                    {r.projects} {lang === 'es' ? 'proyectos' : 'projects'}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-5">
        {regions.map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <div
              className="rounded-full flex-shrink-0"
              style={{
                width: Math.max(5, Math.min(10, r.projects / 5)),
                height: Math.max(5, Math.min(10, r.projects / 5)),
                background: '#E05C00',
              }}
            />
            <span className="font-mono-bondy text-[10px] tracking-widest text-b-mid">
              {r.label} <span className="text-white/25">({r.projects})</span>
            </span>
          </div>
        ))}
        <div className="ml-auto font-mono-bondy text-[10px] tracking-widest text-white/25">
          {totalProjects} {copy[lang].mapSub}
        </div>
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────
export default function WorkPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const c = copy[lang]
  const [openCase, setOpenCase] = useState<string | null>(null)

  return (
    <main className="bg-b-black min-h-screen">
      <Nav />

      {/* ── HEADER + STATS ── */}
      <section className="pt-[73px] border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left — headline */}
          <div className="px-8 md:px-16 py-20 md:py-28 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-8">
                {c.label}
              </div>
              <h1 className="font-display text-[clamp(48px,6vw,80px)] font-black leading-tight tracking-tight text-b-off mb-6">
                {c.h1a}<br />
                <em className="text-b-orange italic">{c.h1b}</em>
              </h1>
              <p className="text-b-mid text-[16px] leading-relaxed font-light max-w-md">
                {c.intro}
              </p>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2">
            {stats[lang].map((s, i) => (
              <div
                key={s.label}
                className={`px-8 py-10 md:px-10 md:py-12 flex flex-col justify-between
                  ${i % 2 === 0 ? 'border-r border-white/10' : ''}
                  ${i < 2 ? 'border-b border-white/10' : ''}
                `}
              >
                <span className="font-mono-bondy text-[9px] tracking-widest uppercase text-white/25 leading-relaxed">
                  {s.sub}
                </span>
                <div>
                  <div className="font-display text-[52px] md:text-[60px] font-black leading-none text-b-off tracking-tight">
                    {s.value.endsWith('+')
                      ? <>{s.value.slice(0, -1)}<span className="text-b-orange text-[28px]">+</span></>
                      : s.value
                    }
                  </div>
                  <div className="text-b-mid text-xs font-light mt-2 leading-relaxed">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="border-b border-white/10">
        <div className="px-8 md:px-16 py-8 border-b border-white/10">
          <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange">
            {c.mapLabel}
          </div>
        </div>
        <div className="px-8 md:px-16 py-12">
          <WorldMap lang={lang} />
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="border-b border-white/10">
        <div className="px-8 md:px-16 py-8 border-b border-white/10">
          <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange">
            {c.casesLabel}
          </div>
        </div>

        <div className="divide-y divide-white/10">
          {cases.map((cs, idx) => (
            <div key={cs.slug}>
              {/* Row — always visible */}
              <div
                className="px-8 md:px-16 py-10 md:py-12 grid grid-cols-1 md:grid-cols-[56px_1fr_auto] gap-6 md:gap-10 items-start cursor-pointer group hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenCase(openCase === cs.slug ? null : cs.slug)}
              >
                <span className="font-mono-bondy text-[10px] text-b-orange tracking-widest pt-1">
                  0{idx + 1}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-b-off tracking-tight">
                      {cs.client}
                    </h2>
                    <span className="font-mono-bondy text-[9px] tracking-widest uppercase text-b-orange border border-b-orange/25 px-2 py-1">
                      {cs.type[lang]}
                    </span>
                  </div>
                  <p className="text-b-mid text-[15px] font-light leading-relaxed max-w-2xl mb-4">
                    {cs.headline[lang]}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono-bondy text-[9px] tracking-widest text-white/30">{cs.region}</span>
                    <span className="text-white/15">·</span>
                    <span className="font-mono-bondy text-[9px] tracking-widest text-white/25">{cs.year}</span>
                  </div>
                </div>

                <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-mid group-hover:text-b-orange transition-colors pt-1 shrink-0">
                  {openCase === cs.slug ? c.close : c.readMore}
                </div>
              </div>

              {/* Expanded */}
              {openCase === cs.slug && (
                <div className="border-t border-white/10 bg-white/[0.015] px-8 md:px-16 py-12 md:py-16">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-8 mb-14 pb-14 border-b border-white/10">
                    {cs.metrics.map((m) => (
                      <div key={m.label[lang]} className="border-l-2 border-b-orange/20 pl-6">
                        <div className="font-display text-[40px] font-black text-b-off leading-none mb-2">
                          {m.n}
                        </div>
                        <div className="font-mono-bondy text-[9px] tracking-widest uppercase text-b-mid">
                          {m.label[lang]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Three columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                      <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-5">
                        {c.challenge}
                      </div>
                      <p className="text-b-mid text-[14px] leading-relaxed font-light">{cs.challenge[lang]}</p>
                    </div>
                    <div>
                      <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-5">
                        {c.approach}
                      </div>
                      <p className="text-b-mid text-[14px] leading-relaxed font-light">{cs.approach[lang]}</p>
                    </div>
                    <div>
                      <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-5">
                        {c.result}
                      </div>
                      <p className="text-b-mid text-[14px] leading-relaxed font-light">{cs.result[lang]}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-10">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-bondy text-[9px] tracking-widest uppercase text-white/25 border border-white/10 px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="border-b border-white/10 px-8 md:px-16 py-14">
        <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-8">
          {c.industriesLabel}
        </div>
        <div className="flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-mid border border-white/10 px-4 py-2 hover:border-white/25 hover:text-b-off transition-colors"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 md:px-16 py-24 md:py-36 text-center">
        <div className="font-mono-bondy text-[10px] tracking-widest uppercase text-b-orange mb-8">
          {c.ctaLabel}
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-tight tracking-tight text-b-off mb-10">
          {c.ctaH2a}<br />
          <em className="text-b-orange italic">{c.ctaH2b}</em>
        </h2>
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center gap-3 bg-b-orange text-b-black font-mono-bondy text-[11px] tracking-widest uppercase px-10 py-5 hover:bg-b-orange/90 transition-colors"
        >
          {c.ctaBtn}
        </Link>
      </section>

      <Footer />
    </main>
  )
}
