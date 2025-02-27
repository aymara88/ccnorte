import './i18n'; // Import the i18n configuration
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/layout/ScrollToTop";
import './styles/global.scss'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
