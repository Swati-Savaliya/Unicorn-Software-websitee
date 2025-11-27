import { useState, useEffect, useRef } from 'react'
import { heroMetrics } from '../../constants/content.js'
import heroImg from '../../../assets/image/Hero_img.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMetrics, setVisibleMetrics] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animate metrics one by one
            heroMetrics.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleMetrics((prev) => [...prev, idx])
              }, 800 + idx * 150)
            })
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff3e6] to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#ffe0c4]/60 blur-[120px] animate-pulse" />
        <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-[#d8f5f1]/60 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        <div className="flex h-full w-full max-w-2xl flex-1 flex-col justify-center">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.5em] text-[#f16338] transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Cloud Jewellery ERP
          </p>
          <h1
            className={`relative mt-4 w-fit font-heading leading-tight text-[#0f2d55] transition-all duration-700 delay-200 sm:text-4xl lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="relative z-10 block">
              Unicorn Jewelry Software / Billing & ERP Software  – Powerful Features for Modern Jewelers.
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-gradient-to-r from-[#ffe0c4] via-transparent to-[#ffe0c4] opacity-60 blur-md animate-pulse"
            />
          </h1>
          <p
            className={`mt-5 text-lg text-slate-600 transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Unicorn Jewelry Software is an all-in-one solution designed to simplify jewelry business operations. Manage your entire store with advanced stock control, billing, RFID tracking, and mobile accessibility. Create accurate quotations, handle orders, streamline approvals, and generate quick estimations with ease.
          </p>

          <p
            className={`mt-5 text-lg text-slate-600 transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            The software supports RFID-based stock audits, online catalogue selling, and gold loan management, helping jewelers boost efficiency and customer satisfaction. Integrated cash flow and bank reconciliation ensure smooth financial management, while hardware integrations like biometric devices, signature pads, and weighing scales enhance security and speed.          </p>

          <p
            className={`mt-5 text-lg text-slate-600 transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Whether you're building your jewelry brand or expanding digitally, Unicorn Jewelers software provides everything you need to run and grow your jewelry business effortlessly.
          </p>
          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <button className="rounded-full bg-[#0f2d55] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(7,29,57,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[#0c2444] hover:shadow-[0_25px_40px_rgba(7,29,57,0.35)] active:scale-95">
              Book Free Setup
            </button>
            <button className="rounded-full border border-[#0f2d55]/30 bg-white px-7 py-3 text-sm font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-110 hover:border-[#0f2d55]/60 hover:bg-[#0f2d55]/5 active:scale-95">
              Watch Product Tour
            </button>
          </div>
          <div
            className={`mt-10 grid max-w-4xl gap-6 rounded-[32px] bg-white p-8 text-center shadow-soft transition-all duration-700 delay-500 lg:grid-cols-3 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-8 opacity-0 scale-95'
            } mx-auto`}
          >
            {heroMetrics.map((metric, idx) => (
              <div
                key={metric.label}
                className={`transition-all duration-500 ${
                  visibleMetrics.includes(idx)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + idx * 150}ms` }}
              >
                <p className="font-heading text-3xl text-[#0f2d55] transition-colors duration-300 hover:text-[#f16338]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex h-full w-full max-w-3xl flex-1 items-center justify-center transition-all duration-700 delay-300 ${
            isVisible
              ? 'translate-x-0 opacity-100 scale-100'
              : 'translate-x-8 opacity-0 scale-95'
          }`}
        >
          <div className="relative h-full w-full max-w-[640px] overflow-hidden rounded-[50px] border border-white/40 bg-white/95 shadow-[0_45px_110px_rgba(12,50,92,0.18)] backdrop-blur transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_55px_130px_rgba(12,50,92,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-[#ffe8d4]/40" />
            <img
              src={heroImg}
              alt="Live control tower dashboard preview"
              className="relative h-full min-h-[560px] w-full object-cover transition-transform duration-700 sm:min-h-[600px] lg:min-h-[680px] hover:scale-105"
            />
            <div className="absolute left-8 top-8 flex flex-col gap-2">
              <div
                className={`rounded-full border border-[#f6c58f] bg-white/90 px-5 py-2 text-xs font-semibold text-[#0f2d55] shadow-soft transition-all duration-500 hover:scale-110 hover:bg-white ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                ★ Live alerts on mobile
              </div>
              <a
                href="tel:+9194208447251"
                className={`flex items-center gap-2 rounded-full border border-[#f6c58f] bg-white/90 px-5 py-2 text-xs font-semibold text-[#0f2d55] shadow-soft transition-all duration-500 hover:scale-110 hover:bg-white hover:text-[#f16338] ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#f16338]"
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
      </div>
    </section>
  )
}

export default Hero

