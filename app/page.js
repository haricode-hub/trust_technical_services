'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Zap, Wrench, Phone, Mail, MapPin, Users } from 'lucide-react'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigation = (section) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      id: 'test-tag',
      title: 'Test & Tag Services',
      description: 'Comprehensive electrical safety testing and compliance certification for appliances and equipment.',
      images: [
        'https://images.unsplash.com/photo-1723536998172-9805f991916f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZ3xlbnwwfHx8fDE3NTYyMjc0NTJ8MA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
      ],
      features: ['Single-phase & three-phase testing', 'RCD functionality checks', 'Compliance certification', 'Detailed reporting']
    },
    {
      id: 'electronics',
      title: 'Electronics Design',
      description: 'Professional PCB design, embedded systems development, and hardware prototyping solutions.',
      images: [
        'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxQQ0IlMjBkZXNpZ258ZW58MHx8fHwxNzU2MjI3NDU5fDA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
        'https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=400'
      ],
      features: ['PCB design (digital & analog)', 'Microcontroller integration', 'Embedded hardware prototyping', 'IPC/RoHS/UL compliance']
    },
    {
      id: 'fire-safety',
      title: 'Fire & Safety Testing',
      description: 'Specialized testing for fire safety equipment, microwave leakage detection, and safety system inspections.',
      images: [
        'https://images.unsplash.com/photo-1595306394931-b35768661692?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5fGVufDB8fHx8MTc1NjIyNzQ2NXww&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400'
      ],
      features: ['Microwave leakage testing', 'Fire extinguisher inspections', 'Hydrant system checks', 'Safety compliance audits']
    }
  ]

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

  if (activeSection === 'about') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
        <AboutPage />
        <Footer onNavigate={handleNavigation} />
      </div>
    )
  }

  if (activeSection === 'services') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
        <ServicesPage services={services} />
        <Footer onNavigate={handleNavigation} />
      </div>
    )
  }

  if (activeSection === 'contact') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
        <ContactPage />
        <Footer onNavigate={handleNavigation} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(17, 24, 39, 0.8)), url('https://images.unsplash.com/photo-1651340527836-263c5072968e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlc3Rpbmd8ZW58MHx8fGJsdWV8MTc1NjIyNzM5OHww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
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
              onClick={() => handleNavigation('services')}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              onClick={() => handleNavigation('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800 text-white">
                <div className="grid grid-cols-3 gap-1 aspect-video rounded-t-lg overflow-hidden">
                  {service.images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
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
            onClick={() => handleNavigation('contact')}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

function Navigation({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">Trust Technical Services</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
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

function AboutPage() {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">About Trust Technical Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging education, innovation, and safety through electronics and comprehensive technical solutions across New Zealand.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver safe, compliant, and cutting-edge technical solutions while nurturing industry talent and ensuring the highest standards of electrical safety and innovation across New Zealand's manufacturing and business sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be New Zealand's most trusted partner in safety and electronics innovation, empowering industries and individuals through safe, resilient, and intelligent technology solutions that drive progress and protect communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="h-8 w-8 text-orange-500" />, title: 'Trust', description: 'Building lasting relationships through reliable service and transparent communication.' },
              { icon: <CheckCircle className="h-8 w-8 text-green-600" />, title: 'Safety', description: 'Uncompromising commitment to electrical safety and compliance standards.' },
              { icon: <Zap className="h-8 w-8 text-blue-600" />, title: 'Innovation', description: 'Embracing cutting-edge technology and forward-thinking solutions.' },
              { icon: <Users className="h-8 w-8 text-purple-600" />, title: 'Quality', description: 'Delivering excellence in every project and service we provide.' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ServicesPage({ services }) {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Professional Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions for electrical safety, electronics design, and fire safety compliance across New Zealand.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
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

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
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
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your electrical safety, electronics design, or fire safety testing needs? Contact our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
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
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+64 (09) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@trusttechnical.co.nz</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Auckland, New Zealand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground">Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
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

function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">Trust Technical Services</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted partner in safety and electronics innovation across New Zealand.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Test & Tag Services</li>
              <li>Electronics Design</li>
              <li>Fire & Safety Testing</li>
              <li>Compliance Certification</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>+64 (09) 123-4567</p>
              <p>info@trusttechnical.co.nz</p>
              <p>Auckland, New Zealand</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 Trust Technical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-slate-400 hover:text-white transition-colors">
                Legal Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}