import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

type NewsletterEntry = {
  email: string
  created_at: string
}

const filePath = path.join(process.cwd(), '/src/data/newsletter.json')

function readNewsletterFile(): NewsletterEntry[] {
  if (!fs.existsSync(filePath)) return []
  
  const raw = fs.readFileSync(filePath, 'utf-8').trim()

  if (!raw) return [] // Handle empty file

  try {
    return JSON.parse(raw)
  } catch (err) {
    console.error('Invalid JSON format in newsletter.json:', err)
    return []
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const fileContent: NewsletterEntry[] = readNewsletterFile()

  const isDuplicate = fileContent.some((entry) => entry.email === email)
  if (isDuplicate) {
    return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 })
  }

  const newEntry: NewsletterEntry = {
    email,
    created_at: new Date().toISOString(),
  }

  fileContent.push(newEntry)
  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2))

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  const fileContent: NewsletterEntry[] = readNewsletterFile()
  return NextResponse.json(fileContent, { status: 200 })
}
