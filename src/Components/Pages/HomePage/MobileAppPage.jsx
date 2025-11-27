import { useState, useEffect, useRef } from 'react'
import appImg from '../../../assets/image/App_img.png'

const features = [
  'Digital catalogue & virtual try-on sharing',
  'WhatsApp-ready estimate and receipt PDFs',
  'Cashless doorstep gold loan collections',
  'Offline-first billing with auto-sync',
]

const MobileApp = () => {
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
      features.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, idx])
        }, 500 + idx * 100)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="bg-[#fff8ef] py-24">
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section - Textual Information */}
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-wider text-[#f16338] transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            MOBILE APP
          </p>
          <h2
            className={`mt-4 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Stay in control from the showroom floor—or anywhere
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed text-slate-600 transition-all duration-700 delay-300 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Managers get live feeds, sales reps get instant catalogues, karigars
            get job cards, and loan agents get renewal nudges.
          </p>
        </div>

        {/* Bottom Section - Feature Card and Smartphone */}
        <div className="mx-auto mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Feature Card */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100 scale-100'
                : '-translate-x-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex h-[450px] mt-10 flex-col rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,45,85,0.2)] lg:p-10">
              {/* Feature Boxes Grid */}
              <div className="grid flex-1 grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl bg-[#fff8ef] p-4 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md hover:border-2 hover:border-[#f16338] ${
                      visibleFeatures.includes(idx)
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-4 opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    <p className="text-sm leading-relaxed text-slate-700 transition-colors duration-300 hover:text-[#0f2d55]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
                <button
                  className={`flex-1 rounded-lg bg-[#0f2d55] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:scale-105 hover:bg-[#f16338] hover:shadow-lg ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: '900ms' }}
                >
                  Download Android App
                </button>
                <button
                  className={`flex-1 rounded-lg border-2 border-[#0f2d55] bg-white px-6 py-3 text-sm font-semibold text-[#0f2d55] transition-all duration-500 hover:scale-105 hover:bg-[#0f2d55] hover:text-white hover:shadow-lg ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  Join TestFlight
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Smartphone Visual */}
          <div
            className={`flex items-center justify-center transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100 scale-100'
                : 'translate-x-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div
              className="relative"
              style={{
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              {/* Phone Frame */}
              <div className="relative h-[500px] w-[250px] rounded-[3rem] border-8 border-[#0f2d55] bg-[#0f2d55] shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_rgba(15,45,85,0.3)]">
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[2.5rem]">
                  {/* Screen Content Area with Image */}
                  <img
                    src={appImg}
                    alt="Mobile App Screenshot"
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-110 opacity-0'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  />
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp

