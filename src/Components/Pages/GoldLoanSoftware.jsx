import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const GoldLoanSoftware = () => {
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
        'Loan Processing',
        'Gold Valuation',
        'Renewals & Repayments',
        'Auction Management',
        'RBI Compliance',
        'Collections Dashboard',
        'Customer Management',
        'Reports & Analytics',
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
      icon: '🏦',
      title: 'Quick Loan Processing',
      description: 'Streamlined loan application, approval, and disbursement process with automated documentation and instant gold valuation.',
    },
    {
      icon: '⚖️',
      title: 'Accurate Gold Valuation',
      description: 'Real-time gold price calculation based on purity, weight, and current market rates with automated LTV (Loan-to-Value) computation.',
    },
    {
      icon: '🔄',
      title: 'Renewals & Repayments',
      description: 'Automated renewal reminders, flexible repayment options, interest calculation, and partial payment processing.',
    },
    {
      icon: '🔨',
      title: 'Auction Management',
      description: 'Complete auction lifecycle management for defaulted loans with automated notifications and bid tracking.',
    },
    {
      icon: '📋',
      title: 'RBI Compliance Ready',
      description: 'Generate all mandatory RBI reports including SARFAESI compliance, loan registers, and regulatory filings automatically.',
    },
    {
      icon: '📊',
      title: 'Collections Dashboard',
      description: 'Real-time tracking of collections, overdue loans, recovery status, and branch-wise performance metrics.',
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'Comprehensive customer database with loan history, KYC documents, communication logs, and relationship tracking.',
    },
    {
      icon: '📈',
      title: 'Reports & Analytics',
      description: 'Advanced reporting with profit analysis, portfolio health, risk assessment, and customizable business intelligence dashboards.',
    },
  ]

  const benefits = [
    {
      title: 'Faster Processing',
      description: 'Reduce loan processing time by up to 80% with automated workflows',
    },
    {
      title: 'Risk Mitigation',
      description: 'Built-in risk assessment and compliance checks to minimize defaults',
    },
    {
      title: 'Better Collections',
      description: 'Automated reminders and tracking to improve collection efficiency',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with RBI guidelines and generate required reports instantly',
    },
  ]

  const modules = [
    { title: 'Loan Origination', desc: 'Complete loan application and approval workflow' },
    { title: 'Gold Valuation', desc: 'Automated valuation with purity and weight tracking' },
    { title: 'Loan Management', desc: 'Active loan tracking, renewals, and repayments' },
    { title: 'Auction System', desc: 'End-to-end auction management for defaulted loans' },
    { title: 'Collections', desc: 'Automated reminders and recovery tracking' },
    { title: 'Compliance & Reports', desc: 'RBI-ready reports and regulatory compliance' },
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
              Complete Gold Loan Management System
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f2d55] mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              Unicorn Gold Loan Software
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              Comprehensive gold loan management solution designed to streamline operations, ensure RBI compliance, and maximize efficiency. Manage loans, renewals, auctions, and collections all in one platform.
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
              Powerful Features for Gold Loan Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage and grow your gold loan operations efficiently
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
              Why Choose Unicorn Gold Loan Software?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform your gold loan business with intelligent automation and compliance
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
              Complete Loan Management Modules
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All modules integrated seamlessly for your gold loan business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, idx) => (
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
            Ready to Transform Your Gold Loan Business?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Get started with Unicorn Gold Loan Software today. Book a free demo and see how we can help streamline your operations and ensure compliance.
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

export default GoldLoanSoftware








