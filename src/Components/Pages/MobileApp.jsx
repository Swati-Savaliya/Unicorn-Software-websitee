import Header from './Header'
import Footer from './HomePage/Footer'

const MobileApp = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
    <Header />
    <div className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Mobile App
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Manage your business on the go with our mobile application
        </p>
      </div>
      {/* Add your mobile app content here */}
    </div>
    <Footer />
  </div>
)

export default MobileApp








