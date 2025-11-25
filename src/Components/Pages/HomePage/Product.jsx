import { useState, useEffect, useRef } from 'react'
import productImg1 from '../../../assets/image/Product_img1.png'
import productImg2 from '../../../assets/image/Product_img2.jpg'
import productImg3 from '../../../assets/image/Product_img3.jpg'
import productImg4 from '../../../assets/image/Product_img4.png'
import productImg5 from '../../../assets/image/Product_img5.png'
import productImg6 from '../../../assets/image/Product_img6.png'

const products = [
  {
    title: 'Retail Jewellery POS',
    description: 'Counter billing, karat tracking, RFID, try-on previews',
    image: productImg1,
    banner: 'India’s Best Jewellery Billing Software',
    points: [
      'Jewellery business on auto-pilot mode',
      'Effortless jewellery stock management',
      'Daily profit & loss notifications',
    ],
  },
  {
    title: 'Wholesale & Bullion',
    description: 'Tally sync, multi-branch stock, multi-currency ledgers',
    image: productImg2,
    banner: 'Wholesale compliance ready',
    points: ['Multi-branch settlement', 'GST-ready invoices', 'Spot rate automation'],
  },
  {
    title: 'Gold Loan Desk',
    description: 'Loan lifecycle automation with RBI-ready reports',
    image: productImg3,
    banner: 'Gold loan OS',
    points: ['Renewals & auctions in one click', 'On-spot valuation', 'Collections dashboard'],
  },
  {
    title: 'Repair & Custom Orders',
    description: 'Digital job cards, progress alerts, approvals on chat',
    image: productImg4,
    banner: 'Workflow orchestration',
    points: ['Digital job-cards', 'Real-time approvals', 'Live status alerts'],
  },
  {
    title: 'Omnichannel Ecommerce',
    description: 'Real-time inventory sync with web, marketplace and store',
    image: productImg5,
    banner: 'Sell everywhere',
    points: ['Channel-wise pricing', 'Inventory sync APIs', 'Marketplace reconciliations'],
  },
  {
    title: 'Workshops & Manufacturing',
    description: 'Production tracking, approvals, wastage and hallmark logs',
    image: productImg6,
    banner: 'Manufacturing intelligence',
    points: ['WIP & wastage control', 'Hallmark & QA logs', 'Supplier collaboration'],
  },
]

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animate cards one by one
            products.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, idx])
              }, idx * 100)
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

  const toggleCard = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx))
  }
  
  return (
    <section ref={sectionRef} className="bg-[#fff8ef] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.5em] text-[#f16338] transition-all duration-700 delay-100 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          Jewellery OS
        </p>
        <h2
          className={`mt-4 font-heading text-4xl text-[#0f2d55] transition-all duration-700 delay-200 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          Products tuned for every jewellery workflow
        </h2>
        <p
          className={`mt-3 text-base text-slate-600 transition-all duration-700 delay-300 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          Pick the modules you need. Start with billing, add gold loans, ecommerce or workshops whenever you're ready.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
        {products.map((product, idx) => {
          const isActive = activeIndex === idx
          const isCardVisible = visibleCards.includes(idx)
          return (
            <div
              key={product.title}
              className={`rounded-[32px] bg-white p-8 shadow-[0_35px_90px_rgba(15,45,85,0.08)] transition-all duration-700 hover:shadow-[0_35px_90px_rgba(15,45,85,0.12)] hover:-translate-y-2 ${
                isActive ? 'lg:col-span-1' : ''
              } ${
                isCardVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0f2d55] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.description}</p>
                  <button
                    onClick={() => toggleCard(idx)}
                    aria-expanded={isActive}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#0f2d55]/15 px-4 py-2 text-sm font-semibold text-[#0f2d55] transition-all duration-300 hover:border-[#0f2d55]/40 hover:bg-[#0f2d55]/5 hover:scale-105 active:scale-95"
                  >
                    Learn more
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f2d55]/5 text-base transition-all duration-300 ${
                        isActive ? 'rotate-180 bg-[#f16338]/10' : ''
                      }`}
                    >
                      {isActive ? '−' : '+'}
                    </span>
                  </button>
                </div>
              </div>

              <figure className="mt-6 overflow-hidden rounded-[24px] border border-white/60 bg-white/30 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-full object-cover transition-transform duration-700 sm:h-40 hover:scale-110"
                />
              </figure>

              <div
                className={`mt-6 overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'max-h-[1000px] opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4'
                }`}
              >
                <div
                  className={`rounded-[20px] border border-[#0f2d55]/20 bg-white shadow-[0_20px_45px_rgba(15,45,85,0.08)] transition-all duration-500 ${
                    isActive ? 'scale-100' : 'scale-95'
                  }`}
                >
                  <div className="flex items-center justify-between rounded-t-[20px] bg-gradient-to-r from-[#0f2d55] to-[#f16338] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                    <span className="animate-pulse">{product.banner}</span>
                    <span className="transition-transform duration-300 hover:scale-125">▲</span>
                  </div>
                  <div className="space-y-2 px-5 py-4 text-sm text-[#0f2d55]">
                    {product.points.map((point, pointIdx) => (
                      <div
                        key={point}
                        className={`flex items-start gap-2 transition-all duration-500 ${
                          isActive
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${pointIdx * 100}ms` }}
                      >
                        <span className="mt-[2px] text-[#f16338] transition-transform duration-300 hover:scale-125">
                          ✔
                        </span>
                        <p className="transition-colors duration-300 hover:text-[#f16338]">
                          {point}
                        </p>
                      </div>
                    ))}
                    <button
                      className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f16338] transition-all duration-300 hover:gap-3 hover:scale-105 ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${product.points.length * 100}ms` }}
                    >
                      Explore module
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#f16338] transition-all duration-300 hover:rotate-90 hover:bg-[#f16338] hover:text-white">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Product

