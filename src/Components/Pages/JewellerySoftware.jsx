import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const JewellerySoftware = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const features = [
        'Billing & POS',
        'Inventory Management',
        'RFID Tracking',
        'Gold Loan Management',
        'E-commerce Integration',
        'Mobile App',
        'Financial Reports',
        'Customer Management',
      ]
      features.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, idx])
        }, 300 + idx * 100)
      })
    }
  }, [isVisible])

  const keyFeatures = [
    {
      icon: '💎',
      title: 'Smart Billing & POS',
      description: 'Fast counter billing with karat tracking, RFID integration, and try-on previews for seamless customer experience.',
    },
    {
      icon: '📦',
      title: '360° Inventory Management',
      description: 'Real-time tracking of purity, weight, labour costs for every ornament, stone, and metal with automated stock alerts.',
    },
    {
      icon: '🏷️',
      title: 'RFID & Barcode Tracking',
      description: 'Advanced RFID-based stock audits, barcode scanning, and automated inventory reconciliation for accuracy.',
    },
    {
      icon: '💰',
      title: 'Gold Loan Management',
      description: 'Complete gold loan lifecycle automation with RBI-ready reports, renewals, and auction management.',
    },
    {
      icon: '🛒',
      title: 'E-commerce Integration',
      description: 'Seamless integration with online stores, marketplaces, and web catalogues with real-time inventory sync.',
    },
    {
      icon: '📱',
      title: 'Mobile App Access',
      description: 'Manage your jewellery business on-the-go with live alerts, mobile approvals, and remote access.',
    },
    {
      icon: '📊',
      title: 'Financial Reports',
      description: 'Comprehensive financial dashboards, profit & loss statements, cash flow, and bank reconciliation.',
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'Loyalty programs, customer wallets, EMI planner, and personalized festival campaigns.',
    },
  ]

  const benefits = [
    {
      title: 'Increase Efficiency',
      description: 'Automate daily operations and reduce manual work by up to 70%',
    },
    {
      title: 'Reduce Errors',
      description: 'Eliminate human errors in billing, inventory, and financial calculations',
    },
    {
      title: 'Boost Sales',
      description: 'Better customer experience and insights to drive more revenue',
    },
    {
      title: 'Stay Compliant',
      description: 'GST-ready invoicing, e-way bills, and automated compliance reports',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff3e6] to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#ffe0c4]/60 blur-[120px] animate-pulse" />
          <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-[#d8f5f1]/60 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-0 lg:py-24">
          <div className="text-center mb-12">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.5em] text-[#f16338] transition-all duration-700 mb-4 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              Complete Jewellery ERP Solution
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f2d55] mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              Unicorn Jewellery Software
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              All-in-one solution designed to simplify jewellery business operations. Manage your entire store with advanced stock control, billing, RFID tracking, and mobile accessibility.
            </p>
            <div
              className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <button className="rounded-full bg-[#0f2d55] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(7,29,57,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#0c2444] hover:shadow-[0_25px_40px_rgba(7,29,57,0.35)] active:scale-95">
                Book Free Demo
              </button>
              <a
                href="tel:+9194208447251"
                className="flex items-center gap-2 rounded-full border border-[#0f2d55]/30 bg-white px-7 py-3 text-sm font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-110 hover:border-[#f16338]/60 hover:bg-[#f16338]/5 hover:text-[#f16338] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#f16338]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91-94208447251</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d55] mb-4">
              Powerful Features for Modern Jewelers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to run and grow your jewellery business effortlessly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl bg-gradient-to-br from-white to-[#fff8ef] p-6 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-[#f16338]/30 ${
                  visibleFeatures.includes(idx)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0f2d55] mb-3 group-hover:text-[#f16338] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#faf9f7] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d55] mb-4">
              Why Choose Unicorn Jewellery Software?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform your jewellery business with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`text-center p-6 rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + idx * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f16338]/10 to-[#f16338]/5 flex items-center justify-center">
                  <div className="text-2xl">✓</div>
                </div>
                <h3 className="text-xl font-semibold text-[#0f2d55] mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2d55] mb-4">
              Complete Business Management
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All modules integrated seamlessly for your jewellery business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Retail POS', desc: 'Counter billing with karat tracking' },
              { title: 'Wholesale & Bullion', desc: 'Multi-branch stock management' },
              { title: 'Gold Loan Desk', desc: 'Complete loan lifecycle automation' },
              { title: 'Repair & Custom Orders', desc: 'Digital job cards & approvals' },
              { title: 'E-commerce', desc: 'Real-time inventory sync' },
              { title: 'Workshops', desc: 'Manufacturing & production tracking' },
            ].map((module, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-gradient-to-br from-[#fff8ef] to-white border border-slate-100 transition-all duration-300 hover:border-[#f16338]/40 hover:shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + idx * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-[#0f2d55] mb-2">{module.title}</h3>
                <p className="text-slate-600">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0f2d55] to-[#0c2444] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Jewellery Business?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Get started with Unicorn Jewellery Software today. Book a free demo and see how we can help streamline your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#f16338] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(241,99,56,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#e55a2e] hover:shadow-[0_25px_40px_rgba(241,99,56,0.45)] active:scale-95">
              Request Free Demo
            </button>
            <a
              href="tel:+9194208447251"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/50 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call: +91-94208447251</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JewellerySoftware






