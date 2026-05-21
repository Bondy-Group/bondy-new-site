'use client'

import { useEffect, useState } from 'react'

type Stat = { num: string; unit: string; label: string; cap: string }
type ModuleRow = { name: string; for: string; desc: string }
type PhaseRow = { range: string; label: string; desc: string }

type Item = {
  id: string
  n: string
  name: string
  sub: string
  body: string
  body2: string
  ideal: string
  stats: readonly Stat[]
  note: string
  modules: readonly ModuleRow[]
  phases: readonly PhaseRow[]
}

type Section = {
  id: string
  n: string
  kicker: string
  title: string
  intro: string
  items: readonly Item[]
}

type Labels = { ideal: string; modules: string; phases: string }

const SERIF = "'Special Elite', Georgia, serif"
const BODY = "'Plus Jakarta Sans', system-ui, sans-serif"

const BG = '#FEFCF9'
const WHITE = '#FFFFFF'
const INK_MID = '#3A3530'
const INK_SUB = '#5A5550'
const INK_FAINT = '#7A7874'
const RULE = '#E8E4DE'
const GREEN = '#4A8C40'
const GREEN_TINT = 'rgba(74,140,64,0.08)'
const GREEN_EDGE = 'rgba(74,140,64,0.35)'

function ItemBody({ item, labels }: { item: Item; labels: Labels }) {
  return (
    <div
      style={{
        padding: '0 clamp(1.5rem,3vw,2.5rem) 1.75rem',
        paddingLeft: 'calc(clamp(1.5rem,3vw,2.5rem) + 52px)',
        background: BG,
        borderTop: `1px solid ${RULE}`,
      }}
    >
      <div style={{ maxWidth: 720 }}>
        {/* Stats panel (Hunting only) */}
        {item.stats.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 12,
              padding: 16,
              background: WHITE,
              border: `1px solid ${RULE}`,
              borderRadius: 12,
              margin: '1.5rem 0 1.25rem',
            }}
          >
            {item.stats.map((s) => (
              <div key={s.label} style={{ padding: '4px 8px' }}>
                <div
                  style={{
                    fontFamily: BODY,
                    fontSize: 9,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: GREEN,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {s.label}
                </div>
                <div
                  className="tw-ink-heavy"
                  style={{
                    fontFamily: SERIF,
                    fontSize: '2.4rem',
                    lineHeight: 1,
                    color: INK_MID,
                    marginBottom: 6,
                  }}
                >
                  {s.num}
                  <span
                    style={{
                      fontSize: '0.42em',
                      color: GREEN,
                      marginLeft: 6,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s.unit}
                  </span>
                </div>
                <div style={{ fontFamily: BODY, fontSize: 12, lineHeight: 1.55, color: INK_SUB }}>
                  {s.cap}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Body paragraphs */}
        <p
          style={{
            fontFamily: BODY,
            fontSize: '14.5px',
            lineHeight: 1.75,
            color: INK_SUB,
            margin: '1.25rem 0 0',
          }}
        >
          {item.body}
        </p>
        {item.body2 && (
          <p
            style={{
              fontFamily: BODY,
              fontSize: '14.5px',
              lineHeight: 1.75,
              color: INK_SUB,
              margin: '1rem 0 0',
            }}
          >
            {item.body2}
          </p>
        )}

        {/* Modules block (Workshops only) */}
        {item.modules.length > 0 && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem 1.25rem 1rem',
              background: WHITE,
              border: `1px solid ${RULE}`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: BODY,
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GREEN,
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              {labels.modules}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {item.modules.map((m) => (
                <div key={m.name}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: 12,
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ fontFamily: BODY, fontSize: '13.5px', fontWeight: 600, color: INK_MID }}>
                      {m.name}
                    </span>
                    <span
                      style={{
                        fontFamily: BODY,
                        fontSize: 10,
                        color: INK_FAINT,
                        textAlign: 'right',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {m.for}
                    </span>
                  </div>
                  <div style={{ fontFamily: BODY, fontSize: '12.5px', lineHeight: 1.6, color: INK_SUB }}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phases block (Talent OS only) */}
        {item.phases.length > 0 && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem 1.25rem 1rem',
              background: WHITE,
              border: `1px solid ${RULE}`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: BODY,
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GREEN,
                fontWeight: 600,
                marginBottom: 14,
              }}
            >
              {labels.phases}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {item.phases.map((p) => (
                <div
                  key={p.label}
                  style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16, alignItems: 'baseline' }}
                >
                  <span
                    className="tw-ink"
                    style={{ fontFamily: SERIF, fontSize: 13, color: INK_MID, letterSpacing: '0.02em' }}
                  >
                    {p.range}
                  </span>
                  <div>
                    <div style={{ fontFamily: BODY, fontSize: '13.5px', fontWeight: 600, color: INK_MID, marginBottom: 2 }}>
                      {p.label}
                    </div>
                    <div style={{ fontFamily: BODY, fontSize: '12.5px', lineHeight: 1.6, color: INK_SUB }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note pull-quote */}
        {item.note && (
          <div
            className="tw-ink"
            style={{
              marginTop: '1.5rem',
              paddingLeft: 14,
              borderLeft: `2px solid ${GREEN_EDGE}`,
              fontFamily: SERIF,
              fontSize: 14,
              lineHeight: 1.6,
              color: INK_MID,
              letterSpacing: '0.01em',
            }}
          >
            {item.note}
          </div>
        )}

        {/* Ideal for footer */}
        {item.ideal && (
          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: `1px solid ${RULE}`,
              fontFamily: BODY,
              fontSize: '13.5px',
              lineHeight: 1.6,
              color: INK_SUB,
            }}
          >
            <span style={{ fontStyle: 'italic', color: INK_FAINT, marginRight: 8 }}>
              {labels.ideal}:
            </span>
            {item.ideal}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ServicesSectionCard({
  section,
  labels,
  defaultOpenId,
}: {
  section: Section
  labels: Labels
  defaultOpenId?: string
}) {
  const [open, setOpen] = useState<Record<string, boolean>>(
    defaultOpenId ? { [defaultOpenId]: true } : {}
  )

  // Open item from URL hash on mount (e.g. /services#hunting)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const match = section.items.find((it) => it.id === hash)
    if (match) {
      setOpen((o) => ({ ...o, [match.id]: true }))
      // Scroll to the item with a small delay so the layout settles
      requestAnimationFrame(() => {
        const el = document.getElementById(`item-${match.id}`)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 140
          window.scrollTo({ top, behavior: 'auto' })
        }
      })
    }
  }, [section.items])

  return (
    <section
      id={section.id}
      style={{
        background: WHITE,
        border: `1px solid ${RULE}`,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        scrollMarginTop: 130,
        margin: '1.5rem 0',
      }}
    >
      {/* Brand corner accent: green ring */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 18,
          right: 20,
          width: 9,
          height: 9,
          borderRadius: '50%',
          border: `1.5px solid ${GREEN}`,
          background: 'transparent',
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: '2rem clamp(1.5rem,3vw,2.5rem) 1.5rem',
          borderBottom: `1px solid ${RULE}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 14 }}>
          <span
            className="tw-ink"
            style={{
              fontFamily: SERIF,
              fontSize: '2rem',
              lineHeight: 1,
              color: INK_MID,
              letterSpacing: '0.02em',
            }}
          >
            {section.n}
          </span>
          <span
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: GREEN,
              fontWeight: 600,
            }}
          >
            {section.kicker}
          </span>
        </div>
        <h2
          className="tw-ink-heavy"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)',
            lineHeight: 1.15,
            color: INK_MID,
            fontWeight: 400,
            margin: 0,
            letterSpacing: '0.005em',
            maxWidth: 760,
          }}
        >
          {section.title}
        </h2>
        {section.intro && (
          <p
            style={{
              fontFamily: BODY,
              fontSize: '14.5px',
              lineHeight: 1.75,
              color: INK_SUB,
              margin: '1.25rem 0 0',
              maxWidth: 720,
            }}
          >
            {section.intro}
          </p>
        )}
      </div>

      {/* Accordion rows */}
      <div>
        {section.items.map((item, idx) => {
          const isOpen = !!open[item.id]
          return (
            <div
              key={item.id}
              id={`item-${item.id}`}
              style={{ borderTop: idx === 0 ? 'none' : `1px solid ${RULE}` }}
            >
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [item.id]: !o[item.id] }))}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  padding: '1.1rem clamp(1.5rem,3vw,2.5rem)',
                  background: isOpen ? BG : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 120ms ease',
                  fontFamily: BODY,
                }}
                onMouseEnter={(e) => {
                  if (!isOpen) e.currentTarget.style.background = GREEN_TINT
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) e.currentTarget.style.background = 'transparent'
                }}
              >
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: 11,
                    color: GREEN,
                    fontWeight: 500,
                    minWidth: 28,
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.n}
                </span>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: INK_MID,
                    letterSpacing: '-0.005em',
                    minWidth: 220,
                  }}
                  className="services-item-name"
                >
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: INK_FAINT,
                    flex: 1,
                  }}
                  className="services-item-sub"
                >
                  {item.sub}
                </span>
                <span
                  aria-hidden
                  style={{
                    fontSize: 18,
                    color: isOpen ? GREEN : INK_FAINT,
                    transition: 'transform 200ms ease, color 120ms ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    lineHeight: 1,
                  }}
                >
                  ⌄
                </span>
              </button>
              {isOpen && <ItemBody item={item} labels={labels} />}
            </div>
          )
        })}
      </div>
    </section>
  )
}
