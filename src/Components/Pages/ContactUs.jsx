import { useState } from 'react'
import Header from './Header'
import Footer from './HomePage/Footer'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      ),
      title: 'Phone',
      content: '+91-94208447251',
      link: 'tel:+9194208447251',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      content: 'info@unicornsoftware.com',
      link: 'mailto:info@unicornsoftware.com',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
      ),
      title: 'Address',
      content: 'Mumbai, Maharashtra, India',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[120px] animate-pulse" />
          <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-orange-200/30 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-0">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#f16338]"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fff8ef] to-[#ffe0c4] flex items-center justify-center text-[#f16338] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 text-center group-hover:text-[#f16338] transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 md:p-10 shadow-lg border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16338] focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16338] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16338] focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16338] focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f16338] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f16338] to-[#ff7a4d] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="rounded-3xl bg-gradient-to-br from-[#fff8ef] to-white p-8 md:p-10 border border-amber-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f16338] text-xl mt-1">✓</span>
                    <span className="text-slate-600">
                      Get personalized demo of our software solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f16338] text-xl mt-1">✓</span>
                    <span className="text-slate-600">
                      Discuss your specific business requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f16338] text-xl mt-1">✓</span>
                    <span className="text-slate-600">
                      Learn about pricing and implementation plans
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f16338] text-xl mt-1">✓</span>
                    <span className="text-slate-600">
                      Receive expert support and consultation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-8 md:p-10 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-slate-200 mb-6">
                  Call us directly for urgent inquiries or technical support.
                </p>
                <a
                  href="tel:+9194208447251"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  Call Now: +91-94208447251
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs








