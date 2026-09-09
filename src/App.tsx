import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Method, Health, PuppyPack } from './components/About'
import Puppies from './components/Puppies'
import Reviews from './components/Reviews'
import { Transport, Contact, Footer } from './components/Closing'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Method />
        <Health />
        <PuppyPack />
        <Puppies />
        <Reviews />
        <Transport />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
