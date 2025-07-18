import './App.css'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skill/Skills'
import Navbar from './Layout/Navbar/Navbar'
import OrbitSection from './Components/OrbitSection/OrbitSection'
import CardSection from './Components/CardSection/CardSection'
import ContactSection from './Components/Contact/ContactSection'
import CustomCursor from './Components/CustomCursor/CustomCursor'

function App() {


  return (
    <>
      <CustomCursor/>
      <Navbar />
      <Hero />
      <Skills />
      <OrbitSection />
      <CardSection />
      <ContactSection/>
    </>
  )
}

export default App
