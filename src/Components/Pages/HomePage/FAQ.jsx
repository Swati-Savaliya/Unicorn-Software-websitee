import { useState, useEffect, useRef } from 'react'


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
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

  const faqItems = [
    {
      question: 'Can I migrate from my existing desktop software?',
      answer: 'Yes, we provide comprehensive migration support to help you transition smoothly from your existing desktop software to our platform. Our team will assist you with data migration, setup, and training.',
    },
    {
      question: 'Does it work without internet?',
      answer: 'Our platform is cloud-based and requires an internet connection for full functionality. However, we offer offline capabilities for certain features to ensure you can continue working even with limited connectivity.',
    },
    {
      question: 'How secure is my business data?',
      answer: 'We take data security seriously. Our platform uses enterprise-grade encryption, regular security audits, and complies with industry standards to ensure your business data is protected at all times.',
    },
    {
      question: 'Can I connect my ecommerce site?',
      answer: 'Absolutely! Our platform offers seamless integration with major ecommerce platforms, allowing you to sync orders, inventory, and customer data automatically between your online store and our system.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          {/* FAQ Label */}
          <p
            className={`text-center text-sm font-semibold uppercase tracking-wider text-[#f16338] transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            FAQ
          </p>

          {/* Main Heading */}
          <h2
            className={`mt-4 text-center font-heading text-3xl font-bold text-[#0f2d55] transition-all duration-700 delay-300 lg:text-4xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Get your queries answered here
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-700 transition-all duration-700 delay-400 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Still exploring? Our success coaches go live with you and your
            accountant to ensure every process is mapped.
          </p>

          {/* FAQ Items */}
          <div
            className={`mt-12 space-y-4 transition-all duration-700 delay-500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-[#f5f0e8] transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-[#ede8df]"
                >
                  <span className="flex-1 pr-4 text-base font-semibold text-[#0f2d55] lg:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 text-2xl font-light text-[#f16338] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-base leading-relaxed text-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

