import { useState, useEffect, useRef } from 'react'
import LogoImage from '../../../assets/image/Logo.jpeg'

const Footer = () => {
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
    <footer ref={sectionRef} className="bg-[#0D3C6F]">
      {/* Top Section */}
      <div className="bg-[#0D3C6F] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`grid grid-cols-1 gap-12 lg:grid-cols-3 transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Left Column: Logo and Brand */}
            <div
              className={`flex flex-col transition-all duration-700 delay-100 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Logo Image */}
                <div className="flex-shrink-0">
                  <img
                    src={LogoImage}
                    alt="Online Munim Logo"
                    className={`h-16 w-auto object-contain transition-all duration-700 delay-200 ${
                      isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-90 opacity-0'
                    }`}
                  />
                </div>

                {/* Logo Text */}
                <div className="flex flex-col pt-1">
                  <span className="text-xl font-bold text-white mb-1">
                  Online Munim
                  </span>
                  <span className="text-[10px] tracking-[0.5em] text-white">
                  JEWELLERY SOFTWARE
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Made in India for jewellers worldwide. Empowering your jewellery business with cutting-edge software solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0D3C6F] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-yellow-400 hover:-translate-y-1 active:scale-95">
                  Schedule Demo
                </button>
                <button className="rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#0D3C6F] hover:border-white hover:-translate-y-1 active:scale-95">
                  WhatsApp Support
                </button>
              </div>
            </div>

            {/* Middle Column: Contact Information */}
            <div
              className={`flex flex-col transition-all duration-700 delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/20">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white/10 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="h-5 w-5 text-green-400 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-semibold text-yellow-400 mb-1">Sales:</p>
                    <p className="text-white/90">+91 956196 8585</p>
                    <p className="text-white/90">+91 879302 8485</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white/10 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="h-5 w-5 text-green-400 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-semibold text-yellow-400 mb-1">Support:</p>
                    <p className="text-white/90">+91 738578 6585</p>
                    <p className="text-white/90">+91 855195 8585</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white/10 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="h-5 w-5 text-green-400 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-semibold text-yellow-400 mb-1">Sr. Operations:</p>
                    <p className="text-white/90">+91 775781 8482</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white/10 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                    <svg
                      className="h-5 w-5 text-red-400 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-semibold text-yellow-400 mb-1">Email:</p>
                    <p className="text-white/90">info@onlinemunim.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Navigation, Social Media, Copyright */}
            <div
              className={`flex flex-col transition-all duration-700 delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/20">
                Follow Us
              </h3>
              
              {/* Navigation Links */}
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white">
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                >
                  Downloads
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                >
                  About Us
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                >
                  Contact Us
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                >
                  Career
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                >
                  Blogs
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="mb-6 flex gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 hover:rotate-3"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-blue-800 hover:-translate-y-1 hover:rotate-3"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400 text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-sky-500 hover:-translate-y-1 hover:rotate-3"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:-translate-y-1 hover:rotate-3"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-red-700 hover:-translate-y-1 hover:rotate-3"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-xs text-white/70 leading-relaxed">
                  @2025 | Online Munim JEWELLERY SOFTWARE 
                </p>
                <p className="text-xs text-white/70 mt-1">
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="bg-[#0D3C6F] py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`grid grid-cols-1 gap-10 lg:grid-cols-3 transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Left Column: Helpful Links */}
            <div
              className={`flex flex-col transition-all duration-700 delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/20">
                Helpful Links
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-white">
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Jewellery Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Gold Loan Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Jewellery App
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Accounting Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  GST Billing Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  E-Way Bill Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  E-Invoicing Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Invoicing Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Quotation Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Lead Management Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Sales - CRM Lead To Quote Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Expense Management Software
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Invoicing API
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Online Invoice Generator
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Quotation Generator
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Quote And Invoice Software
                </a>
              </div>
            </div>

            {/* Middle Column: Quick Links */}
            <div
              className={`flex flex-col transition-all duration-700 delay-400 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/20">
                Quick Links
              </h3>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white">
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  FAQ
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Feedback
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Terms Of Service
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Privacy Policy
                </a>
                <span className="text-white/50">|</span>
                <a
                  href="#"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Sitemap
                </a>
              </div>
            
            </div>

            {/* Right Column: Payment Partners */}
            <div
              className={`flex flex-col transition-all duration-700 delay-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/20">
                Payment Partners
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {/* VISA */}
                <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                {/* UPI */}
                <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-black text-white shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold">UPI</span>
                </div>
                {/* Mastercard */}
                <div className="relative flex h-14 w-20 items-center justify-center rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute left-0 h-14 w-10 rounded-l-lg bg-red-600"></div>
                  <div className="absolute right-0 h-14 w-10 rounded-r-lg bg-orange-500"></div>
                </div>
                {/* Generic Payment Icons */}
                
                <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-orange-500 text-white shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.51-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.21z" />
                  </svg>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

