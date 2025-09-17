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

  const activeSection = 'test-tag'
  const isServiceActive = true

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
    if (id === 'automation-services') return router.push('/automation-services')
    if (id === 'digital-solutions') return router.push('/digital-solutions')
    if (id === 'elegant-photography') return router.push('/elegant-photography')
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
                  className={`block w/full text-left px-4 py-3 text-sm font-medium transition-colors ${
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
                  className={`block w/full text-left px-4 py-3 text-sm font-medium transition-colors ${
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

const testTagService = {
  id: 'test-tag',
  title: 'Test & Tag Services',
  description:
    'Comprehensive electrical safety testing and compliance certification covering single-phase, 3-phase, RCD testing, and microwave leakage detection. Complete protection for your equipment and peace of mind for your safety.',
  image:
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
  features: [
    'Single Phase Testing - Home & business electrical safety',
    '3 Phase Testing - Industrial equipment compliance',
    'RCD Testing - Residual current device verification',
    'Microwave Leakage Testing - Appliance safety assurance',
  ],
  testingTypes: {
    'Single Phase Testing': {
      description:
        'Professional single-phase safety testing to ensure your equipment is safe and compliant. Our service includes comprehensive checks for electrical hazards like faulty insulation and earth connections, providing crucial protection for your home or business.',
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGVyfGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Comprehensive electrical hazard checks',
        'Faulty insulation detection',
        'Earth connection testing',
        'Safety compliance certification',
      ],
    },
    '3 Phase Testing': {
      description:
        'Ensure safety and compliance for your industrial equipment with our 3-phase testing services. We perform critical checks, including insulation and earth continuity, to protect against shock, fire, and equipment failure, keeping operations safe and running smoothly.',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0aHJlZSUyMHBoYXNlJTIwaW5kdXN0cmlhbHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Industrial equipment safety checks',
        'Insulation resistance testing',
        'Earth continuity verification',
        'Shock and fire protection',
      ],
    },
    'RCD Testing': {
      description:
        'Professional RCD testing is vital for your safety. We test these devices to ensure they trip quickly and correctly, protecting you from electric shock. Our service guarantees your residual current devices are compliant and fully functional.',
      image:
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxyY2QlMjBzd2l0Y2h8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Trip time verification',
        'Correct operation testing',
        'Electric shock protection',
        'Compliance guarantee',
      ],
    },
    'Microwave Leakage Testing': {
      description:
        'Microwave leakage testing to ensure your appliance is safe. Our service measures radiation levels to confirm they are within safe limits, protecting you from potential health risks associated with excessive microwave leakage.',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtaWNyb3dhdmUlMjB0ZXN0aW5nfGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
      features: [
        'Radiation level measurement',
        'Safe limit verification',
        'Health risk protection',
        'Appliance safety assurance',
      ],
    },
  },
}

function TestAndTagContent() {
  const [activeTestingType, setActiveTestingType] = useState(null)
  const service = testTagService

  return (
    <div className="pt-20">
      {/* Test and Tag Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Test and Tag Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Comprehensive electrical safety testing and compliance certification for all your equipment.
          </p>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">{service.description}</p>

              {/* Test & Tag Services with Subsections */}
              <div className="space-y-6">
                {/* Internal Navigation for Testing Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(service.testingTypes).map((testingType) => (
                    <button
                      key={testingType}
                      onClick={() => setActiveTestingType(activeTestingType === testingType ? null : testingType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTestingType === testingType
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {testingType}
                    </button>
                  ))}
                </div>

                {/* Show selected testing type details */}
                {activeTestingType && (
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-4">{activeTestingType}</h3>
                    <p className="text-gray-300 mb-4 text-justify">
                      {service.testingTypes[activeTestingType].description}
                    </p>
                    <ul className="space-y-3">
                      {service.testingTypes[activeTestingType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeTestingType && service.features && (
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

      {/* FAQ Section (just above footer, aligned with left column) */}
      <section id="faq" className="py-16 bg-black/95 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-5">
                  <h3 className="text-lg font-semibold text-orange-400">Do you have videos that explain Test & Tag topics?</h3>
                  <p className="mt-2 text-gray-300">
                    Yes. We regularly post short, helpful videos covering Test & Tag best practices, safety tips, and common questions. Watch them on our YouTube channel:
                    <a
                      href="https://youtube.com/@tts-nz?si=2Ds8JRh8K3LZDUsW"
                      className="ml-2 text-orange-400 underline hover:text-orange-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      youtube.com/@tts-nz
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Right column left intentionally empty to align FAQ with service text column */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default function TestTagPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <TestAndTagContent />
      <Footer />
    </div>
  )
}
