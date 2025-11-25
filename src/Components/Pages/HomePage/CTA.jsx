import { useState, useEffect, useRef } from 'react'

const CTA = () => {
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
    <section ref={sectionRef} className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#0f2d55] via-[#f16338] to-teal-500 p-12 shadow-[0_20px_60px_rgba(15,45,85,0.3)] transition-all duration-1000 lg:p-16 ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          {/* Header Label */}
          <p
            className={`text-center text-sm font-semibold uppercase tracking-wider text-white/90 transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            READY TO GO LIVE?
          </p>

          {/* Main Heading */}
          <h2
            className={`mt-6 text-center font-heading text-3xl font-bold text-white transition-all duration-700 delay-300 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Launch your jewellery OS in under 7 days
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/90 transition-all duration-700 delay-400 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Our onboarding squad sets up masters, trains staff and maps your
            end-to-end workflows.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Talk to Solutions Team Button */}
            <button className="w-full rounded-xl border-2 border-[#f16338] bg-white px-8 py-4 text-base font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#fff8ef] hover:shadow-lg sm:w-auto">
              Talk to Solutions Team
            </button>

            {/* Download Deck Button */}
            <button className="w-full rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg sm:w-auto">
              Download Deck
            </button>
          </div>

          {/* Footer Text */}
          <p
            className={`mt-10 text-center text-sm text-white/80 transition-all duration-700 delay-600 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Avg. implementation rating: 4.9/5. Dedicated success coach for
            every store
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA;

