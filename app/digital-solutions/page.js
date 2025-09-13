'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
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

  const activeSection = 'digital-solutions'
  const isServiceActive = true

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
    if (id === 'automation-services') return router.push('/automation-services')
    if (id === 'digital-solutions') return router.push('/digital-solutions')
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
                  className={`block w/full text-left px-4 py-3 text-sm font-medium transition-colors ${
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
                  className={`block w/full text-left px-4 py-3 text-sm font-medium transition-colors ${
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
              <li>Software | Web Development</li>
              <li className="ml-3 text-xs">• Web Applications & Websites</li>
              <li className="ml-3 text-xs">• Mobile Apps</li>
              <li className="ml-3 text-xs">• E-commerce Solutions</li>
              <li className="ml-3 text-xs">• Custom Software</li>
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

const digitalService = {
  id: 'digital-solutions',
  title: 'Software Services',
  description:
    'Comprehensive web and mobile development services delivering modern, responsive, and user-friendly digital solutions tailored to your business needs.',
  image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
  features: [
    'Web Development - Modern, responsive websites and web applications',
    'Mobile Development - Native and cross-platform mobile applications',
    'E-commerce Solutions - Complete online store development and integration',
    'Custom Software Development - Tailored solutions for business processes',
  ],
  solutionTypes: {
    'Web Development': {
      description:
        'Professional web development services creating modern, responsive, and high-performance websites and web applications. We utilize the latest technologies and frameworks to deliver scalable solutions that meet your business objectives and provide exceptional user experiences.',
      features: [
        'Responsive web design',
        'Modern JavaScript frameworks (React, Next.js)',
        'Progressive Web Applications (PWA)',
        'Search Engine Optimization (SEO)',
        'Performance optimization',
        'Cross-browser compatibility',
      ],
    },
    'Mobile Development': {
      description:
        'Native and cross-platform mobile application development for iOS and Android. We create intuitive, feature-rich mobile apps that provide seamless user experiences while leveraging platform-specific capabilities for optimal performance.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'App Store deployment and optimization',
        'Push notifications and real-time features',
        'Mobile UI/UX design',
        'Performance optimization and testing',
      ],
    },
    'E-commerce Solutions': {
      description:
        'Complete e-commerce development and integration services for businesses looking to establish or enhance their online presence. From custom shopping platforms to payment gateway integration, we deliver comprehensive solutions that drive sales and improve customer satisfaction.',
      features: [
        'Custom e-commerce platforms',
        'Payment gateway integration',
        'Inventory management systems',
        'Shopping cart optimization',
        'Multi-platform compatibility',
        'Analytics and reporting tools',
      ],
    },
    'Custom Software Development': {
      description:
        'Tailored software solutions designed to address specific business challenges and streamline operations. We develop custom applications that integrate seamlessly with existing systems while providing scalable, maintainable, and secure solutions.',
      features: [
        'Business process automation',
        'Database design and optimization',
        'API development and integration',
        'Cloud-based solutions',
        'System architecture planning',
        'Ongoing maintenance and support',
      ],
    },
  },
}

function DigitalContent() {
  const [activeSolutionType, setActiveSolutionType] = useState(null)
  const service = digitalService

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Software Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Comprehensive web and mobile development services delivering modern, responsive, and user-friendly digital solutions.
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
                  {Object.keys(service.solutionTypes).map((solutionType) => (
                    <button
                      key={solutionType}
                      onClick={() => setActiveSolutionType(activeSolutionType === solutionType ? null : solutionType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeSolutionType === solutionType ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {solutionType}
                    </button>
                  ))}
                </div>

                {activeSolutionType && (
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-4">{activeSolutionType}</h3>
                    <p className="text-gray-300 mb-4 text-justify">{service.solutionTypes[activeSolutionType].description}</p>
                    <ul className="space-y-3">
                      {service.solutionTypes[activeSolutionType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!activeSolutionType && service.features && (
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

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <DigitalContent />
      <Footer />
    </div>
  )
}
