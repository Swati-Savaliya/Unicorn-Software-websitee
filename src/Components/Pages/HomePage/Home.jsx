import { useEffect, useMemo, useState } from 'react'
import Header from '../Header'
import Hero from './Hero'
import HeroDemoBanner from './HeroDemoBanner'
import HeroExperienceCarousel from './HeroExperienceCarousel'
import Product from './Product'
import WhyUs from './WhyUs'
import FeatureHighlights from './FeatureHighlights'
import ModuleShowcase from './ModuleShowcase'
import MobileApp from './MobileAppPage'
import SocialProof from './SocialProof'
import CTA from './CTA'
import FAQ from './FAQ'
import Footer from './Footer'

const Home = () => {
  const [showInquiry, setShowInquiry] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (hasDismissed) return
    const timer = setTimeout(() => setShowInquiry(true), 5000)
    return () => clearTimeout(timer)
  }, [hasDismissed])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log('Inquiry submitted:', formData)
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        setShowInquiry(false)
        setHasDismissed(true)
      }, 1800)
    }, 800)
  }

  const closeModal = () => {
    setShowInquiry(false)
    setHasDismissed(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />
      <Hero />
      <HeroDemoBanner />
      <HeroExperienceCarousel />
      <Product />
      <WhyUs />
      <FeatureHighlights />
      <ModuleShowcase />
      <MobileApp />
      <SocialProof />
      <CTA />
      <FAQ />
      <Footer />

      {showInquiry && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 px-4 py-10 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-[0_45px_120px_rgba(15,23,42,0.25)]">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-slate-500 shadow hover:text-slate-700"
              aria-label="Close inquiry form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="grid gap-8 bg-gradient-to-r from-[#fff4ec] to-white px-8 py-10 md:grid-cols-5">
              <div className="md:col-span-2 space-y-4">
                <p className="inline-flex rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-500">
                  Inquiry
                </p>
                <h3 className="text-3xl font-semibold text-slate-900">
                  Need a quick call back?
                </h3>
                <p className="text-sm text-slate-500">
                  Share your details and our jewellery software experts will connect within 15 minutes.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Personalised walkthrough on WhatsApp/Zoom</li>
                  <li>• Pricing and deployment details</li>
                  <li>• Migration support for existing data</li>
                </ul>
              </div>
              <div className="md:col-span-3">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef3c7] to-white p-6 text-center">
                    <p className="text-4xl">✨</p>
                    <h4 className="mt-4 text-2xl font-semibold text-slate-900">
                      Thank you!
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      Our team will reach out shortly with the demo link.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                          placeholder="name@business.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="City / Town"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Requirement
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                        placeholder="Inventory, billing, gold loans..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Call Back'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

