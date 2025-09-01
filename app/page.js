'use client'

import { useState } from 'react'
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
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b5 border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <TrustLogo className="h-8 w-8 text-white" />
            <span className="text-3xl font-bold text-white">Trust Technical Services</span>
          </div>
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
        </div>
      </div>
    </nav>
  )
}

// Footer Component
function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <TrustLogo className="h-6 w-6 text-white" />
              <span className="text-lg font-bold">Trust Technical Services</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in safety and electronics innovation across New Zealand.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Test & Tag Services</li>
              <li>Electronics Design</li>
              <li>Fire & Safety Testing</li>
              <li>Compliance Certification</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>+64 (09) 123-4567</p>
              <p>info@trusttechnical.co.nz</p>
              <p>Auckland, New Zealand</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Trust Technical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Partner in
            <span className="text-orange-400 block">Safety & Electronics Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering New Zealand industries and individuals through safe, resilient, and intelligent technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => onNavigate('services')}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800 text-white">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Badge variant="secondary" className="mt-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
                    Professional Service
                  </Badge>
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
            Get professional electrical testing, innovative electronics design, and comprehensive safety solutions from New Zealand's trusted technical experts.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              About Trust Technical Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bridging education, innovation, and safety through cutting-edge electronics engineering 
              and comprehensive technical solutions across New Zealand's evolving industrial landscape.
            </p>
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
                  To deliver safe, compliant, and cutting-edge technical solutions while nurturing 
                  industry talent and ensuring the highest standards of electrical safety and 
                  innovation across New Zealand's manufacturing and business sectors. We are committed 
                  to empowering organizations through reliable embedded systems and fostering 
                  technological advancement through education and mentorship.
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
                  To empower industries and individuals through intelligent, safe, and resilient 
                  technology—bridging education, embedded hardware innovation, and cybersecurity. 
                  With a foundation in advanced electronics engineering and hands-on expertise, 
                  our goal is to foster a smarter, safer world by developing cutting-edge tools, 
                  nurturing talent, and protecting systems from the ground up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

// Services Page Component
function ServicesPage({ services }) {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Professional Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical solutions for electrical safety, electronics design, and fire safety compliance across New Zealand.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-orange-400 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                    Learn More
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
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
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
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
            Ready to discuss your electrical safety, electronics design, or fire safety testing needs? Contact our expert team today.
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
                      <p className="text-gray-300">+64 (09) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@trusttechnical.co.nz</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300">Auckland, New Zealand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-700 shadow-lg bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white">Monday - Friday</span>
                      <span className="text-gray-300">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Saturday</span>
                      <span className="text-gray-300">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Sunday</span>
                      <span className="text-gray-300">Closed</span>
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
      description: 'Comprehensive electrical safety testing and compliance certification for appliances and equipment.',
      image: 'https://images.unsplash.com/photo-1723536998172-9805f991916f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
      features: ['Single-phase & three-phase testing', 'RCD functionality checks', 'Compliance certification', 'Detailed reporting']
    },
    {
      id: 'electronics',
      title: 'Electronics Design',
      description: 'Professional PCB design, embedded systems development, and hardware prototyping solutions.',
      image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxQQ0IlMjBkZXNpZ258ZW58MHx8fHwxNzU2MjI3NDU5fDA&ixlib=rb-4.1.0&q=85',
      features: ['PCB design (digital & analog)', 'Microcontroller integration', 'Embedded hardware prototyping', 'IPC/RoHS/UL compliance']
    },
    {
      id: 'fire-safety',
      title: 'Fire & Safety Testing',
      description: 'Specialized testing for fire safety equipment, microwave leakage detection, and safety system inspections.',
      image: 'https://images.unsplash.com/photo-1595306394931-b35768661692?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5fGVufDB8fHx8MTc1NjIyNzQ2NXww&ixlib=rb-4.1.0&q=85',
      features: ['Microwave leakage testing', 'Fire extinguisher inspections', 'Hydrant system checks', 'Safety compliance audits']
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
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage services={services} />
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
