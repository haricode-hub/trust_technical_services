'use client'

import React, { useState } from 'react'
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
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 5 L25 15 L25 35 C25 60 50 95 50 95 C50 95 75 60 75 35 L75 15 L50 5 Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M50 20 L50 80 M30 50 L70 50"
        stroke="#000"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="35" r="1.5" fill="#000"/>
      <circle cx="60" cy="35" r="1.5" fill="#000"/>
      <circle cx="40" cy="65" r="1.5" fill="#000"/>
      <circle cx="60" cy="65" r="1.5" fill="#000"/>
      <circle cx="35" cy="50" r="1.5" fill="#000"/>
      <circle cx="65" cy="50" r="1.5" fill="#000"/>
      
      <path d="M40 35 L35 35 L35 50" stroke="#000" strokeWidth="1" fill="none"/>
      <path d="M60 35 L65 35 L65 50" stroke="#000" strokeWidth="1" fill="none"/>
      <path d="M40 65 L35 65 L35 50" stroke="#000" strokeWidth="1" fill="none"/>
      <path d="M60 65 L65 65 L65 50" stroke="#000" strokeWidth="1" fill="none"/>
      <path d="M40 35 L40 30 L50 30 L60 30 L60 35" stroke="#000" strokeWidth="1" fill="none"/>
      <path d="M40 65 L40 70 L50 70 L60 70 L60 65" stroke="#000" strokeWidth="1" fill="none"/>
    </svg>
  )
}

// Navigation Component
function Navigation({ activeSection, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
  { id: 'home', label: 'Home' }, 
  { id: 'test-tag', label: 'Test and Tag' },
  { id: 'electronics', label: 'Electronic Design' },
  { id: 'our-team', label: 'Our Team' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact Us' }
]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <TrustLogo className="h-12 w-12 text-white" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Trust Technical Services
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
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
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
          <div className="md:hidden py-4 border-t border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-orange-400 bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in safety and electronics—empowering industries and individuals through safe, resilient, and intelligent technology solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Our Team', 'Test and Tag', 'Electronic Design', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {item}
                  </button>
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
              <button className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
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
            <span className="text-orange-400 block">Safety & Electronics</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Empowering  industries and individuals through safe, resilient, and intelligent technology solutions.
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
                <p className="text-gray-300 leading-relaxed text-lg">
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
                <p className="text-gray-300 leading-relaxed text-lg">
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
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800 text-white">
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
                  <CardDescription className="text-gray-300 text-sm sm:text-base">
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                    <p className="text-sm text-gray-400">M.Eng Embedded Systems | NZ Permanent Resident</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
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
                    <p className="text-sm text-gray-400">BDS | Postgraduate Health Management</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
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
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <p className="text-lg text-gray-300 mb-6">{service.description}</p>
              
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
                    <p className="text-gray-300 mb-4">{service.testingTypes[activeTestingType].description}</p>
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <p className="text-lg text-gray-300 mb-6">{service.description}</p>
              
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
                    <p className="text-gray-300 mb-4">{service.designTypes[activeDesignType].description}</p>
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
                <CardDescription className="text-gray-300">
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
    }
  ]

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
