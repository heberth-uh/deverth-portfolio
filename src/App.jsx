import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/sections/Footer'

function App() {

  if (localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className=''>
        <Header/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default App
