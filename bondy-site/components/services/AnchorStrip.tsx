'use client'

import { useEffect, useState, useCallback } from 'react'

type Anchor = { id: string; n: string; label: string }

const SERIF = "'Special Elite', Georgia, serif"
const BODY = "'Plus Jakarta Sans', system-ui, sans-serif"
const GREEN = '#4A8C40'
const INK = '#1A1A1A'
const INK_MID = '#3A3530'
const INK_FAINT = '#7A7874'
const RULE = '#E8E4DE'

export default function AnchorStrip({ anchors }: { anchors: Anchor[] }) {
  const [active, setActive] = useState(anchors[0]?.id ?? '')

  const onClick = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 130
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      let current = anchors[0]?.id ?? ''
      for (const a of anchors) {
        const el = document.getElementById(a.id)
        if (!el) continue
        if (el.getBoundingClientRect().top < 180) current = a.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [anchors])

  return (
    <div
      style={{
        position: 'sticky',
        top: 60,
        zIndex: 50,
        background: 'rgba(254,252,249,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${RULE}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(1.25rem,4vw,3rem)', display: 'flex' }}>
        {anchors.map((a, i) => {
          const isActive = active === a.id
          return (
            <a
              key={a.id}
              href={`#${a.id}`}
              onClick={onClick(a.id)}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                borderLeft: i === 0 ? 'none' : `1px solid ${RULE}`,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 120ms ease',
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: 16,
                  color: GREEN,
                  letterSpacing: '0.02em',
                }}
              >
                {a.n}
              </span>
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? INK : INK_FAINT,
                  transition: 'color 120ms ease',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = INK_MID }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = INK_FAINT }}
              >
                {a.label}
              </span>
              {isActive && (
                <span
                  aria-hidden
                  style={{
                    marginLeft: 'auto',
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: GREEN,
                  }}
                />
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
