import Header from '../Header'
import Hero from './Hero'
import Product from './Product'
import WhyUs from './WhyUs'
import ModuleShowcase from './ModuleShowcase'
import MobileApp from './MobileApp'
import SocialProof from './SocialProof'
import CTA from './CTA'
import FAQ from './FAQ'
import Footer from './Footer'


const Home = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
    <Header />
    <Hero />
    <Product />
    <WhyUs />
    <ModuleShowcase />
    <MobileApp />
    <SocialProof />
    <CTA />
    <FAQ />
    <Footer />
  </div>
)

export default Home

