import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
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
        <Skills/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default App
