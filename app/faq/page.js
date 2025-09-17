'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function TrustLogo({ className = 'h-14 w-14' }) {
  return <img src="/image.png" alt="Trust Technical Services Logo" className={className} />
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const router = useRouter()

  const mainNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'our-team', label: 'Our Team' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const serviceItems = [
    { id: 'test-tag', label: 'Test & Tag' },
    { id: 'electronics', label: 'Electronic Design' },
    { id: 'automation-services', label: 'Automation Services' },
    { id: 'digital-solutions', label: 'Software | Web Development' },
    { id: 'elegant-photography', label: 'Elegant Photography' },
  ]

  const activeSection = 'faq'
  const isServiceActive = false

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
    if (id === 'automation-services') return router.push('/automation-services')
    if (id === 'digital-solutions') return router.push('/digital-solutions')
    if (id === 'elegant-photography') return router.push('/elegant-photography')
    if (id === 'faq') return router.push('/faq')
    return router.push(`/?go=${encodeURIComponent(id)}`)
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <TrustLogo className="h-12 w-11 text-white" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Trust Technical Services</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'home' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={`flex items-center text-sm font-medium transition-colors py-2 ${
                  isServiceActive ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Services
                <svg className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50" onMouseLeave={() => setIsServicesDropdownOpen(false)}>
                  <div className="py-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.id}
                        href={
                          service.id === 'test-tag'
                            ? '/test-tag'
                            : service.id === 'electronics'
                            ? '/electronics'
                            : service.id === 'automation-services'
                            ? '/automation-services'
                            : service.id === 'digital-solutions'
                            ? '/digital-solutions'
                            : service.id === 'elegant-photography'
                            ? '/elegant-photography'
                            : `/?go=${encodeURIComponent(service.id)}`
                        }
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                          activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {mainNavItems.slice(1).map((item) => (
              item.id === 'our-team' ? (
                <Link
                  key={item.id}
                  href="/about"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'faq' ? (
                <Link
                  key={item.id}
                  href="/faq"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === 'faq' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="px-4 py-2">
              <div className="text-orange-400 text-sm font-semibold mb-2">Our Services</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.id}
                  href={
                    service.id === 'test-tag'
                      ? '/test-tag'
                      : service.id === 'electronics'
                      ? '/electronics'
                      : service.id === 'automation-services'
                      ? '/automation-services'
                      : service.id === 'digital-solutions'
                      ? '/digital-solutions'
                      : service.id === 'elegant-photography'
                      ? '/elegant-photography'
                      : `/?go=${encodeURIComponent(service.id)}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            {mainNavItems.slice(1).map((item) => (
              item.id === 'our-team' ? (
                <Link
                  key={item.id}
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'faq' ? (
                <Link
                  key={item.id}
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === 'faq' ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    goTo(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <TrustLogo className="h-6 w-6 text-white" />
              <span className="text-base sm:text-lg font-bold">Trust Technical Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Your trusted partner in Testing, Safety & Electronics Design Innovation—empowering industries and individuals through safe, resilient, intelligent and reliable technology solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-400 text-base">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Test & Tag Services</li>
              <li className="ml-3 text-xs">• Single Phase Testing</li>
              <li className="ml-3 text-xs">• 3 Phase Testing</li>
              <li className="ml-3 text-xs">• RCD Testing</li>
              <li className="ml-3 text-xs">• Microwave Leakage</li>
              <li>Electronics Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-400 text-base">Contact</h3>
            <p className="text-gray-400 text-sm">Email: salaskjose@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +64 22 150 3679</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FAQContent() {
  // Manage open indices per section to keep sections independent
  const [openGeneral, setOpenGeneral] = useState(null)
  const [openTesting, setOpenTesting] = useState(null)
  const [openSafety, setOpenSafety] = useState(null)

  const generalFaqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide Test & Tag services including single-phase, 3-phase, RCD, and microwave leakage testing, as well as Electronics Design services covering PCB design, embedded systems, and hardware prototyping.',
    },
    {
      question: 'How can I contact you?',
      answer:
        'You can reach us by phone at +64 220980511, email at salaskjose@gmail.com, or visit us at 20 Roslyn Farm Street, Drury 2579.',
    },
    {
      question: 'What are your business hours?',
      answer:
        'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays.',
    },
    {
      question: 'Are your services certified?',
      answer:
        'Yes, our services are certified and comply with standards such as AS/NZS 3100, CE, FCC, and EMC, ensuring all testing and design work meets industry regulations and safety requirements.',
    },
    {
      question: 'Do you have videos that explain Test & Tag topics?',
      answer: (
        <span>
          Yes. We regularly post short, helpful videos covering Test & Tag best practices, safety tips, and common questions. Watch them on our YouTube channel:
          {' '}
          <a
            href="https://youtube.com/@tts-nz?si=2Ds8JRh8K3LZDUsW"
            className="text-orange-400 underline hover:text-orange-300"
            target="_blank"
            rel="noreferrer"
          >
            youtube.com/@tts-nz
          </a>
        </span>
      ),
    },
    {
      question: 'What does “Test & Tag” mean?',
      answer:
        'It’s the process of visually inspecting and electrically testing portable appliances and leads, then attaching a tag that records the result and the next test due date. This helps keep people safe and supports workplace compliance.',
    },
    {
      question: 'Who needs Test & Tag services?',
      answer:
        'Workplaces, schools, hire equipment providers, and public venues generally require regular testing to reduce electrical risk to staff, customers, and visitors. Many organisations include it as part of their compliance and insurance requirements.',
    },
  ]

  const testingTypeFaqs = [
    {
      question: 'How often should equipment be tested?',
      answer:
        'Retest intervals depend on the environment and level of use—high‑use or harsh conditions typically need more frequent checks than low‑risk office spaces. Follow your health & safety policy and applicable NZ standards; we can help set a schedule that suits your site.',
    },
    {
      question: 'What’s the difference between single-phase and three-phase testing?',
      answer:
        'Single-phase testing covers common appliances and leads found in offices and homes, while three-phase testing applies to heavier industrial equipment. The principles are similar, but three-phase equipment typically demands higher current handling and additional checks for safe operation.',
    },
  ]

  const safetyDeviceFaqs = [
    {
      question: 'What does RCD testing cover?',
      answer:
        'RCD (Residual Current Device) testing verifies that safety switches trip correctly and within the required time at specified fault currents. This helps protect people from electric shock and reduces fire risk by ensuring the device cuts power when a leakage to earth is detected.',
    },
    {
      question: 'What happens if equipment fails a test?',
      answer:
        'If an item fails, it should be removed from service immediately. We’ll identify the issue, advise if repair is feasible (e.g., cord or plug replacement), and retest it once fixed. If it cannot be made safe, it should be clearly labeled and disposed of according to your safety policy.',
    },
  ]

  const Section = ({ title, items, openIndex, setOpenIndex }) => (
    <Card className="border border-gray-700 shadow-lg bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl text-orange-400">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-400"></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 flex justify-between items-center text-white text-lg font-semibold transition-colors hover:text-orange-400 focus:outline-none"
            >
              {faq.question}
              <span className="text-orange-400">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-300 text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )

  return (
    <div className="pt-20">
      {/* FAQ Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and electrical safety.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <Section
              title="General"
              items={generalFaqs}
              openIndex={openGeneral}
              setOpenIndex={setOpenGeneral}
            />
            <Section
              title="Testing Types"
              items={testingTypeFaqs}
              openIndex={openTesting}
              setOpenIndex={setOpenTesting}
            />
            <Section
              title="Safety Devices"
              items={safetyDeviceFaqs}
              openIndex={openSafety}
              setOpenIndex={setOpenSafety}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <FAQContent />
      <Footer />
    </div>
  )
}
