import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const ECommerce = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f6fbff] to-[#eef7ff]">
      <Header />
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6fbff] to-[#eef7ff]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px] animate-pulse" />
          <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-cyan-200/40 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-0 lg:py-24">
          <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">
              Digital Commerce
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              E-commerce Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Launch a modern storefront with integrated inventory, catalog, and
              customer engagement tools tailored for jewellery businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '🛍️',
                title: 'Omni-channel Storefront',
                copy:
                  'Sync your online catalog with in-store stock for a seamless buying experience.',
              },
              {
                icon: '🔒',
                title: 'Secure Payments',
                copy:
                  'Offer trusted payment gateways with automated billing and invoicing.',
              },
              {
                icon: '👥',
                title: 'Customer Journeys',
                copy:
                  'Capture leads, personalize offers, and keep shoppers coming back.',
              },
            ].map((card, idx) => (
              <article
                key={card.title}
                className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-slate-600">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Loan Software Section */}
      <section className="bg-gradient-to-b from-[#fff8ef] via-white to-[#f6fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">
              Financial Solutions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Gold Loan Software
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Complete gold loan management system with RBI compliance, automated renewals, 
              auction management, and comprehensive reporting for jewellery businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                icon: '💰',
                title: 'Loan Processing',
                description: 'Streamlined gold loan application, valuation, and approval workflow with automated documentation.',
              },
              {
                icon: '📊',
                title: 'RBI Compliance',
                description: 'RBI-ready reports, interest calculations, and regulatory compliance tracking for gold loans.',
              },
              {
                icon: '🔄',
                title: 'Renewal Management',
                description: 'Automated renewal reminders, interest payment tracking, and seamless loan extension process.',
              },
              {
                icon: '🏛️',
                title: 'Auction Management',
                description: 'Complete auction workflow for defaulted loans with bid tracking and settlement management.',
              },
              {
                icon: '📈',
                title: 'Financial Reports',
                description: 'Comprehensive dashboards showing loan portfolio, interest income, and default analysis.',
              },
              {
                icon: '🔐',
                title: 'Security & Tracking',
                description: 'Secure gold storage tracking, valuation certificates, and complete audit trail.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl bg-gradient-to-br from-white to-[#fff8ef] p-6 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-amber-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-50/50 p-8 md:p-12 border border-amber-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Our Gold Loan Software?
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: '100% RBI Compliant',
                  desc: 'Meets all regulatory requirements',
                },
                {
                  title: 'Automated Workflows',
                  desc: 'Reduce manual processing time',
                },
                {
                  title: 'Real-time Tracking',
                  desc: 'Monitor loans and renewals live',
                },
                {
                  title: 'Secure & Reliable',
                  desc: 'Bank-grade security standards',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/60 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-xl">✓</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive e-commerce and gold loan solutions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95">
              Book Free Demo
            </button>
            <a
              href="tel:+9194208447251"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
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

export default ECommerce


