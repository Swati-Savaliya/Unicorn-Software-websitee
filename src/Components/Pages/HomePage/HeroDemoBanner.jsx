import { useEffect, useRef, useState } from 'react'
import demoImage from '../../../assets/image/Demo_img.png'

const HeroDemoBanner = () => {
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
      { threshold: 0.2 }
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
    <section
      ref={sectionRef}
      className="relative mt-12 bg-gradient-to-b from-[#fff8ef] via-[#fff3e2] to-[#fff8ef] px-6 pb-12 pt-6 lg:mt-16 lg:pt-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-32 max-w-5xl rounded-full bg-[#ffdeba]/60 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f7a047]/30 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#f16338] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f16338]" />
            Demo Invite
          </p>
          <h2 className="mt-3 font-heading text-3xl text-[#0f2d55] sm:text-4xl">
            Experience Unicorn in 20 Minutes
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Quick showcase of omnichannel jewellery operations, custom workflows, and adoption roadmap.
          </p>
        </div>
        <div className="rounded-[32px] border border-orange-200/70 bg-white/90 shadow-[0_25px_80px_rgba(15,45,85,0.08)] backdrop-blur-sm">
          <div className="flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:p-14">
            <div
              className={`flex flex-1 items-center justify-center transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-[#1a1a37] to-[#472f7f] shadow-[0_35px_70px_rgba(71,47,127,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                <img
                  src={demoImage}
                  alt="Jewellery software dashboard preview"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#f16338] shadow-lg">
                  Demo
                </div>
              </div>
            </div>

            <div
              className={`flex flex-1 flex-col gap-6 transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-8 opacity-0'
              }`}
            >
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#f16338]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f16338]" />
                  Limited Slots
                </p>
                <h3 className="mt-4 font-heading text-3xl text-[#0f2d55] sm:text-4xl">
                  Jewellery Software Free Demo
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Walk through billing, RFID tracking, and omni-channel inventory controls with a live expert.
                  Discover how Unicorn adapts to retail stores, wholesale divisions, and service centers without
                  custom code.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Live analytics and business health score',
                  'Handles gold rate, hallmarking, approvals',
                  'WhatsApp-friendly estimates & e-invoicing',
                  'Hardware integrations for weighing & biometrics',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#0f2d55]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="rounded-full bg-[#f7a047] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(247,160,71,0.4)] transition hover:scale-105 hover:bg-[#f16338]">
                  Click Here
                </button>
                <a
                  href="tel:+9194208447251"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2d55] underline-offset-4 hover:underline"
                >
                  or call +91 94208 447251
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path
                      d="M22 12H5m0 0l7-7M5 12l7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDemoBanner


