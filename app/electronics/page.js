'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

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

  const activeSection = 'electronics'
  const isServiceActive = true

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
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
                      <Link
                        key={service.id}
                        href={
                          service.id === 'test-tag'
                            ? '/test-tag'
                            : service.id === 'electronics'
                            ? '/electronics'
                            : service.id === 'digital-solutions'
                            ? '/digital-solutions'
                            : service.id === 'automation-services'
                            ? '/automation-services'
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

            {mainNavItems.slice(1).map((item) => (
              item.id === 'our-team' ? (
                <Link key={item.id} href="/about" className={`text-sm font-medium transition-colors py-2 ${activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'}`}>
                  {item.label}
                </Link>
              ) : item.id === 'faq' ? (
                <Link key={item.id} href="/faq" className={`text-sm font-medium transition-colors py-2 ${activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'}`}>
                  {item.label}
                </Link>
              ) : item.id === 'contact' ? (
                <Link key={item.id} href="/contact" className={`text-sm font-medium transition-colors py-2 ${activeSection === item.id ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-300 hover:text-white'}`}>
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
                <Link
                  key={service.id}
                  href={
                    service.id === 'test-tag'
                      ? '/test-tag'
                      : service.id === 'electronics'
                      ? '/electronics'
                      : service.id === 'digital-solutions'
                      ? '/digital-solutions'
                      : service.id === 'automation-services'
                      ? '/automation-services'
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
            <p className="text-gray-400 text-sm">Phone: +64 220980511</p>
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

const service = {
  id: 'electronics',
  title: 'Electronics Design',
  description:
    'Professional PCB design, embedded systems development, and hardware prototyping solutions with comprehensive expertise from concept to manufacturing.',
  image: '/jShzvkxcTdWEsLAEFwi4qg.webp',
  features: [
    'Custom PCB Design & Layouts - Multi-layer boards (rigid, flex, rigid-flex)',
    'Embedded System Architecture - Microcontroller integration & block diagrams',
    'Circuit Design & Simulation - Analog, digital, RF, and low-power systems',
    'Documentation & Manufacturing Support - Complete BOMs & production files',
    'Compliance & Testing - AS/NZS 3100, CE, FCC & EMC validation',
  ],
  designTypes: {
    'Custom PCB Design & Layouts': {
      description:
        'Complete PCB design solutions from concept to production-ready layouts. We specialize in multi-layer board designs including rigid, flex, and rigid-flex configurations with advanced SMT and through-hole component layouts for optimal performance and manufacturability.',
      features: [
        'Multi-layer boards (rigid, flex, and rigid-flex)',
        'SMT & through-hole layouts',
        '3D modeling for accurate visualization',
        'High-speed digital design',
        'RF and microwave layouts',
        'Component placement optimization',
      ],
    },
    'Embedded System Architecture': {
      description:
        'Comprehensive embedded system design and architecture planning. From microcontroller selection to complete system integration, we ensure your embedded solutions meet performance requirements while maintaining compliance with industry standards.',
      features: [
        'Microcontroller integration & block diagrams',
        'Technology evaluation & standards-compliant workflows',
        'System-on-chip (SoC) solutions',
        'Real-time operating system (RTOS) integration',
        'Hardware-software co-design',
        'Performance optimization strategies',
      ],
    },
    'Circuit Design, Simulation & Prototyping': {
      description:
        'Advanced circuit design and simulation services covering analog, digital, RF, and low-power systems. We provide complete prototyping solutions including solar energy harvesting and noise-optimized designs with EMI/EMC compliance from the ground up.',
      features: [
        'Analog, digital, RF, and low-power systems',
        'Solar energy harvesting & noise-optimized designs',
        'EMI/EMC-aware schematics for compliance',
        'SPICE simulation and analysis',
        'Rapid prototyping and testing',
        'Power management solutions',
      ],
    },
    'Documentation & Manufacturing Support': {
      description:
        'Complete documentation packages and manufacturing support to ensure smooth production scaling. From detailed BOMs to factory programming, we provide comprehensive support for successful product launches and ongoing manufacturing.',
      features: [
        'Complete BOMs & production files',
        'Version-controlled design data',
        'Factory programming & support for scalable manufacturing',
        'Assembly drawings and specifications',
        'Test procedures and quality control',
        'Supply chain optimization',
      ],
    },
    'Compliance & Testing': {
      description:
        'Comprehensive compliance testing and validation services ensuring your products meet international standards. We provide complete testing solutions including fault analysis and performance verification to guarantee regulatory approval and market readiness.',
      features: [
        'AS/NZS 3100, CE, FCC & EMC validation',
        'Fault tree analysis & endurance testing',
        'Comprehensive performance verification',
        'Safety standard compliance',
        'Environmental testing coordination',
        'Certification support and documentation',
      ],
    },
  },
}

function ElectronicsContent() {
  const [activeDesignType, setActiveDesignType] = useState(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Electronics Design</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Professional PCB design, embedded systems, and hardware prototyping solutions from concept to manufacturing.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">{service.description}</p>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(service.designTypes).map((designType) => (
                    <button
                      key={designType}
                      onClick={() => setActiveDesignType(activeDesignType === designType ? null : designType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeDesignType === designType ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {designType}
                    </button>
                  ))}
                </div>

                {activeDesignType && (
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-4">{activeDesignType}</h3>
                    <p className="text-gray-300 mb-4 text-justify">{service.designTypes[activeDesignType].description}</p>
                    <ul className="space-y-3">
                      {service.designTypes[activeDesignType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!activeDesignType && service.features && (
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button
                size="lg"
                className="mt-8 bg-orange-500 text-white font-semibold px-8 sm:px-10 py-3 text-base sm:text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-all duration-200 rounded-md border border-orange-600"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Us for Service
              </Button>
            </div>

            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ElectronicsContent />
      <Footer />
    </div>
  )
}
