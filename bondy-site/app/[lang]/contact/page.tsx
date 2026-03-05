'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'
import type { Lang } from '@/lib/i18n/translations'
import { t } from '@/lib/i18n/translations'

type FormData = {
  name: string; email: string; company: string; role: string; message: string; service: string
}

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const tr = t(lang)
  const c = tr.contact
  const lk = (href: string) => `/${lang}${href}`

  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', role: '', message: '', service: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    padding: '14px 0',
    color: '#F4F2EE',
    fontSize: '16px',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'DM Mono, monospace',
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#C06A2D',
    display: 'block',
    marginBottom: '10px',
  }

  return (
    <main className="bg-b-black min-h-screen">
      <Nav lang={lang} tr={tr.nav} />

      <section className="pt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - 60px)' }}>

          {/* Left */}
          <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 md:px-16 py-20 md:py-28 flex flex-col justify-between">
            <div>
              <div style={labelStyle}>{c.label}</div>
              <h1 className="font-display font-black leading-tight tracking-tight text-b-off mb-8" style={{ fontSize: 'clamp(40px,5vw,68px)' }}>
                {c.h1_1}<br />{c.h1_2} <em style={{ color: '#C06A2D', fontStyle: 'italic' }}>{c.h1_em}</em>
              </h1>
              <p style={{ color: '#AEADA9', fontSize: '16px', lineHeight: 1.75, fontWeight: 300, maxWidth: '360px', marginBottom: '3rem' }}>
                {c.intro}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>{c.emailLabel}</div>
                  <a href="mailto:hola@wearebondy.com" style={{ color: '#F4F2EE', fontSize: '16px', fontWeight: 300, textDecoration: 'none' }}>hola@wearebondy.com</a>
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>{c.linkedinLabel}</div>
                  <a href="https://linkedin.com/company/bondygroup" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300, textDecoration: 'none' }}>/company/bondygroup ↗</a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>{c.joiningLabel}</div>
              <p style={{ color: '#AEADA9', fontSize: '16px', fontWeight: 300, lineHeight: 1.72 }}>{c.joiningBody}</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="px-8 md:px-16 py-20 md:py-28">
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center">
                <div className="font-display font-black text-b-off mb-4" style={{ fontSize: '36px' }}>{c.success.title}</div>
                <p style={{ color: '#AEADA9', fontSize: '16px', fontWeight: 300, lineHeight: 1.75, maxWidth: '360px' }}>{c.success.body}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <label style={labelStyle}>{c.form.serviceLabel}</label>
                  <select name="service" value={form.service} onChange={handleChange} required style={{ ...inputStyle, appearance: 'none' as const }}>
                    <option value="" disabled>{c.form.servicePlaceholder}</option>
                    {c.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label style={labelStyle}>{c.form.nameLabel}</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder={c.form.namePlaceholder} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>{c.form.emailLabel}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.form.emailPlaceholder} style={inputStyle} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label style={labelStyle}>{c.form.companyLabel}</label>
                    <input name="company" value={form.company} onChange={handleChange} required placeholder={c.form.companyPlaceholder} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>{c.form.roleLabel}</label>
                    <input name="role" value={form.role} onChange={handleChange} placeholder={c.form.rolePlaceholder} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{c.form.messageLabel}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={c.form.messagePlaceholder} style={{ ...inputStyle, resize: 'none' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#C06A2D', color: '#0E0E0E', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer', fontWeight: 500, opacity: status === 'loading' ? 0.5 : 1 }}
                  >
                    {status === 'loading' ? c.form.sending : c.form.submit}
                  </button>
                  {status === 'error' && (
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: '#F87171', letterSpacing: '0.1em' }}>
                      {c.form.errorMsg}
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer lang={lang} tr={tr.footer} />
    </main>
  )
}
