import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const MobileApp = () => {
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

  const features = [
    {
      icon: '📱',
      title: 'Real-time Inventory',
      description: 'Monitor stock levels, track sales, and manage inventory from anywhere with live updates.',
    },
    {
      icon: '💳',
      title: 'Mobile Billing',
      description: 'Process transactions, generate invoices, and accept payments on-the-go with secure payment integration.',
    },
    {
      icon: '📊',
      title: 'Business Analytics',
      description: 'Access real-time reports, sales analytics, and performance metrics right from your mobile device.',
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Get instant alerts for low stock, important transactions, and business updates.',
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'View customer history, manage loyalty points, and track customer interactions seamlessly.',
    },
    {
      icon: '✅',
      title: 'Approval Workflow',
      description: 'Approve transactions, manage permissions, and control access remotely with secure authentication.',
    },
  ]

  const benefits = [
    {
      title: 'Work from Anywhere',
      description: 'Manage your jewellery business from home, office, or on the move with full functionality.',
    },
    {
      title: 'Instant Access',
      description: 'Get real-time data and make informed decisions instantly without waiting for desktop access.',
    },
    {
      title: 'Increased Productivity',
      description: 'Handle multiple tasks simultaneously and respond to customer needs faster than ever.',
    },
    {
      title: 'Secure & Reliable',
      description: 'Bank-level security with encrypted data transmission and secure authentication.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />
      
      {/* Hero Section */}
      <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-orange-200/40 blur-[120px] animate-pulse" />
          <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-yellow-200/40 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-0 lg:py-24">
          <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">
              Mobile Solution
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              Mobile App
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Manage your jewellery business on the go with our powerful mobile application. 
              Access all features, track sales, and stay connected with your business anytime, anywhere.
            </p>
          </div>

          {/* Mobile App Mockup */}
          <div className={`mb-16 flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              <div className="rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 p-4 shadow-2xl">
                <div className="rounded-[2.5rem] bg-white p-2">
                  <div className="h-[600px] w-[300px] rounded-[2rem] bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-2 w-12 rounded-full bg-slate-300"></div>
                      <div className="flex gap-1">
                        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
                        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
                        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 rounded bg-slate-200"></div>
                        <div className="h-4 w-1/2 rounded bg-slate-200"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                        <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                        <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                        <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Everything you need to manage your business efficiently, all in the palm of your hand.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-[#fff8ef] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Why Choose Our Mobile App?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Experience the freedom of managing your business from anywhere with our intuitive mobile solution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`rounded-xl bg-white p-6 shadow-md transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-50">
              Download our mobile app today and take control of your business from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-orange-500 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                Download for iOS
              </button>
              <button className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-orange-500 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileApp








