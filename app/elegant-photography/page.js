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

  const activeSection = 'elegant-photography'
  const isServiceActive = true

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
    if (id === 'automation-services') return router.push('/automation-services')
    if (id === 'digital-solutions') return router.push('/digital-solutions')
    if (id === 'contact') return router.push('/contact')
    if (id === 'elegant-photography') return router.push('/elegant-photography')
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
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
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
              <li>Elegant Photography</li>
              <li className="ml-3 text-xs">• Event Photography</li>
              <li className="ml-3 text-xs">• Portrait Photography</li>
              <li className="ml-3 text-xs">• Commercial Photography</li>
              <li className="ml-3 text-xs">• Photo Editing & Retouching</li>
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

const photographyService = {
  id: 'elegant-photography',
  title: 'Elegant Photography',
  description:
    "Professional photography services capturing life's precious moments with artistic excellence and technical precision for events, portraits, commercial projects, and specialized photography needs.",
  image:
    'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
  features: [
    'Event Photography - Weddings, corporate events, celebrations, and special occasions',
    'Portrait Photography - Professional headshots, family portraits, and personal branding',
    'Commercial Photography - Product photography, architectural shots, and marketing materials',
    'Photo Editing & Retouching - Professional post-processing and digital enhancement',
  ],
  photographyTypes: {
    'Event Photography': {
      description:
        'Comprehensive event photography services capturing every important moment of your special occasions. From intimate gatherings to large corporate events, we ensure every emotion, detail, and milestone is beautifully preserved with professional quality and artistic vision.',
      features: [
        'Wedding photography and videography',
        'Corporate event documentation',
        'Birthday and anniversary celebrations',
        'Live event coverage',
        'Candid moment capture',
        'Same-day photo delivery options',
      ],
    },
    'Portrait Photography': {
      description:
        'Professional portrait photography services creating stunning individual and group portraits. We specialize in capturing personality, character, and authentic expressions through expert lighting, composition, and post-processing techniques.',
      features: [
        'Professional headshots for business',
        'Family portrait sessions',
        'Individual portrait photography',
        'Graduation and milestone portraits',
        'Creative artistic portraits',
        'LinkedIn and social media profile photos',
      ],
    },
    'Commercial Photography': {
      description:
        'High-quality commercial photography services for businesses and brands. We create compelling visual content that enhances marketing materials, websites, and promotional campaigns with professional-grade equipment and creative expertise.',
      features: [
        'Product photography for e-commerce',
        'Architectural and interior photography',
        'Corporate branding photography',
        'Marketing campaign visuals',
        'Food and beverage photography',
        'Industrial and manufacturing documentation',
      ],
    },
    'Photo Editing & Retouching': {
      description:
        'Professional photo editing and retouching services transforming your images with precision and artistry. Using industry-standard software and techniques, we enhance, restore, and perfect your photographs while maintaining natural authenticity.',
      features: [
        'Color correction and enhancement',
        'Skin retouching and beauty editing',
        'Background removal and replacement',
        'Photo restoration and repair',
        'Artistic filters and effects',
        'Batch processing for large collections',
      ],
    },
  },
}

function PhotographyContent() {
  const [activePhotographyType, setActivePhotographyType] = useState(null)
  const service = photographyService

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Elegant Photography</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Professional photography services capturing life's precious moments with artistic excellence and technical precision.
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
                  {Object.keys(service.photographyTypes).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActivePhotographyType(activePhotographyType === type ? null : type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activePhotographyType === type ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {activePhotographyType && (
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-4">{activePhotographyType}</h3>
                    <p className="text-gray-300 mb-4 text-justify">{service.photographyTypes[activePhotographyType].description}</p>
                    <ul className="space-y-3">
                      {service.photographyTypes[activePhotographyType].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!activePhotographyType && service.features && (
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
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
      
      {/* Gallery Section (moved to bottom) */}
      <section id="gallery" className="py-20 bg-black/95 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">
              Gallery
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A curated selection of moments showcasing our style, attention to detail, and commitment to visual storytelling.
            </p>
          </div>

          <div className="max-w-full lg:max-w-7xl mx-auto">
            <div className="grid gap-3 sm:gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => {
              const num = i + 1
              return (
                <div
                  key={num}
                  className="group relative overflow-hidden rounded-xl bg-gray-800/60 border border-gray-700/60 shadow-lg transition-all duration-300 hover:shadow-orange-500/20"
                >
                  <div className="aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={`/photo_${num}.jpg`}
                      alt={`Photography sample ${num}`}
                      className="h-full w-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                      loading={num > 3 ? 'lazy' : 'eager'}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ElegantPhotographyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PhotographyContent />
      <Footer />
    </div>
  )
}
