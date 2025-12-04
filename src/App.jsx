import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (
  
      <div className="min-h-screen">
        <Header/>   
        {/* <main>
          <Hero/>
          <About/>
          <Impact/>
          <Programs/>
          <Gallery/>
          <Contact/>

        </main> 
        <Footer/>     */}
      </div>
       
    
  )
}


export default App
