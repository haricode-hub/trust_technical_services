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

  const activeSection = 'automation-services'
  const isServiceActive = true

  const goTo = (id) => {
    if (id === 'home') return router.push('/')
    if (id === 'our-team') return router.push('/about')
    if (id === 'test-tag') return router.push('/test-tag')
    if (id === 'electronics') return router.push('/electronics')
    if (id === 'automation-services') return router.push('/automation-services')
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
              <li>Automation Services</li>
              <li className="ml-3 text-xs">• PLC Programming & Integration</li>
              <li className="ml-3 text-xs">• SCADA & HMI Development</li>
              <li className="ml-3 text-xs">• System Upgrades & Retrofits</li>
              <li className="ml-3 text-xs">• Instrumentation & Calibration</li>
              <li className="ml-3 text-xs">• Testing & Commissioning</li>
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

const automationService = {
  id: 'automation-services',
  title: 'Automation Services',
  description:
    'Comprehensive industrial automation solutions including PLC programming, SCADA development, and control system integration for enhanced operational efficiency.',
  image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
  features: [
    'PLC Programming & Integration - Custom programming and seamless industrial system integration',
    'SCADA & HMI Development - Advanced monitoring and control solutions',
    'Control System Upgrades & Retrofits - Modernizing automation with latest technologies',
    'Instrumentation & Calibration - Accurate industrial instrument maintenance',
    'Electrical Testing & Commissioning - Comprehensive MCC and power distribution testing',
    'Automation Troubleshooting & Maintenance - Fast diagnosis and system optimization',
    'Project Engineering & Documentation - Complete lifecycle support and FDS documentation',
    'Training & Knowledge Transfer - Hands-on programs for system operation and maintenance',
  ],
  automationTypes: {
    'PLC Programming & Integration': {
      description:
        'Custom PLC programming, configuration, and seamless integration for industrial systems. We design and implement control logic that ensures optimal performance, safety, and reliability across diverse manufacturing and process industries.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwbGMlMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Custom control logic development',
        'Multi-platform PLC programming (Allen-Bradley, Siemens, Schneider)',
        'System integration and commissioning',
        'Safety system implementation',
        'Remote monitoring capabilities',
        'Preventive maintenance programming',
      ],
    },
    'SCADA & HMI Development': {
      description:
        'Design and development of advanced SCADA and HMI solutions for real-time monitoring and control. Our systems provide intuitive interfaces and comprehensive data visualization for enhanced operational decision-making.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxzY2FkYSUyMGhtaXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Real-time data visualization',
        'Alarm management systems',
        'Historical data trending',
        'Remote access capabilities',
        'Multi-user security levels',
        'Custom reporting and analytics',
      ],
    },
    'Control System Upgrades & Retrofits': {
      description:
        'Modernizing outdated automation systems with the latest PLC, SCADA, and network technologies. We ensure minimal downtime while upgrading systems to improve efficiency, safety, and compliance.',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwc3lzdGVtJTIwdXBncmFkZXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Legacy system assessment',
        'Migration planning and execution',
        'Network infrastructure upgrades',
        'Minimal downtime implementation',
        'Training on new systems',
        'Documentation and support',
      ],
    },
    'Instrumentation & Calibration': {
      description:
        'Accurate calibration, installation, and maintenance of industrial instruments for reliable operations. We ensure precise measurements and optimal performance of all process instrumentation.',
      image:
        'https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YXRpb24lMjBjYWxpYnJhdGlvbnxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Precision instrument calibration',
        'Installation and commissioning',
        'Preventive maintenance programs',
        'Compliance certification',
        'Field device configuration',
        'Loop testing and validation',
      ],
    },
    'Electrical Testing & Commissioning': {
      description:
        'Comprehensive testing and commissioning of MCC panels, power distribution, and protection systems. We ensure electrical systems meet safety standards and operational requirements.',
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'MCC panel testing',
        'Power distribution verification',
        'Protection system validation',
        'Electrical safety compliance',
        'Load testing and analysis',
        'Documentation and certification',
      ],
    },
    'Automation Troubleshooting & Maintenance': {
      description:
        'Fast and reliable diagnosis, repair, and optimization of automation systems to reduce downtime. Our expert technicians provide 24/7 support to keep your operations running smoothly.',
      image:
        'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0cm91Ymxlc2hvb3RpbmclMjBtYWludGVuYW5jZXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        '24/7 emergency support',
        'Rapid fault diagnosis',
        'Preventive maintenance schedules',
        'System optimization',
        'Spare parts management',
        'Performance monitoring',
      ],
    },
    'Project Engineering & Documentation': {
      description:
        'Complete project lifecycle support — from design, FDS documentation, and integration to execution. We provide comprehensive engineering services ensuring projects are delivered on time and within budget.',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Project design and planning',
        'Functional Design Specification (FDS)',
        'System integration management',
        'Quality assurance and testing',
        'As-built documentation',
        'Project delivery and handover',
      ],
    },
    'Training & Knowledge Transfer': {
      description:
        'Hands-on training programs to equip teams with the skills to operate and maintain automation systems. We provide comprehensive education to ensure optimal system utilization and reduced dependency.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHByb2dyYW18ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
      features: [
        'Customized training programs',
        'Hands-on practical sessions',
        'System operation training',
        'Maintenance best practices',
        'Troubleshooting techniques',
        'Certification and competency assessment',
      ],
    },
  },
}

function AutomationContent() {
  const [activeAutomationType, setActiveAutomationType] = useState(null)
  const service = automationService

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Automation Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Industrial automation solutions including PLC, SCADA, and control systems for reliable operations.
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
                {/* Internal Navigation for Automation Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(service.automationTypes).map((automationType) => (
                    <button
                      key={automationType}
                      onClick={() => setActiveAutomationType(activeAutomationType === automationType ? null : automationType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeAutomationType === automationType ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {automationType}
                    </button>
                  ))}
                </div>

                {/* Show selected automation type details */}
                {activeAutomationType && (
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-4">{activeAutomationType}</h3>
                    <p className="text-gray-300 mb-4 text-justify">{service.automationTypes[activeAutomationType].description}</p>
                    <ul className="space-y-3">
                      {service.automationTypes[activeAutomationType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeAutomationType && service.features && (
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

export default function AutomationServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <AutomationContent />
      <Footer />
    </div>
  )
}
