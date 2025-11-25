import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    location: 'Mumbai',
    company: 'K. Mehta & Sons',
    quote:
      'We run 8 stores and gold loan desks from a single dashboard. The accuracy and speed are unmatched.',
  },
  {
    location: 'Jaipur',
    company: 'Mannat Jewels',
    quote:
      'Festive campaigns, WhatsApp billing and RFID counts helped us grow 37% YoY without extra staff.',
  },
  {
    location: 'Coimbatore',
    company: 'Crown Bullion',
    quote:
      'We love the bullion hedging and instant GST returns. Audits that took weeks now close in days.',
  },
]

const badges = [
  'BEST RETAIL TECH 2024',
  'INDIA SME 50 AWARDS',
  'AWS ISV INNOVATOR',
  'DPIIT RECOGNISED START-UP',
]

const bulkReviews = [
  {
    name: 'Rajesh Kumar',
    company: 'Diamond Palace',
    location: 'Delhi',
    review: 'Best jewellery management software we have used. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Shah',
    company: 'Gold Star Jewellers',
    location: 'Ahmedabad',
    review: 'Inventory management is now so easy. Great customer support too.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Silver Dreams',
    location: 'Surat',
    review: 'The billing system is fast and accurate. Saves us hours every day.',
    rating: 5,
  },
  {
    name: 'Sneha Mehta',
    company: 'Platinum Plus',
    location: 'Mumbai',
    review: 'RFID tracking feature is amazing. No more manual counting!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    company: 'Royal Gold',
    location: 'Jaipur',
    review: 'GST compliance made simple. Audits are now stress-free.',
    rating: 5,
  },
  {
    name: 'Anjali Desai',
    company: 'Crystal Jewels',
    location: 'Pune',
    review: 'Multi-store management from one dashboard is a game changer.',
    rating: 5,
  },
  {
    name: 'Rohit Agarwal',
    company: 'Heritage Gold',
    location: 'Kolkata',
    review: 'The mobile app is very user-friendly. Our staff loves it.',
    rating: 5,
  },
  {
    name: 'Kavita Reddy',
    company: 'Modern Jewellery',
    location: 'Hyderabad',
    review: 'Customer loyalty program integration is seamless and effective.',
    rating: 5,
  },
]

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const [visibleBadges, setVisibleBadges] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const autoScrollIntervalRef = useRef(null)

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
      testimonials.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, idx])
        }, 400 + idx * 150)
      })

      badges.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleBadges((prev) => [...prev, idx])
        }, 1000 + idx * 100)
      })
    }
  }, [isVisible])

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && carouselRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        setScrollPosition((prev) => {
          const cardWidth = 320 + 24 // min-width + gap
          const maxScroll = bulkReviews.length * cardWidth
          const newPosition = prev + 1
          return newPosition >= maxScroll ? 0 : newPosition
        })
      }, 30) // Smooth scroll speed
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isAutoScrolling])

  // Update carousel position
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${scrollPosition}px)`
    }
  }, [scrollPosition])

  const handlePrev = () => {
    setIsAutoScrolling(false)
    const cardWidth = 320 + 24
    setScrollPosition((prev) => {
      const newPosition = prev - cardWidth
      return newPosition < 0 ? (bulkReviews.length - 1) * cardWidth : newPosition
    })
  }

  const handleNext = () => {
    setIsAutoScrolling(false)
    const cardWidth = 320 + 24
    setScrollPosition((prev) => {
      const maxScroll = bulkReviews.length * cardWidth
      const newPosition = prev + cardWidth
      return newPosition >= maxScroll ? 0 : newPosition
    })
  }

  return (
    <section ref={sectionRef} className="bg-[#fff8ef] py-24">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-wider text-[#f16338] transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            SOCIAL PROOF
          </p>
          <h2
            className={`mt-4 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Trusted by ambitious jewellers everywhere
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed text-slate-600 transition-all duration-700 delay-300 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            From single flagship stores to multi-city chains, teams switch to
            Chakra Munim to simplify growth.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(15,45,85,0.25)] lg:p-10 ${
                visibleCards.includes(idx)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${400 + idx * 150}ms` }}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute right-4 top-4 text-6xl font-bold text-[#f16338]/10 transition-all duration-500 group-hover:text-[#f16338]/20 group-hover:scale-110">
                "
              </div>

              {/* Location with Icon */}
              <div className="relative flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#f16338] transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-[#f16338]">
                  {testimonial.location}
                </p>
              </div>

              {/* Company Name */}
              <h3 className="mt-4 text-2xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#f16338] lg:text-3xl">
                {testimonial.company}
              </h3>

              {/* Divider */}
              <div className="my-5 h-px w-16 bg-gradient-to-r from-[#f16338] to-transparent transition-all duration-300 group-hover:w-24"></div>

              {/* Quote */}
              <p className="relative text-base leading-relaxed text-[#0f2d55] transition-colors duration-300 group-hover:text-slate-700">
                {testimonial.quote}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[#f16338]/20"></div>
            </div>
          ))}
        </div>

        {/* Recognition Badges */}
        <div className="mx-auto mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border-2 border-[#0f2d55] bg-white px-5 py-8 text-center shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-700 hover:scale-110 hover:border-[#f16338] hover:bg-gradient-to-br hover:from-white hover:to-[#fff8ef] hover:shadow-[0_12px_40px_rgba(241,99,56,0.2)] ${
                visibleBadges.includes(idx)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-12 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${1000 + idx * 100}ms` }}
            >
              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f16338]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Badge Text */}
              <p className="relative text-xs font-bold uppercase tracking-wider text-[#0f2d55] transition-all duration-300 group-hover:text-[#f16338] md:text-sm">
                {badge}
              </p>

              {/* Decorative Corner Elements */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#f16338]/0 transition-all duration-500 group-hover:border-[#f16338]/30"></div>
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#f16338]/0 transition-all duration-500 group-hover:border-[#f16338]/30"></div>
            </div>
          ))}
        </div>

        {/* Bulk Reviews Carousel Section */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(15,45,85,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[#f16338] hover:text-white hover:shadow-[0_8px_30px_rgba(241,99,56,0.3)]"
              aria-label="Previous review"
            >
              <svg
                className="h-6 w-6 text-[#0f2d55] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(15,45,85,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[#f16338] hover:text-white hover:shadow-[0_8px_30px_rgba(241,99,56,0.3)]"
              aria-label="Next review"
            >
              <svg
                className="h-6 w-6 text-[#0f2d55] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Scrolling Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              {/* Duplicate reviews for seamless loop */}
              {[...bulkReviews, ...bulkReviews].map((review, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,45,85,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(15,45,85,0.15)]"
                >
                  {/* Rating Stars */}
                  <div className="mb-3 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mb-4 text-sm leading-relaxed text-[#0f2d55]">
                    "{review.review}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f16338] to-[#0f2d55] text-sm font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f2d55]">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {review.company} • {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SocialProof

