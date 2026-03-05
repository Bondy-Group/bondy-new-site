'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const SIE = '#C06A2D'
const INK = '#1A1A1A'
const MID = '#888885'
const RULE = '#E8E2DA'
const BG = '#F0EBE3'
const WHITE = '#FFFFFF'

type FormData = {
  name: string
  email: string
  company: string
  role: string
  message: string
  service: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', role: '', message: '', service: '',
  })
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
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-transparent py-4 text-[15px] font-light placeholder-[#B8B2AA] focus:outline-none transition-colors"
  const inputStyle = {
    borderBottom: `1px solid ${RULE}`,
    color: INK,
  }
  const inputFocusStyle = { borderBottomColor: SIE }

  return (
    <main style={{background: BG}} className="min-h-screen">
      <Nav />

      <section className="pt-[73px]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-73px)]">

          {/* Left — context */}
          <div
            className="border-b md:border-b-0 md:border-r px-8 md:px-16 py-20 md:py-28 flex flex-col justify-between"
            style={{borderColor: RULE, background: WHITE}}
          >
            <div>
              <div className="font-mono-bondy text-[10px] tracking-widest uppercase mb-10" style={{color: SIE}}>
                Get in touch
              </div>
              <h1 className="font-display text-[clamp(40px,5vw,68px)] font-black leading-tight tracking-tight mb-8" style={{color: INK}}>
                Tell us what<br />
                you're <em className="italic" style={{color: SIE}}>building.</em>
              </h1>
              <p className="text-[15px] leading-relaxed font-light max-w-sm mb-12" style={{color: MID}}>
                No forms that go nowhere. No automated responses. Someone from the Bondy team
                will read this and reply within one business day.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="font-mono-bondy text-[10px] tracking-widest uppercase mb-2" style={{color: MID}}>Email</div>
                  <a href="mailto:hola@wearebondy.com" className="text-[15px] font-light transition-colors" style={{color: INK}}>
                    hola@wearebondy.com
                  </a>
                </div>
                <div>
                  <div className="font-mono-bondy text-[10px] tracking-widest uppercase mb-2" style={{color: MID}}>LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/company/bondygroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-light transition-colors"
                    style={{color: MID}}
                  >
                    /company/bondygroup ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t pt-10" style={{borderColor: RULE}}>
              <div className="font-mono-bondy text-[10px] tracking-widest uppercase mb-4" style={{color: MID}}>
                Also hiring?
              </div>
              <p className="text-sm font-light leading-relaxed" style={{color: MID}}>
                If you're a recruiter interested in joining the Bondy team,
                drop us a note at the same address with "join" in the subject.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="px-8 md:px-16 py-20 md:py-28" style={{background: BG}}>
            {status === 'success' ? (
              <div className="h-full flex flex-col justify-center">
                <div className="font-display text-4xl font-black mb-4" style={{color: INK}}>Got it.</div>
                <p className="text-[15px] font-light leading-relaxed max-w-sm" style={{color: MID}}>
                  We'll get back to you within one business day.
                  In the meantime, feel free to read about our method or browse our thinking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div>
                  <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    style={{...inputStyle, appearance: 'none', WebkitAppearance: 'none'}}
                  >
                    <option value="" disabled>What are you looking for?</option>
                    <option value="hunting">Hunting — Fill a specific role</option>
                    <option value="pipeline">Talent Pipeline — Improve top of funnel</option>
                    <option value="rpo">Embedded Recruiter — Scale hiring</option>
                    <option value="vc">VC / Portfolio partnership</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Your name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="Name"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Work email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      required placeholder="you@company.com"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Company</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      required placeholder="Company name"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Your role</label>
                    <input
                      name="role" value={form.role} onChange={handleChange}
                      placeholder="VP of Eng, CTO..."
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-bondy text-[10px] tracking-widest uppercase block mb-3" style={{color: SIE}}>Tell us about the hire</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    required rows={5}
                    placeholder="What role? What's the context? What have you tried?"
                    className={`${inputClass} resize-none`} style={inputStyle}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-3 font-mono-bondy text-[11px] tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity disabled:opacity-50 text-white"
                    style={{background: SIE}}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send ↗'}
                  </button>
                  {status === 'error' && (
                    <span className="font-mono-bondy text-[10px] tracking-wide" style={{color: '#C0392B'}}>
                      Something went wrong. Try emailing us directly.
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
