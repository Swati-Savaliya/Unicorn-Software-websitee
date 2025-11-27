import { useEffect, useState } from 'react'
import screenOne from '../../../assets/image/Product_img1.png'
import screenTwo from '../../../assets/image/Product_img2.jpg'
import screenThree from '../../../assets/image/Product_img3.jpg'

const slides = [
  {
    image: screenOne,
    highlight: 'Anytime,',
    title: 'Anywhere, And Any device...',
    subheading: 'Use from anywhere, any place',
    description:
      'Online Munim keeps your jewellery storefront, workshop, and wholesale counter in sync. Switch between kiosk, tablet, or laptop and keep billing rolling without delays.',
  },
  {
    image: screenTwo,
    highlight: 'Your Stock,',
    title: 'Your Teams, All Connected.',
    subheading: 'Control from sales floor or remote office',
    description:
      'Push real-time approvals, RFID audits, and karigar job cards no matter where you operate. Configure alerts that surface when thresholds or hallmarking checks fail.',
  },
  {
    image: screenThree,
    highlight: 'Insights,',
    title: 'Every Minute, Every Branch.',
    subheading: 'Stay a step ahead of revenue dips',
    description:
      'Leadership dashboards show cash flow, gold rates, and open orders across regions. Approve transfers or allocate stock right from your phone in a few taps.',
  },
]

const HeroExperienceCarousel = () => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const currentSlide = slides[current]

  return (
    <section className="bg-gradient-to-b from-white via-[#fff8ef] to-white px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[32px] border border-orange-100 bg-white/90 p-6 shadow-[0_25px_80px_rgba(15,45,85,0.08)] lg:grid-cols-2 lg:p-12">
        <div className="order-2 space-y-5 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#f16338]">Cloud Ready</p>
          <h3 className="font-heading text-4xl text-[#0f2d55]">
            <span className="text-[#f7a047]">{currentSlide.highlight}</span>
            <br />
            {currentSlide.title}
          </h3>
          <p className="text-lg font-semibold text-slate-500">{currentSlide.subheading}</p>
          <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#f16338] to-[#f7a047]" />
          <p className="text-base leading-relaxed text-slate-600">{currentSlide.description}</p>

          <div className="pt-4 text-sm text-slate-400">Rotates automatically every 3 seconds</div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f7a047] to-[#f16338] p-1 shadow-[0_35px_80px_rgba(15,45,85,0.2)]">
            <div className="rounded-[28px] bg-white/95 p-4">
              <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-slate-100 sm:h-[360px]">
                {slides.map((slide, idx) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      idx === current ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-lg">
                    {slides.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-2 w-2 rounded-full transition ${
                          idx === current ? 'bg-[#f16338] scale-125' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-100 bg-white px-5 py-3">
                <p className="text-sm font-semibold text-[#0f2d55]">Slide {current + 1}</p>
                <p className="text-xs text-slate-500">Automatically rotates every 7 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroExperienceCarousel


