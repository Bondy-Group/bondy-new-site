import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, linkedin, roleInterest, yearsExperience, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const response = await fetch(`${supabaseUrl}/rest/v1/job_applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name,
          email,
          linkedin: linkedin || null,
          role_interest: roleInterest || null,
          years_experience: yearsExperience || null,
          message,
          status: 'pending',
          source: 'new-website',
          created_at: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const errText = await response.text()
        console.error('Supabase job_applications error:', errText)
      }
    } else {
      console.log('Job application (Supabase not configured):', {
        name, email, linkedin, roleInterest, yearsExperience, message
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Job applications API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
