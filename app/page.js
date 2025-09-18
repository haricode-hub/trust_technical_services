'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, Shield, Zap, Phone, Mail, MapPin, Users, Award, 
  Lightbulb, Target, Heart 
} from 'lucide-react'

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

// Trust Technical Services Logo Component
function TrustLogo({ className = "h-14 w-14" }) {
  return (
    <img 
      src="/image.png" 
      alt="Trust Technical Services Logo" 
      className={className}
    />
  )
}

// Navigation Component
function Navigation({ activeSection, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  
  const mainNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'our-team', label: 'Our Team' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' }
  ]

  const serviceItems = [
    { id: 'test-tag', label: 'Test & Tag' },
    { id: 'electronics', label: 'Electronic Design' },
    { id: 'automation-services', label: 'Automation Services' },
    { id: 'digital-solutions', label: 'Software | Web Development' },
    { id: 'elegant-photography', label: 'Elegant Photography' }
  ]

  const isServiceActive = serviceItems.some(item => item.id === activeSection)

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <TrustLogo className="h-12 w-11 text-white" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Trust Technical Services
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home Button */}
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors py-2 ${
                activeSection === 'home'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={`flex items-center text-sm font-medium transition-colors py-2 ${
                  isServiceActive
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
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
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ) : (
                        <button
                          key={service.id}
                          onClick={() => {
                            onNavigate(service.id)
                            setIsServicesDropdownOpen(false)
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                            activeSection === service.id
                              ? 'text-orange-400 bg-gray-700'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
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

            {/* Other Navigation Items */}
            {mainNavItems.slice(1).map((item) => (
              item.id === 'our-team' ? (
                <Link
                  key={item.id}
                  href="/about"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id
                      ? 'text-orange-400 border-b-2 border-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'faq' ? (
                <Link
                  key={item.id}
                  href="/faq"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id
                      ? 'text-orange-400 border-b-2 border-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.id === 'contact' ? (
                <Link
                  key={item.id}
                  href="/contact"
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id
                      ? 'text-orange-400 border-b-2 border-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id
                      ? 'text-orange-400 border-b-2 border-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            {/* Home Button */}
            <button
              onClick={() => {
                onNavigate('home')
                setIsMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                activeSection === 'home'
                  ? 'text-orange-400 bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              Home
            </button>
            
            {/* Mobile Services Section */}
            <div className="px-4 py-2">
              <div className="text-orange-400 text-sm font-semibold mb-2">Our Services</div>
              {serviceItems.map((service) => (
                service.id === 'test-tag' ? (
                  <Link
                    key={service.id}
                    href="/test-tag"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
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
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
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
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
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
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
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
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </Link>
                ) : (
                  <button
                    key={service.id}
                    onClick={() => {
                      onNavigate(service.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === service.id
                        ? 'text-orange-400 bg-gray-800 rounded'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded'
                    }`}
                  >
                    {service.label}
                  </button>
                )
              ))}
            </div>

            {/* Other Navigation Items */}
            {mainNavItems.slice(1).map((item) => (
              item.id === 'our-team' ? (
                <Link
                  key={item.id}
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
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
                    activeSection === item.id
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
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
                    activeSection === item.id
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w/full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
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

// Footer Component
function Footer({ onNavigate }) {
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
              {[ 
                { label: 'Home', href: '/' },
                { label: 'Our Team', href: '/about' },
                { label: 'Test and Tag', href: '/test-tag' },
                { label: 'Electronic Design', href: '/electronics' },
                { label: 'Automation Services', href: '/automation-services' },
                { label: 'Elegant Photography', href: '/elegant-photography' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors block">{item.label}</Link>
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
            <h3 className="font-semibold mb-4 text-orange-400 text-base">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>+64 220980511</p>
              <p className="break-all">salaskjose@gmail.com</p>
              <p>20 Roslyn Farm Street</p>
              <p>Drury 2579</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Trust Technical Services. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy-policy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4">
                Privacy Policy
              </Link>
              <button className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Legal Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// PAGE COMPONENTS
// ============================================================================

// Home Page Component
// Home Page Component
function HomePage({ onNavigate, services }) {
  // Function to scroll to Software Services card
  const scrollToServices = () => {
    const softwareServicesCard = document.getElementById('software-services-card')
    if (softwareServicesCard) {
      softwareServicesCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const whyChooseUsFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: 'Safety First',
      description: 'Rigorous testing protocols ensuring complete electrical safety compliance for all equipment.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Technical Innovation',
      description: 'Cutting-edge electronics design with expertise in PCB development and embedded systems.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Trusted Quality',
      description: 'Comprehensive compliance testing meeting IPC, RoHS, and UL standards for reliable results.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(17, 24, 39, 0.8)), url('https://images.unsplash.com/photo-1651340527836-263c5072968e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlc3Rpbmd8ZW58MHx8fGJsdWV8MTc1NjIyNzM5OHww&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Partner in
            <span className="text-orange-400 block">Testing, Safety & Electronics Design Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Empowering  industries and individuals through safe, resilient, intelligent and reliable technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button
            size="lg"
            className="bg-orange-500 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-all duration-200 rounded-md border border-orange-600"
            onClick={() => onNavigate('test-tag')}
          >
            Test & Tag Services
          </Button>

          <Button
            size="lg"
            className="bg-blue-900 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-200 rounded-md border border-blue-800"
            onClick={() => onNavigate('electronics')}
          >
            Electronics Design
          </Button>

          <Button
            size="lg"
            className="bg-gray-700 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:bg-gray-600 hover:scale-105 transform transition-all duration-200 rounded-md border border-gray-600"
            onClick={scrollToServices}
          >
            Other Services
          </Button>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-400 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-lg text-justify">
                  To deliver safe, compliant, and cutting-edge technical solutions while nurturing industry talent and 
                  ensuring the highest standards of electrical safety and innovation across the manufacturing 
                  and business sectors. We are committed to empowering organizations through reliable embedded
                   systems and fostering technological advancement through education and mentorship.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-400 flex items-center">
                  <Lightbulb className="h-8 w-8 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-lg text-justify">
                  To empower industries and individuals through intelligent, safe, and resilient technology—bridging education,
                   embedded hardware innovation, and cybersecurity. With a foundation in advanced electronics engineering and hands-on expertise, our goal is to foster a smarter, 
                  safer world by developing cutting-edge tools, nurturing talent, and protecting systems from the ground up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card 
                key={service.id} 
                id={service.id === 'digital-solutions' ? 'software-services-card' : undefined}
                className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800 text-white"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-orange-400">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base text-justify">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs sm:text-sm text-gray-400 ml-6">
                        <button 
                          onClick={() => onNavigate(service.id)}
                          className="hover:text-orange-400 transition-colors cursor-pointer italic underline"
                        >
                          + {service.features.length - 3} more services...
                        </button>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why Choose Trust Technical Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Ensure Your Equipment's Safety?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Get professional electrical testing, innovative electronics design, and comprehensive safety solutions from Trust Technical Services.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transform transition-all duration-200 rounded-md border border-orange-600"
            onClick={() => onNavigate('contact')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
// Enhanced About Page Component
function AboutPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* About Hero */}
    
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
                      <path d="M12 2L14.5 7L20 7.3L16.5 11L17.5 16.5L12 14L6.5 16.5L7.5 11L4 7.3L9.5 7L12 2Z"/>
                      <circle cx="12" cy="8" r="1.5" fill="#000"/>
                      <path d="M9 14L15 14M10 16L14 16" stroke="#000" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Salas Jose</h3>
                    <p className="text-xl text-orange-400">Founder & Chief Technology Officer</p>
                    {/* <p className="text-sm text-gray-400">M.Eng Embedded Systems | NZ Permanent Resident</p> */}
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
                        <span key={index} className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm border border-orange-600/30">
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
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V14.5L9.5 16C9.1 16.4 9.1 17.1 9.5 17.5L11 19L12.5 17.5L14 19L15.5 17.5C15.9 17.1 15.9 16.4 15.5 16L14 14.5V11C15.1 11 16 10.1 16 9M5 16L6.5 17.5L8 16L6.5 14.5L5 16Z"/>
                      <circle cx="12" cy="4" r="1" fill="#000"/>
                      <rect x="10" y="7" width="4" height="1" fill="#000"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Babitha Kurian</h3>
                    <p className="text-xl text-purple-400">Strategic Advisor & Operations Mentor</p>
                    {/* <p className="text-sm text-gray-400">BDS | Postgraduate Health Management</p> */}
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
                        <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30">
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
                description: 'Advanced microcontroller programming, IoT integration, and real-time system development with expertise in STM32, Arduino, and ARM architectures.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Safety & Compliance',
                description: 'Rigorous adherence to electrical safety standards, EMC design principles, and regulatory compliance across industrial applications.',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: 'Technical Education',
                description: 'Comprehensive training programs, mentorship initiatives, and knowledge transfer to build capable technical teams.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Project Leadership',
                description: 'End-to-end project management from concept to deployment, ensuring timely delivery and exceptional quality standards.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: <Lightbulb className="h-12 w-12" />,
                title: 'Innovation Solutions',
                description: 'Custom PCB design, prototype development, and innovative problem-solving for complex technical challenges.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: <CheckCircle className="h-12 w-12" />,
                title: 'Quality Assurance',
                description: 'Comprehensive testing methodologies, validation processes, and continuous improvement frameworks for reliable solutions.',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((area, index) => (
              <Card key={index} className="border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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

// Test and Tag Page Component
function TestAndTagPage({ service, onNavigate }) {
  const [activeTestingType, setActiveTestingType] = useState(null)

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
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-orange-300">{activeTestingType}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-justify">{service.testingTypes[activeTestingType].description}</p>
                    <ul className="space-y-2">
                      {service.testingTypes[activeTestingType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeTestingType && (
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
                onClick={() => onNavigate('contact')}
              >
                Contact Us for Service
              </Button>
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Electronics Design Page Component
function ElectronicsDesignPage({ service, onNavigate }) {
  const [activeDesignType, setActiveDesignType] = useState(null)

  return (
    <div className="pt-20">
      {/* Electronics Design Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Electronics Design Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Professional PCB design, embedded systems development, and hardware prototyping solutions.
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
              
              {/* Electronics Design with interactive sections */}
              <div className="space-y-6">
                {/* Internal Navigation for Design Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(service.designTypes).map((designType) => (
                    <button
                      key={designType}
                      onClick={() => setActiveDesignType(activeDesignType === designType ? null : designType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeDesignType === designType
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {designType}
                    </button>
                  ))}
                </div>

                {/* Show selected design type details */}
                {activeDesignType && (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-orange-300 mb-3">{activeDesignType}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-justify">{service.designTypes[activeDesignType].description}</p>
                    <ul className="space-y-2">
                      {service.designTypes[activeDesignType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeDesignType && (
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
                onClick={() => onNavigate('contact')}
              >
                Contact Us for Service
              </Button>
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Digital Solutions Page Component
function DigitalSolutionsPage({ service, onNavigate }) {
  const [activeSolutionType, setActiveSolutionType] = useState(null)

  return (
    <div className="pt-20">
      {/* Digital Solutions Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Software Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Comprehensive web and mobile development services delivering modern, responsive, and user-friendly digital solutions.
          </p>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">{service?.title || 'Digital Solutions'}</h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">{service?.description || 'Comprehensive web and mobile development services.'}</p>
              
              {/* Digital Solutions with interactive sections */}
              <div className="space-y-6">
                {/* Internal Navigation for Solution Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service?.solutionTypes && Object.keys(service.solutionTypes).map((solutionType) => (
                    <button
                      key={solutionType}
                      onClick={() => setActiveSolutionType(activeSolutionType === solutionType ? null : solutionType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeSolutionType === solutionType
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {solutionType}
                    </button>
                  ))}
                </div>

                {/* Show selected solution type details */}
                {activeSolutionType && service?.solutionTypes?.[activeSolutionType] && (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-orange-300 mb-3">{activeSolutionType}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-justify">{service.solutionTypes[activeSolutionType].description}</p>
                    <ul className="space-y-2">
                      {service.solutionTypes[activeSolutionType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeSolutionType && service?.features && (
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
                onClick={() => onNavigate('contact')}
              >
                Contact Us for Service
              </Button>
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service?.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85'} 
                  alt={service?.title || 'Digital Solutions'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Automation Services Page Component
function AutomationServicesPage({ service, onNavigate }) {
  const [activeAutomationType, setActiveAutomationType] = useState(null)

  return (
    <div className="pt-20">
      {/* Automation Services Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Automation Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive industrial automation solutions including PLC programming, SCADA development, and control system integration.
          </p>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">{service?.title || 'Automation Services'}</h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">{service?.description || 'Comprehensive industrial automation solutions.'}</p>
              
              {/* Automation Services with interactive sections */}
              <div className="space-y-6">
                {/* Internal Navigation for Automation Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service?.automationTypes && Object.keys(service.automationTypes).map((automationType) => (
                    <button
                      key={automationType}
                      onClick={() => setActiveAutomationType(activeAutomationType === automationType ? null : automationType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeAutomationType === automationType
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {automationType}
                    </button>
                  ))}
                </div>

                {/* Show selected automation type details */}
                {activeAutomationType && service?.automationTypes?.[activeAutomationType] && (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-orange-300 mb-3">{activeAutomationType}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-justify">{service.automationTypes[activeAutomationType].description}</p>
                    <ul className="space-y-2">
                      {service.automationTypes[activeAutomationType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activeAutomationType && service?.features && (
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
                onClick={() => onNavigate('contact')}
              >
                Contact Us for Service
              </Button>
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service?.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85'} 
                  alt={service?.title || 'Automation Services'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Elegant Photography Page Component
function ElegantPhotographyPage({ service, onNavigate }) {
  const [activePhotographyType, setActivePhotographyType] = useState(null)

  return (
    <div className="pt-20">
      {/* Elegant Photography Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Elegant Photography</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional photography services capturing life's precious moments with artistic excellence and technical precision.
          </p>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">{service?.title || 'Elegant Photography'}</h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">{service?.description || 'Professional photography services for all occasions.'}</p>
              
              {/* Photography Services with interactive sections */}
              <div className="space-y-6">
                {/* Internal Navigation for Photography Types */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service?.photographyTypes && Object.keys(service.photographyTypes).map((photographyType) => (
                    <button
                      key={photographyType}
                      onClick={() => setActivePhotographyType(activePhotographyType === photographyType ? null : photographyType)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activePhotographyType === photographyType
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {photographyType}
                    </button>
                  ))}
                </div>

                {/* Show selected photography type details */}
                {activePhotographyType && service?.photographyTypes?.[activePhotographyType] && (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-orange-300 mb-3">{activePhotographyType}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-justify">{service.photographyTypes[activePhotographyType].description}</p>
                    <ul className="space-y-2">
                      {service.photographyTypes[activePhotographyType].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Show general features when no specific type is selected */}
                {!activePhotographyType && service?.features && (
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
                onClick={() => onNavigate('contact')}
              >
                Contact Us for Service
              </Button>
            </div>
            <div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service?.image || 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85'} 
                  alt={service?.title || 'Elegant Photography'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// FAQ Page Component
function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide Test & Tag services including single-phase, 3-phase, RCD, and microwave leakage testing, as well as Electronics Design services covering PCB design, embedded systems, and hardware prototyping."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us by phone at +64 220980511, email at salaskjose@gmail.com, or visit us at 20 Roslyn Farm Street, Drury 2579."
    },
    {
      question: "What are your business hours?",
      answer: "We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays."
    },
    {
      question: "Are your services certified?",
      answer: "Yes, our services are certified and comply with standards such as AS/NZS 3100, CE, FCC, and EMC, ensuring all testing and design work meets industry regulations and safety requirements."
    }
  ];

  return (
    <div className="pt-20">
      {/* FAQ Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, contact details, and business operations.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <Card className="border border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400">Common Questions</CardTitle>
                <CardDescription className="text-sm text-gray-400">
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left p-4 flex justify-between items-center text-white text-lg font-semibold transition-colors hover:text-orange-400 focus:outline-none"
                    >
                      {faq.question}
                      <span className="text-orange-400">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 pt-0 text-gray-300 text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Trust Technical Services website contact form
    `)
    
    const mailtoLink = `mailto:salaskjose@gmail.com?subject=${subject}&body=${body}`
    
    // Open user's default email client
    window.location.href = mailtoLink
    
    // Show confirmation and reset form
    alert('Opening your email client to send the message...')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your electrical safety, electronics design, or testing needs? Contact our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-300 text-justify">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or requirements..."
                      className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border border-gray-700 shadow-lg bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-400">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+64 220980511</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">salaskjose@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-gray-300">20 Roslyn Farm Street<br />Drury 2579</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

export default function TrustTechnicalApp() {
  const [activeSection, setActiveSection] = useState('home')

  // Services data - moved to app level for sharing
  const services = [
    {
      id: 'test-tag',
      title: 'Test & Tag Services',
      description: 'Comprehensive electrical safety testing and compliance certification covering single-phase, 3-phase, RCD testing, and microwave leakage detection. Complete protection for your equipment and peace of mind for your safety.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Single Phase Testing - Home & business electrical safety',
        '3 Phase Testing - Industrial equipment compliance',
        'RCD Testing - Residual current device verification',
        'Microwave Leakage Testing - Appliance safety assurance'
      ],
      testingTypes: {
        'Single Phase Testing': {
          description: 'Professional single-phase safety testing to ensure your equipment is safe and compliant. Our service includes comprehensive checks for electrical hazards like faulty insulation and earth connections, providing crucial protection for your home or business.',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGVyfGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
          features: ['Comprehensive electrical hazard checks', 'Faulty insulation detection', 'Earth connection testing', 'Safety compliance certification']
        },
        '3 Phase Testing': {
          description: 'Ensure safety and compliance for your industrial equipment with our 3-phase testing services. We perform critical checks, including insulation and earth continuity, to protect against shock, fire, and equipment failure, keeping operations safe and running smoothly.',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0aHJlZSUyMHBoYXNlJTIwaW5kdXN0cmlhbHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Industrial equipment safety checks', 'Insulation resistance testing', 'Earth continuity verification', 'Shock and fire protection']
        },
        'RCD Testing': {
          description: 'Professional RCD testing is vital for your safety. We test these devices to ensure they trip quickly and correctly, protecting you from electric shock. Our service guarantees your residual current devices are compliant and fully functional.',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxyY2QlMjBzd2l0Y2h8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
          features: ['Trip time verification', 'Correct operation testing', 'Electric shock protection', 'Compliance guarantee']
        },
        'Microwave Leakage Testing': {
          description: 'Microwave leakage testing to ensure your appliance is safe. Our service measures radiation levels to confirm they are within safe limits, protecting you from potential health risks associated with excessive microwave leakage.',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtaWNyb3dhdmUlMjB0ZXN0aW5nfGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
          features: ['Radiation level measurement', 'Safe limit verification', 'Health risk protection', 'Appliance safety assurance']
        }
      }
    },
    {
      id: 'electronics',
      title: 'Electronics Design',
      description: 'Professional PCB design, embedded systems development, and hardware prototyping solutions with comprehensive expertise from concept to manufacturing.',
      image: '/jShzvkxcTdWEsLAEFwi4qg.webp',
      features: [
        'Custom PCB Design & Layouts - Multi-layer boards (rigid, flex, rigid-flex)',
        'Embedded System Architecture - Microcontroller integration & block diagrams',
        'Circuit Design & Simulation - Analog, digital, RF, and low-power systems',
        'Documentation & Manufacturing Support - Complete BOMs & production files',
        'Compliance & Testing - AS/NZS 3100, CE, FCC & EMC validation'
      ],
      designTypes: {
        'Custom PCB Design & Layouts': {
          description: 'Complete PCB design solutions from concept to production-ready layouts. We specialize in multi-layer board designs including rigid, flex, and rigid-flex configurations with advanced SMT and through-hole component layouts for optimal performance and manufacturability.',
          features: ['Multi-layer boards (rigid, flex, and rigid-flex)', 'SMT & through-hole layouts', '3D modeling for accurate visualization', 'High-speed digital design', 'RF and microwave layouts', 'Component placement optimization']
        },
        'Embedded System Architecture': {
          description: 'Comprehensive embedded system design and architecture planning. From microcontroller selection to complete system integration, we ensure your embedded solutions meet performance requirements while maintaining compliance with industry standards.',
          features: ['Microcontroller integration & block diagrams', 'Technology evaluation & standards-compliant workflows', 'System-on-chip (SoC) solutions', 'Real-time operating system (RTOS) integration', 'Hardware-software co-design', 'Performance optimization strategies']
        },
        'Circuit Design, Simulation & Prototyping': {
          description: 'Advanced circuit design and simulation services covering analog, digital, RF, and low-power systems. We provide complete prototyping solutions including solar energy harvesting and noise-optimized designs with EMI/EMC compliance from the ground up.',
          features: ['Analog, digital, RF, and low-power systems', 'Solar energy harvesting & noise-optimized designs', 'EMI/EMC-aware schematics for compliance', 'SPICE simulation and analysis', 'Rapid prototyping and testing', 'Power management solutions']
        },
        'Documentation & Manufacturing Support': {
          description: 'Complete documentation packages and manufacturing support to ensure smooth production scaling. From detailed BOMs to factory programming, we provide comprehensive support for successful product launches and ongoing manufacturing.',
          features: ['Complete BOMs & production files', 'Version-controlled design data', 'Factory programming & support for scalable manufacturing', 'Assembly drawings and specifications', 'Test procedures and quality control', 'Supply chain optimization']
        },
        'Compliance & Testing': {
          description: 'Comprehensive compliance testing and validation services ensuring your products meet international standards. We provide complete testing solutions including fault analysis and performance verification to guarantee regulatory approval and market readiness.',
          features: ['AS/NZS 3100, CE, FCC & EMC validation', 'Fault tree analysis & endurance testing', 'Comprehensive performance verification', 'Safety standard compliance', 'Environmental testing coordination', 'Certification support and documentation']
        }
      }
    },
    {
      id: 'digital-solutions',
      title: 'Software Services',
      description: 'Comprehensive web and mobile development services delivering modern, responsive, and user-friendly digital solutions tailored to your business needs.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Web Development - Modern, responsive websites and web applications',
        'Mobile Development - Native and cross-platform mobile applications',
        'E-commerce Solutions - Complete online store development and integration',
        'Custom Software Development - Tailored solutions for business processes'
      ],
      solutionTypes: {
        'Web Development': {
          description: 'Professional web development services creating modern, responsive, and high-performance websites and web applications. We utilize the latest technologies and frameworks to deliver scalable solutions that meet your business objectives and provide exceptional user experiences.',
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Responsive web design', 'Modern JavaScript frameworks (React, Next.js)', 'Progressive Web Applications (PWA)', 'Search Engine Optimization (SEO)', 'Performance optimization', 'Cross-browser compatibility']
        },
        'Mobile Development': {
          description: 'Native and cross-platform mobile application development for iOS and Android. We create intuitive, feature-rich mobile apps that provide seamless user experiences while leveraging platform-specific capabilities for optimal performance.',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Native iOS and Android development', 'Cross-platform solutions (React Native, Flutter)', 'App Store deployment and optimization', 'Push notifications and real-time features', 'Mobile UI/UX design', 'Performance optimization and testing']
        },
        'E-commerce Solutions': {
          description: 'Complete e-commerce development and integration services for businesses looking to establish or enhance their online presence. From custom shopping platforms to payment gateway integration, we deliver comprehensive solutions that drive sales and improve customer satisfaction.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Custom e-commerce platforms', 'Payment gateway integration', 'Inventory management systems', 'Shopping cart optimization', 'Multi-platform compatibility', 'Analytics and reporting tools']
        },
        'Custom Software Development': {
          description: 'Tailored software solutions designed to address specific business challenges and streamline operations. We develop custom applications that integrate seamlessly with existing systems while providing scalable, maintainable, and secure solutions.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
          features: ['Business process automation', 'Database design and optimization', 'API development and integration', 'Cloud-based solutions', 'System architecture planning', 'Ongoing maintenance and support']
        }
      }
    },
    {
      id: 'automation-services',
      title: 'Automation Services',
      description: 'Comprehensive industrial automation solutions including PLC programming, SCADA development, and control system integration for enhanced operational efficiency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'PLC Programming & Integration - Custom programming and seamless industrial system integration',
        'SCADA & HMI Development - Advanced monitoring and control solutions',
        'Control System Upgrades & Retrofits - Modernizing automation with latest technologies',
        'Instrumentation & Calibration - Accurate industrial instrument maintenance',
        'Electrical Testing & Commissioning - Comprehensive MCC and power distribution testing',
        'Automation Troubleshooting & Maintenance - Fast diagnosis and system optimization',
        'Project Engineering & Documentation - Complete lifecycle support and FDS documentation',
        'Training & Knowledge Transfer - Hands-on programs for system operation and maintenance'
      ],
      automationTypes: {
        'PLC Programming & Integration': {
          description: 'Custom PLC programming, configuration, and seamless integration for industrial systems. We design and implement control logic that ensures optimal performance, safety, and reliability across diverse manufacturing and process industries.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwbGMlMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Custom control logic development', 'Multi-platform PLC programming (Allen-Bradley, Siemens, Schneider)', 'System integration and commissioning', 'Safety system implementation', 'Remote monitoring capabilities', 'Preventive maintenance programming']
        },
        'SCADA & HMI Development': {
          description: 'Design and development of advanced SCADA and HMI solutions for real-time monitoring and control. Our systems provide intuitive interfaces and comprehensive data visualization for enhanced operational decision-making.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxzY2FkYSUyMGhtaXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Real-time data visualization', 'Alarm management systems', 'Historical data trending', 'Remote access capabilities', 'Multi-user security levels', 'Custom reporting and analytics']
        },
        'Control System Upgrades & Retrofits': {
          description: 'Modernizing outdated automation systems with the latest PLC, SCADA, and network technologies. We ensure minimal downtime while upgrading systems to improve efficiency, safety, and compliance.',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwc3lzdGVtJTIwdXBncmFkZXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Legacy system assessment', 'Migration planning and execution', 'Network infrastructure upgrades', 'Minimal downtime implementation', 'Training on new systems', 'Documentation and support']
        },
        'Instrumentation & Calibration': {
          description: 'Accurate calibration, installation, and maintenance of industrial instruments for reliable operations. We ensure precise measurements and optimal performance of all process instrumentation.',
          image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxpbnN0cnVtZW50YXRpb24lMjBjYWxpYnJhdGlvbnxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['Precision instrument calibration', 'Installation and commissioning', 'Preventive maintenance programs', 'Compliance certification', 'Field device configuration', 'Loop testing and validation']
        },
        'Electrical Testing & Commissioning': {
          description: 'Comprehensive testing and commissioning of MCC panels, power distribution, and protection systems. We ensure electrical systems meet safety standards and operational requirements.',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['MCC panel testing', 'Power distribution verification', 'Protection system validation', 'Electrical safety compliance', 'Load testing and analysis', 'Documentation and certification']
        },
        'Automation Troubleshooting & Maintenance': {
          description: 'Fast and reliable diagnosis, repair, and optimization of automation systems to reduce downtime. Our expert technicians provide 24/7 support to keep your operations running smoothly.',
          image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0cm91Ymxlc2hvb3RpbmclMjBtYWludGVuYW5jZXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
          features: ['24/7 emergency support', 'Rapid fault diagnosis', 'Preventive maintenance schedules', 'System optimization', 'Spare parts management', 'Performance monitoring']
        },
        'Project Engineering & Documentation': {
          description: 'Complete project lifecycle support — from design, FDS documentation, and integration to execution. We provide comprehensive engineering services ensuring projects are delivered on time and within budget.',
          image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
          features: ['Project design and planning', 'Functional Design Specification (FDS)', 'System integration management', 'Quality assurance and testing', 'As-built documentation', 'Project delivery and handover']
        },
        'Training & Knowledge Transfer': {
          description: 'Hands-on training programs to equip teams with the skills to operate and maintain automation systems. We provide comprehensive education to ensure optimal system utilization and reduced dependency.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHByb2dyYW18ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
          features: ['Customized training programs', 'Hands-on practical sessions', 'System operation training', 'Maintenance best practices', 'Troubleshooting techniques', 'Certification and competency assessment']
        }
      }
    },
    {
      id: 'elegant-photography',
      title: 'Elegant Photography',
      description: 'Professional photography services capturing life\'s precious moments with artistic excellence and technical precision for events, portraits, commercial projects, and specialized photography needs.',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Event Photography - Weddings, corporate events, celebrations, and special occasions',
        'Portrait Photography - Professional headshots, family portraits, and personal branding',
        'Commercial Photography - Product photography, architectural shots, and marketing materials',
        'Photo Editing & Retouching - Professional post-processing and digital enhancement',
      ],
      photographyTypes: {
        'Event Photography': {
          description: 'Comprehensive event photography services capturing every important moment of your special occasions. From intimate gatherings to large corporate events, we ensure every emotion, detail, and milestone is beautifully preserved with professional quality and artistic vision.',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
          features: ['Wedding photography and videography', 'Corporate event documentation', 'Birthday and anniversary celebrations', 'Live event coverage', 'Candid moment capture', 'Same-day photo delivery options']
        },
        'Portrait Photography': {
          description: 'Professional portrait photography services creating stunning individual and group portraits. We specialize in capturing personality, character, and authentic expressions through expert lighting, composition, and post-processing techniques.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc1NjIyNzQ1Mnww&ixlib=rb-4.1.0&q=85',
          features: ['Professional headshots for business', 'Family portrait sessions', 'Individual portrait photography', 'Graduation and milestone portraits', 'Creative artistic portraits', 'LinkedIn and social media profile photos']
        },
        'Commercial Photography': {
          description: 'High-quality commercial photography services for businesses and brands. We create compelling visual content that enhances marketing materials, websites, and promotional campaigns with professional-grade equipment and creative expertise.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
          features: ['Product photography for e-commerce', 'Architectural and interior photography', 'Corporate branding photography', 'Marketing campaign visuals', 'Food and beverage photography', 'Industrial and manufacturing documentation']
        },
        'Photo Editing & Retouching': {
          description: 'Professional photo editing and retouching services transforming your images with precision and artistry. Using industry-standard software and techniques, we enhance, restore, and perfect your photographs while maintaining natural authenticity.',
          image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmd8ZW58MHx8fHwxNzU2MjI3NDUyfDA&ixlib=rb-4.1.0&q=85',
          features: ['Color correction and enhancement', 'Skin retouching and beauty editing', 'Background removal and replacement', 'Photo restoration and repair', 'Artistic filters and effects', 'Batch processing for large collections']
        },
      }
    }
  ]

  // Optional: respond to query param `?go=` so deep-links from the About page can focus a section
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const go = params.get('go')
    if (go) {
      setActiveSection(go)
      window.history.replaceState({}, '', window.location.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const handleNavigation = (section) => {
    setActiveSection(section)
    // Smooth scroll to top when switching sections
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch(activeSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} services={services} />
      case 'our-team':
        return <AboutPage />
      case 'test-tag':
        return <TestAndTagPage service={services[0]} onNavigate={handleNavigation} />
      case 'electronics':
        return <ElectronicsDesignPage service={services[1]} onNavigate={handleNavigation} />
      case 'automation-services':
        return <AutomationServicesPage service={services[3]} onNavigate={handleNavigation} />
      case 'digital-solutions':
        return <DigitalSolutionsPage service={services[2]} onNavigate={handleNavigation} />
      case 'elegant-photography':
        return <ElegantPhotographyPage service={services[4]} onNavigate={handleNavigation} />
      case 'faq':
        return <FAQPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handleNavigation} services={services} />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}
