import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/HomePage/Home'
import JewellerySoftware from './Components/Pages/JewellerySoftware'
import GoldLoanSoftware from './Components/Pages/GoldLoanSoftware'
import MobileApp from './Components/Pages/MobileApp'
import ContactUs from './Components/Pages/ContactUs'
import ECommerce from './Components/Pages/ECommerce'
import Videos from './Components/Pages/Videos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jewellery-software" element={<JewellerySoftware />} />
      <Route path="/gold-loan-software" element={<GoldLoanSoftware />} />
      <Route path="/e-commerce" element={<ECommerce />} />
      <Route path="/mobile-app" element={<MobileApp />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default App
