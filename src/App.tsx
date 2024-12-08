import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import Main from "./components/layout/Main"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import './styles/global.scss'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
