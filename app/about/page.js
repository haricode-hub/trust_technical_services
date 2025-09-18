'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  CheckCircle, Shield, Zap, Users, Award, 
  Lightbulb, Target
} from 'lucide-react'

// Local copy of the logo used in the main page to keep design consistent
function TrustLogo({ className = 'h-14 w-14' }) {
  return (
    <img src="/image.png" alt="Trust Technical Services Logo" className={className} />
  )
}

// Navigation (mirrors the styling of the main Navigation, but routes properly)
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

  const activeSection = 'our-team'
  const isServiceActive = serviceItems.some((item) => item.id === activeSection)

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'contact') return router.push('/contact')
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
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((service) => (
                      service.id === 'test-tag' ? (
                        <Link
                          key={service.id}
                          href="/test-tag"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : service.id === 'electronics' ? (
                        <Link
                          key={service.id}
                          href="/electronics"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : service.id === 'digital-solutions' ? (
                        <Link
                          key={service.id}
                          href="/digital-solutions"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : service.id === 'automation-services' ? (
                        <Link
                          key={service.id}
                          href="/automation-services"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : service.id === 'elegant-photography' ? (
                        <Link
                          key={service.id}
                          href="/elegant-photography"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : (
                        <button
                          key={service.id}
                          onClick={() => {
                            goTo(service.id)
                            setIsServicesDropdownOpen(false)
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id ? 'text-orange-400 bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

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
                    activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'contact' ? (
                <Link
                  key={item.id}
                  href="/contact"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'
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

            <div className="px-4 py-2">
              <div className="text-orange-400 text-sm font-semibold mb-2">Our Services</div>
              {serviceItems.map((service) => (
                service.id === 'test-tag' ? (
                  <Link
                    key={service.id}
                    href="/test-tag"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : service.id === 'electronics' ? (
                  <Link
                    key={service.id}
                    href="/electronics"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : service.id === 'digital-solutions' ? (
                  <Link
                    key={service.id}
                    href="/digital-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : service.id === 'automation-services' ? (
                  <Link
                    key={service.id}
                    href="/automation-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : service.id === 'elegant-photography' ? (
                  <Link
                    key={service.id}
                    href="/elegant-photography"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : (
                  <button
                    key={service.id}
                    onClick={() => {
                      goTo(service.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id ? 'text-orange-400 bg-gray-800 rounded' : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </button>
                )
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
                    activeSection === item.id ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'contact' ? (
                <Link
                  key={item.id}
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
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
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Team', href: '/about' },
    { label: 'Test and Tag', href: '/test-tag' },
    { label: 'Electronic Design', href: '/electronics' },
    { label: 'Automation Services', href: '/automation-services' },
    { label: 'Elegant Photography', href: '/elegant-photography' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

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
            <h3 className="font-semibold mb-4 text-orange-400 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
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
            <div className="mt-4">
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-400 underline underline-offset-4">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// About content (copied from the existing AboutPage component to preserve design)
function AboutContent() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Leadership Excellence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto ">
              Meet the visionary leaders driving innovation and excellence in technical solutions
            </p>
          </div>

          {/* Salas Jose Profile */}
          <div className="mb-16">
            <Card className="border border-gray-700 shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mr-6">
                    <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.5 7L20 7.3L16.5 11L17.5 16.5L12 14L6.5 16.5L7.5 11L4 7.3L9.5 7L12 2Z" />
                      <circle cx="12" cy="8" r="1.5" fill="#000" />
                      <path d="M9 14L15 14M10 16L14 16" stroke="#000" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Salas Jose</h3>
                    <p className="text-xl text-orange-400">Founder & Chief Technology Officer</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                      Master's-qualified Embedded Systems Engineer with 6+ years of comprehensive hardware 
                      and software design experience spanning PCB development, microcontroller programming, 
                      and IoT systems integration. Distinguished professional with proven track record of 
                      designing 14+ PCBs across multiple industries including farm automation and forestry 
                      equipment, serving as both technical innovator and academic leader.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Circuit Design', 'Embedded Systems', 'PCB Development', 'IoT Solutions', 'Technical Leadership', 'Product Innovation'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-600/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <Award className="h-5 w-5 mr-3 text-orange-400" />
                      <span>4+ years mentoring & former Assistant Professor</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Shield className="h-5 w-5 mr-3 text-blue-400" />
                      <span>Expert in EMC, compliance & safety standards</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Zap className="h-5 w-5 mr-3 text-green-400" />
                      <span>Advanced microcontroller & RTOS programming</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 mr-3 text-purple-400" />
                      <span>Full-cycle product development & prototyping</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Target className="h-5 w-5 mr-3 text-cyan-400" />
                      <span>SMD soldering expertise (0402, QFN packages)</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Lightbulb className="h-5 w-5 mr-3 text-yellow-400" />
                      <span>Antenna design & RF systems development</span>
                    </div>

                    <div className="flex items-center text-gray-300">
                      <Shield className="h-5 w-5 mr-3 text-indigo-400" />
                      <span>Research publications & academic excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Babitha Kurian Profile */}
          <div className="mb-16">
            <Card className="border border-gray-700 shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                    <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V14.5L9.5 16C9.1 16.4 9.1 17.1 9.5 17.5L11 19L12.5 17.5L14 19L15.5 17.5C15.9 17.1 15.9 16.4 15.5 16L14 14.5V11C15.1 11 16 10.1 16 9M5 16L6.5 17.5L8 16L6.5 14.5L5 16Z" />
                      <circle cx="12" cy="4" r="1" fill="#000" />
                      <rect x="10" y="7" width="4" height="1" fill="#000" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Babitha Kurian</h3>
                    <p className="text-xl text-purple-400">Strategic Advisor & Operations Mentor</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                      Distinguished healthcare operations leader with extensive experience across clinical care, 
                      community health management, and multi-site operations. Babitha brings executive insight, 
                      frontline empathy, and transformational leadership to every organization she guides, 
                      currently overseeing residential healthcare services across multiple Auckland facilities.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Strategic Planning', 'Operations Excellence', 'Team Development', 'Compliance Management', 'Stakeholder Relations'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start text-gray-300">
                      <Users className="h-5 w-5 mr-3 text-purple-400 mt-1" />
                      <span>Leading teams of 35+ professionals across multiple locations</span>
                    </div>
                    <div className="flex items-start text-gray-300">
                      <Award className="h-5 w-5 mr-3 text-pink-400 mt-1" />
                      <span>Clinical background (BDS) with postgraduate Health Management studies</span>
                    </div>
                    <div className="flex items-start text-gray-300">
                      <Shield className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                      <span>Expert in compliance, risk management, and regulatory frameworks</span>
                    </div>
                    <div className="flex items-start text-gray-300">
                      <Lightbulb className="h-5 w-5 mr-3 text-green-400 mt-1" />
                      <span>Specialized in organizational growth and operational excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas of Excellence */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Areas of Excellence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technical solutions backed by years of industry experience and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12" />,
                title: 'Embedded Systems Design',
                description:
                  'Advanced microcontroller programming, IoT integration, and real-time system development with expertise in STM32, Arduino, and ARM architectures.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Safety & Compliance',
                description:
                  'Rigorous adherence to electrical safety standards, EMC design principles, and regulatory compliance across industrial applications.',
                color: 'from-green-500 to-teal-500',
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: 'Technical Education',
                description:
                  'Comprehensive training programs, mentorship initiatives, and knowledge transfer to build capable technical teams.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Project Leadership',
                description:
                  'End-to-end project management from concept to deployment, ensuring timely delivery and exceptional quality standards.',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: <Lightbulb className="h-12 w-12" />,
                title: 'Innovation Solutions',
                description:
                  'Custom PCB design, prototype development, and innovative problem-solving for complex technical challenges.',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: 'Quality Assurance',
                description:
                  'Comprehensive testing methodologies, validation processes, and continuous improvement frameworks for reliable solutions.',
                color: 'from-indigo-500 to-purple-500',
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <CardContent>
                  <div className="p-6 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                      <div className="text-white">{area.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Our Commitment</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 text-justify">
              At Trust Technical Services, we are committed to delivering excellence through innovation, 
              safety, and reliability. Our team combines deep technical expertise with a passion for 
              education and mentorship, ensuring that every project not only meets current needs but 
              also builds capabilities for the future.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <AboutContent />
      <Footer />
    </div>
  )
}
