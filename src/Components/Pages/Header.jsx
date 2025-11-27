import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/Logo.jpeg'

const navItems = [
  { name: 'Home', primary: 'Home', path: '/' },
  {
    name: 'Jewellery Software',
    primary: 'Jewellery',
    secondary: 'Software',
    path: '/jewellery-software',
  },
  {
    name: 'Gold Loan Software',
    primary: 'Gold Loan',
    secondary: 'Software',
    path: '/gold-loan-software',
  },
  { name: 'E-commerce', primary: 'E-commerce', path: '/e-commerce' },
  { name: 'Mobile App', primary: 'Mobile App', path: '/mobile-app' },
  { name: 'Videos', primary: 'Videos', path: '/videos' },
  { name: 'Contact Us', primary: 'Contact Us', path: '/contact-us' },
]

const Header = () => {
  const isVisible = true // Header is always visible on mount
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  })
  const [demoData, setDemoData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSignInChange = (e) => {
    const { name, value } = e.target
    setSignInData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDemoChange = (e) => {
    const { name, value } = e.target
    setDemoData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in:', signInData)
    // Close modal after submission
    setIsSignInOpen(false)
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    console.log('Demo request:', demoData)
    setIsDemoOpen(false)
    setDemoData({
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      message: '',
    })
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 lg:px-0">
          <Link
            to="/"
            className={`flex items-center gap-3 transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
            }`}
          >
            <img
              src={logo}
              alt="Chakra Munim logo"
              className="h-12 w-12 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-lg font-semibold text-slate-900 transition-colors duration-300 hover:text-[#f16338]">
                Unicorn
              </p> 
              <span className="text-[10px] tracking-[0.5em] text-slate-500">
                JEWELLERY SOFTWARE
              </span>
            </div>
          </Link>

          <nav
            className={`hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-600 transition-all duration-700 delay-200 lg:ml-12 lg:flex lg:flex-nowrap ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative transition-all duration-300 hover:scale-110 hover:text-[#f16338]"
                style={{ transitionDelay: `${300 + idx * 50}ms` }}
              >
                {item.secondary ? (
                  <span className="flex flex-col leading-tight">
                    <span>{item.primary}</span>
                    <span className="text-xs text-slate-400">{item.secondary}</span>
                  </span>
                ) : (
                  item.primary
                )}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f16338] transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div
            className={`ml-6 flex items-center gap-3 transition-all duration-700 delay-400 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-4 opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="hidden rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 md:block active:scale-95"
            >
              Request Demo
            </button>
            <button
              onClick={() => setIsSignInOpen(true)}
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2 text-sm font-semibold text-white shadow-[0px_8px_20px_rgba(255,87,34,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0px_12px_24px_rgba(255,87,34,0.45)] active:scale-95"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSignInOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-slate-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
              <p className="mt-2 text-sm text-slate-600">
                Welcome back! Please sign in to your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-orange-500 hover:text-orange-600"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-[0px_8px_20px_rgba(255,87,34,0.35)] transition-all hover:shadow-[0px_12px_24px_rgba(255,87,34,0.45)] active:scale-95"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{' '}
                <Link
                  to="/sign-up"
                  className="font-semibold text-orange-500 hover:text-orange-600"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Request Demo Modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsDemoOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDemoOpen(false)}
              className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-slate-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-8 space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                Book a walkthrough
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Request a Demo</h2>
              <p className="text-sm text-slate-500">
                Share a few details and we’ll schedule a personalized session for you.
              </p>
            </div>

            <form onSubmit={handleDemoSubmit} className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={demoData.fullName}
                  onChange={handleDemoChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Business / Store Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={demoData.businessName}
                  onChange={handleDemoChange}
                  required
                  placeholder="e.g. Shree Laxmi Jewellers"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={demoData.phone}
                  onChange={handleDemoChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={demoData.email}
                  onChange={handleDemoChange}
                  required
                  placeholder="name@business.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  What would you like to see?
                </label>
                <textarea
                  name="message"
                  value={demoData.message}
                  onChange={handleDemoChange}
                  rows={4}
                  placeholder="Billing automation, gold loan module, inventory tracking..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-[0px_8px_20px_rgba(255,87,34,0.35)] transition hover:shadow-[0px_12px_24px_rgba(255,87,34,0.45)] active:scale-95"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

