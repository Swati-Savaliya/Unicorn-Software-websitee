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

  return (
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
          <button className="hidden rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 md:block active:scale-95">
            Request Demo
          </button>
          <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2 text-sm font-semibold text-white shadow-[0px_8px_20px_rgba(255,87,34,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0px_12px_24px_rgba(255,87,34,0.45)] active:scale-95">
            Start Billing
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

