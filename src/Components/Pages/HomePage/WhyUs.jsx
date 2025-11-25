import { useState, useEffect, useRef } from 'react'

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const features = [
    {
      title: '360° Inventory',
      description: 'Real-time purity, weight & labour insights for every ornament, stone and metal.',
    },
    {
      title: 'Smart Compliance',
      description: 'GST-ready invoicing, e-way bills, hallmarking batches and automated registers.',
    },
    {
      title: 'Insightful Dashboards',
      description: 'AI-assisted forecasting, reorder alerts, outlet benchmarking and live sales heatmaps.',
    },
    {
      title: 'Customer Delight',
      description: 'Loyalty wallets, festival campaigns, EMI planner and UPI / card collection links.',
    },
  ]

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
    const cardObservers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...prev, idx])
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      cardObservers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#faf9f7] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-wider text-[#f16338] transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          WHY US
        </p>
        <h2
          className={`mt-4 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          Modern tooling for nimble jewellery houses
        </h2>
        <p
          className={`mt-4 text-base text-slate-600 transition-all duration-700 delay-300 lg:text-lg ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          Designed with store owners, karigars and accountants across India to match the way your teams actually work.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-700 hover:scale-105 hover:shadow-[0_8px_30px_rgba(15,45,85,0.12)] lg:p-8 ${
              visibleCards.includes(idx)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110">
                <div className="h-3 w-3 rounded-full bg-blue-500 transition-all duration-300 hover:scale-125"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0f2d55] transition-colors duration-300 hover:text-[#f16338]">
                  {feature.title}
                </h3>
              </div>
            </div>
            <p className="ml-14 text-sm leading-relaxed text-slate-600 lg:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs

