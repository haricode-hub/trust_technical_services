import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

let client
let db

async function connectToDatabase() {
  if (!client) {
    try {
      client = new MongoClient(process.env.MONGO_URL)
      await client.connect()
      db = client.db('trust_technical_services')
      console.log('Connected to MongoDB')
    } catch (error) {
      console.error('MongoDB connection error:', error)
      throw error
    }
  }
  return { client, db }
}

// Helper function to generate UUID
function generateUUID() {
  return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export async function GET(request, { params }) {
  try {
    const { db } = await connectToDatabase()
    const path = params?.path?.join('/') || ''

    switch (path) {
      case 'health':
        return NextResponse.json({ 
          status: 'ok', 
          message: 'Trust Technical Services API is running',
          timestamp: new Date().toISOString()
        })

      case 'services':
        // Get all services
        const services = await db.collection('services').find({}).toArray()
        return NextResponse.json({ services })

      case 'contact-submissions':
        // Get all contact submissions (admin only)
        const submissions = await db.collection('contact_submissions').find({}).sort({ createdAt: -1 }).toArray()
        return NextResponse.json({ submissions })

      default:
        return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  try {
    const { db } = await connectToDatabase()
    const path = params?.path?.join('/') || ''
    const body = await request.json()

    switch (path) {
      case 'contact':
        // Handle contact form submission
        const { name, email, message } = body

        if (!name || !email || !message) {
          return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
        }

        const contactSubmission = {
          id: generateUUID(),
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          status: 'new',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }

        await db.collection('contact_submissions').insertOne(contactSubmission)

        return NextResponse.json({ 
          success: true, 
          message: 'Contact form submitted successfully',
          submissionId: contactSubmission.id
        })

      case 'services/inquiry':
        // Handle service inquiry
        const { serviceType, customerInfo, inquiryDetails } = body

        if (!serviceType || !customerInfo?.name || !customerInfo?.email) {
          return NextResponse.json({ error: 'Service type and customer information are required' }, { status: 400 })
        }

        const serviceInquiry = {
          id: generateUUID(),
          serviceType,
          customerInfo: {
            name: customerInfo.name.trim(),
            email: customerInfo.email.trim().toLowerCase(),
            phone: customerInfo.phone?.trim() || null,
            company: customerInfo.company?.trim() || null
          },
          inquiryDetails: inquiryDetails?.trim() || '',
          status: 'pending',
          priority: 'normal',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }

        await db.collection('service_inquiries').insertOne(serviceInquiry)

        return NextResponse.json({ 
          success: true, 
          message: 'Service inquiry submitted successfully',
          inquiryId: serviceInquiry.id
        })

      default:
        return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { db } = await connectToDatabase()
    const path = params?.path?.join('/') || ''
    const body = await request.json()

    switch (path) {
      case 'contact-submissions/status':
        // Update contact submission status
        const { submissionId, status } = body

        if (!submissionId || !status) {
          return NextResponse.json({ error: 'Submission ID and status are required' }, { status: 400 })
        }

        const validStatuses = ['new', 'in-progress', 'completed', 'closed']
        if (!validStatuses.includes(status)) {
          return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
        }

        const updateResult = await db.collection('contact_submissions').updateOne(
          { id: submissionId },
          { 
            $set: { 
              status,
              updatedAt: new Date().toISOString()
            }
          }
        )

        if (updateResult.matchedCount === 0) {
          return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
        }

        return NextResponse.json({ 
          success: true, 
          message: 'Submission status updated successfully'
        })

      default:
        return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { db } = await connectToDatabase()
    const path = params?.path?.join('/') || ''
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    switch (path) {
      case 'contact-submissions':
        // Delete contact submission
        if (!id) {
          return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 })
        }

        const deleteResult = await db.collection('contact_submissions').deleteOne({ id })

        if (deleteResult.deletedCount === 0) {
          return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
        }

        return NextResponse.json({ 
          success: true, 
          message: 'Submission deleted successfully'
        })

      default:
        return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}