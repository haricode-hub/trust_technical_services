'use client'

import React, { useEffect, useState } from 'react'
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
            <p className="text-gray-400 text-sm">Phone: 022 098 0511</p>
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
  // Explicit list of FAQ video embeds (first is correct as-is; second updated per provided link)
  const faqVideos = [
    {
      src: 'https://www.youtube.com/embed/9PMviRNumIk',
      title: 'FAQ Video 1',
      oembedUrl: 'https://www.youtube.com/watch?v=9PMviRNumIk',
    },
    {
      src: 'https://www.youtube.com/embed/OrF0vCqlyEI',
      title: 'FAQ Video 2',
      oembedUrl: 'https://www.youtube.com/watch?v=OrF0vCqlyEI',
    },
    {
      src: 'https://www.youtube.com/embed/TeIOu4NfK9M',
      title: 'FAQ Video 3',
      oembedUrl: 'https://www.youtube.com/watch?v=TeIOu4NfK9M',
    },
    {
      src: 'https://www.youtube.com/embed/PBBZYi6pZj0',
      title: 'FAQ Video 4',
      oembedUrl: 'https://www.youtube.com/watch?v=PBBZYi6pZj0',
    },
    {
      src: 'https://www.youtube.com/embed/3313KhcWezg',
      title: 'FAQ Video 5',
      oembedUrl: 'https://www.youtube.com/watch?v=3313KhcWezg',
    },
    {
      src: 'https://www.youtube.com/embed/P8N-F-PquS8',
      title: 'FAQ Video 6',
      oembedUrl: 'https://www.youtube.com/watch?v=P8N-F-PquS8',
    },
    // Add more entries as provided: { src: 'https://www.youtube.com/embed/<VIDEO_ID>', title: 'FAQ Video N', oembedUrl: 'https://www.youtube.com/watch?v=<VIDEO_ID>' }
  ]

  // Resolve each video's actual YouTube title via oEmbed, with safe fallbacks
  const [resolvedTitles, setResolvedTitles] = useState(faqVideos.map((v) => v.title))

  useEffect(() => {
    let isCancelled = false
    const fetchTitles = async () => {
      try {
        const results = await Promise.all(
          faqVideos.map(async (v) => {
            if (!v.oembedUrl) return v.title
            const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(v.oembedUrl)}&format=json`
            try {
              const res = await fetch(endpoint)
              if (!res.ok) throw new Error(`oEmbed HTTP ${res.status}`)
              const data = await res.json()
              return typeof data?.title === 'string' && data.title.trim().length > 0 ? data.title : v.title
            } catch (err) {
              return v.title
            }
          })
        )
        if (!isCancelled) setResolvedTitles(results)
      } catch (_) {
        // Swallow and keep defaults
      }
    }
    fetchTitles()
    return () => {
      isCancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Requirements & Compliance Standards */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Legal Requirements & Compliance Standards</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              All Test & Tag services in New Zealand must comply with the current electrical safety regulations and standards. These include:
            </p>
          </div>
          
          {/* Regulations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* AS/NZS 3760:2022 */}
            <div className="group bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">AS/NZS 3760:2022</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                In-service inspection and testing of electrical equipment and RCDs.
              </p>
            </div>

            {/* Health and Safety at Work Act 2015 */}
            <div className="group bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">Health and Safety at Work Act 2015</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                As a PCBU, you're legally required to ensure electrical equipment is safe.
              </p>
            </div>

            {/* Electrical (Safety) Regulations 2010 */}
            <div className="group bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">Electrical (Safety) Regulations 2010</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Covers obligations for maintaining and testing electrical appliances, including repaired or hired ones.
              </p>
            </div>
          </div>

          {/* Compliance Information */}
          <div className="bg-gradient-to-r from-blue-900/40 to-orange-900/40 border border-orange-500/30 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-semibold text-orange-300">Important Compliance Information</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Non-compliance with these regulations may result in legal penalties, insurance complications, and increased workplace safety risks. 
              <span className="text-orange-300 font-medium"> Stay protected with regular testing and certification.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits: Why Regular Testing & Tagging Matters */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Benefits: Why Regular Testing & Tagging Matters</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Regular testing & tagging provides many advantages for your business and safety:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Safety First */}
            <div className="group bg-gradient-to-br from-green-900/30 to-gray-800 p-6 rounded-xl border border-green-500/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Safety First</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Identify faults early before they cause shocks, fire or hazards.
              </p>
            </div>

            {/* Regulatory Peace of Mind */}
            <div className="group bg-gradient-to-br from-blue-900/30 to-gray-800 p-6 rounded-xl border border-blue-500/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Regulatory Peace of Mind</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Stay compliant and avoid penalties.
              </p>
            </div>

            {/* Reduce Downtime & Costs */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-gray-800 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Reduce Downtime & Costs</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Prevent breakdowns and costly repairs.
              </p>
            </div>

            {/* Insurance Protection */}
            <div className="group bg-gradient-to-br from-yellow-900/30 to-gray-800 p-6 rounded-xl border border-yellow-500/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Insurance Protection</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Supports insurance claims and policy requirements.
              </p>
            </div>

            {/* Reputation & Trust */}
            <div className="group bg-gradient-to-br from-orange-900/30 to-gray-800 p-6 rounded-xl border border-orange-500/30 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Reputation & Trust</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Show staff, clients and stakeholders that safety is a priority.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-gray-800 rounded-xl p-6 text-center border border-orange-500/30">
            <p className="text-gray-300 text-lg">
              <span className="text-orange-300 font-semibold">Professional Service:</span> We provide reminders and detailed test reports so you always know when items are due for retesting.
            </p>
          </div>
        </div>
      </section>

      {/* When Should You Test & Tag? */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">When Should You Test & Tag?</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The frequency of testing depends on the environment and usage:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 3 Months */}
            <div className="bg-gradient-to-r from-red-900/40 to-gray-800 p-6 rounded-xl border border-red-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-red-300">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Every 3 Months</h3>
                  <p className="text-red-300 font-medium">High Risk Environments</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Construction, outdoor, or hostile environments
              </p>
            </div>

            {/* 6 Months */}
            <div className="bg-gradient-to-r from-orange-900/40 to-gray-800 p-6 rounded-xl border border-orange-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-orange-300">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Every 6 Months</h3>
                  <p className="text-orange-300 font-medium">Industrial Use</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Workshops, manufacturing, high use tools
              </p>
            </div>

            {/* 12 Months */}
            <div className="bg-gradient-to-r from-yellow-900/40 to-gray-800 p-6 rounded-xl border border-yellow-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-yellow-300">12</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Every 12 Months</h3>
                  <p className="text-yellow-300 font-medium">Standard Office</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Offices, general appliances
              </p>
            </div>

            {/* 5 Years */}
            <div className="bg-gradient-to-r from-green-900/40 to-gray-800 p-6 rounded-xl border border-green-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-300">5Y</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Up to 5 Years</h3>
                  <p className="text-green-300 font-medium">Protected Equipment</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Rarely moved, protected equipment
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/30 rounded-xl p-6 text-center border border-orange-500/30">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="text-xl font-semibold text-orange-300">Custom Scheduling</h4>
            </div>
            <p className="text-gray-300 text-lg">
              We'll help you design a customised schedule for your workplace.
            </p>
          </div>
        </div>
      </section>

      {/* What Equipment is Included */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">What Equipment is Included</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Test & Tag covers a wide range of plug-in equipment:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Power Tools */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Power Tools & Leads</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Power tools, extension cords, leads
              </p>
            </div>

            {/* Computers */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Office Equipment</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Computers, monitors, printers
              </p>
            </div>

            {/* Kitchen Appliances */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Kitchen Appliances</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Microwaves, ovens, kettles
              </p>
            </div>

            {/* RCDs */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Safety Switches</h3>
              </div>
              <p className="text-gray-300 text-sm">
                RCDs (Safety switches)
              </p>
            </div>

            {/* Lighting & HVAC */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Lighting & HVAC</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Lighting, heaters, fans
              </p>
            </div>

            {/* Hired/Repaired */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:border-orange-500/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Hired & Repaired</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Must be re-tested before reuse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagging & Record Keeping */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Tagging & Record Keeping</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              After equipment passes testing, it is tagged with durable labels and comprehensive records:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Tester/Company */}
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-6 rounded-xl border border-blue-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tester Identity</h3>
              <p className="text-gray-300 text-sm">Certified tester and company details</p>
            </div>

            {/* Date Tested */}
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-6 rounded-xl border border-green-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Test Date</h3>
              <p className="text-gray-300 text-sm">When the testing was completed</p>
            </div>

            {/* Next Due Date */}
            <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 p-6 rounded-xl border border-orange-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Due Date</h3>
              <p className="text-gray-300 text-sm">Next testing required by</p>
            </div>

            {/* Standard Reference */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-xl transform transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Standards</h3>
              <p className="text-gray-300 text-sm">Compliance standard reference</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 rounded-xl p-8 text-center border border-orange-500/30">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Comprehensive Reporting</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              You'll receive a detailed compliance report with reminders for upcoming re-tests, 
              ensuring you never miss a testing deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Risks if You Don't Stay Compliant */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Risks if You Don't Stay Compliant</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Skipping or delaying testing can lead to serious consequences:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Safety Risks */}
            <div className="bg-gradient-to-br from-red-900/40 to-gray-800 p-6 rounded-xl border border-red-500/40 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Safety Hazards</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Electrical shocks, fires, and equipment failure putting lives at risk
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-red-400 text-xs font-medium">HIGH</span>
              </div>
            </div>

            {/* Legal Penalties */}
            <div className="bg-gradient-to-br from-orange-900/40 to-gray-800 p-6 rounded-xl border border-orange-500/40 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Legal Penalties</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Fines and legal action under Health & Safety laws
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <span className="text-orange-400 text-xs font-medium">HIGH</span>
              </div>
            </div>

            {/* Insurance Issues */}
            <div className="bg-gradient-to-br from-yellow-900/40 to-gray-800 p-6 rounded-xl border border-yellow-500/40 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Insurance Claims</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Claim denials and policy complications
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-yellow-400 text-xs font-medium">MED</span>
              </div>
            </div>

            {/* Emergency Costs */}
            <div className="bg-gradient-to-br from-purple-900/40 to-gray-800 p-6 rounded-xl border border-purple-500/40 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Emergency Costs</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Unexpected breakdown and repair expenses
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <span className="text-purple-400 text-xs font-medium">MED</span>
              </div>
            </div>

            {/* Reputation Loss */}
            <div className="bg-gradient-to-br from-blue-900/40 to-gray-800 p-6 rounded-xl border border-blue-500/40 shadow-lg hover:shadow-xl transform transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Reputation Damage</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Loss of trust and compliance failures
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <span className="text-blue-400 text-xs font-medium">MED</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 text-center border border-red-500/30">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h4 className="text-xl font-semibold text-red-300">Prevention is Key</h4>
            </div>
            <p className="text-gray-300 text-lg">
              Don't let these risks become reality. <span className="text-orange-300 font-medium">Stay compliant with regular testing and protect your business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <Button
            size="lg"
            className="bg-orange-500 text-white font-semibold px-8 sm:px-10 py-3 text-base sm:text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-all duration-200 rounded-md border border-orange-600"
            onClick={() => (window.location.href = '/contact')}
          >
            Contact Us for Service
          </Button>
        </div>
      </section>

      {/* FAQ Videos Gallery (Embedded Playlist) */}
      <section id="faq" className="py-16 bg-black/95 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">FAQ Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {faqVideos.map((vid, idx) => (
              <div key={idx} className="group rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow transition-shadow hover:shadow-orange-500/10">
                <div className="aspect-video">
                  <iframe
                    src={vid.src}
                    title={resolvedTitles[idx] || vid.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="px-3 py-3 border-t border-gray-800 bg-gray-900/80">
                  <p className="text-sm text-gray-300 truncate" title={resolvedTitles[idx] || vid.title}>
                    {resolvedTitles[idx] || vid.title}
                  </p>
                </div>
              </div>
            ))}
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
